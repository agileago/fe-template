import { RouterLink, RouterView } from 'vue-router'
import { VueComponent } from 'vue3-oop'

export default class DefaultLayout extends VueComponent {
  render() {
    return (
      <>
        <div
          class={
            'tw-text-center tw-border-solid tw-border-2 tw-border-amber-200'
          }
        >
          <h2>I am layout</h2>
          <RouterLink to={'/'}>go to Home</RouterLink> <br />
          <RouterLink to={'/count'}>go to Count</RouterLink>
        </div>
        <RouterView></RouterView>
      </>
    )
  }
}
