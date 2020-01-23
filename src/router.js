import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Purchase from './views/PurchasePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/purchase/: instrumentName',
    name: 'purchase',
    props: true,
    component: Purchase,

  }
]

const router = new VueRouter({
  routes
})

export default router
