# vite vue3 前端基础模板

!!! 注意， vite不支持装饰器，所以不能用类组件，如果想用请使用webpack模板

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
