import { Button } from 'ant-design-vue'
import { Component, VueComponent } from 'vue3-oop'
import { CountSercice } from '@/module/count/count.sercice'

@Component()
export default class CountView extends VueComponent {
  constructor(private countService: CountSercice) {
    super()
  }
  render() {
    const { countService } = this
    return (
      <div style={{ textAlign: 'center' }} class={'aa'}>
        <h2>{countService.count}</h2>
        <Button type={'primary'} onClick={countService.add}>
          +1
        </Button>
        <Button onClick={countService.remove}>-</Button>
      </div>
    )
  }
}
