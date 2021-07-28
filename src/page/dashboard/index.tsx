import { defineComponent, ref, watch, watchEffect } from 'vue'
import { Column, Table } from 'vxe-table'
import { NButton } from 'naive-ui'
import { Select } from 'ant-design-vue'

export default defineComponent({
  name: 'Dashboard',
  setup(prop, ctx) {
    const tableData1 = ref([
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' },
    ])
    const select = ref()
    return () => (
      <>
        <Select v-model={[select.value, 'value']} allowClear style={{ width: '200px' }}>
          <Select.Option title={'aaa'} value={111}>
            aaaaa
          </Select.Option>
        </Select>
      </>
    )
  },
})
