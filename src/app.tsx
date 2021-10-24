import { VueComponent } from '@titanmatrix/vue3-class-component'
import { RouterView } from 'vue-router'
import { ServiceProvider } from '@/service'

export default class App extends VueComponent {
  render() {
    return (
      <ServiceProvider>
        <RouterView></RouterView>
      </ServiceProvider>
    )
  }
}
