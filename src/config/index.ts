import defaultConf, { type ConfigOptional } from './config.default'
import deepMerge from 'ts-deepmerge'

// 自动扫描配置文件
const modules = import.meta.glob(['./config.*.ts', '!./config.default.ts'], {
  import: 'default',
  eager: true,
})

const conf = deepMerge.withOptions(
  { mergeArrays: false },
  defaultConf,
  (modules[`./config.${import.meta.env.MODE}.ts`] || {}) as ConfigOptional,
)
conf.env = import.meta.env.MODE
export default conf
