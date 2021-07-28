import { createApp } from 'vue'
import { registerGlobalService } from './service'
import 'ant-design-vue/dist/antd.css'

const app = createApp({
  setup() {
    registerGlobalService() // 注册全局单例服务
    return () => (
      <>
        <div>1111</div>
      </>
    )
  },
})

app.mount('#app')
