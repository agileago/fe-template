/// <reference types="vitest/config" />
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig, loadEnv, type PluginOption } from 'vite'
import { join } from 'node:path'
// import babel from 'vite-plugin-babel'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd()) as ImportMetaEnv
  const plugins: PluginOption[] = [
    vueJsx(),
    // 由于某些机器不支持正则表达式的某些特性，所以需要babel进行转换
    // https://mothereff.in/regexpu#input=var+regex+%3D+/%5Cp%7BScript_Extensions%3DGreek%7D/u%3B&unicodePropertyEscape=1
    // babel({
    //   apply: 'build',
    //   enforce: 'post',
    //   babelConfig: {
    //     babelrc: false,
    //     configFile: false,
    //     plugins: ['@babel/plugin-transform-unicode-property-regex'],
    //   },
    // }),
    legacy({ modernPolyfills: true, renderLegacyChunks: false }),
  ]
  return {
    base: env.VITE_BASE_URL,
    resolve: {
      tsconfigPaths: true,
      alias: [
        {
          find: /~(.+)/,
          replacement: join(process.cwd(), 'node_modules/$1'),
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
    test: {
      environment: 'happy-dom',
    },
  }
})
