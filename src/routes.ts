import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import History from './pages/History.vue';


export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home,
    },
    {
      path: '/history',
      component: History,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  mode: 'history',
});
