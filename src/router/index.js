import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from "../views/Index";
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import PageThree from "../views/PageThree";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/pageOne',
        name: 'PageOne',
        component: PageOne
      },
      {
        path: '/pageTwo',
        name: 'PageTwo',
        component: PageTwo
      },
      {
        path: '/pageThree',
        name: 'PageThree',
        component: PageThree
      },{
        path: '/userCenter',
        name: 'UserCenter',
        component: () =>import('@/views/UserCenter.vue')
      }
    ]
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
