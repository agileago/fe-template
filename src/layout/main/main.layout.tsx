import { VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'

export default class MainLayout extends VueComponent {
  render() {
    return (
      <div class={'bg-amber-300 text-center'}>
        我是上层布局
        <RouterView />
      </div>
    )
  }
}
