import { createRouter, createWebHistory, Router, RouterHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { App } from 'vue'
import { ServiceContainer } from '@/service'
import { UserService } from '@/service/user.service'

let router: Router
let history: RouterHistory
// 这样写主要是为了应用可作为子应用注册到基座应用
export function create() {
  history = createWebHistory()
  router = createRouter({
    routes,
    history,
  })
  return router
}
export function destroy() {
  history.destroy()
}
export function setupRouter(router: Router, app: App<Element>) {
  app.use(router)
  router.beforeEach(async (to, from) => {
    console.log(ServiceContainer.get(UserService))
    return
  })
}
