import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mockPlugin from 'vite-plugin-mockit'

export default defineConfig({
  plugins: [vueJsx(), mockPlugin()],
})
