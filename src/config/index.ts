import defaultConf from './config.default'
import developmentConf from './config.development'
import productionConf from './config.production'
import uatConf from './config.uat'
import deepMerge from 'ts-deepmerge'

let conf = defaultConf
switch (import.meta.env.MODE) {
  case 'development':
    conf = deepMerge(defaultConf, developmentConf)
    break
  case 'uat':
    conf = deepMerge(defaultConf, uatConf)
    break
  case 'production':
    conf = deepMerge(defaultConf, productionConf)
    break
}
conf.env = import.meta.env.MODE
export default conf
