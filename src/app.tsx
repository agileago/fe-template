import { Component, VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'
import './theme/app.scss'
import { UserService } from '@/auth/user.service'

@Component({ providers: [UserService] })
export class App extends VueComponent {
  render() {
    return <RouterView />
  }
}
