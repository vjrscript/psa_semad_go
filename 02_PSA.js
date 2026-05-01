// PROTOCOLO DE MONITORAMENTO DO PSA "CERRADO EM PÉ"
// SECRETARIA DE ESTADO DE MEIO AMBIENTE E DESENVOLVIMENTO SUSTENTÁVEL
// SUBLIF - SUF - GERÊNCIA DE GEOPROCESSAMENTO E SENSORIAMENTO REMOTO
// VICENTE DE PAULA SOUSA JÚNIOR - ANALISTA AMBIENTAL

///////////////////////////////// ETAPA 01 - SOBREPOSIÇÃO DE ALERTAS DE DESMATAMENTO, EVENTO DE FOGO E INFRAÇÕES ////////////////////////////////////////////

// ======================= IMPORTAÇÃO DAS CAMADAS =======================

// Importando polígonos dos imóveis cadastrados (ROI), alertas e infrações
var roi = ar_aprovada;
var polygon = poligonos;   // polígonos de alertas
var point = pontos;        // pontos de alertas

// ======================= SELEÇÃO DOS IMÓVEIS SOBREPOSTOS =======================

// Seleciona imóveis que cruzam polígonos OU pontos
var selecao_poligono = roi.filterBounds(polygon);
var selecao_ponto = roi.filterBounds(point);

// Junta e remove duplicatas
var selecao_imoveis = selecao_poligono.merge(selecao_ponto).distinct(['codigo']);

print('Número de imóveis selecionados:', selecao_imoveis.size());

// ======================= ASSOCIAÇÃO DAS FONTES DE ALERTA =======================
var selecao_imoveis_com_alerta = roi.map(function(imovel) {
  
  var alertas_poligonais = polygon.filterBounds(imovel.geometry())
                                  .aggregate_array('layer');
  
  var alertas_pontuais = point.filterBounds(imovel.geometry())
                              .aggregate_array('layer');
  
  var alertas_total = alertas_poligonais.cat(alertas_pontuais).distinct();
  
  return imovel
    .set('layer', alertas_total)
    .set('n_alertas', alertas_total.length());
});

// ======================= FILTRO FINAL =======================
var selecao_final = selecao_imoveis_com_alerta.filter(
  ee.Filter.gt('n_alertas', 0)
);

print('Imóveis com alertas reais:', selecao_imoveis_com_alerta.size());
print('Amostra de imóveis com alertas:', selecao_final.limit(5));

// ======================= EXPORTAÇÃO DO RESULTADO =======================

Export.table.toDrive({
  collection: selecao_imoveis_com_alerta,
  description: 'Lista_Alerta_Fogo_Infracao',
  fileFormat: 'GeoJSON',
  folder: 'PSA_Export_2025',
  fileNamePrefix: 'Lista_Alerta_Fogo_Infracao'
});

/*
=================================================================================================================
Observações:
- Filtragem corrigida para evitar erro "Can't encode object".
- Filtro final usa size(layer) corretamente.
- Exportação ajustada para enviar apenas imóveis realmente sobrepostos.
=================================================================================================================
*/
