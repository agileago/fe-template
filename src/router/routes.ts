import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/default.layout'),
    redirect: '/demo',
    children: [],
  },
  {
    path: '/login',
    component: () => import('@/auth/login.view'),
  },
]

// 自动收集子模块的路由
const moduleRoutes = import.meta.glob('../module/**/*.router.ts', {
  eager: true,
  import: 'default',
})
let mainRoutes: RouteRecordRaw[] = []
Object.keys(moduleRoutes)
  .map(k => moduleRoutes[k as string] as RouteRecordRaw | RouteRecordRaw[])
  .filter(Boolean)
  .forEach(k => (mainRoutes = mainRoutes.concat(k)))

routes[0].children = mainRoutes

export { routes }
