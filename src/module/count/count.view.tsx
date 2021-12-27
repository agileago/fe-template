import { Button } from 'ant-design-vue'
import { Component, VueComponent } from 'vue3-oop'
import { CountSercice } from '@/module/count/count.sercice'

@Component()
export default class CountView extends VueComponent {
  constructor(private countService: CountSercice) {
    super()
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>{this.countService.count.value}</h2>
        <Button type={'primary'} onClick={this.countService.add}>
          +1
        </Button>
        <Button onClick={this.countService.remove}>-</Button>
      </div>
    )
  }
}
