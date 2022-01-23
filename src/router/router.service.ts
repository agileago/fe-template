import { getCurrentApp, Hook, VueService } from 'vue3-oop'
import type { Router, RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

export class RouterService extends VueService {
  history = createWebHistory()
  router!: Router
  get currentRoute() {
    return this.router.currentRoute.value
  }
  app = getCurrentApp()!
  // 为了解决热更新循环引用,采用函数传参初始化
  initRoutes(routes: RouteRecordRaw[]) {
    this.router = createRouter({
      history: this.history,
      routes,
    })
    this.app.use(this.router)
  }

  @Hook('BeforeUnmount')
  unmount() {
    this.history.destroy()
  }
}
