/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from '@vue3-oop/ts-gear'
import { generateRequestFunctionName } from '@vue3-oop/ts-gear/lib/tool/generateRequestFunctionName'
import * as _ from 'lodash'

// 调用的所有api
const projects: Partial<Project>[] = [
  {
    name: 'abc',
    source: 'https://safe-core-workbench.fat.ennew.com/v2/api-docs',
    nullableFalseAsRequired: true,
    apiFilter: req => {
      return !!req.schema?.tags?.some(k => k.includes('2688'))
    },
  },
]
/**
 * 生成请求代码样例:
 * (option?: RequestType, config?: AxiosRequestConfig) => requester<ResponseType>('/url', {method: 'post', ...option}, config)
 */
const requestTemplate: Project['generateRequestFunction'] = function (arg) {
  // 适配 fastApi 路径参数需要被path-to-regexp正确解析
  const path = arg.pathname.replace(/{(\w+?)}/g, (s, p1) => `:${p1}`)
  let parameter = arg.parameterTypeName
    ? `option${!arg.parameterRequired ? '?' : ''}: ${arg.parameterTypeName}, `
    : ''
  parameter += 'config?: AxiosRequestConfig'
  const bodyData = arg.parameterTypeName
    ? `, ${arg.simpleOption ? arg.simpleOption : '...option'}`
    : ''
  const body = `requester<${arg.responseSuccessTypeName}>('${path}', { method: '${arg.httpMethod}'${bodyData}}, config)`
  return `(${parameter}) => ${body}`
}
function createStandardProjects(projects: Partial<Project>[]) {
  return projects.map(p => {
    const { name } = p
    return {
      dest: '.',
      stripBodyPropWhenOnlyOneBodyProp: true,
      simplifyRequestOption: true,
      keepGeneric: false,
      shouldExportResponseType: false,
      shouldExportRequestOptionType: false,
      shouldForceSkipRequestHeaderOption: true,
      importRequesterStatement: `import { ${
        _.camelCase(name) + 'Requester'
      }, type AxiosRequestConfig } from "../http"`,
      prettierConfig: false,
      // 生成请求函数名称
      generateRequestFunctionName(arg) {
        return (
          'api' + _.upperFirst(_.camelCase(name)) + _.upperFirst(generateRequestFunctionName(arg))
        )
      },
      generateRequestFunction: requestTemplate,
      ...p,
    } as Project
  })
}

export default createStandardProjects(projects)
