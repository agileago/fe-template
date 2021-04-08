import { Button, Col, Form, Input, Row } from 'ant-design-vue'
import { computed, defineComponent, PropType, reactive, Ref, ref } from 'vue'
import LoginService from './login.service'
import { Column, Table } from 'vxe-table'

interface DataType {
  name: string
  age: number
}

class FooService {
  name = ref('')
  doublename = computed(() => this.name + this.props.name!)
  constructor(private props: GetComponentPropType<typeof Foo>) {}
}

export const Foo = defineComponent({
  props: {
    name: {
      type: String,
      default: 'aaa',
    },
    data: {
      type: Array as PropType<DataType[]>,
      required: true,
    },
    itemSlot: {
      type: Function as PropType<(item: DataType) => JSX.Element>,
      required: true,
    },
  },
  setup(props, ctx) {
    return () => {
      const itemSlot = props.itemSlot || ctx.slots.item
      return (
        <>
          <ul>{props.data.map((k) => props.itemSlot(k))}</ul>
          {ctx.slots.default?.()}
        </>
      )
    }
  },
})

type GetComponentPropType<T extends { new (...args: any[]): any }> = InstanceType<T>['$props']

export default defineComponent({
  name: 'Login',
  setup() {
    const { form, model, submit } = new LoginService()
    const tableData = reactive([
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'Shenzhen' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', address: 'Shanghai' },
    ])
    return () => (
      <>
        <Row align="middle" justify={'center'} style={{ height: '100%' }} type={'flex'}>
          <Col flex={1} span={12}>
            <h2 style={{ textAlign: 'center' }}>PKM后台管理系统</h2>
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
              <Form.Item label="账号" {...form.validateInfos.name}>
                <Input v-model={[model.name, 'value']}></Input>
              </Form.Item>
              <Form.Item label="密码" {...form.validateInfos.pwd}>
                <Input type={'password'} v-model={[model.pwd, 'value']}></Input>
              </Form.Item>
              <Button type={'primary'} block onClick={submit}>
                登录
              </Button>
            </Form>
          </Col>
        </Row>
        <Table data={tableData}>
          <Column type={'seq'} title={'序号'} width={60}></Column>
          <Column title={'名称'} width={60} field={'name'}></Column>
        </Table>
      </>
    )
  },
})
