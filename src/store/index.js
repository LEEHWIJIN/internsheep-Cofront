import Vue from 'vue'
import Vuex from 'vuex'
import apply from './modules/apply'
// import createLogger from '../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    apply,
  },
  strict: debug,
//   plugins: debug ? [createLogger()] : []
})