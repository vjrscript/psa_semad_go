// PROTOCOLO DE MONITORAMENTO DO PSA "CERRADO EM PÉ"
// SECRETARIA DE ESTADO DE MEIO AMBIENTE E DESENVOLVIMENTO SUSTENTÁVEL
// SUBLIF - SUF - GERÊNCIA DE GEOPROCESSAMENTO E SENSORIAMENTO REMOTO
// VICENTE DE PAULA SOUSA JÚNIOR - ANALISTA AMBIENTAL

///////////////////////////////// ETAPA 01 - SOBREPOSIÇÃO DE ALERTAS DE DESMATAMENTO E INFRAÇÕES EM ÁREA REQUERIDA ////////////////////////////////////////////

/* Alertas utilizados:
- MAPBIOMAs;
- SAD CERRADO;
- DETER;
- BRASIL MAIS;
- INÃ ALERTA.

Outras camadas:
- Infrações estaduais INÃ/SGA

*/
// Importando polígonos dos imóveis cadastrados, alertas e infrações
// Os alertas e infrações acima foram modelados no QGIS para
// ter apenas 3 colunas de atributos e divididos por tipo de geometria
var roi = ar_imoveis_lote_extra;
var polygon = poligonos;
var point = pontos;

// Criando uma única geometria multiponto a partir da coleção de pontos
var point_geom = point.geometry();

// Criando uma única geometria poligonal a partir da coleção de polígonos
var polygon_geom = polygon.geometry().dissolve();

// Unindo polígonos e pontos corretamente
var alerta_geom = polygon_geom.union(point_geom);

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
var selecao_imoveis_com_alerta = selecao_imoveis.map(function(imovel) {
  // Filtrar alertas poligonais que intersectam o imóvel
  var alertas_poligonais = polygon.filter(ee.Filter.intersects({
      leftField: '.geo',  
      rightValue: imovel.geometry()
  })).aggregate_array('ALERTA'); // Obtém os valores da coluna ALERTA
  
  // Filtrar alertas pontuais que intersectam o imóvel
  var alertas_pontuais = point.filter(ee.Filter.intersects({
      leftField: '.geo',  
      rightValue: imovel.geometry()
  })).aggregate_array('ALERTA'); // Obtém os valores da coluna ALERTA

  // Unindo os alertas poligonais e pontuais em uma única lista
  var alertas_total = alertas_poligonais.cat(alertas_pontuais).distinct();
  
  // Adiciona a propriedade ALERTA ao imóvel
  return imovel.set('ALERTA', alertas_total);
});

// Exibir no console para verificação
print('Imóveis selecionados com alertas', selecao_imoveis_com_alerta.limit(5));

// Exportar os imóveis selecionados com os alertas associados
Export.table.toDrive({
  collection: selecao_imoveis_com_alerta,  
  description: 'AR_Selecionadas_com_Alertas_lote04',
  fileFormat: 'GeoJSON',  
  folder: 'PSA_Export',
  fileNamePrefix: 'AR_Selecionadas_com_Alertas_lote04'
});

/*Exportar como um assets e importar automaticamente nos scripts seguintes
PSA - Etapa 02: https://code.earthengine.google.com/0170469e0cd25b9a22998d94fe993e11
*/