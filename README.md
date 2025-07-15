# vite vue3 前端基础模板

### 设置**npm**国内镜像

```shell
npm install -g nrm
nrm use taobao
```

### 安装依赖

```shell
pnpm install
```

### 命令

所有命令使用 `pnpm run` 执行

- `dev` : 启动开发
- `build` : 生产构建
- `preview` : 本地构建完成预览
- `type:check` : 类型检查
- `lint` : eslint修复代码
- `format` : prettier代码
- `chrome` : 打开无跨域限制的浏览器
- `api` : swagger生成请求代码，在 `src/api` 下进行配置

### 功能

- 使用 `vue-better-props` 书写vue组件，只允许使用 `tsx` 组件
- 使用 `tailwindcss` 书写样式，拒绝出现多余的 `css` 文件
- svg图标都在 `icons` 文件夹下
- 配置请在 `conf` 文件中添加


### 命名规范

1. 使用小写加 `-` 作为文件命名，比如文件夹 `search-form` 尽量避免文件及文件夹出现大写及汉字情况
2. js命名采用小驼峰 `searchForm`, 类采用大驼峰 `SearchForm`
3. 文件使用后缀标识功能 `home.view.tsx` 表示此文件作为页面，`home.service.ts` 作为服务等等

