import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import feather from 'vue-icon'
import 'vue-cal/dist/vuecal.css'
Vue.use(feather, 'v-icon')
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
//Vue.use(Vuecal, 'Vuecal')

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
