import { FunctionalComponent } from 'vue'
import { IconTypes } from './icon.interface'

interface IconProps {
  name: IconTypes
  color?: string
}

const SvgIcon: FunctionalComponent<IconProps> = (props, ctx) => {
  // eslint-disable-next-line prefer-const
  let { name, color, ...args } = props
  const symbolId = '#icon-' + name
  color = color || 'currentColor'
  return (
    <svg aria-hidden="true" {...args}>
      <use xlinkHref={symbolId} fill={color} />
    </svg>
  )
}

SvgIcon.inheritAttrs = false
SvgIcon.displayName = 'SvgIcon'

export default SvgIcon
