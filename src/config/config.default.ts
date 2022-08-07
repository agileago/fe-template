import type { DeepPartial } from 'ts-essentials'

export class Config {
  env = ''
}

export type ConfigOptional = DeepPartial<Config>

export default new Config()
