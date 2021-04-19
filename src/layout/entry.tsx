import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import '../core/style/main.css'

export default defineComponent({
  name: 'Bootstrap',
  setup() {
    return () => <RouterView></RouterView>
  },
})
