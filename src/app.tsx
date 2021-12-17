import { Component, VueComponent } from 'vue3-oop'
import { RouterView } from '@vue3-oop/vue-router'
import { RouterService } from '@/router/router.service'
import { CountSercice } from '@/module/count/count.sercice'

@Component({ providers: [RouterService, CountSercice] })
export class App extends VueComponent {
  render() {
    return <RouterView></RouterView>
  }
}
