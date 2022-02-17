# vite vue3 前端基础模板

### 工具

建议使用 `webstorm`IDE,并且安装以下插件：

- [中文语言包](https://plugins.jetbrains.com/plugin/13710-chinese-simplified-language-pack----)
- [Visual Studio Code Dark Plus Theme—主题](https://plugins.jetbrains.com/plugin/12255-visual-studio-code-dark-plus-theme)
- [Atom Material Icons—图标](https://plugins.jetbrains.com/plugin/10044-atom-material-icons)
- [Conventional Commit—标准提交信息](https://plugins.jetbrains.com/plugin/13389-conventional-commit)
- [Awesome Console—控制台链接到代码](https://plugins.jetbrains.com/plugin/7677-awesome-console)
- [Rainbow Brackets—彩虹大括号](https://plugins.jetbrains.com/plugin/10080-rainbow-brackets)

### 设置**npm**国内镜像

```shell
npm install -g nrm
nrm use taobao
```

### 安装依赖

```shell
pnpm install
```

### 设置Webstorm

打开IDE设置界面： <kbd>command⌘</kbd> + <kbd>.</kbd>
1. 工具 -> 保存时的操作 勾上保存时优化`import`和运行`eslint`
2. 其他设置 -> ConventialCommit -> 基于模板

### 命令

所有命令使用 `pnpm run` 执行

- `dev` : 启动开发
- `uat` : 测试环境构建
- `release` : 生产环境构建(包含上传CDN)
- `serve` : 本地构建完成预览
- `lint` : eslint修复代码
- `format` : prettier代码
- `api` : swagger生成请求代码，在 `src/api` 下进行配置
- `gen:icon-types` ： 生成图标类型文件(新增图标了，就执行一下，图标组件会有提示)

### 代码规范

使用`类组件`+`依赖注入`写业务代码 [vue3-oop](https://github.com/agileago/vue3-oop)

### 命名规范

1. 使用小写加 `-` 作为文件命名，比如文件夹 `search-form` 尽量避免文件及文件夹出现大写及汉字情况
2. js命名采用小驼峰 `searchForm`, 类采用大驼峰 `SearchForm`
3. 文件使用后缀标识功能 `home.view.tsx` 表示此文件作为页面，`home.service.ts` 作为服务等等

### 项目配置

配置统一写在 `config` 文件夹下面，区分环境