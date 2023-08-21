import { createRouter, createWebHistory } from 'vue-router'
import config from '@/config'
import { routes } from '@/router/routes'

export function createMainRouter() {
  const history = createWebHistory(config.BASE_ROUTE)
  return createRouter({
    history,
    routes,
  })
}
