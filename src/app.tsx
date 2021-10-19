import { VueComponent } from '@titanmatrix/vue3-class-component'
import { RouterView } from 'vue-router'
import GlobalServiceProvider from '@/service'

export default class App extends VueComponent {
  render() {
    return (
      <GlobalServiceProvider>
        <RouterView></RouterView>
      </GlobalServiceProvider>
    )
  }
}
