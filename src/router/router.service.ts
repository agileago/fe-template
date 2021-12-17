import { getCurrentApp, VueService } from 'vue3-oop'
import { createRouter, createWebHistory } from '@vue3-oop/vue-router'
import { routes } from '@/router/routes'

export class RouterService extends VueService {
  constructor() {
    super()
    this.app.use(this.router)
  }
  app = getCurrentApp()!
  history = createWebHistory()
  router = createRouter({
    history: this.history,
    routes,
  })
  get currentRoute() {
    return this.router.currentRoute.value
  }
}
