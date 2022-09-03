/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from 'ts-gear'
import { generateRequestFunctionName } from 'ts-gear/lib/tool/generateRequestFunctionName'
// @ts-ignore
import prettier from '../../.prettierrc'
import upperFirst from 'lodash/upperFirst'

const projects: Project[] = [
  {
    name: 'define',
    dest: '../api',
    source: 'http://211.154.163.74:21191/we_uc/openapi_json',
    keepGeneric: false,
    shouldExportResponseType: false,
    shouldExportRequestOptionType: false,
    importRequesterStatement: `import { http, type AxiosRequestConfig } from "../http"`,
    prettierConfig: prettier,
    // 过滤掉某些不想生成的api
    apiFilter(req) {
      return !req.pathname.startsWith('/abc')
    },
    generateRequestFunctionName(arg) {
      return 'api' + upperFirst(generateRequestFunctionName(arg))
    },
    /**
     * 自定义代码样例:
     * (option?: RequestType, config?: AxiosRequestConfig) => requester<ResponseType>('getdata', {method: 'post', ...option}, config)
     * @param arg
     */
    generateRequestFunction(arg) {
      // 转换python的 {id} 为 :id
      const path = arg.pathname.replace(/{(\w+?)}/g, (s, p1) => `:${p1}`)
      let parameter = arg.parameterTypeName
        ? `option${!arg.parameterRequired ? '?' : ''}: ${
            arg.parameterTypeName
          }, `
        : ''
      parameter += 'config?: AxiosRequestConfig'
      const body = `requester<${
        arg.responseSuccessTypeName
      }>('${path}', { method: '${arg.httpMethod}' ${
        arg.parameterTypeName ? ', ...option' : ''
      }}, config)`
      return `(${parameter}) => ${body}`
    },
  },
]

export default projects
