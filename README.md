# vite前端模板

功能

- [x] vite+vue3+setup+ddd提供前端最佳实践
- [x] typescript支持，提供类型提示
- [x] prettier+eslint规范代码风格
- [x] commitlint规范提交格式信息
- [x] swagger自动生成接口代码
- [x] mock模拟接口数据
- [x] css使用css modules
- [ ] 自动依赖注入
- [ ] 表单验证
- [ ] 低代码接入


### 提交信息规范

#### 提交格式
`type(scope): body`

type: 提交类型
scope：影响到的模块
body: 提交信息简写

#### webstorm集成

安装插件https://plugins.jetbrains.com/plugin/13389-conventional-commit

插件设置中设置基于模板

### 启动

```
yarn
yarn run dev
```
更新依赖

```
yarn upgrade-interactive --latest
```

### swagger生成api

```
yarn run api
```

### 代码规范

- 坚持使用`tsx`开发组件
- 坚持使用`ref`定义响应式变量
- 坚持逻辑写在服务中 `xxx.service.ts`
- 坚持组件里面只有单纯的表现 `xxx.component.ts`
- 推荐全局服务使用依赖注入在顶层组件上
- 推荐样式写在单独文件里，样式隔离请使用`css module`

推荐阅读`Angular风格指南` [Angular风格指南](https://angular.cn/guide/styleguide)