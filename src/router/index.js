import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: routers.routers
})

export default router
