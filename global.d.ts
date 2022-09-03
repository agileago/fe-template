/// <reference types="vite/client" />
declare module 'vite-plugin-mockit'
declare module 'vite-plugin-ali-oss'

// 环境变量定义
interface ImportMetaEnv
  extends Readonly<Record<string, string | boolean | undefined>> {
  // 更多环境变量...
  // 构建环境
  VUE_APP_MODE: string
  // 部署路径
  VUE_APP_BASE_ROUTE: string
  // 静态资源路径
  VUE_APP_BASE_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
