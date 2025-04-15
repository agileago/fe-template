import './theme/app.css'
import '@abraham/reflection'
import { createApp } from 'vue'
import { setup } from '@/setup'
import { App } from '@/app'
import { createMainRouter } from '@/router'

async function createMainApp() {
  const app = createApp(App)
  const { router } = createMainRouter()
  app.use(router)
  setup(app)
  await router.isReady()
  app.mount('#app')
}

createMainApp()
