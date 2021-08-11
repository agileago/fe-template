import { defineComponent, ref } from 'vue'
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
    const name = ref('name')
    const name1 = ref('name2')
    return () => (
      <>
        <Select v-model={[select.value, 'value']} allowClear style={{ width: '200px' }}>
          <Select.Option title={'aaa'} value={111}>
            aaaaa
          </Select.Option>
        </Select>
        <h1>我是子页面1111</h1>
        <Abc
          v-models={[
            [name.value, 'name'],
            [name1.value, 'name1'],
          ]}
        ></Abc>
      </>
    )
  },
})

const Abc = defineComponent({
  props: {
    name: String,
    'onUpdate:name': Function,
    name1: String,
    'onUpdate:name1': Function,
  },
  setup(props) {
    return () => (
      <div>
        name: {props.name} <button onClick={() => props['onUpdate:name']!(props.name + '1')}>+1</button>
        name1: {props.name1} <button onClick={() => props['onUpdate:name1']!(props.name1 + '1')}>+1</button>
      </div>
    )
  },
})
