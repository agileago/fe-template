import { createApp } from 'vue'
import router from './router/router'
import Layout from './layout/layout'
import { VXETable, Header, Column, Table } from 'vxe-table'
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
import { toFormatString, get } from 'xe-utils'

const app = createApp(Layout)

VXETable.setup({
  i18n: (key, args) => toFormatString(get(zhCN, key), args),
})
app.use(Header)
app.use(Column)
app.use(Table)

app.use(router)

app.mount('#app')
