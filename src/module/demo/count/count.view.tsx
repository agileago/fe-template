import { Mut, VueComponent } from 'vue3-oop'

export default class CountView extends VueComponent {
  @Mut() count = 1
  add = () => this.count++
  remove = () => this.count--

  render() {
    return (
      <div class={'tw-text-center'}>
        <h2>{this.count}</h2>
        <button onClick={this.add}>+</button>
        <button onClick={this.remove}>-</button>
      </div>
    )
  }
}
