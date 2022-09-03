import { defineConfig, loadEnv, type PluginOption } from 'vite'
import vueJsx from '@vue3-oop/plugin-vue-jsx'
import mock from 'vite-plugin-mockit'
import htmlTemplate from 'vite-plugin-html-template'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'
import vitePluginAliOss from 'vite-plugin-ali-oss'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig(({ command, mode }) => {
  // 处理NODE_ENV
  if (command === 'build')
    process.env.VITE_USER_NODE_ENV = process.env.NODE_ENV = 'production'

  const envPrefix = 'VUE_APP_'
  const env = loadEnv(mode, '', envPrefix) as ImportMetaEnv
  env.VUE_APP_MODE = process.env.VUE_APP_MODE = mode

  const plugins: (PluginOption | PluginOption[])[] = [
    vueJsx({ enableObjectSlots: false }),
    tsconfigPaths(),
    checker({ typescript: true }),
    htmlTemplate({
      data: env,
    }),
    legacy({ modernPolyfills: true }),
    mode === 'development' ? mock() : undefined,
    // cdn
    command === 'build' &&
      /^http/.test(env.VUE_APP_BASE_URL) &&
      vitePluginAliOss({
        region: process.env.OSS_REGION,
        accessKeyId: process.env.OSS_KEY,
        accessKeySecret: process.env.OSS_SECRET,
        bucket: process.env.OSS_BUCKET,
      }),
  ]
  return {
    envPrefix,
    base: env.VUE_APP_BASE_URL,
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
