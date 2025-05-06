import DefaultConfig from './config.default'
import UatConfig from '@/config/config.uat'

let TargetConf: typeof DefaultConfig

// 目的为了在build时去除掉无用其他配置 避免造成泄露信息
switch (import.meta.env.MODE) {
  case 'dev':
    TargetConf = DefaultConfig
    break
  case 'uat':
    TargetConf = UatConfig
    break
  default:
    TargetConf = DefaultConfig
}

const config = new TargetConf()

export default config
