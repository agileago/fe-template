import { createApp } from 'vue'
import { registerGlobalService } from './service'
import 'ant-design-vue/dist/antd.css'
import styles from './app.module.css'

const app = createApp({
  setup() {
    registerGlobalService() // 注册全局单例服务
    return () => (
      <>
        <div class={[styles.a, styles.b]}>1111</div>
      </>
    )
  },
})

app.mount('#app')
