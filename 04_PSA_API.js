// Centralizar o mapa no início da aplicação
Map.setCenter(-48.459413,-14.468441, 14);

// Função para ajustar a escala da imagem
var scaleImage = function(image) {
  // Ajustar a escala
  return image.resample('bicubic').multiply(0.0001).copyProperties(image, ['system:time_start']);
};

// Adicionando logo no painel inicial
var logo = ui.Chart(
[
    ['<img src="data:image/png;base64, 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">'],
    ],
'Table', {allowHtml: true, backgroundColor:'black'});


var titlePanel = ui.Panel([logo]
, 'flow', {width: '500px', position: 'bottom-left', padding: '2px'});

// Painel principal
var mainPanel = ui.Panel({
  widgets: [
    ui.Label('PSA-MONITORAMENTO: Área do Imóvel', {fontWeight: 'bold', fontSize: '22px'}), // Exemplo de alteração aqui
    ui.Textbox({placeholder: 'Insira o código do CAR', onChange: updateFilters}),
    ui.Button('Aplicar', applyFilters),
    ui.Label('Governo do Estado de Goiás', {fontWeight:'bold', fontSize: '14'}), // Exemplo de alteração aqui
    ui.Label('Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável - SEMAD/GO', {fontWeight:'bold', fontSize: '12px'}), // Exemplo de alteração aqui
    ui.Label('Gerência de Geoprocessamento e Sensoriamento Remoto - GEGEO',{fontWeight:'bold', fontSize: '12px'}), // Exemplo de alteração aqui
    ui.Label('| Autor: Vicente de Paula Sousa Júnior | Analista Ambiental |',{fontSize: '12px'}), // Exemplo de alteração aqui
    titlePanel],
  layout: ui.Panel.Layout.flow('vertical'),
  style: {
    width: '500px',
    position: 'bottom-right',
    //backgroundColor: 'black' // Define o fundo do painel principal como preto
  }
});

// Adicionar o painel principal à raiz da interface do usuário
ui.root.add(mainPanel);



// Função para gerar processamento após inserir numero_pro
function updateFilters() {

// Obter valores dos widgets

var selectedValue = mainPanel.widgets().get(1).getValue();

// Filtrar a tabela com base no valor selecionado.
var area_estudo = imoveis_lote01.filter(ee.Filter.eq('N__mero_do', selectedValue));

// Gerar o contorno da feature.
var empty = ee.Image().byte();
var contorno = empty.paint({
featureCollection: area_estudo,
color: 1,
width: 2
});

// Adicionar o contorno ao mapa.
Map.layers().set(1, ui.Map.Layer(contorno, {palette: 'FF0000'}, 'Contorno'));
Map.centerObject(area_estudo,15);

/*************************Importanto coleção Planet *******************************/
var I2015 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2015-01-01', '2015-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage)
                  .median();

var I2016 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2016-01-01', '2016-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage)
                  .median();
                            

var I2017 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2017-01-01', '2017-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage)
                  .median();
                            

var I2018 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2018-01-01', '2018-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage)
                  .median();
                            

var I2019 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2019-01-01', '2019-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage)
                  .median();


var I2020 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2020-01-01', '2020-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage)
                  .median();
                            

var I2021 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2021-01-01', '2021-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage)
                  .median();

var I2022 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2022-01-01', '2022-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage)
                  .median();
                            

var I2023 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2023-01-01', '2023-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage)
                  .median();
                            

var I2024 = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2024-01-01', '2024-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage)
                  .median();
                            

/***************************************Índices para coleção ****************************************/
var ndvi_2015 =  I2015.clip(area_estudo).normalizedDifference(['N','R']).rename('NDVI');

var ndvi_2016 =  I2016.clip(area_estudo).normalizedDifference(['N','R']).rename('NDVI');

var ndvi_2017 =  I2017.clip(area_estudo).normalizedDifference(['N','R']).rename('NDVI');

var ndvi_2018 =  I2018.clip(area_estudo).normalizedDifference(['N','R']).rename('NDVI');

var ndvi_2019 =  I2019.clip(area_estudo).normalizedDifference(['N','R']).rename('NDVI');

var ndvi_2020 =  I2020.clip(area_estudo).normalizedDifference(['N','R']).rename('NDVI');

var ndvi_2021 =  I2021.clip(area_estudo).normalizedDifference(['N','R']).rename('NDVI');

var ndvi_2022 =  I2022.clip(area_estudo).normalizedDifference(['N','R']).rename('NDVI');

var ndvi_2023 =  I2023.clip(area_estudo).normalizedDifference(['N','R']).rename('NDVI');

var ndvi_2024 =  I2024.clip(area_estudo).normalizedDifference(['N','R']).rename('NDVI');

//Inserindo dados de LULC do Mapbiomas

//Importando coleção de dados do Mapbiomas
var mapbiomas_10 = ee.Image('projects/mapbiomas-public/assets/brazil/lulc/collection9/mapbiomas_collection90_integration_v1');

//var bands = mapbiomas_10.bandNames();
//print('Nome das bandas:',bands);
//Map.centerObject(area_estudo,7);

//Selecionando os anos de classificação do Mapbiomas

//2015
var mapa_2015 = mapbiomas_10.select('classification_2015');
var mapaclip_2015 = mapa_2015.clip(area_estudo);
//2016
var mapa_2016 = mapbiomas_10.select('classification_2016');
var mapaclip_2016 = mapa_2016.clip(area_estudo);
//2017
var mapa_2017 = mapbiomas_10.select('classification_2017');
var mapaclip_2017 = mapa_2017.clip(area_estudo);
//2018
var mapa_2018 = mapbiomas_10.select('classification_2018');
var mapaclip_2018 = mapa_2018.clip(area_estudo);
//2019
var mapa_2019 = mapbiomas_10.select('classification_2019');
var mapaclip_2019 = mapa_2019.clip(area_estudo);
//2020
var mapa_2020 = mapbiomas_10.select('classification_2020');
var mapaclip_2020 = mapa_2020.clip(area_estudo);
//2021
var mapa_2021 = mapbiomas_10.select('classification_2021');
var mapaclip_2021 = mapa_2021.clip(area_estudo);
//2022
var mapa_2022 = mapbiomas_10.select('classification_2022');
var mapaclip_2022 = mapa_2022.clip(area_estudo);
//2023
var mapa_2023 = mapbiomas_10.select('classification_2023');
var mapaclip_2023 = mapa_2023.clip(area_estudo);

//Criando paleta de cores das classes
var palettes = require('users/mapbiomas/modules:Palettes.js').get('classification9');
var vis_map = {
  palette: palettes,
  min: 0,
  max:69
};
//print('Paleta de cores', palettes);
// Classes temáticas
var classes = {
          0: "Não classificado",
          1: "Formação Florestal",
          2: "Formação Savânica",
          3: "Campo Alagado/Pântano",
          4: "Formação Campestre",
          5: "Pastagem",
          6: "Lavoura Temporária",
          7: "Cana",
          8: "Mosaico de Agricultura-Pastagem",
          9: "Área Urbanizada",
          10: "Área não Vegetada",
          11: "Mineração",
          12: "Rios e Corpos D'água",
          13: "Lavoura Perene"
};

// Cores
var colors = {
          0: '#ffffff',
          1: '#1f8d49',
          2: '#7dc975',
          3: '#519799',
          4: '#d6bc74',
          5: '#edde8e',
          6: '#C27BA0',
          7: '#db7093',
          8: '#ffefc3',
          9: '#d4271e',
          10: '#db4d4f',
          11: '#9c0027',
          12: '#2532e4',
          13: '#d082de'
};

// Criando uma legenda
var legendPanel1 = ui.Panel({
  style: {
    position: 'bottom-right',
    padding: '10px'
  }
});

// Adicionando título à legenda
var title = ui.Label({
  value: 'Legenda',
  style: {
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0 0 4px 0',
    padding: '0'
  }
});
legendPanel1.add(title);

// Adicionando itens de legenda
for (var key in classes) {
  var className = classes[key];
  var color = colors[key];

  // Criando caixa de cor
  var colorBox = ui.Panel({
    style: {
      backgroundColor: color,
      padding: '8px',
      margin: '0 0 4px 0'
    }
  });

  // Adicionando rótulo de classe
  var classLabel = ui.Label({
    value: className,
    style: {
      margin: '0 0 4px 6px'
    }
  });

  // Criando painel para cada item de legenda
  var legendItem = ui.Panel({
    widgets: [colorBox, classLabel],
    layout: ui.Panel.Layout.Flow('horizontal')
  });

  // Adicionando item de legenda ao painel principal
  legendPanel1.add(legendItem);
}

// Adicionando a legenda ao mapa


//Criando uma legenda para os valores de NDVI
var palette = ['ff003b','fc7770','d6f044','8fdd27','78c679','41ab5d','238443'];
var vis = {min: 0, max: 1, palette: palette};
var nSteps = 7;

//Criando uma imagem para a legenda
function makeColorBarParams(palette) {
return {
bbox: [0, 0, nSteps, 0.1],
dimensions: '100x6',
format: 'png',
min: 0,
max: nSteps,
palette: palette,
};
}

//Linkando as cores para a imagem
var colorBar = ui.Thumbnail({
image: ee.Image.pixelLonLat().select(0).int(),
params: makeColorBarParams(vis.palette),
style: {stretch: 'horizontal', margin: '0px 8px', maxHeight: '24px'},
});

// Criando um painel com valores para a legenda
var legendLabels = ui.Panel({
widgets: [
ui.Label(vis.min, {margin: '2px 6px'}),
ui.Label(
((vis.max-vis.min) / 2+vis.min),
{margin: '2px 6px', textAlign: 'center', stretch: 'horizontal'}),
ui.Label(vis.max, {margin: '2px 6px'})
],
layout: ui.Panel.Layout.flow('horizontal')
});

// Adicionando um título a legenda
var legendTitle = ui.Label({
value: 'Valores de EVI',
style: {fontWeight: 'bold'}
});

//Adicionando a legenda ao painel
var legendPanel = ui.Panel([legendTitle, colorBar, legendLabels]);

// Adicionando Layers em tela dividida
var display = [display1(), display2()];
var rootWidgets = ui.root.widgets();

// Verifica se ui.root.widgets() não é nulo ou indefinido antes de chamar o método reset
if (rootWidgets) {

// Verifica se o array display contém widgets antes de tentar resetar
if (display.length > 0) {
rootWidgets.reset(display);
} else {
print('Erro: O array display está vazio.');
}
} else {
print('Erro: ui.root.widgets() é nulo ou indefinido.');
}
var linker = ui.Map.Linker(display);
function display1() {
  var map = new ui.Map();
  map.addLayer(contorno, {palette: 'Blue'}, 'Limite do Polígono');
  map.addLayer(I2015.clip(area_estudo), { bands: ['R', 'G', 'B'], min: 0, max: 0.2, gamma: 1.2 }, '2015',0);
  map.addLayer(I2016.clip(area_estudo), { bands: ['R', 'G', 'B'], min: 0, max: 0.2, gamma: 1.2 }, '2016',0);
  map.addLayer(I2017.clip(area_estudo), { bands: ['R', 'G', 'B'], min: 0, max: 0.2, gamma: 1.2 }, '2017',0);
  map.addLayer(I2018.clip(area_estudo), { bands: ['R', 'G', 'B'], min: 0, max: 0.2, gamma: 1.2 }, '2018',0);
  map.addLayer(I2019.clip(area_estudo), { bands: ['R', 'G', 'B'], min: 0, max: 0.2, gamma: 1.2 }, '2019',0);
  map.addLayer(I2020.clip(area_estudo), { bands: ['R', 'G', 'B'], min: 0, max: 0.2, gamma: 1.2 }, '2020',0);
  map.addLayer(I2021.clip(area_estudo), { bands: ['R', 'G', 'B'], min: 0, max: 0.2, gamma: 1.2 }, '2021',0);
  map.addLayer(I2022.clip(area_estudo), { bands: ['R', 'G', 'B'], min: 0, max: 0.2, gamma: 1.2 }, '2022',0);
  map.addLayer(I2023.clip(area_estudo), { bands: ['R', 'G', 'B'], min: 0, max: 0.2, gamma: 1.2 }, '2023',0);
  map.addLayer(I2024.clip(area_estudo), { bands: ['R', 'G', 'B'], min: 0, max: 0.2, gamma: 1.2 }, '2024',0);
  //map.add(legendPanel1);
  map.centerObject(area_estudo,15);
return map;
}

function display2() {
var map = new ui.Map();
  map.addLayer(contorno, {palette: 'Blue'}, 'Limite do Polígono');
  map.addLayer(mapaclip_2015, vis_map, 'Mapbiomas 10: 2015',0);
  map.addLayer(mapaclip_2016, vis_map, 'Mapbiomas 10: 2016',0);
  map.addLayer(mapaclip_2017, vis_map, 'Mapbiomas 10: 2017',0);
  map.addLayer(mapaclip_2018, vis_map, 'Mapbiomas 10: 2018',0);
  map.addLayer(mapaclip_2019, vis_map, 'Mapbiomas 10: 2019',0);
  map.addLayer(mapaclip_2020, vis_map, 'Mapbiomas 10: 2020',0);
  map.addLayer(mapaclip_2021, vis_map, 'Mapbiomas 10: 2021',0);
  map.addLayer(mapaclip_2022, vis_map, 'Mapbiomas 10: 2022',0);
  map.addLayer(mapaclip_2023, vis_map, 'Mapbiomas 10: 2023',0);
  map.addLayer(ndvi_2015, { min: 0, max: 1, palette: ['ff003b','fc7770','d6f044','8fdd27', '78c679', '41ab5d' ,'238443'] }, 'NDVI 2015', 0);
  map.addLayer(ndvi_2016, { min: 0, max: 1, palette: ['ff003b','fc7770','d6f044','8fdd27', '78c679', '41ab5d' ,'238443'] }, 'NDVI 2016', 0);
  map.addLayer(ndvi_2017, { min: 0, max: 1, palette: ['ff003b','fc7770','d6f044','8fdd27', '78c679', '41ab5d' ,'238443'] }, 'NDVI 2017', 0);
  map.addLayer(ndvi_2018, { min: 0, max: 1, palette: ['ff003b','fc7770','d6f044','8fdd27', '78c679', '41ab5d' ,'238443'] }, 'NDVI 2018', 0);
  map.addLayer(ndvi_2019, { min: 0, max: 1, palette: ['ff003b','fc7770','d6f044','8fdd27', '78c679', '41ab5d' ,'238443'] }, 'NDVI 2019', 0);
  map.addLayer(ndvi_2020, { min: 0, max: 1, palette: ['ff003b','fc7770','d6f044','8fdd27', '78c679', '41ab5d' ,'238443'] }, 'NDVI 2020', 0);
  map.addLayer(ndvi_2021, { min: 0, max: 1, palette: ['ff003b','fc7770','d6f044','8fdd27', '78c679', '41ab5d' ,'238443'] }, 'NDVI 2021', 0);
  map.addLayer(ndvi_2022, { min: 0, max: 1, palette: ['ff003b','fc7770','d6f044','8fdd27', '78c679', '41ab5d' ,'238443'] }, 'NDVI 2022', 0);
  map.addLayer(ndvi_2023, { min: 0, max: 1, palette: ['ff003b','fc7770','d6f044','8fdd27', '78c679', '41ab5d' ,'238443'] }, 'NDVI 2023', 0);
  map.addLayer(ndvi_2024, { min: 0, max: 1, palette: ['ff003b','fc7770','d6f044','8fdd27', '78c679', '41ab5d' ,'238443'] }, 'NDVI 2024', 0);
  map.add(legendPanel);
  map.centerObject(area_estudo,15);
return map;
}

// Criar uma Image Collection contendo as Image Collections I2019, I2020, I2021, I2022 e I2023
var imageCollection = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
                  .filterDate('2015-01-01', '2025-12-31')
                  .filterBounds(area_estudo)
                  .map(scaleImage);

// Função para calcular o NDVI com valores médios
var calculateNDVIMean = function(image) {
  var ndvi = image.normalizedDifference(['N', 'R']).rename('NDVI');
  return ndvi.set('system:time_start', image.get('system:time_start'));
};

// Aplicar a função de média NDVI para cada imagem na Image Collection
var ndviCollection = imageCollection.map(calculateNDVIMean);

//Criar uma lista para o período
var YEARS = ee.List.sequence(2019, 2023);
//Criar uma lista de meses
var MONTHS = ee.List.sequence(1, 12);

// Criando uma coleção de imagens mensais
var MONTHLY_NDVI =  ee.ImageCollection.fromImages(
  
  YEARS.map(function (y) { //cria a função do ano
    
    return MONTHS.map(function(m) { //retorno a função do ano e "aninha" os meses
    
      var NDVI_MONTHS = ndviCollection.filter(ee.Filter.calendarRange(y, y, 'year')) //criando a variável de imagens anuais
                    .filter(ee.Filter.calendarRange(m, m, 'month')) //atribuíndo os meses
                    .mean() //média
                    .clip(area_estudo); //recortando para nossa área de estudo
         // NDVI_MONTHS = NDVI_MONTHS.multiply(0.0001);
      return NDVI_MONTHS.set('year', y) //encerrando a função da coleção mensal
              .set('month', m) //setando a informação de mês
              .set('date', ee.Date.fromYMD(y,m,1)) // atribuíndo a informação de data no formato ano,mês e dia
              .set('system:time_start', ee.Date.fromYMD(y, m, 1)); //utilizando a informação system:time_start (data)
     });
  }).flatten()//empilhar a coleção e nivela os dados

);

//print('6 - NDVI mensal',MONTHLY_NDVI );



/*****************************Criando um gráfico***********************/

var chartMonthly = ui.Chart.image.seriesByRegion({
  imageCollection: MONTHLY_NDVI,
  regions: area_estudo,
  reducer: ee.Reducer.mean(),
  band: 'NDVI',
  scale: 5,
  xProperty: 'system:time_start',
  seriesProperty: 'N__mero_do' //vem do meu shape
}).setOptions({title: 'Média Mensal de NDVI da área',
              hAxis: {title: 'Data'},
              vAxis: {title: 'NDVI',
              viewWindow: {  // Aqui é onde você define os limites
              min: -0.5,  
              max: 1
              }
              },
            trendlines: {
            0: {
                color: 'CC0000'
            }
        },
})
  .setChartType('LineChart');
 
//print(chartMonthly);

//Criando logo para outro panel
var logo2 = ui.Chart(
[
    ['<img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAOMAAABxCAYAAAFQJySSAABFRElEQVR4nO1dB1wTSxMfSEJCb1IFBBQLooAKCiIiIooF7L0gioC9PZ/t8z27z67YC/aCvRfsCtJEUVRs9KrSO4HAd3PxYgIBggZs/PPLb/f2tt7c3M7uzs7Sy8vLob5Br/cSxVGo6oB95TRJCdJfVlYOrO67SP/clhngaZDDi8dqmiYhtkKpAhGShP+DUyzpb3ZdH9a/UeHdS5z6NU2VhXI4HBqbzZYqKS1hKMgr5FQV7+rKvtBn0RXS/+nsBNDZtpMsmCocq1Txramy0Izi7EZ7XhydA1+SLuo0bZ6weG0YrSF+LddfFPU3RPcGMLymT17H9omB0jIJuPVJBvo1FaFQZSmF9EdJIT1uDDpqXlUcBD5GflCtbH2zCehfNeCF97MSoVAajcbhL7DvJdfQK84HLSrGox4jYlSIZqVKCEOVhUpISPBIMf364iPCCkTwF2Kshn5uJZ5NuA47w47CnvBj1RdqsLMTu2/LHmduxNzvLyctl1tWypFUZCpkssvZrLZHHdNejPZrJKzgxKlPIDglBDpqWRIvUgcyzOW0G8TnpJD3qDChhcZ4BUmRnm7CW18VzHx6QLjbLTJzqpCozARg0IQ/SLF8kdIKMnmtoVyqwIqtFFuhtcV3F0o8TomaY4m50G8Bvb67tnpv5XcVePLuu/Lp2x8JhEl120m6/F8ofIbSX7q07yoQCysjSPJ893BY6/sUTtx7TxbUhPjOVvwEUt2Z0AJvRz/qa65kHKiqopqO1+kZ6aqUvyKkGTQw9/TlXWNBcURvUhWEFrjz5ZF57dRNghZ1mk52XbveHfub8vMjfu3fldJigfgvKQOi4FheWJUtzM3NlT/rvMfW49rfp6kwYYVRGfGDRvQF/BKCsJ6lUoHy8vK56LJKGfndjg95fW/kaWNhhSEUGRwIc0io1LrqIFBgel5mI1U55bSJ1+aev5n6sP9xR2+HnqdHPbs55JjQjjq7hAZShp/gZqwfKDGVQIbxF/xt7Qq5xYWwPuggyDKkYbHNZFhwb0PlApc+3rTpc1GGRrui5g/29V4/4HnkCzOvkH/OF5YUypjtd/wYPsFPQ1ihetsteb0GugjqA/7W4xGY7u8uvIX/WM+aRfk/ZX7WMG3VNvxxq/MGUAOivR5DMadYoNDLQ/aDuYYpNN9tA+88/AV6EKFvqbqy2seaCqJguNNa4Lpi91Rtp1wf+K4Cf4kuqt67px+BH9Lx1zd+aCPVB+0vxzHaFz8vnD8Mu/UBOrmwro1gHyklWQ4293QgNp8BnRoVwXHLVDKcfwRL4YdT8lVMGnSbe5H0zxxoCpvPPScbl3xqPLhYG8ATVimcT5Qn/xQSnaOhqEQS7nZNEsjLgBhXpkyrXEatGkl8I8uxr8Q+E6+tpE1vBxY+d0B/9KTHTMN9nYvJSkwOFflrRDUQgQ2koD30ACSsmwfl5V+zYtHKQOeKIehcMhSaF62KUkVq5N7w47PczUZuoj6l6O5/dXLGhNbDt/DHq03jEPgqRveOJQRBwfDn2VIw6LE2NL32tbNsJseGG12SBaRRUSFSI7GBFcMqNvBbgBXGBiIFjsfLg55sCVirFIGpIlugMcODNeFJBkukCQD+CR4KP5QnRam0OPDDPzwIThkHUqY/48lF2He3VG0GyfnJ0FXPCj7lZ0JI8jNe/IiJN2FT6AG4H/cI7JpYQnRWCuEPqjL/WjWyrLxMMjotzqiZmsFb/vCEzCR9XeXGsehPzfmkramgnlybfI+6bMK8eddJ08J4Dd7Vkzs1R12jhNpyjy3ksQtIv7Z3O5CUkKw2/1o1ssmujpwHg043X3Br1Y7l9vOmS4BE+YCL7v4buvxvPBWntg1EjLs8l6wwJddrbTUnKYvwDtsL09q7k3687359NgSOOw8rA7aRYcnTnsLA8+MhJCmiyvxr1cgEL+7Xc3WPhZOpsEsDfayqTiE6+EV4miRN4Pq/wN0Cca5HPSTdk68vi5T3D+VJ754rRk+79b+j2PXo7rQoX2Q9fd4qf+818VNCaK0P2GfmFOQqJkwJldTZ3qE8ccoTiRZ7bXPfuj+U3xl+eJ6+vM6H4NRntv92njMT89LZYVFuoKD7Xlg5P7SRA4x6HcM/+qm3xNN0zDp0X42/q0zFwwaiiw1E18tsLMmoTk3tz/HiVNNHN4xCfhc0NFJcwGUyXMupj7KEoV4auejOmm1rHBd58YepD/IpxwlfTWUZSM0sqDItNU2MwK9HVDUCeosb+hA3pfJ8zA9/XV/sGwGNBuwjV1Up4KDZYe4FeBHDHSgLG3lseKcM+2IUgEkMnl84xhESkwS87VU5HuKHNxIHyPwNpMIoUA2MKWBAjweNK6UvKZMAQ74h2U83CuGf5lBTZMErn1G8BuIiPTa+4khFVYoDwd0TKmYFLEZZlYNpkRtJ9KcSxcXFzPyCfFlcY2cwGCUV72dmZSqrKKtkiJrnsVuRMNKhFen/nF3EayA2/nZYPIxcdYu8ViAa8NQhvlJ6iv7IqzgdUtWAWuRG6m63KKPT6aUE6DgzgFMhGI5+w11Wxc9G31THBmblZispyStm1ZTfjZlboNfmcpi163Gle9jY3CIWZG4VXFxpfqMJyXtVAQfgyd8zx7O73Yr+fax7XVwZtHXtlXe3hlBTIXgd7RnILOWU0v8L2rHy706TF4mSn0njJKErRBXRN0Ab3uRICYSNM8iB/7X8+sLQiZpoXTEgP0LCIFIjN/vtWjjT0XMV+iuuMD1PeU0ODeg0eqmoDUQYEryWXyIBKf0E19jwG6R5yQBk6IIVxq6jKgG0lLiRUNu1uoqY7jBpDbpFxUUsFpNVhJ17UmaKrl4jndiY1Lim5od6puYU5ylFut5TkJKSYouSJ0KWaIiwKRCqgS97xgHrC3XKv/yNqpkyeUl0JSwh4SI1UlJSkhy2YwPRRekFG4j+EM9r+vxKIqIi2unrLF1oJhOi8hgwqHE+MIS8cqLOBZn4NYHE5pXDv6kLQUranh70Pj432SBuQhBt+OUptzU+ycf8M/Tv+QX5BTK6WjqVP4UVgK9rLNFQfNUslIvJPwUWrRx0rtS4dicyvqmRSMmA4Rd4nZKv8w7e2qOqgorwREKg/0WTqq4htJGfM9LU1FQafaaubU8Mepua86nxO49Hcnhtss8+/eXEu6rU/UEXJz0867LHNj8/X1aCJlkuw5KuWhitBoosWZBjyICb6SBY7r8LDjivghk3VwHB7+T8TpPtlsApL4Mn4y9DhwP94Hj/9TDt5nJIL8yufSP5G4h4OOJsC/5r/gYisIHoysrK5n9L4xDWOmbw4lMkRGclkQ1EjL+0UCBOyPgroCGjzpvrGXlhrkh5V/m63n71wCmGk9QyKjHaKDA3vHu7RiaBS63nzFCQlicfW0JKot6JkHPj57lMX/ptzRLEqf77SBcbMKBFD/DusRry2DnQco+9gALZbqfVvDQVV+2rQpWNdGjd9TrhXIe2wu/jx0VcDayoBYcNpLQAWqs144Uv7OwJfZr2IHwLyHvLAtbDnmcna8xf5A/Px08fNTTUNUgtgh5Hh4ffGn3SDP1t9nVPU2EqfX4w5mwrkVtVBbDiGlvNeNfjr86Ai4MO8q4nm0+EXqeHgVNTa/IhRHsFwpLOc7+dkhWRWvRZp9Pu/gn3+pxs0dXAyo9dymZK0aWKpSVY+dhA3T2W5e/HP5RhMViFtW4dfH31GJJ0gWuKok/drsFUv/mgK9cY9jpthMTcRJCiMUTKW+RGmuqZhMV4BJJC5GKdGTzRLmTC1SboJkwKqbWGBIWadEVquq4JP3zQXB9oaGRdQoImAQmeoRJt9juk9ZGxPb5y6KJZKEnhkkBH7XYPzw7Y05VaHsAlAExDLSdQs+3bnh1coFAgnb7k+cbtsZODGRhfWFn10siKM3UIbCC6ERNuCyheJ/LNtlF+/iUAqoGIqeauZKc5tvOwPRXT8qPhdf1d8Ecs+PwJ+CPe1j8BDYT8TfBbEXK+38qdwqSOiqDWDMUB/nXFmoBTkwN188DTIBuMFdjkShWCXOySKIcHn2RgVLCmwHSlqHrhvxUha4v9c+yhnzV32lNt4H6QqOGRSRIRUs+4wcztj2BMjxbgtKCyDhGS4N/W6TBGL7favNhlXwvjkLPmEmDTqLDaHTvV4Y8m5GG/SHDbcBcGdjaEbqbacP9F9cpySMTEz3mweUoX3gpjdcsziOwSSWjj14TUJK8NmsiUwJ0KStnV4Y8lJJNBgwcRKeQS7qmHH4BB+6pjmeg7HqTo3GuNwfuBEuyReOjn51yKPBjW/HoTgrsqs3VVRMSY8gwOZLFpUEGXAOIKGALb2WrCH0vI4hKuPhGlsIA4/ygKPDbfB51hBwTiuljpg/e0rsBifn1cFEdWtdTmbpgN81tkiqknrhl1QkjUI8BOeumdDRtGmg/c1/fsuJDlrWZ5dTWxud3+qFPKX529lswwn7B8yBXP+4GxT7pi3JTPqdoWvn2T0J+dl6PY+pB91prW8ybMf7l2/7dsBBMVFEFOLHIkiSgMFwNj4eR9gmvpNKDTJMjtr5Jf2FKWXgave8bxBBd+UESkE4LMkXgFWBDRiPTXhNnNM2FK0+xavQR1QsiXY+8oo5r63sgTs5GQDBqjpE87x/MMOlcbBolIERvdl5/fmvfyHfUU7+H1K9e7Svit6teu51kkpLjrl7huHm9xu8+WGfA8sTGMWOlXZXwWUe1L03aDmW5ltSEERUTM0/C6QZXEEoWIiI3vlMk/Wdcf+WlVUuBq71Cc9NLtDm/RmX9vkDCXF+/L5GNdcOPzHCloI8/V2rg649t27jj5a8P7XKlK4fzE0mSVwqNuifCtDTiVKCdyXLER8sX7l2Z/ha8+eHPIMTO8zi3Ik2cxmEWUTtrKEO+1cZ8TDF9kvbEIGnWpCX9ai51OcaFe15vo7bTkxHuF0CwP940PGXtFr4hdzGJJMYtQ9QtVwMRV1wEB2kKHkRhECSu4vV1UAuBQ4hNu/+NUnwI1qMaGasDVZFmQpgvmj9ysJV0KvlapoMPiNnWoTp6INRAjIdsamYTfNOISESEvIycwkFpkKdymDgKJiC4SEV0kIrpIRLKSYiQiIvqLciFuLE0u/PoI8MFW9fnD0E6qRXC6U4rAGJACRUQkFqq90auhaUUNMwRKrR+L6GBH1IkfP43UilqhqKTlem3WZZ9eG1zGXJ5+vYO26WNFSbkMt/YjvHufGvPkyuBDlsMvTr59pPcWJyaTWZyVm6W89fmBxUtsZs2xPz705d2Rp0zEXS/kgId2ibVOx0/EDe+VYOcHpUpxqiNiXaHOCRmVFdcCienRYuQ61Mob2WbA3vayrf2LS9hMvD/WZPAODJ9v7DWPUjeUl5HPcW7uSBopGd922DZx1wmV3Pg/rfjcjZWKYWObNDCU42onJxTQYSNBqNupslAkhAN/NtSKkMHRYZ07GrYPiPkU19RAvUmUKGmaKeu/QddIxSAS9V8iJt4RWGUdbuzig267FqZPJt2Zf3ZP9zWDcInZTL11CIaPMRm0qzZ1/BYgTcMzaKBh9Ao2hO+HXU99a0xTHVAXjlbFJs5JZqNhT/jR78pfGGpFSENFvfful+ee3dtv/SBh92dcXHxwi8sKV6Fpd1sXsySZBc+iX3QwN2z7BO3sUKZvEHYnh0RGZce1DNMP79i+qVkwhqGKN2pA16aO3wrUFwpKDoNpHdyhp6EdDDjjBZyyMnIHA5tTAlKSDDT2Bq1Um0Fk+gdyty3u1j3isgHsdGyh0Za2hABDfmQgZdpTUu3GuXlXuPTuAal3lF9SAC1220JpObc5xaVsYNKlIGDseWiioAuNNrcB1pf03wKRCVlQUCBDPNSSqoiIqIqIiBuOh9o2NzAitz7jGJOfiIj7w09X0lKrLyJS8LyxQOCaJsnlKibt6zADiYigtlyPuci1kSjNRwRKdwqJyH+N8HnOVf1DIiI6Hx5Aut9DRITIhFwXvnslWjzS39GJ3VzV8LWFpmnAXDOPxf3OuQab67QJUZCSyz785uzkBA+ustnL6NdtM0qy1WxbWN2xPTHonbf5v0NtDvd/7z/2glFcYrx+k8Z6scYH7LOCRlxs0uFw76Rhxs4HVtr+PQXTet1a6NtVt6Pf4vtrvT94Bsikfk7V0lTTTPmulooASnuPH2wOmzSgFIaatbKaQtMJMx1VMU/+cP5yYrPjQF+xCdgcdYbYrFrvcOdBZEJSZqtiJwcJjIL9x1/gKeuv7MolBMLE0PgF5X844iwZx7/lBSN0DXT1o9F9M+G+ArpILP48d/ZYNQzd4S1dyFmd+iFiKOlqeZsR/Rud97ClCG4sKCkkiYhciHa/KLDoNKLuwRDlVXlLEjfPJwJ+iphoxotJ43IgEhERlZFAbsH/VtSJ1Op2bc7FcjpIBiU+tY10u6d4NPSM+2iLwXs7H3B5HzD+IknM9+kxrYxUDSLRQltUemyLisSkEPAmuGvnlh0f1EU9+aHl3Z7s21KmhZOGG/i5TIYhTbrYL6Ka+Pm3twhisIn73He1GcGxCRW4WRh3U8Qcc3kaBCSGEdKyBGnuA61h8JsA+RbUCSF9em9w4b9GIqJLERGBRES3KjN7FOqDiAiUMqkH2V3fBt5nRpHX1JIVdQ+5Eu9Hpr0TePDa3tgMCZ4QJMz8CNWvPk4kp5XBUrstGfY9BKTwxy5jVYf78YE8f0UlQyTOvbjKn1JJCZpAHGHgD0duDEl+ITTet6CBkL8J/khCVqWu/SvjjyQkbi7YbrV8qEs7p9M4EdFbpsvJec7Tlw6+5PHgjPPurrjXtaysTBJXbvR3dCwpLeOQG+/RkkCboz0y0O8dtH/BsaiLHkGjLumTee6wKB8k47B/i+vqibbHBr3twbI6+79Bc8ndgbjRIWpCABOnICmTvI/DAm2s21v5t9pjl1VYWiiLmx4MvDsVldA4TFzCi8qMbdH1xJA3opr8+60IKYoqJIKfI/knIpCI6OIUIWVbBh8wdV9ZSTmTWh+d1mnCavzz8uR74A9HCe4q5d/MgUREF4mIbuSk+0rUvZhpQbzd5U2V9d/Wxm7jb0XIPxkNez9+AzRw42+ABiL+Bmgg4m+ABiL+Bmgg4m+ABiL+BvgjiYhncIgjHwmZbGB0PC5y/OIyCfDtlAJWqkXAkCjn6cninse3uVIw+7kqRGR/tSonKy2b93bCA/mq8qPwRxIRoSgrBdn5bHKTDr+Z1OrQTEsBPqRUeZZmJcjRy+CJQ7xQ9cdSvl1ZqEJpIFsC561TeWF7YxVgW6ysSOX8sUSkCIjIKywBOemajSs93jYEmo46BE93DQcjV+FabnKMMnjlKHzDTm3grp8DXi2iRVIH+GOJyI+Ca54waeNduBAgfBfwsnGW4OnchvRHHRtXiXPx2xxBEE6Gxv1KV0fAfA7AlKca8DKHCRnFkuSnVIPFgd5a+bCwZWalc2tEwR9NRI1B+wB3VSBHVkVAxJJDIdDJWAu0VGVAQ1mGJBqSqYVSPvhVY18cVfvnvVCFM4nCuzW8j/0ibkXYF61I/imEEZ9hVRGV5f5oIlLbYpCzOAQL8J9KbaynDK/jM3nX7hvuQtwnrkYmFYsp+fVUGQq4pt9biKnj2qL9bT0UbDhvJ9Qc948mIiJi7who436CR0DclJp8yo30J6flgZkHV4McCSjDokNBkXC12WWRKnA4VkHkcvGzqShVRkqsxaUSNRqVqA5/LBHzi0og/6pnpfBSDrdTiieI1t7Tl9QSpxD7pT8kD6zSUYLcklRoel2/2m10mN0kwxyiv8sQeSfxwpeqcCqhxpEFD38sEWVZDLj4KApcujTlSanaQ31IIlKCC0XAm/85g3kzNdKPcdEcy9ukbGKcKA3CZFoUbJ72iCcPOKBQG3lllUk6+WfTZX6cdJqWmaZGo9M5yvJKGXiyMxUuIyNTIM2SFmqTldo+h34qDVOKWSwnJyf6bs1aonsHPdAiCJdCfD6rGyv2/PsSePQ2huUTuMd6Cfv0YcXRFkBV5vwrgj+LqlJQ0m5NEDsRO+zoFW+t2+He1n4rxuG16fGeaRvNFo1Bf5fmVneM9nUpoFQdKBsA6MdDJfDcTNRJwTSbzBaPnhW+4mgjZdXP4aNuqou7ngjD0YdJV5TB/txh7XjxKPMq6C42TgfXJtUbNkopooEFIaiwRCAKbnb90DuWd3qAKBA7EY8O3tbb4dTwiHPbboylCDQ7fOURdEObX9FGlzr1g8Lr1Hdt9VQbxxrusS6m0gyx6X8M/xXjigP5bCbIShXXHJEPRuO+Du53jj4OfU2fVxObIO4rVTgRL8/jOFEISMUzuclV/x9sUFa+WaeGBFAHRGTQGGw8Ca/H6REvzry5OhbD3ro9IC0R5OTlKkjQJcBI3uBVNwPrG7ufHSW3HzmeGcl7Iqhxhm5BYYGM1XGX2ErWf8SA9M0zSTczXw4sVy4gpMOqHwMe92Kglg5BC1ZBCaf6Lur6RxmY9vTrR+N7a349Vb5sswjxxE7EpqpN3k2/u+SoHcvi8uCWfQ6/zYoy2fxi/z94b2pr15XubUduWmI9azZeS0rSyrKKc1Q8O4xdv7jT9L8wbGWQ91qvDmPXbXq+798NpovGOHSwuynuOlJQls2D96tEOyymKgLiTuQu93Vq3B4uTy+DE51SwUSBTR7fIQw46uznr01OhtcGdSLYbLVfNpryVzxuhyIg9x7XmANFQP6wnxkFRL9ldqsJb4qsKgIGd0cJVXBCoCoCIvATdNWGuw0Oo5neby1SfcRGxEkHZ5+IgaRWt1x9zcSRH7/QI25Q5sG2mX8CJ82CGsV/tMjx98tG4Btf/dgNiXrTNgmM5EqqjScKsOGve9bzBPh1tv/wAJezBk4nR4cNUei5Z0fmySVPRl1t3Mane3qE2x3VivHbHeyVksbJ1IyfEFwlof66smx3DqtAdbfDmsHiqic/pj4TFHqRCGW46wnKa9UVe5t/Jl6G6k+ZQS47nywL694qQ1IhXeD0ePLcOIK7+2nnw772HwWWqUSB2IgY7x4sqbvDokxGkpU/ftjoPbuO+S6uKm5gUpidjrxWbFpOFrlF99y766MHNnfiiX+UcPMu+UOrcxMOdBNXHWsCEk5SxGG5uUoRnO6YWm2ctGIadLqrWymcVoFGeClNSKW3CcFI/8uRjmiD7lXfz5XSCoPYiIgDdX41+ZDRV8jaC+NCq8bt718adIB3IDY/ARFoSqUujfzhSYm3P0nDpCcaInNcQakE+Fh+hF4a1R9adeeTDHiEff+wNr9UElrfNPw1JsBjP8cb6qvpRVcM3+C3439zHCcvr6tyHdQLIZoYVCOQkImFNAjPYkF2iQQo0MvBWKEYmsmVAkcExqQRA3O9KwaVOKy+UKdEtDrsHBM49hL5fehzamwIcutE85FbtobsX3R35KnWE2/8df7Vh9cm/pMvtSTuh94YfqwdxkULVO8yolvb61hfY8pJFxvrtXhZl/XEvlCbxQHtCv1adQREw0YtrjcBxpf9pD+KgIh648SIgncW58y3W3Zo1j7UPymkewmnlLGv17oBXbY5R3Y7OfT1w5FnW+D2MjykD02IoXQ6L+I/H4YUo/Sa3uH24qwLSqfnOqdAW4Xazdq8zJGCng8bk/0XgiF8o3C9o06JeNJlh8OHzNiWaInqePetDh1024cmpaXotFFpGUaXpJXGfoo3PNZ/e089Hd34h4nBPWx1Ot7SVNNIvRFzf8AFl/3WLZQNX2bkZzWquaTaY2CAFs+PCk3/tM4gPrH55Lgus0QSnmSwYPZzNcgi/PxMJi3i9Fl9ok6J2ERRh2duzEbX8g66jRtpJY5rNGQH+vXVv/aFSEDK38vA7jzll5eTr352WQzII4SIv57ju1L5ffkVthiLTMQdV/bNmtx34ib0//t44+Z/rWfPRP+eV8fnTGo9cgN/XBxqJEwOrfJj8yg8wK6LWef731bluoFv/x0gw2BBv9NudVrOcOM+cPL1VbHmWTtbcDutipRkFDOdjRx9nyQ9t74Y7Tfi0LszU7cG7Fv4ctLXs1YpAvY/4xYwrLXzgRGtvpwnSkB3t2X5WpuF7pkF2S96nhv1vLCoULqioT/dvR3LE9yDJXYHHJ6VJpGltch6ep1OxZUTv2EXJvOuiU89BI47DxYHnGGosSPMtvAE26PD4JnbTWi9156ME+p6kRDcBkFpWSm8cr9HhHOHs+u7zyVtjs+7uwE29lgAKwO2QXpBLshLycByu+kQmMi1pPF43BnoemQ4lJDp74LJvu7wrXtFa0XEaK9AUj0ZOXF5yJb1u7usHoREzC7JVQ5798yyfXPzEPMDPVOfjb+paXGsb2JjpnqcCkspjT8PR/2uF9H1CTk+7YjNRsfBt70e8d+/F/Kw+y2Hw+Sk4d4nR2feHHdCrEKNMKCZkjLil0QaE7IEC21jkoBoXOh5Wih0OjSQZ2hodbc5MLr1cNDdZgGddc3gUfxTcL0yk5fX7NtrSRMoWxz/BzP8lpNWGpE4eexCmOm3BoYZ9+blpSmnShA4m0g/45sJiBCZiNSnFEF9ShEVp82QgOiGjroidCVsf891/fmvK3JhN0vbO5T/yQw/AVPVdQlJ4qfjbQEMGh0WW88mhkTjhcbDR51WkEH6RxoPgICEcAhNeQ5ruy2GefdW8OLtCOMuOLPoDGBzOOBmNgj2h58hw3LZ3G5+he08mHjtbyJ9BGxxWAYzbi/5prqLTES0IqGkqJT1LcfEZ+ZlqSjLKZEtLyoqYhEoqm0e9QHUqSkt4/AIyG8FivIvvLeB/COm3PyHd58iIGWI6G16HOmWEATEt5wioO/ra+QfgQSk8K0ERIhMRLQgQfktTvZNCh1+pbGlb7/EkGGXdTr6OicED7uk2+mUc/wh6w09W+gYRe56eHC2pCwd/JIfuUzXH7v0rxdrDgaPuqx389mdvnc/B/X1y/IfKCslk/dk+FXtLicHvT/rsKvz/55t2BGU8rQrS5JZWErnMOQkZHL+NZ05vVtLmzpbU+RHVz0LOOYseEhYVVYUEW32dYPMolyBe8KsMW5+sgPWB/nwwrrpd4QjfbdXWU5tUeshRj67QM5Ru8uFkORwm2Ysvdfrz3ovctDqfAnvBQ29pIc2YDTk1ZN9Oq/tqyqn8nlS+9EbH0YE2CMBDXdZF61oMcsjtzBXIXLsPVJJMyo2uqmttqXf+og9K0xVWoVu77ZiOL/h90N+x92h5Te3T2Qc7LcOHJpUPdcuzCBfxMR7MODceAhNjhCaxkaX253vDBPcOUURML0wA+SZMiAlyaqUtjaoNRGRe7zajlmro6Qd96/VnBnN1Q0j33+K5j1mfvsvFGzbdL6LbrTnY7K2I2HIIepeU33DqJX6X81wUiguLWYx6cyicY4j99a2jt8CioCNvdsL6JoiKFObvm/OwpzbXBM22KegIHR+4IEqueiky27Sfevhz4uTUZTFu291uB8UlNRu1kgYvmmwjwREFwmIrpG64ZvvrkkFIAHFnacoQAJ20bWEEy7kfARpD5Ua8lMEBKh5EuCEC/fwlfHXpsOB3ltBS14ZUnIzgZDWeXHeeQSQbmr+J+hwoPc311nsMzauvjMu7HReM0JaWrh+aW3R7/z44MsDDnQUR16iAk1bEl8CfJEEwnEYUJFLq0IX3c6keyuaa6kxdNwtHjeiu9JuJowz4WqxaMqqEwJQKSkZfwvETsSDw7b0b7HPNvftxIekLkMv72HBf3Wd/E/3tl1v4PU/jzdsmWbiumLglUn+OOnNn7bT4X6xxRw2C9cTuzS2vDW75cT/ibt+NcGj3XDY/fQk6Gy3hM8zuEp4Iy9NhuPOO0jjs1pb25F2xB+OqdrK//3RJ3l+/r50XNsBcOjFeSgsLYJF9zeT//gpIaREKyPFJCXZb4HYibg98MA8v/7HTNGfX1xAqioiAT9+/qSBmm0+r3ynj2k6cAd/mkJ2kfT//P7bgkbxqHGm/s5OJdPauq4Ud/2qAmWJ+H/Wc8k/Px7GhxBjuzyQl5KDlOlPK6WriGZKzUjX/TpPJwz2Om2ElbaLSCKmz6y8svatBESInYhTrMavpfyyTJm8G9N8yU+hhpr6Rw1Q/5jgzjUIz8+F0lKswvV9/5nEn0+sVxApINXnpxQJ0khGEUwaGfMM2uopkPrO0GqPHem2UDUgP3/344MF+kW0QsyFBM/Pb7yWPwzLUWDJgE1jC7gWdR++d5r9h6/s/2xIK8gWsEgcnyNoSf9tegz5r/jYBa0QVyZKRSvFOUUFBAEfCI1bWzQQ8TdAAxF/AzQQ8TdAAxF/A/yRRKxLndYfgT+SiKOuTru5wWLxODwqNyT/hd29+MdO79KijC8NPGDFZDCLUNNufuepC6eau672fnZg4TTz8aua7+mS927SI7nA1yE2R2MvTHYwsr2qWaISZ2Vs6Y9aevtfnZwpUyCV3cXI6s7T9Ajr0I/PbVZ1mU/aJt/8ZN+SmR0mLkPD7ws7TZ2vKaeetOj+f9vQDng7n17JT91uaC+6sGpLIx21jFkd3Jfa7HN5N6Wz29pBRr0PS9EZ7Jra80cS8YjTFic8A3mF9V9Tx5kN3THT759D8VNCaGhBnzS+TvAppTfUVbsTbxls3Nnplz1bjf7PPzXUYZvTylHrgnYutwJL0jC7e5uRG80P9kyNKHxnscZuoefs20sPUEQc03QAObkR5xFEb7KrYylqyq8J2c6biN14fvsCLHOqqeuquE8JBrHFSUbDWvTzuRfxyLG7KXemqzr8kUQktwnwbTlAAqJLWc/nv9dWo1UYusiFVNhz41uknv48q8nkfhPKgn/4eD8NKk4M3+FpqsqqaVQ8Km9qmwNyIX/dmqjrxlBxRCEg4o8k4u+GBiL+Bmgg4m+ABiL+Bmg43KQBDfhJ0PBFbUADfhI0MGMDGvCToIEZG9CAnwQNzNiABvwkaGDGBjTgJ0EDM/6kWHBr1Y7VPRZOrjmmaJi48cFpqN0xAXUOCWYB0Js/rNcy8QGgTbHyCmrceIXb4mtjcYopxSza3PXfseKqWwMz/qTAcyfEmd+lgKjBVfHi7MFmsP70M5D8nrNzvgHkoZTlt2qOKCJoBDP52SZBIykOyDHKQVyrdsi8aLjW/oGOwBPEQy8JZhRPIdDAjH8kDv3tAE6WTaDPwssgL82A+SPaQ1sDFXBdd1es5aSedoMXUWngOP8SLwwPXMODSfEsy9oCmUJXphT+1zodeqoXVmsdU5zL52hiFct9X+HkvshiZbF+vRqY8Q/EuP9uk+5ad2tw7dWK9PfuZMA7Tss/IhmCIz+C94UXUFAs/AC7iigq4UBBUQl0N9OBXgSj92inC5LEW2xmpMbLd73vU1h76plIjJhTIglr2qaBh0E2lAgREkSxM1zXaKNQJFY7qg3M+IdClkXnMWIRuxRYUtxXQdQjtCuCxaCR/2dET6itIgOzCNGXHwOWXIOAVylC02LP89g+nhAvKx85KowRqwL2nKWo2x+qAUHp0tWeUCIqsPSmciVw0ioFFOlldWpYtYEZ/1DkF5VWYjwtZRlI9B0POsMOVJmumbYivMfDJat4K1EMPTC/Bxy6EQl/7eXahykmes3xji3hZawUeew6hbYquXC5mkObhQFP2n6dIwUzw9XgVTYT6LU4/u5bgLl/yGNAh1t6AuF4iOYthwxoK8ayGpixAaAix4SMvGJIySyoxIhKxPiuY0sNiIzPhM/ZhfDYezAkfMyFtpNOApMuCaqKLCL8q4Ew7OUqMjmT6DGP33tf63qxiRd+SJAWPM+SEnpmV10zYnXAj8KQQB3OW2Px5dnAjH8Yiks5kHneHdq6n4CPWYXAoEnCm0OjYcrWB3D6wYdK8bOInuxmWALpp8Z+uhryMMq+OZx6+EGAERH81tUOz+sOZx5GwaWg2GrrhCkCM1gwLFBT6GkWNZ1+WBHIojK0MmijyAavZllgr1ZIMrao2WB6KYLZziTJw/b3ihCdL+yAafGjgRn/MDDpNNAcguedl0HGBXde+PbpXcHBXAcO33oLd8MTgUH0evxLHf8b1QEUnfeQvRzCpIky6KrJQcLnyid8lxGiqjQRr1dHffKPPSkyMAJ7XnYpd2z4IkOed2AiojbHyiBzDdbJA3fDbGijUFztmXgltWBEhMSXNC5aeeS/4r3EQjrZY1d/vljt0cCMfyiQ2SpiQJemsPJEGNBpkpXWHJcfe8JjRMTLuMyKyclx5PJxljCpXxuBcGTExgQTlpRWnqARBZ0bFcAm03RQleIIXSmt7eGU3wMsv7F0KTzulgB0prRIJ5qKil+CGXNycxSMD9lnVwxH+zXvM2JadTs+5HXFe77OO+0NWbpvLE71TfZu/++wAVZ9T1WMM/PeP4fPvLo6pqIdHKczY8J6NbW7MMN8Au+owOy8HMXWB+2zKuZBo9M4cZ7Bv8Rz5Aeuw/GP7fA65uhY2DHNFvou/rYTdzCPxQdDYIxjK5Bm0sFw1CHIzGPD/Y0DIMl3PKgN3FelkWCcCdWXLYUDlqmgT7zswpiuNiNEHLsWcyQgJp8Ob/OlYFGEKrlcIvHlXsValH+pP1XGOtPPYE6IuS0V2GQvWR/4JV6ibmeHcs2SE0/RWd3++Li2Q3Z0bN4hgD+OAksu+1yvPZ2p65Y6zV+lfEolT3ObFvavL/7nGkxcMLOP55rBlzweBMWH2Qory2CXFbuktIQRkRrZ7tTLy+MCxlxoJhCBqEPiZK51FXZpiZThLqviujz3ur6APGI45vB359PFRAv0RhzizbZiD9xj3sUvZXAD84uZ8N/gszCl2z1iDFv5FRSV6Vj0Mtj5QQn2xChCCiE60ms45aW6sSdXHe7r9fwXakLjoXj8P+N08DLMEbGWouOXYMYw1xvaaPjrctTtoXPuLvO55HdnJPgBHOvr3VNbQZOcXSgvK5fIkyxUFHbujgQxGOmubX1lfcy+1eu37SPtP223XDZkSuiS0/yU19neAU8MgzivYHpK9sfGnY47x7Xe0y3j1aR7KsLqxaDReavXyMAMOuP7T3SvIySum0f2PuxSGnRZswBSc+TrRFH10csU8qWWJMigIlsIZ7x2gKGa8GOxhTGiMGC9l71RgeNxCqRfGGpiRHEBJ3b+I+qCf1lpWZFOihYVvwQz3v3g7zT2xsxrAoEEwa0bd7gXm5tI9ly57HyF/ucm8HrLMc0H7pxu5sYVMwn542C/zf3QO/y81+2TA3Y6oJ9gRl52TbZbkrJRv8bdT3rum00eU95Nx+r6vcRApw6HeifdGXSSO4lNvA3YE/ISEj1lvGcwDW2U1UnjxQwpOgeCF6+oFM6gcSCviAX+H4zgYrgZxKWpQnq+LNGLSfGYVkaqhGCwfFBXyAa75u/BvlUkNNNMBTZbings3y8Y4HJBSAYLxoZoQiFHfIIGipksWjmoMjmgzSqFRoTbTJ4NjRhckhUQZSUV0SCeEGeTCmmQWkQnj2Vn1PPSyS/BjPbNbK5XJQYaqRhEViciVrxHMSJ5j8+IX9yUkBqfxa8uilaHEg4NmETH3r3Va/IvKoqKmTVHEoJCgkFGBWvC00zWd/dqmHqJcQb0184jJ3nqYkIHT35PJhh24hN1iMz5tjbXhJ+WGXHXwrcc9Vgf5b1MeWNmotUyvI6rJFYY4hIC0bp/WqfDaL3cejsv+00uA4YGaUEh0dMIe7i1YUR92RK4ZJMMMtX0WHU1s4q6sBpEj3q581eVvt9+NlV/Ryd27OQgKX7G+JyZpr7m+c41TrI2vg4W3UhbwmtDd67MLMpWWWI5c/bu18f+KuYUs7ow21+XZrIKjiRfnDqhyZCNumo6cZbH+iSOMR2yy6vV6DU+r3xnpJR81h2t7bLd3Kht2JYXPv/LLchV9GoxevXJD5cnTrFw/W9liPfanKJcpUXmU+cqyCvwRul5+XlyK8K8N2hmKcWsj9+/GnvJl7GvTX1iz8ycYjR6VdPGhrVXMfkBWPpKlfzzo4BglI6NCsGO+HdRKwRrlSJAAY6aYaQg8WUWEv+xBQy4/VEaPhCi3aVkGfhcTAeWmMQ6FClXmqTB4MZ5tdJNrQ6YC26xomZSUTTNJtqN4qgcIa5qEYxW9mU2tZTotX+Ebs9Px4yxX2w3l5WVSert6sjBmUuHcyNeopX2+2WPey5k586dF/nfgaiJAbwzRPc/Oz4jwu2Oqv/LQLvx/n9dk6JLFT+ICXQMG3+9sZKcUuaiTtPIc+J93192o0vSSs++ujo61ihIakPYnmXx44NIah984jvZo93oDadeXnKVZrAKjkWcy6bE2NTPHzX/u7p16SbXlR54vX7b/tVpeRnqY+/Ovo5Ht96JftTnfI89Voa6BlH1/8S+HzL0MojIYpJ/7w9K35THtzAipphqlAXu+jkgR/8+JXFksinP1CCMGHOmEOIkTYwdJNZThRB/PZtmw0SirnXFqD8dMyKmn1p4MDY9vim1hPB8wi11R++hoT1adb06qLPzCfyvvLlpdUjMM+uLnoe7ejQb+R/GszGxuh9u4qfRw3vIk2HtXMijc4NGXWrSfcvAZ0dGbu87o5XrskNBpzzO9t89Au9NaTKKN5MxoeWwzXQavbSnss3Z959iWk5qN2IddU9TTSMVGXHwXrfbmgrqyT2VbM42klP59HjUBcM+u0YGzrQZv+1nZ8TY3rEwNFATAtNZYn1RawK+uLK0MujUqAj2t//0XVufsGd+mS0Fff21q22DuNuH2WWyabA6UoX8U5BmyXLeTxRfOT8lM24dusq1YpjftFMW/NeLes5aQPmn2k5Yy3/v1rTTAodc3plxzhzd0WpD9o62HMI7s/pv+2m8Q1c9u7luQnftgH+8qqrXGXcfB/5rFpNVROX9swNFsOMdUwXCcLbwMcGc55LkwCdGkWQayVq8yMhXbELcw/W+McQ41JYQcR01CsjZS2E8JyojYh1QV3XBC1WIzWdUqlN9fkyqQ22elSj4KZlRVFgddo5ZYj1rNo4vy8rLJHs3sz/Hf//1u8jWxs1bvaopny7bnCMfTL7QWtTlid9hkR+BTGOhXEz+V5ukiyVPdi21VfCFdg9ThzsfZaq8/6fgl2ZGxP9C1m9DehmrNX/elKUXmZGVoWplwj0QqqCwoBKF94QdnT2p/eiNNqcGRvkPPdcUwyh7M7q7LMoTPLmiseEu66Joz8e8cWnnY/2jAkZdaEpdFxYWSq+5471iad95c2ZdWuLzn9NiTymGVI2nff0oDA3WgiMdUmqljC0uYJE5pZKwO0YBNr5RBmn6T7BN/yfEL8+MT0ZebSwQoPMlPPm5NdHTFRcUFcjKsGTyx12befVQ7819uhvYXGVzSqSMVYzCYzITmhko636QAO7MLa2cxrMxUSJRKrCYlJyTqst/TZdilIZlvyTV7zY5L3Ork8aJEU8ymNDqpj7vGmcMm8mxYSnRI3ZXL4AizvdxKYsQcXF3/RqC2V5kM4n8JIT2ag2MWDV+aWYMHHvJoKp7HbRNHwPfWXnIiOg2VdF/i+4eh/8GUfceTbtE2p+I9QribVxL8AgReJVivL6e0EeJqFdGHe70vW34UcCNubg8MS5Es07y/5PES3GhXpmxqoX1InYxiyXFLBKW5luxK/zIX55mY9bVHLMBvzO4a6U4MfUD5PNaok6YcceVfbPO591xvT74SHtch8Mwi4O9E/o0dzj7r/XsmYsur9pyNyvIebHx1Fl92jtesDkx4MOTcdd08ory5XueHhXOAmb+nTG+AuZFMjIzVJKLPumtCtj63/HBO3piWPdtg54VKpYq6spoRX9kpzdml7KZR7psdGyq3/TDpuC9S46+PDcJJ2UejjzbAuNf/XBncJ9m3c8MPjDhTjI9zeBUr51dddS0E3qfHvMEdVvLoVzCf9R5o6WBmzYdeX7GQ1teM+HhqLMtHE4OjyjiFEsT9wR2cBwKPeW5683Rv+ebec13aePkWxfPsr6RMDUU2vn0hJS8z4Ba861Um8KHzLgfWqcygpmSpz3FibNap51gOhzyS3LA9/W1miP/YNRZz3i8x9YeyAi7w4/OsVJpdzfU9Zruv483bvZ7ea+vf+7Tniw6s3D9272rnMwdLn0qTSfHfckpydoBY7iTJHr7O5bHTwgmhZ38gnzZwdc9H+opNo6hMemc+Y9W717TZYGHvKZiwZ3BPuY3Y+7372lgdwHjGu62Lo72eMyUojGK/UefNyLzOtipPN41SCKnOFfJ7dLsC+nMXE2mhFTRmFszbt4dcap1QnayfsTEO40wrt3JIZH3h59u9eJTZPuzLntsm+3qXKCroB3LkKSzux4b9ObBqLMtMR4u+u95c3wutmNzhM8/7dXaPtbRbJxQV8+zvpBdnA3P3PxgbfBmOBPpx2NEuiQNor0CQW2LKTE+lIIbww/B8dfn4EjEJbg6fCc4nXAHCaCBhXZruDDoMGh7tyfX555OuAZ/3V0Gd2ODwd1sKLi2GQHWh/sDp5wDSdPCoPnuzlBYwoa4ycGofcUti0YDTtnXie2yL2pA/GeJYloNoi50STqc6L8ZItOjYLn/NjBU0iXqdgya7exCxnNrOxi8w3xIv6NhZ1ja5S/odNAFSspKIWX6U2i1pysUlbIhZnIg6G2zFFp+faFOmHFQp34nFBQUs5EZPcxGb6DC3ZoO2aynoRvraNLtyq7z+6c5WTlexjinOnrb4P3mBkZvj930dTU1avOUYkTEq9jItndHnjKhrrPzc5RwYmaNxXzSbkTHRuYPqHtnuu0kJ1XuDDrZ+sDVI5PatzAPQUbEsB6Nu1wc0br/vuISNvPQtWMTR/YYchjF5iNdNzlS6bdZLh2G7j77tf0xzgfPAJnUjI9a1x7fdB7rNJK3GxcX/XGvI7YDVfR+B0ZEmOz9upSKTJAwNRha7LaFp+P9QH2LCUjTuRPUTr6uOHaGwy+4exVLiJeXSaNDaDJ3JYmyFDDywnQYZ9qfZMZ/bOYRvVt7cl8jXYIOLfZYE8x6BVrvdgK74wNgk8MSGNrKBWyP9YfozERePai8qP2QV4YcAqPd1sCgcYf4Iy/OIuvyvweb4PaIU2C404qXxufFGV4+Pr23QGOid8V8iI816BJ1+eDlD8132RGSWy9Y130RjDQeCB0P9YWkXME12fpAnTCjRiMNoS1BRqT8ngMmeFP+TiaWvK1Po3oOO1gxnaVxh0D+a0VZhSx0WzZpTm4vUJJX5NmAaNfc9Am66spqH8f3GbOHP10jJVVyYx2TIVU8yWX8dirczKjtU8pvYmj8Al1leaWMcb1H7UO/popGilvfsbuFtYm/Hb8DIifdJ93C0iJQk1aBpQHryZ7DeK8dnOy/AzppdyDEvgLQkFUHve2W5Itd/enXX7fPIyPETg6CjMJMgqlZ8DItEowJRkQF2BvDThAMkEzGi8tOFsgBx3svPkfAK/e7kFaYBl2PDoUNDguhXzMnyCnOAU1ZDaJX7UgyGDJiDFFGAVHHgtICog2N4O/7y8h8dInykwim/ZT/GZh0JqTkJ5GMiOL4w9HnCdE8leyx89j54n6sIkHszLj08aZN7sYjNpRIcKTcr849t6HHP25t1Fo+rTnl9+NhRIC9IkMhw7Rlm3D+8KjEmGaN1bUTxTFJdPT1OY/RxgOFMubvgFZ77ASu8UUlRHEwUNSFbWGHwfvJIchm50BSTiqwOSWk+NrXdzLRK3Inm5E5qbEdpo3LSYLDERegvSbaxZEAu2ODITY7ESgTURLcRES53chrJZYCyDPkeOVnFXN19Xv7jheo15zbq8g/QkdeC7b1XEKWN+XGMjDYIXySG78J2t7tQEVaEfQVdUCBKQPtNFvDR4I5W+7uCpWNcdQv6qRn1FbSJGUMv5EnzOyPDHl5d8xpk7HXZ1477LS597u0aGNpCWZ+11ND3kZ7cRfV3yVFtczKzVK2bNk+cMzF6deOuGztrbvbspxaXiC+wJwPHgHSU07MO7J3zKZhTfZ05Dwf66f2MDGkh3OzHr4lnFLGrMtLfIYa9jmAT3z2jX99/uu+yOPj54+ad+MfO9ELJIqtyi0eLX+8ef2+IRsHo2jc2sc+85XbXeXEjGQ9dm4xfdLD+edvj/E1Jcs7ZFUePy5QYufTw395tRu7Dsess2/+67N7wLphqGiOcYx322W+9rivjH7POwtOe9stH8m/8/9XBr7U90adhObKRjXGZXPYRG9kzbvGyZZX7ndAmaUsUllrg71ha+gh3vXLiYLnfdQ0aYPiKeJK1A3wvLaoShs7w4x7wwb7ZTXWx+aoM8RmJdcYry5QJ8xIdPPyxRw2q99p16Dt9itIpey70f5O+fn5shoM1SQ5Obk8/1HnjIqLi5nNDnUpSpgUImF/eMjLK3qHLDfaLBlXMT9C/i+TojPY3iPWuDbba1MYNymY3Ec2986y/Q7anS8fe3veo6e27Xlqf8/GXv+6Tbm44JiJQvMwr27jNx6/d7pSnpzyMjIPOZZsbnpOkcq/tnNm3Yp80KdzE4t7d11OkOuOhPhFzoczpZjFknLc8UlA4hP7froOJwcb9D4UEvu0c2u1FuFX3t4evKv76iF18SzrGygSxk8JEQhDkbX5ri4kk/KD7N34VqrsmljC0X47BOIs9V8Le8O/2gJDZnk6/hqoyXBtzMzrOI38f8tMKcWIiL5NexHXPUF3u0WleDnF+QKM+DbjLXQ/PqpSPGw7iqm1M+woPoidGf+xnjULXTmQzX089iJPfYx/Vz2Csl2DjIju3bGnyQkaGRkZ0hwl/6J77ORgkhNw5vKDu780Ff7O4xEpz7ibj9pUsR7bXVbznvbIbkPIT6/PsM0DqbA3E+4roKsko5ippK+Y2RQMebsumsnokwawJrcfR+4GweWZnT1WkRM73g7LyXyXOc6byWvbl90lvwPeegiel2h3bBBvRlVbTh16Gla241VaVkpOlFRkRBQJK67v4fjS3McJHA27gE/vr2T74BkAzXZ1BlFQWsaB1OnPKoUjo8dNCYYm2zsKhEvRBF/zFiotBBg5LicGJl1fAK8+f/hhjIj4pTRwniVEWJjrtgmtr/ImHJ15Zv/ozYNrijf3xrK963stca8p3q8AnFjhR2T6e2BIcseDTZX1Ybnt/EppCkoKYfezEwJhZTUstD+IfyxwLerZkNhLp898ybv2TwyG4Rem8JiLJkEjPt6BoL/DihcHx7xaW80heXoYwWqV69REwQBuDjtJ+t9lvgX7Y5V7zfrAL8GMVtv6vD89aE83fkZs5dMtO9LtniL6e3kPC77idayziY99hjxTPtt/+LlmLfbb5qnJNEo9329v5wvBV4cc/XxpGjFW5Dwec7Gp3YkhkekFGWosGquwm771jaWd58xovrtLnqa8elLouKu6Jvu6p8swpPNHtR6wJzMrU7lYskQa9zGGf3jR/lN5pvbH3M9a2yIOLsKPaPDYK03eFsaI8/yTH4qIz6+hjdrXAyQejj7NE+keJYSQ4iSu0X2cHi6QjnheAtfIiIs6T4aVAYK9JQLF3SjPYIGwgedrPgAYlbf4GRFho9NRoJdD0CUZZFhjXEb50tPRJGmg+2UdkR/NVBrD/ZEXedfNlVuAgpQc5LArW0qva/wSzBg49SpvJsHdb965vY5rB1a0romi5DztiX+tTdm/Ds0mNpbWjA1wvWiUX1gge78otN/Q1v0OYry47MSmuN0qYgJ3kd/5nFsg7uxn0qWKkBGzcrKVmqsbRk7WHrli2tOlJ2d0mLDi1rN7Vprm6sm3PzzqM7fXlGVuV2dfHNba+QCuUYZFhwvKRL84nHzHwutJd4kXkpTiK4l01QEZNdT1CmjJcfVdvczdyH9NcL06FcJTK5/zwQ9ZgtnfejwSqR4UkqaG8UTloHEXQEeeu4vgU2EKIZK+A10FbWimVHmSKqs4t95PcUb8EsyIQKviBYWFMlxGJMQnt/uKSSnJjZUUFbNOue7tgWHOVr3PDmEOOC4nK5cXMP6iUcrHVC11NbVPZwbusUO/nKxsnrycfO6NAUd4G4J9e2+3RxcX95NTU7S1NbWSj/bY4piTm6vw0vwOaSymh3m3ayUlJQxkRLz26bPRJfXTR01ZGZl8zO+U9g67en8gdQjjPfZk73XCZQvY6toIjVOVGGpxsC/pdte3goN9t1YzBiuHNvu6Q2ZRzcaAZYQwYlUTPrjUEjv5a6+LanSoDbTi8WbY2XMdWR91aS1Q19OqlLbHyaEQmRb9QxgR8cswIxqH4jcQhWispZ3Ef91ItVEa/7WWhmaKML+MtAzvzBJplnQh5UdGpO7zx0EwGIIGijXVvyo28OfxuwBf2pEXZ35z+juxgYRYWHlmsyYIYzIck4o624qTOxXjInNdeX+f+Ne+PvWJX4YZG9CA3x0NzNiABvwkaGDGBjTgJ0EDMzagAT8JGpjxD0HC5NCff6v7LwZxHz/RwIx/CPDFOXbL17WsvFxyhP3gw5QFhsKiQuljd065mjZt88yiZbsgDDv/6PKQAV36nUb/Bf8rgx3M7W7Iysjmox/DMI9Bts6+VFzMu79NX97GwYCXQbadTTqRenVXAm/079TSwr+Rsio50x36JqxT+IeIdoNtXU4qKyhn8NcRzbJgGej2tOx+TZYly1t5LywulDl2+9S49s3NQs2NTCstfJ65f2EEjcZV4qfqjpbgLwddG9SWaFtH4w6PH4T722fkZpLLVRwOhz7Yrj+pNlRUVMQiwNvR8/xdhHn0x9hmeMRfX6teF/jLuR58q19Keqq2W+8xYt+508CMfwAysjJV2p5wTE/0CpVof8ApafPRQ8vDXK83Ntptk28taep3yH37AIxH2YPta93ros4Oi3JjVaPnXhrDV+K6LfHy0qY9X3pKSVoxQ19FN2oQcJlxVsSK46g7jPEpHd3xj/+6VvqIQ2dJSBVK0mllexVXuxDM6G+wsxP7xehbqhYt2wcdeX3W89KHW8NPO++yo+qJRzpMi1h2CvMJiwrv6HLTPQj9Voeco/sodT252GXOwqz8bGU8R7OirvOsyJXHFRjymbipgGLGDqf6kMtZlpltH5wz9rHramZz93FYoM3MyJUnQkZfIa39sdlsqbYHe6QVlBXJUvU/9fqy64mEy5OipwVK6+7tWD5Buv9//45eMB/LRQkDPz6Op0Y+71DQ4u4q139miYtODcz4s0KM5tVUlJQzNlr/z7XpbusiOSnZnJLSUlLZ9L2Hv2y37QNfGO62KlaVVvkcPzmE3MnCoDHY+GL6hd/t42hmzztTXIEln11WXkZ78/kDz+qCHFOOXPtVkVZKWxO8ffX8jlMWyLPkcu64nDBWUlTKehQf7CCRzxXn0MKexaE+CWmFGRrGcs2eXR19pJL2koKUXHarfXbZOgpacRRzBI67ZNjj1IgXPrus5jSSVf0oTOSWkpQqKodySQ7Ra1OGz1SkldNy2XmKbBkOz34uSgRyTNlc9KPJTrPDPT9FTrqvyCnn0I32dMl/P+mRLFOKWcSSZhW33m+f4aUzYtVCp5mLMD4eotv2QI/PBSUFco46thdWDRUfI5J1E2dmDRAf1jgsrPKYgW/BUFPnQ/ivGH5vyrkq9Wr5GZEQATmvJ95Tqhjn5QSultKL8bd4526Hjb3OM5LZRa/jbf74qHJYVXlVlYG4NfREtfq/UR4B0hXDXrjdqnQWuKWpRdBdU19S+VaK+OhQ5dGAxkFGRP+S3nP+XgJz/q5UP0kaJ8LtdqPq6vE9aGDGBjTgJ0EDMzagAT8JGpixAQ34SfB/bmKcH6wcoy0AAAAASUVORK5CYII=">']
    ],
'Table', {allowHtml: true});


var titlePanel2 = ui.Panel([logo2]
, 'flow', {width: '500px', position: 'bottom-left', padding: '8px'});

// Criando um painel para os gráficos
var graphPanel = ui.Panel({
widgets: [
titlePanel2,
ui.Label('Gráfico de Média Mensal do NDVI:', {fontWeight: 'bold'}),
chartMonthly,
legendPanel1,
ui.Label('Instruções de Utilização:', {fontWeight: 'bold', fontSize: '16px'}),
ui.Label('Ative a visualização em Layers - Atualize a página para uma nova consulta'),
ui.Label('Governo do Estado de Goiás - Secretaria de Estado de Meio Ambiente e Desenvolvimento Sustentável - SEMAD/GO', {fontWeight:'bold', fontSize: '12'}),
ui.Label('Gerência de Geoprocessamento e Sensoriamento Remoto - GEGEO',{fontWeight:'bold', fontSize:
'12px'}),
ui.Label('| Autor: Vicente de Paula Sousa Júnior | Analista Ambiental |',{fontSize: '12px'}),
ui.Label('FONTE: SEMAD/GO - PLANET - MAPBIOMAS',{fontSize: '10px'})],
layout: ui.Panel.Layout.flow('vertical'),
style: {width: '500px', position: 'bottom-left'}
});

// Adicionando o painel ao mapa
ui.root.add(graphPanel);
}

// Função para aplicar os filtros
function applyFilters() {

// Atualizar a lista de imagens disponíveis
updateFilters();}