import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
		component: HomePage,
		meta: {
			title: 'Главная'
		}
  },
  {
    path: '/expected',
    name: 'ExpectedPage',
		component: () => import(/* webpackChunkName: "about" */ '../pages/ExpectedPage.vue'),
		meta: {
			title: 'Хочу посмотреть'
		}
  },
  {
    path: '/viewed',
    name: 'ViewedPage',
		component: () => import(/* webpackChunkName: "about" */ '../pages/ViewedPage.vue'),
		meta: {
			title: 'Уже посмотрел'
		}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
