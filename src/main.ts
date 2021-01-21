import { createApp } from 'vue'
import App from './App.vue'

import { getCatsId } from './apis/pet'

getCatsId({ path: { id: 1 } }).then((res) => console.log(res))

createApp(App).mount('#app')
