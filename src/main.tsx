import { createApp } from 'vue'
import { registerGlobalService } from './service'
import 'ant-design-vue/dist/antd.css'
import { postAuditCreate } from './api/define'

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

postAuditCreate({ body: { where: '数据定义', content: 'aa', contentUrl: 'aaa', seriesId: 1 } })

app.mount('#app')
