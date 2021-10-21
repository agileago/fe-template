import { Object } from 'ts-toolbelt'

export class ConfigType {
  env = ''
}

export type ConfigTypeOptional = Object.Optional<ConfigType>
