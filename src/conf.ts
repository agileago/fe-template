// 项目配置文件， 从环境变量读取
class EnvConfig {
  env = import.meta.env.MODE
  /** 基础路由 */
  BASE_ROUTE = import.meta.env.VITE_BASE_ROUTE
  /** 基础路径 */
  BASE_URL = import.meta.env.VITE_BASE_URL
  /** 版本号 */
  VERSION: string = import.meta.env.VITE_VERSION

  API = this.BASE_ROUTE + 'api'
}
/* 环境配置 */
const envConfig = new EnvConfig()
/* 环境配置 */
export default envConfig
