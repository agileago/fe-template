import { createRouter, createWebHistory, type Router } from 'vue-router'
import config from '@/config'
import { routes } from '@/router/routes'

declare module 'vue-router' {
  interface RouteMeta {
    // 添加额外的meta字段
  }
}

// eslint-disable-next-line import-x/no-mutable-exports
export let router: Router

export function createMainRouter() {
  const history = createWebHistory(config.BASE_ROUTE)
  router = createRouter({
    history,
    routes,
  })

  return {
    router,
    history,
  }
}
