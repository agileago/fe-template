import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mock from 'vite-plugin-mockit'
import svgIcons from 'vite-plugin-svg-icons'
import * as path from 'path'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      command === 'build' ? undefined : mock(),
      vueJsx({}),
      svgIcons({
        iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
      }),
    ],
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
