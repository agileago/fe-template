import { InjectionKey } from 'vue'
import { Ref, VueService } from '@titanmatrix/vue3-class-component'

export class UserService extends VueService {
  static ProviderKey: InjectionKey<UserService> = Symbol('UserService')
  @Ref() user?: User

  async getUser() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    this.user = {
      name: 'rjh',
    }
  }
}

export interface User {
  name: string
}
