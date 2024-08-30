import type { RouteRecordRaw } from 'vue-router'
import type { RouteModule } from './type'

let routes: RouteRecordRaw[] = []

// 自动收集子模块的路由
const moduleRoutes = import.meta.glob('../module/**/*.router.ts', {
  eager: true,
  import: 'default',
})

for (const moduleKey of Object.keys(moduleRoutes)) {
  const childRoute = moduleRoutes[moduleKey as string] as RouteModule
  if (!childRoute) continue
  const parent = childRoute.parent
  const p = routes.find(k => k.name === parent)
  if (p) {
    if (!p.children) p.children = []
    p.children.push(...childRoute)
  } else {
    routes = routes.concat(childRoute)
  }
}

export { routes }
