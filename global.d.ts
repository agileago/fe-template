/// <reference types="vite/client" />
declare module 'vite-plugin-mockit'
declare module 'webpack-aliyun-oss'

// 环境变量定义
interface ImportMetaEnv
  extends Readonly<Record<string, string | boolean | undefined>> {
  // 更多环境变量...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
