import { Component, VueComponent } from 'vue3-oop'
import { CountSercice } from './count.sercice'

@Component()
export default class CountView extends VueComponent {
  constructor(private countService: CountSercice) {
    super()
  }
  render() {
    const { countService } = this
    return (
      <div class={'tw-text-center'}>
        <h2>{countService.count}</h2>
        <button onClick={countService.add} class={'tw-mr-2'}>
          +
        </button>
        <button onClick={countService.remove}>-</button>
      </div>
    )
  }
}
