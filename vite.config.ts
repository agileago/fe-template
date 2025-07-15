import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import { defineConfig, loadEnv, type PluginOption } from 'vite'
import { join } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd()) as ImportMetaEnv
  const plugins: PluginOption[] = [vueJsx(), legacy({ modernPolyfills: true, renderLegacyChunks: false })]
  return {
    base: env.VITE_BASE_URL,
    resolve: {
      alias: [
        {
          find: /~(.+)/,
          replacement: join(process.cwd(), 'node_modules/$1'),
        },
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
    plugins,
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName: '[local]--[hash:base64:5]',
      },
    },
    build: {
      target: browserslistToEsbuild(),
    },
    server: {
      host: true,
      proxy: {
        // '/api': {
        //   target: 'http://test-xxx.xxx.cn',
        //   changeOrigin: true,
        //   rewrite(path: string) {
        //     return path.replace(/^\/api/, '')
        //   },
        // },
      },
    },
  }
})
