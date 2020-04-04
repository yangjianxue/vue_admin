import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('../views/Login')
const About = () => import('../views/About')
const LearnVuex = () => import('../views/LearnVuex')
const LearnAxios = () => import('../views/LearnAxios.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'Login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/learnvuex',
    name:'LearnVuex',
    component:LearnVuex
  },{
    path:'/learnaxios',
    name:'LearnAxios',
    component:LearnAxios
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
