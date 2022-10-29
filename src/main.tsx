import '@abraham/reflection'
import { createApp } from 'vue'
import { setup } from '@/setup'
import { App } from '@/app'
import '@/api/http.interceptor'

const app = createApp(App)
setup(app)
app.mount('#app')
