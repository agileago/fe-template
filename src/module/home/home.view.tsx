import { Component, VueComponent } from 'vue3-oop'
import { SkipSelf } from 'injection-js'
import { RouterService } from '@/router/router.service'

@Component()
export default class HomeView extends VueComponent {
  constructor(@SkipSelf() private routerService: RouterService) {
    super()
    console.log(routerService)
  }
  render() {
    return <h1 style={{ textAlign: 'center' }}>222</h1>
  }
}
