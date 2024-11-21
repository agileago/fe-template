import { defineConfig, loadEnv, type PluginOption } from 'vite'
import vueJsx from '@vue3-oop/plugin-vue-jsx'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'
import vitePluginAliOss from 'vite-plugin-ali-oss'
import legacy from '@vitejs/plugin-legacy'
import svgLoader from 'vite-svg-loader'
import VueDevTools from 'vite-plugin-vue-devtools'
import Vue from '@vitejs/plugin-vue'
import browserslistToEsbuild from 'browserslist-to-esbuild'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd()) as ImportMetaEnv
  const plugins: PluginOption[] = [
    VueDevTools(),
    Vue(),
    vueJsx(),
    svgLoader({ defaultImport: 'url' }),
    tsconfigPaths({ loose: true }),
    checker({ typescript: true }),
    legacy({ modernPolyfills: true, renderLegacyChunks: false }),
    // cdn
    command === 'build' &&
      /^http/.test(env.VITE_BASE_URL) &&
      vitePluginAliOss({
        region: process.env.OSS_REGION,
        accessKeyId: process.env.OSS_KEY,
        accessKeySecret: process.env.OSS_SECRET,
        bucket: process.env.OSS_BUCKET,
      }),
  ]
  return {
    base: env.VITE_BASE_URL,
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
    optimizeDeps: {
      exclude: ['vue-simple-props'],
    },
  }
})
