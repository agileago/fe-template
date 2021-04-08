/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from 'tsg-tgjz'
// @ts-ignore
import prettier from '../../.prettierrc'

const projects: Project[] = [
  {
    name: 'define',
    dest: '../api',
    source: 'http://localhost:8080/swagger-json',
    keepGeneric: false,
    importRequesterStatement: `import { http, AxiosRequestConfig } from "../http"`,
    prettierConfig: prettier,
    // 过滤掉某些不想生成的api
    apiFilter(req) {
      return !req.pathname.startsWith('/hgy')
    },
    template({ doc, httpMethod, parameterTypeName, requestFunctionName, responseType, urlPath }) {
      // 方法注释
      const docWords = doc?.[0]
        ?.split(/\n/)
        .map((k) => `* ${k}`)
        .join('\n')
      // 方法名称
      const fn = requestFunctionName
      // 参数类型
      const ptype = parameterTypeName
      // axios配置类型
      const aConf = 'AxiosRequestConfig'
      // 返回类型
      const rType = responseType.successTypeName
      return `
        /**
         ${docWords}
         */
        export function ${fn}(${ptype ? `option: ${ptype}, ` : ''}config?: ${aConf}) {
          return requester<${rType}>('${urlPath}', { method: '${httpMethod}' ${ptype ? ', ...option' : ''}}, config)
        }
      `
    },
  },
]

export default projects
