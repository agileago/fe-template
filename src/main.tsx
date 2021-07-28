import { createApp } from 'vue'
import { registerGlobalService } from './service'
import 'ant-design-vue/dist/antd.css'
import styles from './app.module.css'
import 'virtual:svg-icons-register'
import SvgIcon from './common/components/svg-icon'

const app = createApp({
  setup() {
    registerGlobalService() // 注册全局单例服务
    return () => (
      <>
        <div class={[styles.a, styles.b]}>1111</div>
        <SvgIcon name={'dir1-color'}></SvgIcon>
      </>
    )
  },
})

app.mount('#app')
