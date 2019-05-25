import Vue from 'vue'
import Router from 'vue-router'
import Products from './pages/Products.vue'

Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    {
      path: '/products',
      name: 'Products',
      component: Products
    }
  ]
})