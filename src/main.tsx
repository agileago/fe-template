import { createApp } from 'vue'
import { registerGlobalService } from './service'
import 'ant-design-vue/dist/antd.css'
import 'virtual:svg-icons-register'
import SvgIcon from '@/common/components/svg-icon'
import { Button } from 'ant-design-vue'

const app = createApp({
  setup() {
    registerGlobalService() // 注册全局单例服务
    return () => (
      <>
        <Button danger type={'primary'}>
          我是按钮<SvgIcon name={'dir1-color'}></SvgIcon>
        </Button>
      </>
    )
  },
})

app.mount('#app')
