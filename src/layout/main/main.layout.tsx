import { VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'

export default class MainLayout extends VueComponent {
  render() {
    return (
      <div>
        菜单
        <RouterView />
      </div>
    )
  }
}
