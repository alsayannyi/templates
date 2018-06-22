import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import card from './modules/card'
import products from './modules/products'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    card,
    products
  },

  state: { //=data

  },

  getters: {  // = computed properties

  },

  actions: actions,

  mutations: {

  }
})
