import { defineConfig } from 'vite'
import vueJsx from '@vue3-oop/plugin-vue-jsx'
import mock from 'vite-plugin-mockit'
import svgIcons from 'vite-plugin-svg-icons'
import * as path from 'path'
import WebpackAliyunOss from 'webpack-aliyun-oss'
import html from 'vite-plugin-html'
import viteImp from 'vite-plugin-imp'

const CDN_HOST = 'https://cdn.xxx.com'
const OSS_DIR = 'OSS文件目录请更改' // 例子： /matrial/starter 资源存放路径，一般以仓库路径为主，**请注意**后面没有 /

export default defineConfig(({ command, mode }) => {
  // 处理NODE_ENV
  if (command === 'build')
    process.env.VITE_USER_NODE_ENV = process.env.NODE_ENV = 'production'

  let base = ''

  const plugins = [
    vueJsx({ enableObjectSlots: false, slotStable: true }),
    viteImp(),
    svgIcons({ iconDirs: [path.resolve(__dirname, 'src/assets/icons')] }),
  ]
  switch (mode) {
    case 'development':
      plugins.push(mock())
      break
    // gitlab配置可删除
    case 'gitlab':
      base = '/vue3-vite'
      break
    case 'production':
      // 配置上传CDN OSS
      base = CDN_HOST + OSS_DIR
      plugins.push({
        name: 'vite-plugin-ali-oss-uploader',
        async closeBundle() {
          const options = {
            from: ['./dist/**', '!./dist/**/*.html'],
            dist: OSS_DIR,
            region: process.env.OSS_REGION,
            accessKeyId: process.env.OSS_KEY,
            accessKeySecret: process.env.OSS_SECRET,
            bucket: process.env.OSS_BUCKET,
            verbose: true,
            overwrite: true,
            buildRoot: 'dist',
          }
          await new WebpackAliyunOss(options).apply()
        },
      })
      break
  }
  // html模板ejs变量注入 <%- MODE %>
  plugins.push(
    ...html({
      inject: {
        data: {
          MODE: mode,
          COMMAND: command,
          BASE_URL: base + '/',
          PROD: command === 'build',
        },
      },
    }),
  )
  return {
    base: base + '/',
    plugins,
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        { find: '@/', replacement: '/src/' },
      ],
    },
    server: {
      proxy: {
        // '/api': {
        //   target: 'http://test-tmc.titanmatrix.cn',
        //   changeOrigin: true,
        //   rewrite(path: string) {
        //     return path.replace(/^\/api/, '')
        //   },
        // },
      },
    },
    optimizeDeps: {
      include: ['tslib'],
    },
  }
})
