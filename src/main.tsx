import { createApp, defineComponent } from 'vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'

const App = defineComponent(() => () => <router-view></router-view>)
const app = createApp(App)

app.use(router)
app.use(Antd)

app.mount('#app')
