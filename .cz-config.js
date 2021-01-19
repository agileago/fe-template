const idecommit = require('./conventionalcommit.json')

module.exports = {
  types: Object.keys(idecommit.types).map(k => ({ value: k, name: idecommit.types[k].description })),
  scopes: Object.keys(idecommit.commonScopes).map(k => ({ name: k })),
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个模块 (可选):',
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: idecommit.footerTypes.map(k => k.name),
  subjectLimit: 100,
}
