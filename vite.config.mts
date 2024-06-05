import { defineConfig, loadEnv, type PluginOption } from 'vite'
import vueJsx from '@vue3-oop/plugin-vue-jsx'
import mock from 'vite-plugin-mockit'
import htmlTemplateDefault from 'vite-plugin-html-template'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'
import vitePluginAliOss from 'vite-plugin-ali-oss'
import legacy from '@vitejs/plugin-legacy'
import svgLoader from 'vite-svg-loader'
import VueDevTools from 'vite-plugin-vue-devtools'
import Vue from '@vitejs/plugin-vue'

// @ts-ignore
const htmlTemplate = htmlTemplateDefault.default

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd()) as ImportMetaEnv
  env.MODE = mode
  const plugins: PluginOption[] = [
    VueDevTools(),
    Vue(),
    vueJsx({ enableObjectSlots: false }),
    svgLoader({ defaultImport: 'url' }),
    tsconfigPaths(),
    checker({ typescript: true }),
    htmlTemplate({
      data: env,
    }),
    legacy({ modernPolyfills: true }),
    mode === 'development' ? mock() : undefined,
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
      // css 8位hex颜色 -> rgba
      cssTarget: 'chrome61',
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
