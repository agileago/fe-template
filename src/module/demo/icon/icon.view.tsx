import { defineComponent, injectService, provideService } from 'vue-better-props'
import { ref } from 'vue'
import { useTitle } from '@vueuse/core'
import group from '@/module/demo/icon/group.svg'

interface IconSimpleProps {
  count: number
  abc?: number
}

export const IconSimple = defineComponent(
  function IconSimple(props: IconSimpleProps) {
    const abc = injectService(Abc)
    const title = injectService(useTitle)
    setTimeout(() => (title.value = Math.random().toString()), 3000)
    return () => (
      <div onClick={() => abc.count.value++}>
        icon simple1111 {props.count} {abc.count.value} <p>abc: {props.abc}</p>
      </div>
    )
  },
  {
    props: {
      abc: {
        type: Number,
        default: 1,
      },
    },
  },
)

class Abc {
  count = ref(0)
}

const IcomView = defineComponent(() => {
  const count = ref(1)
  provideService(new Abc())
  provideService(useTitle('aaaaaa'), useTitle)

  return () => (
    <div class={'text-center text-amber-400'}>
      <h2>我是子路由11111</h2>
      <div>
        <h3>我是图标</h3>
        <i class={'icon-group'}></i>
        <i class={'icon-right text-yellow-200'}></i>
      </div>
      <div class={'bg-[url(/favicon.ico)]'}>
        <button class={'bg-red-500 p-2'} onClick={() => count.value++}>
          + {count.value}
        </button>
      </div>
      <IconSimple count={count.value}>
        <div>111</div>
      </IconSimple>
      <img src={group} alt="" />
    </div>
  )
})

export default IcomView
