import { VueComponent } from 'vue3-oop'
import { RouterLink, RouterView } from '@vue3-oop/vue-router'
import { Button } from 'ant-design-vue'

export default class DefaultLayout extends VueComponent {
  render() {
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h2>I am layout</h2>
          <RouterLink to={'/'}>
            <Button danger type={'primary'}>
              go to Home
            </Button>
          </RouterLink>
          <RouterLink to={'/count'}>
            <Button type={'primary'}>go to Count</Button>
          </RouterLink>
        </div>
        <RouterView></RouterView>
      </>
    )
  }
}
