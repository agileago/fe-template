import { Mut, VueComponent, defineComponent } from 'vue3-oop'
import RightIcon from './right.svg?component'

interface IconSimpleProps {
  count: number
  abc?: number
}

export const IconSimple = defineComponent(
  function IconSimple(props: IconSimpleProps) {
    return () => (
      <div>
        icon simple1111 {props.count} <p>abc: {props.abc}</p>
      </div>
    )
  },
  {
    props: {
      abc: {
        type: Number,
        default: 1,
      },
    },
  },
)

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
        <IconSimple count={this.count}></IconSimple>
      </div>
    )
  }
}
