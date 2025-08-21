import { createStore } from 'vuex'

export const key = Symbol()

export default createStore({
  state: {
    servidores: [
  { id: 1, nome: 'Jaqueline', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Jaqueline.jpg' },
  { id: 2, nome: 'Giovanna', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Giovanna.jpg' },
  { id: 3, nome: 'Erick', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Erick.jpg' },
  { id: 4, nome: 'Lucas', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Lucas.jpg' },
  { id: 5, nome: 'Eduardo', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Eduardo.jpg' },
  { id: 6, nome: 'Sofia', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Sofia.jpg' },
  { id: 7, nome: 'Potira', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Potira.jpg' },
  { id: 8, nome: 'Pedro', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Pedro.jpg' },
  { id: 9, nome: 'Cauê', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Cauê.jpg' },
  { id: 10, nome: 'Tassia', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Tassia.jpg' },
  { id: 11, nome: 'Zé', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Zé.jpg' },
  { id: 12, nome: 'José', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/José.jpg' },
  { id: 13, nome: 'Sonia', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Sonia.jpg' },
  { id: 14, nome: 'Telma', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Telma.jpg' },
  { id: 15, nome: 'Sandra', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Sandra.jpg' },
  { id: 16, nome: 'Rodrigo', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Rodrigo.jpg' },
  { id: 17, nome: 'Dina', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Dina.jpg' },
  { id: 18, nome: 'Ricardo', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Ricardo.jpg' },
  { id: 19, nome: 'Patricia', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Patricia.jpg' },
  { id: 20, nome: 'Daniela', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Daniela.jpg' },
  { id: 21, nome: 'Elaine', cargo: 'Desenvolvedor', email: 't.i@camaradeembuguaçu.sp.gov.br', img: '/Elaine.jpg' }
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