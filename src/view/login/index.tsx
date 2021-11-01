import { injectService, VueComponent } from '@titanmatrix/vue3-class-component'
import { UserService } from '@/service/user.service'

export default class Login extends VueComponent {
  userService = injectService(UserService)
  render() {
    return <div>login</div>
  }
}
