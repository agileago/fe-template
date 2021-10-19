import { VueComponent } from '@titanmatrix/vue3-class-component'
import { UserService } from '@/service/user.service'

// 全局服务初始化容器
export default class GlobalServiceProvider extends VueComponent {
  userService = new UserService()
  render() {
    return this.context.slots.default?.()
  }
}
