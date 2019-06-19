// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.axios = axios
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(Vuex)
var store=new Vuex.Store({
   state:{
     toast:{
       zi:false,
       zi2:''
     },
   
},
 
    
  
   mutations:{}
})




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
