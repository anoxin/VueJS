import Vue from 'vue'
import Vuex from 'vuex'

import links from './links'
import images from './images'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links,
    images
  }
})

export default store