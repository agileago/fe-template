import '@abraham/reflection'
import { createApp } from 'vue'
import { Component, VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'
import RouterStart from '@/router'
import { HttpInterceptor } from '@/api/http.interceptor'
import { setup } from '@/setup'
import './theme/main.scss'

@Component({ providers: [RouterStart, HttpInterceptor] })
class App extends VueComponent {
  render() {
    return <RouterView />
  }
}

const app = createApp(App)
setup(app)
app.mount('#app')
