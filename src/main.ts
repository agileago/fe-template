import '@abraham/reflection'
import { createApp } from 'vue'
import { setup } from '@/setup'
import { App } from '@/app'
import { createMainRouter } from '@/router'

export function createMainApp() {
  const app = createApp(App)
  const { router } = createMainRouter()
  app.use(router)
  setup(app)
  return {
    app,
    router,
  }
}

const { app } = createMainApp()

app.mount('#app')
