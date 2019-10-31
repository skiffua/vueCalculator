import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VModal from 'vue-js-modal';
import router from './routes'
import store from './store'

Vue.use(VueRouter)
Vue.use(VModal, {



})
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
