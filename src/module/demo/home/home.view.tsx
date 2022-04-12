import { Autobind, Component, VueComponent } from 'vue3-oop'
import { SkipSelf } from 'injection-js'
import { RouterService } from '@/router/router.service'

@Component()
export default class HomeView extends VueComponent {
  constructor(@SkipSelf() private routerService: RouterService) {
    super()
  }

  @Autobind()
  handleClick() {
    this.routerService.router.push('/demo/count')
  }

  render() {
    return <button onClick={this.handleClick}>跳转到count页面</button>
  }
}
