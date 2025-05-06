import type DefaultConfig from '@/config/config.default'

export default class UatConfig implements DefaultConfig {
  env = import.meta.env.MODE
  // 基础路由 /app/
  BASE_ROUTE = import.meta.env.VITE_BASE_ROUTE
  // 静态资源路径
  BASE_URL = import.meta.env.VITE_BASE_URL

  API = this.BASE_ROUTE + 'api'
}
