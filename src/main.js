import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import feather from 'vue-icon'
import store from './store';
import 'vue-cal/dist/vuecal.css'
import VueI18n from 'vue-i18n' //needed for calendar locale
Vue.use(feather, 'v-icon')
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(VueI18n);
import {messages} from 'vue-bootstrap4-calendar'; // you can include your own translation here if you want!
import vueCalendar from "vue2-simple-calendar";
import "./assets/vue2-simple-calendar.css";
 
Vue.use(vueCalendar, {
  // configuration goes here.
});
Vue.config.productionTip = false;

window.i18n = new VueI18n({
    locale: 'en',
    messages
});
//Vue.use(Vuecal, 'Vuecal')

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  axios,
  i18n,
  render: h => h(App)
}).$mount('#app')
