import { reactive, InjectionKey, inject } from 'vue'
import { useForm } from '@ant-design-vue/use'
import { message } from 'ant-design-vue'

export default class LoginService {
  static token: InjectionKey<LoginService> = Symbol()
  model = reactive({
    name: '',
    pwd: '',
  })
  rules = reactive({
    name: [
      {
        required: true,
        message: '请输入账号',
      },
    ],
    pwd: [
      {
        required: true,
        message: '请输入密码',
      },
    ],
  })
  form: ReturnType<typeof useForm>
  constructor() {
    const a = inject(LoginService.token)
    this.form = useForm(this.model, this.rules)
  }
  submit = async (e: Event) => {
    e.preventDefault()
    await this.form.validate()
    message.success('登陆成功!')
  }
}
