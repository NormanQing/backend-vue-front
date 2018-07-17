/**
 * 路由路径定义
 * @param {*} resolve
 */

const Layout = resolve => require(['../pages/layouts'], resolve)
const NotFound =  resolve => require(['../pages/common/404'], resolve)

export default {
  routers: [
    {
      path: '/',
      component: Layout
    },
    {
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
}