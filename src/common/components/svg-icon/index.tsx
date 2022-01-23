import type { FunctionalComponent, HTMLAttributes } from 'vue'
import type { IconTypes } from './icon.interface'
import './icon.style.scss'

interface IconProps {
  name: IconTypes
}

const SvgIcon: FunctionalComponent<IconProps & HTMLAttributes> = (
  props,
  ctx,
) => {
  // eslint-disable-next-line prefer-const
  let { name, ...args } = props
  const symbolId = 'icon-' + name
  return (
    <span
      role="img"
      aria-label={symbolId}
      class={['anticon', 'anticon-' + symbolId]}
      {...args}
    >
      <svg aria-hidden="true" fill="currentColor" width="1em" height="1em">
        <use xlinkHref={'#' + symbolId} />
      </svg>
    </span>
  )
}
SvgIcon.inheritAttrs = false
SvgIcon.displayName = 'SvgIcon'

export default SvgIcon
