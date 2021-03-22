import { createApp } from 'vue'
import router from './router/router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'
import Layout from './layout/layout'
import 'vxe-table/lib/style.css'
import VXETable from 'vxe-table'

const app = createApp(Layout)

app.use(router)
app.use(Antd)
app.use(VXETable)

app.mount('#app')
