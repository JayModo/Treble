import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
Vue.use(Vuex)
let api = Axios.create({
  baseURL: '//localhost:3000/api/',
  timeout: 3000
})

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
    getInstruments({ commit, dispatch }) {
      api.get('')
        .then(res => {
          commit('setInstruments', res.data)
        })
    },
    addInstrument({ dispatch, commit }, instrument) {
      api.put(instrument._id, { quantity: instrument.price -= 1 })
        .then(res => {
          dispatch('getInstruments')
          router.push({ name: 'purchase' })
        })
      commit('addInstrument', instrument)
    },
    buy({ dispatch, commit }, instrument) {
      api.put(instrument._id, { quantity: instrument.price -= 1 })
        .then(res => {
          dispatch('getInstruments')
          router.push({ name: 'purchase', params: { instrumentName: instrument.brand } })
        })
      commit('buy', instrument)
    }
  }
})
