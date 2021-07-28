import { InjectionKey, ref } from 'vue'

export class UserService {
  static TOKEN: InjectionKey<UserService> = Symbol()
  user = ref<User | null>(null)
  constructor() {}

  async getUser() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    this.user.value = {
      name: 'rjh',
    }
  }
}

export interface User {
  name: string
}
