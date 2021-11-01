import { Button, Card, Select, Table, TableColumn, Tag } from 'ant-design-vue'
import { Ref, VueComponent } from '@titanmatrix/vue3-class-component'
import { useRouter } from 'vue-router'

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
  router = useRouter()

  render() {
    return (
      <Card style={{ margin: '12px' }}>
        <Select v-model={[this.select, 'value']} allowClear style={{ width: '200px', marginBottom: '20px' }}>
          <Select.Option value={111}>我是下拉框</Select.Option>
        </Select>
        <Button type={'link'} onClick={() => this.router.push('/login')}>
          去往登录页
        </Button>
        <Table dataSource={this.tableData1} pagination={false}>
          <TableColumn title={'姓名'} dataIndex={'name'}></TableColumn>
          <TableColumn title={'角色'} dataIndex={'role'}>
            {{
              default: (record: any) => <Tag color={'pink'}>{record.record.role}</Tag>,
            }}
          </TableColumn>
        </Table>
      </Card>
    )
  }
}
