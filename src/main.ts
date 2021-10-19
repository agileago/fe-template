import 'reflect-metadata'
import { App, createApp } from 'vue'
import 'ant-design-vue/dist/antd.css'
import 'virtual:svg-icons-register'
import * as routing from './router'
import AppStarter from './app'

let app: App<Element>

export function mount(container: Element) {
  const router = routing.create()
  app = createApp(AppStarter)
  routing.setupRouter(router, app)
  app.mount(container)
}
export function unmount() {
  routing.destroy()
  app.unmount()
}

mount(document.getElementById('app')!)
