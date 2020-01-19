import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    instruments: [{
      _id: 1,
      instruBrand: 'gibson',
      instruPrice: 599.99,
      instruImg: 'https://static.gibson.com/product-images/Custom/CUSFXC951/Cherry%20Teaburst/front-300_600.png'
    }, {
      _id: 2,
      instruBrand: 'gibson',
      instruPrice: 599.99,
      instruImg: 'https://static.gibson.com/product-images/Custom/CUSFXC951/Cherry%20Teaburst/front-300_600.png'
    }]
  },
  mutations: {
    addInstrument(state, instrument) {
      state.instruments.push(instrument)
    },
    buy(state, instrumentId) {
      let instrument = state.instruments.find(i => i._id == instrumentId)
      instrument.instruPrice--
    }
  },
  actions: {
    addInstrument({ dispatch, commit }, instrument) {
      commit('addInstrument', instrument)
    },
    buy({ dispatch, commit }, instrumentId) {
      commit('buy', instrumentId)
    },
  },
  modules: {
  }
})
