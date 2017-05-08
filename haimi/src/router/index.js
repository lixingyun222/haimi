import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/page/index'
import classify from '@/components/page/classify'
import shoppingCart from '@/components/page/shoppingCart'
import mine from '@/components/page/mine'
import details from '@/components/page/details'
import detailstwo from '@/components/page/index/detailstwo'

Vue.use(Router) 




export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
     {
      path: '/detailstwo',
      name: 'detailstwo',
      component: detailstwo
    }
  ]
})
