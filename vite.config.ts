import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import mockPlugin from 'vite-plugin-mockit'
import styleImport from 'vite-plugin-style-import'

export default defineConfig({
  plugins: [
    vueJsx(),
    mockPlugin(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => `ant-design-vue/es/${name}/style/index`,
        },
        {
          libraryName: 'vxe-table',
          esModule: true,
          resolveComponent: (name) => `vxe-table/es/${name}`,
          resolveStyle: (name) => `vxe-table/es/${name}/style.css`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
})
