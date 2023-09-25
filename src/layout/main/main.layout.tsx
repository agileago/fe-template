import { VueComponent } from 'vue3-oop'
import {
  type MenuOption,
  NButton,
  NConfigProvider,
  NDivider,
  NMenu,
} from 'naive-ui'
import { RouterLink, RouterView } from 'vue-router'

const menuOptions: MenuOption[] = [
  {
    label: () => <RouterLink to={'/demo/icon'}>图标</RouterLink>,
    key: 'icon',
    icon: () => <span class={'i-ant-design-account-book-fill'}></span>,
  },
]

export default class MainLayout extends VueComponent {
  render() {
    return (
      <NConfigProvider inlineThemeDisabled>
        <div>
          <div class={'float-right flex h-[42px] items-center pr-4'}>
            <RouterLink to={'/login'}>
              <NButton type={'primary'} size={'small'}>
                登录
              </NButton>
            </RouterLink>
          </div>
          <div class={'text-center'}>
            <NMenu options={menuOptions} mode={'horizontal'}></NMenu>
            <NDivider style={'margin: 0'}></NDivider>
          </div>
          <RouterView />
        </div>
      </NConfigProvider>
    )
  }
}
