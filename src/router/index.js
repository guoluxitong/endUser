import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import login from '@/views/login/index'

Vue.use(Router)

export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), name: 'login', hidden: true },
    { path: '/', redirect: '/login', name: 'index', hidden: true },
    {
        path: '/', component: Layout,
        children: [{
            path: 'index',
            component: () => import('@/views/home/index'),
            name: 'home',
            meta: { title: '首页', noCache: true }
        }]
    },
    { path: '/controller-run-info', name: 'controller-run-info', component: () => import('@/components/controller-run-info'), hidden: true },
]
export default new Router({
  routes: constantRouterMap
})
/*export const router = new Router({
  routers: [
    { path: '/', redirect: '/login', name: 'index', hidden: true },
    { path: '/login', component: login, name: 'login', hidden: true },
    {
      path: '/', component: Layout,
      children: [{
        path: 'index',
        component: () => import('@/views/home/index'),
        name: 'home',
        meta: { title: '首页', noCache: true }
      }]
    },
    { path: '/controller-run-info', name: 'controller-run-info', component: () => import('@/components/controller-run-info'), hidden: true }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
})
export default router;*/
