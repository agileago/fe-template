import { VueComponent } from 'vue3-oop'
import { RouterView } from 'vue-router'
import { defineComponent } from '@/utils/dfc'
import { ref } from 'vue'

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
  const count = ref(1)

  return () => (
    <div>
      Abc{props.name}
      {count.value}
    </div>
  )
})
