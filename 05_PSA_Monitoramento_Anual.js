// MONITORAMENTO DE EMBARGOS AMBIENTAIS
// SECRETARIA DE ESTADO DE MEIO AMBIENTE E DESENVOLVIMENTO SUSTENTÁVEL DE GOIÁS
// SUBLIF - SUF - GERÊNCIA DE GEOPROCESSAMENTO E SENSORIAMENTO REMOTO
// VICENTE DE PAULA SOUSA JÚNIOR - ANALISTA AMBIENTAL 

var area_estudo = table;
Map.centerObject(area_estudo, 7);

// Desenhar contorno da área de estudo
var empty = ee.Image().byte();
var contorno = empty.paint({
  featureCollection: area_estudo,
  color: 1,
  width: 2
});
Map.addLayer(contorno, {palette: 'blue'}, 'Áreas Aprovadas: PSA', 0);

// --- FUNÇÃO DE MÁSCARA ---
function maskS2clouds(image) {
  var qa = image.select('QA60');
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
               .and(qa.bitwiseAnd(cirrusBitMask).eq(0));
  return image.updateMask(mask)
              .select(['B4', 'B8']) 
              .divide(10000)
              .copyProperties(image, ['system:time_start']);
}

// --- FUNÇÃO PARA CALCULAR MSAVI ---
function getMSAVIMediana(startDate, endDate) {
  var collection = ee.ImageCollection("COPERNICUS/S2_HARMONIZED")
    .filterDate(startDate, endDate)
    .filterBounds(area_estudo)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30))
    .map(maskS2clouds)
    .map(function(image){
      var nir = image.select('B8');
      var red = image.select('B4');

      var msavi = nir.multiply(2).add(1)
        .subtract(
          (nir.multiply(2).add(1))
            .pow(2)
            .subtract(nir.subtract(red).multiply(8))
            .sqrt()
        ).divide(2)
        .rename('MSAVI');

      return msavi.copyProperties(image, ['system:time_start']);
    });

  return collection.median();
}

// MSAVI 2024 (período seco)
var msavi_2024 = getMSAVIMediana('2024-10-01', '2024-12-31');

// Adicionar MSAVI 2024 ao mapa com gradiente vermelho → laranja → amarelo → verde → verde escuro
Map.addLayer(
  msavi_2024, 
  {
    min: 0,
    max: 1,
    palette: ['red', 'orange', 'yellow', 'green', '006400']
  },
  'MSAVI 2024 (Gradiente)'
);

// MSAVI 2024 (período seco)
var msavi_2025 = getMSAVIMediana('2025-11-01', '2025-12-31');

// Adicionar MSAVI 2024 ao mapa com gradiente vermelho → laranja → amarelo → verde → verde escuro
Map.addLayer(
  msavi_2025, 
  {
    min: 0,
    max: 1,
    palette: ['red', 'orange', 'yellow', 'green', '006400']
  },
  'MSAVI 2025 (Gradiente)'
);

// Delta MSAVI
var dMSAVI = msavi_2025.subtract(msavi_2024);
var dMSAVIclip = dMSAVI.clip(area_estudo);

// Limiar de alteração (ajuste conforme teste)
var area_alterada = dMSAVIclip.lt(-0.20).selfMask();

// Converter para vetor
var area_alterada_vetor = area_alterada.selfMask().reduceToVectors({
  geometry: area_estudo.geometry(),
  geometryType: 'polygon',
  reducer: ee.Reducer.countEvery(),
  scale: 10,
  maxPixels: 1e13
});

var area_alterada_vetor_simplificado = area_alterada_vetor.map(function(feature) {
  return feature.simplify(10);
});

// Selecionando áreas embargadas
var embargos_select = area_estudo.filter(
  ee.Filter.intersects({
    leftField: '.geo',
    rightValue: area_alterada_vetor_simplificado.geometry()
  })
);

// Contorno amarelo
var contorno_embargos = empty.paint({
  featureCollection: embargos_select,
  color: 1,
  width: 2,
});

Map.addLayer(contorno_embargos, {palette: 'yellow'}, 'Áreas Selecionadas', 0);

// Criando lista de FID
var cod_emb = embargos_select.aggregate_array('fid');
//print('FID da área aprovada', cod_emb);
print('Quantidade selecionada:', embargos_select.size());

// Exportar
Export.table.toDrive({
  collection: embargos_select,  
  description: 'Areas_com_DeltaMSAVI_2025',
  fileFormat: 'GeoJSON',  
  folder: 'PSA_Export_2025',
  fileNamePrefix: 'Areas_com_DeltaMSAVI_2025'
});

// Exportar
Export.table.toDrive({
  collection: area_alterada_vetor,  
  description: 'Area_alterada_MSAVI',
  fileFormat: 'GeoJSON',  
  folder: 'PSA_Export_2025',
  fileNamePrefix: 'Area_alterada_MSAVI'
});
