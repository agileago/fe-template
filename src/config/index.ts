import Config from './config.default'

const modules = import.meta.glob('./config.*.ts', {
  import: 'default',
  eager: true,
})

const TargetConf: typeof Config = (modules[`./config.${import.meta.env.MODE}.ts`] as any) || Config

const config = new TargetConf()

export default config
