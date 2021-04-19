import { defineComponent, ref } from 'vue'
import { RouterView } from 'vue-router'
import ProLayout from '@ant-design-vue/pro-layout'
import { ComppRropType } from '../types'

export default defineComponent({
  name: 'Layout',
  setup() {
    const state = ref<ComppRropType<typeof ProLayout>>({
      collapsed: false,

      openKeys: ['/'],
      selectedKeys: ['/'],

      isMobile: false,
      fixSiderbar: false,
      fixedHeader: false,
      menuData: [
        {
          path: '/index',
          meta: {
            title: '主页',
          },
        },
        {
          path: '/login',
          meta: {
            title: '登录',
          },
        },
      ],
      siderWidth: 210,
      hasSiderMenu: true,
      onCollapse(collapse: boolean) {
        state.value.collapsed = collapse
      },
    })

    return () => (
      <ProLayout {...state.value}>
        <RouterView></RouterView>
      </ProLayout>
    )
  },
})
