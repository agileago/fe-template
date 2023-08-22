import type { RouteRecordRaw } from 'vue-router'

let routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/auth/login.view'),
  },
  {
    path: '/',
    redirect: '/demo',
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

routes = routes.concat(mainRoutes)

export { routes }
