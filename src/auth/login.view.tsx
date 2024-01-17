import { VueComponent } from 'vue3-oop'
import { NButton } from 'naive-ui'
import { RouterLink } from 'vue-router'

export default class LoginView extends VueComponent {
  render() {
    return (
      <div class={'flex h-screen items-center justify-center'}>
        <RouterLink to={'/'} class={'w-1/2'}>
          <NButton size={'large'} block type={'success'}>
            登录
          </NButton>
          <div class={''}></div>
        </RouterLink>
      </div>
    )
  }
}
