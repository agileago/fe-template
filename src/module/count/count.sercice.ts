import { ref } from 'vue'

export class CountSercice {
  count = ref(1)
  add = () => this.count.value++
  remove = () => this.count.value--
}
