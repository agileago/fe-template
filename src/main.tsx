import { App, createApp } from 'vue'
import { registerGlobalService } from './service'
import 'ant-design-vue/dist/antd.css'
import 'virtual:svg-icons-register'
import { RouterView } from 'vue-router'
import router from '@/router/router'

let app: App<Element>

export async function bootstrap() {
  app = createApp({
    setup() {
      registerGlobalService() // 注册全局单例服务
      return () => <RouterView></RouterView>
    },
  })
  app.use(router)
}
export function mount(container: Element) {
  app.mount(container)
}
export function unmount() {
  app.unmount()
}

if (!window.MASTER) {
  bootstrap().then(() => mount(document.getElementById('app')!))
}
