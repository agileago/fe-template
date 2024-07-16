import { VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'
import './theme/app.scss'

export class App extends VueComponent {
  render() {
    return <RouterView />
  }
}
