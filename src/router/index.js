import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import sellers from '../components/sellers/sellers'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: sellers
    }
  ]
})
