import { defineComponent } from 'vue'
import { Card, Select } from 'ant-design-vue'
import { Ref, VueComponent } from '@titanmatrix/vue3-class-component'

export default class Dashboard extends VueComponent {
  @Ref() tableData1 = [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' },
  ]
  @Ref() select?: number
  @Ref() name = 'name'
  @Ref() name1 = 'name2'

  render() {
    return (
      <Card style={{ margin: '12px' }}>
        <Select v-model={[this.select, 'value']} allowClear style={{ width: '200px' }}>
          <Select.Option title={'aaa'} value={111}>
            aaaaa
          </Select.Option>
        </Select>
        <h1>我是子页面222233333</h1>
        <Abc
          v-models={[
            [this.name, 'name'],
            [this.name1, 'name1'],
          ]}
        ></Abc>
      </Card>
    )
  }
}

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
