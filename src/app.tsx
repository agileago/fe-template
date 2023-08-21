import { Component, VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'
import './theme/app.scss'

@Component({ providers: [] })
export class App extends VueComponent {
  render() {
    return <RouterView />
  }
}
