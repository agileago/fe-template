import { createRouter, createWebHistory, type Router } from 'vue-router'
import { routes } from './routes'
import envConfig from '@/conf'

declare module 'vue-router' {
  interface RouteMeta {
    // 添加额外的meta字段
  }
}

// eslint-disable-next-line import-x/no-mutable-exports
export let router: Router

export function createMainRouter() {
  const history = createWebHistory(envConfig.BASE_ROUTE)
  router = createRouter({
    history,
    routes,
  })

  return {
    router,
    history,
  }
}
