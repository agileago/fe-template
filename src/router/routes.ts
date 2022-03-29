import type { RouteRecordRaw } from 'vue-router'
import { RouterView } from 'vue-router'

let routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: RouterView,
    redirect: '/demo',
  },
]

// 自动收集子模块的路由
const moduleRoutes = import.meta.globEager('../module/**/*.router.ts')
Reflect.ownKeys(moduleRoutes)
  .map(
    k => moduleRoutes[k as string].default as RouteRecordRaw | RouteRecordRaw[],
  )
  .filter(Boolean)
  .forEach(k => (routes = routes.concat(k)))

export { routes }
