import { VueComponent } from 'vue3-oop'
import { RouterLink, RouterView } from 'vue-router'

export default class DemoModule extends VueComponent {
  render() {
    return (
      <>
        <div
          class={'mt-[20px] border-2 border-solid border-amber-200 text-center'}
        >
          <h2>I am layout</h2>
          <RouterLink class={'text-xl'} to={'/demo/home'}>
            go to Home
          </RouterLink>{' '}
          <br />
          <RouterLink to={'/demo/count'}>go to Count</RouterLink>
        </div>
        <RouterView></RouterView>
      </>
    )
  }
}
