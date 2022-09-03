import Config from './config.default'

const modules = import.meta.glob(['./config.*.ts', '!./config.default.ts'], {
  import: 'default',
  eager: true,
})

const TargetConf: typeof Config =
  (modules[`./config.${import.meta.env.MODE}.ts`] as any) || Config

export default new TargetConf()
