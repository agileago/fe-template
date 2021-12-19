import { Track, VueService } from 'vue3-oop'
import { Injectable } from 'injection-js'

@Injectable()
export class CountSercice extends VueService {
  @Track() count = 1
  add() {
    this.count++
  }
  remove() {
    this.count--
  }
}
