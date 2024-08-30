import { VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'
import { defineComponent } from '@/utils/dfc'

export default class MainLayout extends VueComponent {
  render() {
    return (
      <div class={'bg-amber-300 text-center'}>
        我是上层布局
        <RouterView />
        <Abc name="abc" />
      </div>
    )
  }
}

const Abc = defineComponent((props: { name: string }) => {
  return <div>Abc{props.name}</div>
})
