import { Button, Col, Form, Input, Row } from 'ant-design-vue'
import { defineComponent, FunctionalComponent } from 'vue'
import LoginService from './login.service'

const Wrapper: FunctionalComponent = (props, ctx) => {
  console.log(ctx.slots)
  return <div>{ctx.slots.default?.()}</div>
}

export default defineComponent({
  name: 'Login',
  setup() {
    const { form, model, submit } = new LoginService()
    return () => (
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
            <Wrapper>
              <a href="">baidu</a>
            </Wrapper>
          </Form>
        </Col>
      </Row>
    )
  },
})
