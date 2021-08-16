import { App, createApp } from 'vue'
import { registerGlobalService } from './service'
import 'ant-design-vue/dist/antd.css'
import 'virtual:svg-icons-register'
import { RouterView, RouterLink } from 'vue-router'
import * as routing from './router/router'

let app: App<Element>

export function bootstrap(container: Element) {
  const router = routing.create()
  app = createApp({
    setup() {
      registerGlobalService() // 注册全局单例服务
      return () => <RouterView></RouterView>
    },
  })
  app.use(router)
  app.mount(container)
}
export function unmount() {
  routing.destroy()
  app.unmount()
}

if (!window.__MASTER) {
  bootstrap(document.getElementById('app')!)
}
