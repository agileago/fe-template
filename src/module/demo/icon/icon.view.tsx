import { type ComponentProps, Link, Mut, VueComponent } from 'vue3-oop'
import RightIcon from './right.svg?component'
import { inject, provide, watch } from 'vue'

interface AbcProps {
  padding?: string
  modelValue?: string
  'onUpdate:modelValue'?: (val: string) => void
}

class Abc extends VueComponent<AbcProps> {
  // @ts-ignore
  static defaultProps: ComponentProps<AbcProps> = {
    modelValue: String,
    'onUpdate:modelValue': Function,
  }

  method() {}

  render() {
    console.log(this, this.$attrs)
    return (
      <div
        onClick={() =>
          this.props['onUpdate:modelValue']?.(Math.random().toString())
        }
      >
        {this.props.modelValue}
      </div>
    )
  }
}

export default class IconView extends VueComponent {
  @Mut() abc = '111'

  @Link() abcRef!: Abc

  constructor() {
    super()
    provide('aaa', this)
    inject('aaa')
    watch(
      () => this.abc,
      () => console.log(this.abc),
    )
  }

  click() {
    console.log(this)
    console.log(this.abcRef.method())
  }

  render() {
    return (
      <div onClick={this.click}>
        <h1 class={'text-center text-base font-bold'}>
          直接引入svg文件, 通过vite-svg-loader转换成vue组件
        </h1>
        <div>
          <RightIcon></RightIcon>
          <span>111</span>
        </div>
        <Abc ref={'abcRef'} v-model={this.abc} padding={'111'}></Abc>
      </div>
    )
  }
}
