import { Mut, VueService } from 'vue3-oop'

export class CountSercice extends VueService {
  @Mut() count = 1
  add = () => this.count++
  remove = () => this.count--
}
