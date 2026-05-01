// PROTOCOLO DE MONITORAMENTO DO PSA "CERRADO EM PÉ"
// SECRETARIA DE ESTADO DE MEIO AMBIENTE E DESENVOLVIMENTO SUSTENTÁVEL
// SUBLIF - SUF - GERÊNCIA DE GEOPROCESSAMENTO E SENSORIAMENTO REMOTO
// VICENTE DE PAULA SOUSA JÚNIOR - ANALISTA AMBIENTAL

///////////////////////////////// ETAPA 02 - Analisar o Delta NDVI para o período de 5 anos em área Requerida////////////////////////////////////////////

//Definindo área de estudo, simbologia e adicionando a visualização
var area_estudo = ar_imoveis_lote01;

var empty = ee.Image().byte(); 
//Contorno da feature
var contorno = empty.paint({
  featureCollection: area_estudo,
  color: 1,
  width: 2
});
Map.addLayer(contorno, {palette: 'Blue'}, 'Imóveis do PSA: Cerrado em Pé',0);

//Fator de Escala 
var planet_scale = function(image) {
  // Ajustar a escala
  return image.resample('bicubic').multiply(0.0001).copyProperties(image, ['system:time_start']);
};

//Calcular o NDVI
var NDVIcalculated = function(image){
  var ndvi = image.normalizedDifference(['N','R']).rename('NDVI');
  return ndvi.set('system:time_start', image.get('system:time_start'));
};

// Importando imagens por ano e calculando o NDVI

// 27 de dezembro de 2018 até 27 de dezembro de 2019
var P_2019 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2018-12-27', '2019-12-27')
                  .filterBounds(area_estudo)
                  .map(planet_scale)
                  .median();
Map.addLayer(P_2019.clip(area_estudo),{bands: ['R','G','B'], min: 0.019, max: 0.200, gamma: 1.2}, 'Período de 2018/2019',0);                
var ndvi_p2019 = P_2019.normalizedDifference(['N','R']).rename('ndvi');

// 28 de dezembro de 2023 até 27 de dezembro de 2024
var P_2024 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2023-12-28', '2024-12-27')
                  .filterBounds(area_estudo)
                  .map(planet_scale)
                  .median();
Map.addLayer(P_2024.clip(area_estudo),{bands: ['R','G','B'], min: 0.019, max: 0.200, gamma: 1.2}, 'Período de 12/2024',0);
var ndvi_p2024 = P_2024.normalizedDifference(['N','R']).rename('ndvi');

// Calculando o delta NDVI
var dNDVI = ndvi_p2024.subtract(ndvi_p2019);

Map.addLayer(dNDVI.clip(area_estudo), {min: -0.5, max: 0, palette: ['ff0000','ff9b54','efff02','4bff00','1ea905']}, 'Delta NDVI',0);

// Criando limiar de alterações

var area_alterada = dNDVI.lt(-0.20).selfMask();
Map.addLayer(area_alterada.clip(area_estudo), {palette: ['red']}, 'Área alterada',0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Selecionando imóveis rurais sobrepostos pelo limiar usando intersects
// Converter a máscara de NDVI para vetor
var area_alterada_vetor = area_alterada.selfMask().reduceToVectors({
  geometry:area_estudo.geometry(),
  geometryType: 'polygon',
  reducer: ee.Reducer.countEvery(),
  scale: 30, // Ajuste conforme a resolução do seu NDVI
  maxPixels: 1e13
});

var area_alterada_vetor_simplificado = area_alterada_vetor.map(function(feature) {
    return feature.simplify(10); // Suaviza os polígonos
});

var imoveis_car = area_estudo.filter(ee.Filter.intersects({
  leftField: '.geo',
  rightValue: area_alterada_vetor_simplificado.geometry()
}));

// Criando um contorno amarelo para os imóveis selecionados
var contorno_imoveis = empty.paint({
  featureCollection: imoveis_car,
  color: 1,
  width: 2,
});

// Adicionando ao mapa
Map.addLayer(contorno_imoveis, {palette: 'yellow'}, 'Imóveis Selecionados', 0);

// Criando uma lista com o código do CAR dos imóveis selecionados
var cod_car = imoveis_car.aggregate_array('cod_imovel');
print('Código do CAR [Imóveis selecionados]', cod_car);

// Exportar os imóveis selecionados com os alertas associados
Export.table.toDrive({
  collection: imoveis_car,  
  description: 'AR_Selecionados_com_DeltaNDVI_lote01',
  fileFormat: 'GeoJSON',  
  folder: 'PSA_Export',
  fileNamePrefix: 'AR_Selecionados_com_DeltaNDVI_lote01'
});

/* Inserir código dos imóveis no toolkits
PSA - API: https://code.earthengine.google.com/bb3972ff7ef00a91f4f0733b1f029133
*/