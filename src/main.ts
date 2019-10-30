import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes';

Vue.use(Vuex);

import store from './store';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app');
