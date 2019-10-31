import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes';
import store from './store';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app');
