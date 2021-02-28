module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^([\w\W]*)(?:\((.*)\))?: (.*)$/
    }
  },
  extends: ['cz'],
  rules: {
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
  },
}
