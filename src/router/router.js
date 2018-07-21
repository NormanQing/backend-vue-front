/**
 * 路由路径定义
 * @param {*} resolve
 */

const Layout = resolve => require(['pages/layouts'], resolve)
const NotFound = resolve => require(['pages/common/404'], resolve)

const Member = resolve => require(['pages/member'], resolve)

export default {
  routers: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '/member', component: Member, name: '会员管理' }
      ]
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
      redirect: { path: '/404' }
    }
  ]
}
