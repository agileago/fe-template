import { Autobind, injectService, VueComponent } from 'vue3-oop'
import { RouterLink, useRouter } from 'vue-router'
import { UserService } from '@/auth/user.service'

export default class HomeView extends VueComponent {
  router = useRouter()
  @Autobind()
  handleClick() {
    this.router.push('/demo/count')
  }

  us = injectService(UserService)

  render() {
    return (
      <div>
        我是首页 <RouterLink to={'/demo/count'}>跳转count</RouterLink>
        <p>{this.us.name}</p>
      </div>
    )
  }
}
