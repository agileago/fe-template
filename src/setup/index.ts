import type { App } from 'vue'
import { setupDirective } from '@/common/directive'

// 一些初始设置
export function setup(app: App) {
  // 全局指令 tsx下指令只能是全局的
  setupDirective(app)
}
