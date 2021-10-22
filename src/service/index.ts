import { VueComponent } from '@titanmatrix/vue3-class-component'
import { UserService } from '@/service/user.service'
import { ComponentInternalInstance, getCurrentInstance, InjectionKey } from 'vue'

// 全局服务初始化容器，也可认为是全局store,通过此类可获得全局服务示例
// const userService = GlobalServiceProvider.getService(UserService.ProviderKey)
export default class GlobalServiceProvider extends VueComponent {
  static __serviceContainer: ComponentInternalInstance | null = null
  static __globalService: GlobalServiceProvider | null = null
  static getService<T = any>(token: string | symbol | InjectionKey<T>): T | null {
    if (!token || !GlobalServiceProvider.__serviceContainer) return null
    const instance = GlobalServiceProvider.__serviceContainer
    // @ts-ignore
    return instance.provides[token] as T
  }
  static getGlobalService() {
    return GlobalServiceProvider.__globalService
  }
  constructor() {
    super()
    // 全局服务的容器
    GlobalServiceProvider.__serviceContainer = getCurrentInstance()
    GlobalServiceProvider.__globalService = this
  }

  userService = new UserService()
  render() {
    return this.context.slots.default?.()
  }
}
