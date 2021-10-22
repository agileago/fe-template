# vite前端基础模板

### 工具

建议使用 `webstorm`IDE,并且安装以下插件：

- [中文语言包](https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack----)
- [Visual Studio Code Dark Plus Theme—主题](https://plugins.jetbrains.com/plugin/12255-visual-studio-code-dark-plus-theme)
- [Atom Material Icons—图标](https://plugins.jetbrains.com/plugin/10044-atom-material-icons)
- [Conventional Commit—标准提交信息](https://plugins.jetbrains.com/plugin/13389-conventional-commit)
- [Awesome Console—控制台链接到代码](https://plugins.jetbrains.com/plugin/7677-awesome-console)
- [Rainbow Brackets—彩虹大括号](https://plugins.jetbrains.com/plugin/10080-rainbow-brackets)

### 设置**npm/yarn**国内镜像

```shell
yarn global add nrm
nrm use taobao
```

### 安装依赖

```shell
yarn
```

### 设置Webstorm

打开IDE设置界面： <kbd>command⌘</kbd> + <kbd>.</kbd>
1. 工具 -> 保存时的操作 勾上保存时优化`import`和运行`prettier`
2. 其他设置 -> ConventialCommit -> 基于模板

### 命令

所有命令使用 `yarn run` 执行

- `dev` : 启动开发
- `uat` : 测试环境构建
- `release` : 生产环境构建(包含上传CDN)
- `serve` : 本地构建完成预览
- `lint` : eslint修复代码
- `format` : prettier代码
- `api` : swagger生成请求代码，在 `src/api` 下进行配置
- `gen:icon-types` ： 生成图标类型文件(新增图标了，就执行一下，图标组件会有提示)

### 开发规范

全面面向对象开发 **OOP**, 使用类定义服务和组件

#### 服务

服务是指可复用的业务逻辑，类似 `hooks`, 和 `hooks`的区别是，一个使用类，一个使用函数定义， 使用类天生自带类型，可使用装饰器

1. 定义服务

```typescript
import { VueService, Ref } from '@titanmatrix/vue3-class-component'
import { User } from './user.service'

export class UserService extends VueService {
  @Ref() user?: User
  @Ref() count = 1

  constructor() {
    super()
    //  watch, watchEffect 等需写在构造函数中
    watch(() => this.count, this.countChange)
  }

  countChange = (n: number, o: number) => {
    console.log('change', n, o)
  }
  
  add() {
    this.count++
  }
}
```

全局服务请在 `service`文件夹定义，并且在 `index.ts` 中初始化

#### 组件

统一使用类进行组件的声明，组件是指可复用的UI组件

1. 定义组件

```typescript
import { ComponentProps, VueComponent } from '@titanmatrix/vue3-class-component'
import { watchEffect } from 'vue'

export interface LoginForm_Props {
  /**
   * 大小
   */
  size?: 'small' | 'large'
  /**
   * 提交事件
   * @param data
   */
  onSubmit: (data: any) => any
}

export class LoginForm extends VueComponent<LoginForm_Props> {
  // 如果组件有属性必须定义此属性
  static defaultProps: ComponentProps<LoginForm_Props> = {
    size: String,
    onSubmit: Function
  }

  @Ref() model = {
    username: '',
    password: ''
  }

  @Hook('Mounted')
  mounted() {
    console.log('mounted')
  }

  constructor() {
    super()
    watchEffect(this.usernameChange)
  }

  usernameChange = () => {
    console.log(this.model.username)
  }

  render() {
    return <div>{this.props.size}{this.model.username}</div>
  }
}
```



