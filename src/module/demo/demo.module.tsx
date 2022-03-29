import { VueComponent } from 'vue3-oop'
import { RouterLink, RouterView } from 'vue-router'

export default class DemoModule extends VueComponent {
  render() {
    return (
      <>
        <div
          class={
            'tw-text-center tw-border-solid tw-border-2 tw-border-amber-200'
          }
        >
          <h2>I am layout</h2>
          <RouterLink to={'/demo/home'}>go to Home</RouterLink> <br />
          <RouterLink to={'/demo/count'}>go to Count</RouterLink>
        </div>
        <RouterView></RouterView>
      </>
    )
  }
}
