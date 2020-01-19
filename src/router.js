import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/purchase',
    name: 'purchase',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ './views/PurchasePage.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
