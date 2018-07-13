import Vue from 'vue'
import Router from 'vue-router'

const Layout = resolve => require(['../pages/layouts'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout
    }
  ]
})
