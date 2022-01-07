import '@abraham/reflection'
import { createApp } from 'vue'
import { Component, VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'
import RouterStart from '@/router'

@Component({ providers: [RouterStart] })
class App extends VueComponent {
  render() {
    return <RouterView />
  }
}

const app = createApp(App)
app.mount('#app')
