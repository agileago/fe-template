import { defineConfig } from 'vite'
import vueJsx from 'vite-plugin-ts'
import mock from 'vite-plugin-mockit'
import svgIcons from 'vite-plugin-svg-icons'
import * as path from 'path'
import vitePluginAliyunOss from 'vite-plugin-aliyun-oss'

const CDN_HOST = 'https://cdn.titanmatrix.com'
const OSS_DIR = '文件目录请更改' // 例子： /matrial/starter 资源存放路径，一般以仓库路径为主

export default defineConfig(({ command, mode }) => {
  // 处理NODE_ENV
  if (command === 'build') process.env.VITE_USER_NODE_ENV = process.env.NODE_ENV = 'production'
  let base = ''
  const plugins = [
    vueJsx({}),
    svgIcons({
      iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
    }),
  ]
  switch (mode) {
    case 'development':
      plugins.push(mock())
      break
    case 'production':
      // 配置上传CDN OSS
      base = CDN_HOST + OSS_DIR
      plugins.push(
        vitePluginAliyunOss({
          region: process.env.OSS_REGION,
          accessKeyId: process.env.OSS_KEY,
          accessKeySecret: process.env.OSS_SECRET,
          bucket: process.env.OSS_BUCKET,
          ossFilePath: OSS_DIR,
        }),
      )
      break
  }
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
  }
})
