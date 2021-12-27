/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from 'ts-gear'
// @ts-ignore
import prettier from '../../.prettierrc'

const projects: Project[] = [
  {
    name: 'define',
    dest: '../api',
    source: 'http://test-pim-define.titanmatrix.cn/define/swagger-json',
    keepGeneric: false,
    shouldExportResponseType: false,
    shouldExportRequestOptionType: false,
    importRequesterStatement: `import { http, AxiosRequestConfig } from "../http"`,
    prettierConfig: prettier,
    // 过滤掉某些不想生成的api
    apiFilter(req) {
      return !req.pathname.startsWith('/hgy')
    },
    /**
     * 自定义代码样例:
     * (option?: RequestType, config?: AxiosRequestConfig) => requester<ResponseType>('getdata', {method: 'post', ...option}, config)
     * @param arg
     */
    generateRequestFunction(arg) {
      let parameter = arg.parameterTypeName
        ? `option${!arg.parameterRequired ? '?' : ''}: ${
            arg.parameterTypeName
          }, `
        : ''
      parameter += 'config?: AxiosRequestConfig'
      const body = `requester<${arg.responseSuccessTypeName}>('${
        arg.pathname
      }', { method: '${arg.httpMethod}' ${
        arg.parameterTypeName ? ', ...option' : ''
      }}, config)`
      return `(${parameter}) => ${body}`
    },
  },
]

export default projects
