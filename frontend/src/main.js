import Vue from 'vue'
import App from './App.vue'

import store from './config/store'
import router from './config/router';

import 'font-awesome/css/font-awesome.css';
import './config/bootstrap';
import './config/msgs';
import './config/axios';

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
