import Vue from 'vue'
import Vuex from 'vuex'
import resume from './modules/resume'
// import createLogger from '../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    resume,
  },
  strict: debug,
//   plugins: debug ? [createLogger()] : []
})