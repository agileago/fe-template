import { computed, defineComponent, PropType, reactive, Ref, ref } from 'vue'
import { Column, Table } from 'vxe-table'

type GetComponentPropType<T extends { new (...args: any[]): any }> = InstanceType<T>['$props']

export default defineComponent({
  name: 'Login',
  setup() {
    const tableData = ref([
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'Shenzhen' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', address: 'Shanghai' },
    ])
    return () => (
      <>
        <Table data={tableData.value} align={'center'} border highlightHoverRow resizable>
          <Column type={'seq'} title={'序号'} width={60}></Column>
          <Column title={'名称'} field={'name'}></Column>
        </Table>
      </>
    )
  },
})
