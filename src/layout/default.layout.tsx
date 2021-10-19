import { VueComponent } from '@titanmatrix/vue3-class-component'
import { RouterView } from 'vue-router'

export default class DefaultLayout extends VueComponent {
  render() {
    return (
      <div>
        <h2>我是整体布局</h2>
        <RouterView></RouterView>
      </div>
    )
  }
}
