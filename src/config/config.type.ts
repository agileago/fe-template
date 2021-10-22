import { DeepPartial } from 'ts-essentials'

export class ConfigType {
  env = ''
}

export type ConfigTypeOptional = DeepPartial<ConfigType>
