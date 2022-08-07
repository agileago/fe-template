import type { RouteRecordRaw } from 'vue-router'

let routes: RouteRecordRaw[] = [
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
Object.keys(moduleRoutes)
  .map(k => moduleRoutes[k as string] as RouteRecordRaw | RouteRecordRaw[])
  .filter(Boolean)
  .forEach(k => (routes = routes.concat(k)))

export { routes }
