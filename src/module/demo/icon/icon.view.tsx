import { defineComponent } from 'vue-better-props'
import { ref } from 'vue'

interface IconSimpleProps {
  count: number
  abc?: number
}

export const IconSimple = defineComponent(
  function IconSimple(props: IconSimpleProps) {
    return () => (
      <div>
        icon simple1111 {props.count} <p>abc: {props.abc}</p>
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

const IcomView = defineComponent(() => {
  const count = ref(1)
  return () => (
    <div class={'text-center'}>
      <h2>我是子路由</h2>
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
    </div>
  )
})

export default IcomView
