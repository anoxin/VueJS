import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import images from './images'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLoading: true
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value
    }
  },
  actions: {
    setIsLoading({
      commit
    }, value) {
      commit("setIsLoading", value)
    }
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading
    }
  },
  modules: {
    links,
    images
  }
})

export default store