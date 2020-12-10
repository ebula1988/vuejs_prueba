import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datosTodos: [],
   
   
  },
  mutations: {
    llenarDatosTodos(state, dataAccion){
      state.datosTodos= dataAccion
     
      

     
    }
   
   
  },
  actions: {
    obtenerDatosTodos : async function({commit}){
      const data = await fetch ('http://localhost:3000/passwords')
      const datajson = await data.json();
      commit('llenarDatosTodos', datajson)
      
     
    }
    
 

    
  },
  modules: {
  }
})
