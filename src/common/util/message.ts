import type { ModalFuncProps } from 'ant-design-vue'
import { Modal } from 'ant-design-vue'

export function confirm(options: ModalFuncProps) {
  Modal.confirm(options)
}
