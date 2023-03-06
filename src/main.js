import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'

// import VueAxios from 'vue-axios'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    count: 0,
    
  },
  mutations:{
    increment(state, payload){
      console.log(payload);
      return state.count += payload.number;
    }
  },
  getters:{
    getCounterValue(state){
      if(state.count > 100){
        console.log("Hello World");
      }
      return state.count;
    },
    manipulateValue(_, getters){
      console.log(_.__ob__);
      const latestVal = getters.getCounterValue;
      if(latestVal > 100){
        return latestVal * 10;
      }
    }
  }
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')


