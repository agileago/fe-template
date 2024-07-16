import { Mut, VueComponent } from 'vue3-oop'
import RightIcon from './right.svg?component'

export default class IconView extends VueComponent {
  @Mut() count = 1

  render() {
    return (
      <div class={'bg-blue-500 text-center'}>
        <h2>我是子路由</h2>
        <div>
          <h3>我是图标</h3>
          <RightIcon class={'text-yellow-400'}></RightIcon>
        </div>
        <div>
          <button class={'bg-red-500 p-2'} onClick={() => this.count++}>
            + {this.count}
          </button>
        </div>
      </div>
    )
  }
}
