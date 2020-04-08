import Vue from 'vue'
import Vuex from 'vuex'
import cm from './modules/cm'

Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    cm
  }
})
