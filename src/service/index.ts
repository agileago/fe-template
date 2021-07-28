import { provide } from 'vue'
import { UserService } from './user.service'

export function registerGlobalService() {
  provide(UserService.TOKEN, new UserService())
}
