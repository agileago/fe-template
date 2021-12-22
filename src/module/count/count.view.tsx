import { Button } from 'ant-design-vue'
import { defineComponent } from 'vue'
import { CountSercice } from '@/module/count/count.sercice'

export default defineComponent({
  setup() {
    const countService = new CountSercice()
    return () => (
      <div style={{ textAlign: 'center' }}>
        <h2>{countService.count.value}</h2>
        <Button type={'primary'} onClick={countService.add}>
          +1
        </Button>
        <Button onClick={countService.remove}>-</Button>
      </div>
    )
  },
})
