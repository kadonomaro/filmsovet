import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/want',
    name: 'WantPage',
    component: () => import(/* webpackChunkName: "about" */ '../pages/WantPage.vue')
  },
  {
    path: '/already',
    name: 'AlreadyPage',
    component: () => import(/* webpackChunkName: "about" */ '../pages/AlreadyPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
