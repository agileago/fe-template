import { createRouter, createWebHistory, Router, RouterHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { App } from 'vue'
import { ServiceContainer } from '@/service'
import { UserService } from '@/service/user.service'
import { message } from 'ant-design-vue'

let router: Router
let history: RouterHistory
// 这样写主要是为了应用可作为子应用注册到基座应用
export function create() {
  const base = import.meta.env.BASE_URL
  history = createWebHistory(/^https?:/.test(base) ? undefined : base)
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
    const userService = ServiceContainer.get(UserService)
    if (userService.user) return
    const closeMessage = message.loading('正在获取用户信息...')
    await userService.getUser()
    closeMessage()
    return
  })
}
