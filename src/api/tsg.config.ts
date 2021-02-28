/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from 'tsg-tgjz'
// @ts-ignore
import prettier from '../../.prettierrc'
import type { Options } from 'prettier'

const projects: Project[] = [
  {
    name: 'pet',
    dest: '../apis',
    source: 'http://192.168.1.166:54502/swagger/v1/swagger.json',
    keepGeneric: true,
    importRequesterStatement: `import { http } from "../http"`,
    prettierConfig: prettier as Options,
    apiFilter(req) {
      return !['/auth/getpassencrypt', '/order/test'].includes(req.pathname)
    },
    template({ doc, httpMethod, parameterTypeName, requestFunctionName, responseType, urlPath }) {
      return `
        /**
        ${doc![0]
          .split(/\n/)
          .map((k) => `* ${k}`)
          .join('\n')}
        */
        export function ${requestFunctionName}(${
        parameterTypeName ? 'option: ' + parameterTypeName : ''
      }) {
          return requester<${
            responseType.successTypeName
          }>('${urlPath}', { method: '${httpMethod}' ${parameterTypeName ? ', ...option' : ''} })
        }
      `
    },
  },
]

export default projects
