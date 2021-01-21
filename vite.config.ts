import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mockPlugin from 'vite-plugin-mockit'

export default defineConfig({
  plugins: [vue(), vueJsx(), mockPlugin()],
})
