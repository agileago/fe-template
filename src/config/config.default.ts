export default class Config {
  env = import.meta.env.MODE
  // 基础路由 /app/
  BASE_ROUTE = import.meta.env.VUE_APP_BASE_ROUTE
  // 静态资源路径
  BASE_URL = import.meta.env.VUE_APP_BASE_URL
  // 后端API
  API = import.meta.env.VUE_APP_BASE_ROUTE + 'api'
}
