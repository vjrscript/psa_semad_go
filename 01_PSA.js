// PROTOCOLO DE MONITORAMENTO DO PSA "CERRADO EM PÉ"
// SECRETARIA DE ESTADO DE MEIO AMBIENTE E DESENVOLVIMENTO SUSTENTÁVEL
// SUBLIF - SUF - GERÊNCIA DE GEOPROCESSAMENTO E SENSORIAMENTO REMOTO
// VICENTE DE PAULA SOUSA JÚNIOR - ANALISTA AMBIENTAL

///////////////////////////////// ETAPA 00 - SOBREPOSIÇÃO DE APP, RL E RPPN ////////////////////////////////////////////

/* Alertas utilizados:
- APP E RL baixadas da consulta pública do CAR e tratadas no QGIS
- RPPN federais e estaduias baixadas SIGA-GO e tradadas no QGIS

Outras camadas:
- Área Requerida baixada do sistema de inscrições

*/

// Importando polígonos das áreas requeridas, Área de Preservação Permanente
// e Reserva Legal, os dois últimos tratados no QGIS para upload no GEE
// criando uma coluna com o cod_tema para diferenciar a sobreposição
var roi = area_requerida;
var polygon = poligonos;

// Criando uma única geometria poligonal a partir da coleção de polígonos
var polygon_geom = polygon.geometry().dissolve();

// Unindo polígonos e pontos corretamente
var alerta_geom = polygon_geom;

// Selecionando imóveis de roi que INTERSECTAM as geometrias unidas
var selecao_imoveis = roi.filter(ee.Filter.intersects({
  leftField: '.geo', 
  rightValue: alerta_geom
}));

print('Número de imóveis selecionados', selecao_imoveis.size());

// Criando uma lista com os valores da propriedade "recibo" dos imóveis selecionados
var cod_car = selecao_imoveis.aggregate_array('cod_imovel');
print('Códigos do CAR dos imóveis sobrepostos:', cod_car);

/// Adicionando a coluna "ALERTA" nos imóveis selecionados
var selecao_imoveis_com_sobreposicao = selecao_imoveis.map(function(imovel) {
  // Filtrar alertas poligonais que intersectam o imóvel
  var alertas_poligonais = polygon.filter(ee.Filter.intersects({
      leftField: '.geo',  
      rightValue: imovel.geometry()
  })).aggregate_array('cod_tema'); // Obtém os valores da coluna ALERTA

// Unindo os alertas poligonais e pontuais em uma única lista
  var alertas_total = alertas_poligonais;
  
  // Adiciona a propriedade ALERTA ao imóvel
  return imovel.set('ALERTA', alertas_total);
});

// Exibir no console para verificação
print('Imóveis selecionados com sobreposição', selecao_imoveis_com_sobreposicao.limit(5));

// Exportar os imóveis selecionados com os alertas associados
Export.table.toDrive({
  collection: selecao_imoveis_com_sobreposicao,  
  description: 'Imoveis_Selecionados_com_Sobreposição',
  fileFormat: 'GeoJSON',  
  folder: 'PSA_Export',
  fileNamePrefix: 'imoveis_com_alertas'
});

/*Próximas etapas são para a área do imóvel e não apenas a área requerida
PSA - Etapa 01: https://code.earthengine.google.com/0170469e0cd25b9a22998d94fe993e11
*/