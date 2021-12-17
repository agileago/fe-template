import { Component, VueComponent } from 'vue3-oop'
import { CountSercice } from '@/module/count/count.sercice'
import { Button } from 'ant-design-vue'
import { SkipSelf } from 'injection-js'

@Component()
export default class CountView extends VueComponent {
  constructor(private countService: CountSercice, @SkipSelf() private c2: CountSercice) {
    super()
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>{this.countService.count}</h2>
        <Button type={'primary'} onClick={() => this.countService.add()}>
          +1
        </Button>
        <Button onClick={() => this.countService.remove()}>-</Button>
        <h2>i am global service {this.c2.count}</h2>
        <Button type={'primary'} onClick={() => this.c2.add()}>
          +1
        </Button>
        <Button onClick={() => this.c2.remove()}>-</Button>
      </div>
    )
  }
}
