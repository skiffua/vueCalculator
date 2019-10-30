import VueRouter from "vue-router"
import Home from './pages/Home'
import History from "./pages/History";


export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/history',
            component: History
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
    mode: 'history'
})