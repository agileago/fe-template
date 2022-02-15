import { Component, Mut, VueComponent } from 'vue3-oop'
import { SkipSelf } from 'injection-js'
import { RouterService } from '@/router/router.service'
import type { Home1, HomeInterface } from '@/module/home/home.service'
import { HomeService } from '@/module/home/home.service'

class Child extends VueComponent {
  count = 0

  render() {
    this.count++
    return (
      <div class="tw-h-1/4 tw-border tw-border-green-400 tw-m-8">
        子组件渲染次数: {this.count}
        子组件slot
        <div>{this.context.slots.default?.()}</div>
      </div>
    )
  }
}

@Component()
export default class HomeView extends VueComponent {
  constructor(
    @SkipSelf() private routerService: RouterService,
    private homeService: HomeService,
  ) {
    super()
  }
  @Mut() count = 1
  a: HomeInterface = {}
  b: Home1 = {}

  render() {
    return (
      <div onClick={() => this.count++}>
        <h2>当前count值： {this.count}</h2>
        <Child>我是子组件的默认slot</Child>
        <Child>
          {{
            default: () => '我是子组件的默认slot',
            $stable: false,
          }}
        </Child>
      </div>
    )
  }
}
