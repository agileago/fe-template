import { VueComponent, VueGlobalService } from '@titanmatrix/vue3-class-component'
import { UserService } from '@/service/user.service'

// 全局服务初始化容器，也可认为是全局store,通过此类可获得全局服务示例
// const userService = ServiceContainer.getService(UserService)
export class ServiceContainer extends VueGlobalService {
  userService = new UserService()
}

export class ServiceProvider extends VueComponent {
  serviceContainer = new ServiceContainer()
  render() {
    return this.context.slots.default?.()
  }
}
