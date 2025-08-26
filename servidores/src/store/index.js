import { createStore } from 'vuex'

export const key = Symbol()

export default createStore({
  state: {
    servidores: [
  { id: 1, nome: 'AGNALDO PEREIRA', cargo: 'Chefe de Div de Contabil Financas e Orcamentos', img: 'cMeG_page-0001.jpg' },
  // { id: 2, nome: '', cargo: '', img: 'cMeG_page-0002.jpg' },
  { id: 3, nome: 'SONIA APARECIDA', cargo: 'Agente de Serviços Administrativo', img: 'cMeG_page-0003.jpg' },
  { id: 4, nome: 'RAPHAEL CARVALHO', cargo: 'Agente de Serviços Parlamentar', img: 'cMeG_page-0004.jpg' },
  { id: 5, nome: 'ALINE DA SILVA RIBAS', cargo: 'Chefe de Divisão de Gestão de Pessoas', img: 'cMeG_page-0005.jpg' },
  { id: 6, nome: 'PATRICIA OLIVEIRA', cargo: 'Chefe de Divisão de Licitação, Compras e Contratos', img: 'cMeG_page-0006.jpg' },
  { id: 7, nome: 'LUIZ FERNANDO', cargo: 'Secretário Legislativo', img: 'cMeG_page-0007.jpg' },
  { id: 8, nome: 'JOSÉ ROBERTO GARCIA', cargo: 'Supervisor de Serviços Parlamentares', img: 'cMeG_page-0008.jpg' },
  { id: 9, nome: 'LUCAS MYLLER', cargo: 'Agente de Serviços Parlamentar', img: 'cMeG_page-0009.jpg' },
  { id: 10, nome: 'POTIRA ALBINATI', cargo: 'Agente de Serviços Parlamentar', img: 'cMeG_page-0010.jpg' },
  { id: 11, nome: 'YOLANDA MITIKO', cargo: 'Fiscal de Contrato', img: 'cMeG_page-0011.jpg' },
  { id: 12, nome: 'ROBSON CASSIANO', cargo: 'Agente de Serviços Parlamentar', img: 'cMeG_page-0012.jpg' },
  { id: 13, nome: 'TÁSSIA ALVES LUZ', cargo: 'Chefe de Divisão de Serviços Adm. e Almoxarifado', img: 'cMeG_page-0013.jpg' },
  { id: 14, nome: 'JAQUELINE KOENIGKAN', cargo: 'Ouvidor', img: 'cMeG_page-0014.jpg' },
  { id: 15, nome: 'GIOVANNA CECILIA', cargo: 'Fiscal de Contrato', img: 'cMeG_page-0015.jpg' },
  { id: 16, nome: 'JESSICA VIEIRA', cargo: 'Agente de Contratação', img: 'cMeG_page-0016.jpg' },
  { id: 17, nome: 'DINA ARAUJO DE MELO', cargo: 'Secretário Administrativo', img: 'cMeG_page-0017.jpg' },
  { id: 18, nome: 'CAMILA ROBERTA', cargo: 'Agente de Serviços Técnicos Legislativo', img: 'cMeG_page-0018.jpg' },
  { id: 19, nome: 'ELAINE DE SOUZA', cargo: 'Agente de Serviços Parlamentar', img: 'cMeG_page-0019.jpg' },
  { id: 20, nome: 'LUZIA DE ALBUQUERQUE', cargo: 'Agente de Serviços Parlamentar', img: 'cMeG_page-0020.jpg' },
  { id: 21, nome: 'LUCAS BERTAN', cargo: 'Procurador Jurídico do Legislativo', img: 'cMeG_page-0021.jpg' },
  { id: 22, nome: 'WELLINGTON PRATES', cargo: 'Controlador Interno', img: 'cMeG_page-0022.jpg' },
  { id: 23, nome: 'SANDRA REGINA', cargo: 'Analista Legislativo', img: 'cMeG_page-0023.jpg' },
  { id: 24, nome: 'RENATO DA SILVA', cargo: 'Agente de Serviços Parlamentar', img: 'cMeG_page-0024.jpg' },
  { id: 25, nome: 'ERICK HONORIO', cargo: 'Analista de Tecnologia da Informação', img: 'cMeG_page-0025.jpg' },
  { id: 26, nome: 'FERNANDO ANDRADE', cargo: 'Agente de Serviços Parlamentar', img: 'cMeG_page-0026.jpg' },
  { id: 27, nome: 'ANTÔNIO WALDIR', cargo: 'Agente Administrativo Geral', img: 'cMeG_page-0027.jpg' },
  { id: 28, nome: 'RICARDO OLIVEIRA TORRES', cargo: 'Agente Administrativo Geral', img: 'cMeG_page-0028.jpg' },
  { id: 29, nome: 'ALEX LIRA', cargo: 'Chefe de Gabinete do Vereador', img: 'cMeG_page-0029.jpg' },
  { id: 30, nome: 'FABIO VELOSO', cargo: 'Chefe de Gabinete do Vereador', img: 'cMeG_page-0030.jpg' },
  { id: 31, nome: 'Felipe Ribeiro', cargo: 'Chefe de Gabinete do Vereador', img: 'cMeG_page-0031.jpg' },
  { id: 32, nome: 'GIOVANNE SILVA', cargo: 'Chefe de Gabinete da Presidência', img: 'cMeG_page-0032.jpg' },
  { id: 33, nome: 'Jefferson da Silva', cargo: 'Chefe de Gabinete do Vereador', img: 'cMeG_page-0033.jpg' },
  { id: 34, nome: 'KEIZE BIANCA', cargo: 'Chefe de Gabinete do Vereador', img: 'cMeG_page-0034.jpg' },
  { id: 35, nome: 'KENDEN KARLA', cargo: 'Chefe de Gabinete do Vereador', img: 'cMeG_page-0035.jpg' },
  { id: 36, nome: 'NÁDIA SCHUNCK', cargo: 'Chefe de Gabinete do Vereador', img: 'cMeG_page-0036.jpg' },
  { id: 37, nome: 'Telma Orizio', cargo: 'Chefe de Gabinete do Vereador', img: 'cMeG_page-0037.jpg' },
  { id: 38, nome: 'JEAN FELIPE', cargo: 'Chefe de Gabinete do Vereador', img: 'cMeG_page-0038.jpg' },
  { id: 39, nome: 'RODRIGO VINICIUS', cargo: 'Procurador Geral do Legislativo', img: 'cMeG_page-0039.jpg' },
  { id: 40, nome: 'Felipe Nunes', cargo: 'Chefe de Gabinete do Vereador', img: 'cMeG_page-0040.jpg' },
  { id: 41, nome: 'MIRO ANDRADE', cargo: 'Assessor de Rel. Comun. e de Articulações Políticas', img: 'cMeG_page-0041.jpg' },
  { id: 42, nome: 'Camille Victória', cargo: 'Assessor de Rel. Comun. e de Articulações Políticas', img: 'cMeG_page-0042.jpg' },
  { id: 43, nome: 'Ygor Novaes', cargo: 'Assessor de Rel. Comun. e de Articulações Políticas', img: 'cMeG_page-0043.jpg' },
  { id: 44, nome: 'Caroline Amorim', cargo: 'Assessor de Rel. Comun. e de Articulações Políticas', img: 'cMeG_page-0044.jpg' },
  { id: 45, nome: 'Renan Nain', cargo: 'Assessor de Rel. Comun. e de Articulações Políticas', img: 'cMeG_page-0045.jpg' },
  { id: 46, nome: 'Samuel Santos Silva', cargo: 'Assessor de Rel. Comun. e de Articulações Políticas', img: 'cMeG_page-0046.jpg' },
  { id: 47, nome: 'Márcio Milberg', cargo: 'Assessor de Rel. Comun. e de Articulações Políticas', img: 'cMeG_page-0047.jpg' },
  { id: 48, nome: 'BELARMINO JAKSON', cargo: '', img: 'cMeG_page-0048.jpg' },
  { id: 49, nome: 'GUILIANA BAPTISTA', cargo: 'Agente Administrativo Geral', img: 'cMeG_page-0049.jpg' },
  { id: 50, nome: 'LUAN RODRIGUES', cargo: 'Agente Administrativo Geral', img: 'cMeG_page-0050.jpg' },
  { id: 51, nome: 'DANIELA APARECIDA', cargo: 'Secretário de Suprimento', img: 'cMeG_page-0051.jpg' },
  { id: 52, nome: 'JOSÉ VITOR', cargo: 'Estagiário', img: 'cMeG_page-0052.jpg' },
  { id: 53, nome: 'PEDRO ANTÔNIO', cargo: 'Estagiário', img: 'cMeG_page-0053.jpg' },
  { id: 54, nome: 'BEATRIZ RODRIGUES', cargo: 'Estagiário', img: 'cMeG_page-0054.jpg' },
  { id: 55, nome: 'SOPHIA ROSCHEL', cargo: 'Estagiário', img: 'cMeG_page-0055.jpg' },
  { id: 56, nome: 'CAUÊ AMÂNCIO', cargo: 'Estagiário', img: 'cMeG_page-0056.jpg' },
  { id: 57, nome: 'MATEUS CAMARGO', cargo: 'Estagiário', img: 'cMeG_page-0057.jpg' },
  { id: 58, nome: 'EDUARDO WEISHAUPT', cargo: 'Estagiário', img: 'cMeG_page-0058.jpg' },
  { id: 59, nome: 'BEATRIZ MACEDO', cargo: 'Estagiário', img: 'cMeG_page-0059.jpg' }
]

  },
  mutations: {
    // exemplo:
    adicionarServidor(state, novoServidor) {
      state.servidores.push(novoServidor)
    }
  },
  actions: {
    // exemplo:
    adicionarServidorAsync({ commit }, novoServidor) {
      setTimeout(() => {
        commit('adicionarServidor', novoServidor)
      }, 500)
    }
  },
  getters: {
    totalServidores(state) {
      return state.servidores.length
    }
  }
})