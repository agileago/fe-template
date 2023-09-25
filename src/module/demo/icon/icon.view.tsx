import { VueComponent } from 'vue3-oop'
import RightIcon from './right.svg?component'

export default class IconView extends VueComponent {
  render() {
    return (
      <div>
        <h1 class={'text-center text-2xl font-bold'}>
          直接引入svg文件, 通过vite-svg-loader转换成vue组件
        </h1>
        <div>
          <RightIcon></RightIcon>
          <span>111</span>
        </div>
      </div>
    )
  }
}
