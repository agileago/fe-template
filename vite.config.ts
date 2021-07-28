import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mock from 'vite-plugin-mockit'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [command === 'build' ? undefined : mock(), vueJsx({})],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [{ find: /^~/, replacement: '' }],
    },
  }
})
