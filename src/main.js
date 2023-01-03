import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import api from '../src/common/api'
window.require = (api);
// import VueAxios from 'vue-axios'

new Vue({
  vuetify,
  router,
  api,
  render: h => h(App)
}).$mount('#app')


