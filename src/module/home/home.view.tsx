import { Component, Mut, VueComponent } from 'vue3-oop'
import { SkipSelf } from 'injection-js'
import { RouterService } from '@/router/router.service'

class Child extends VueComponent {
  count = 0
  render() {
    this.count++
    return (
      <div
        style={{
          height: '100px',
          border: '1px solid green',
          margin: '20px 40px',
        }}
      >
        子组件渲染次数: {this.count}
        子组件slot
        <div>{this.context.slots.default?.()}</div>
      </div>
    )
  }
}

@Component()
export default class HomeView extends VueComponent {
  constructor(@SkipSelf() private routerService: RouterService) {
    super()
  }
  @Mut() count = 1
  render() {
    return (
      <div onClick={() => this.count++}>
        <h2>当前count值： {this.count}</h2>
        <Child>
          {{
            default: () => '我是子组件的默认slot',
          }}
        </Child>
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
