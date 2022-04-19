import type { App } from 'vue'
import { setupDirective } from '@/common/directive'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

// 一些初始设置
export function setup(app: App) {
  // 全局指令 tsx下指令只能是全局的
  setupDirective(app)
  app.use(ElementPlus)
}
