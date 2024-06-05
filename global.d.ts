/// <reference types="vite/client" />
/// <reference types="vite-svg-loader" />
declare module 'vite-plugin-mockit'
declare module 'vite-plugin-ali-oss'

// 环境变量定义
interface ImportMetaEnv
  extends Readonly<Record<string, string | boolean | undefined>> {
  // 部署路径 nginx是否二级路由代理
  VITE_BASE_ROUTE: string
  // 静态资源路径
  VITE_BASE_URL: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
