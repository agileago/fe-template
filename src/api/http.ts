import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import * as pathToRegexp from 'path-to-regexp'
import type { RequestParameter } from 'tsg-tgjz'

// region 基础方法 基本不需要动
interface ReturnMessageArg {
  /**
   * 状态值  1为正常  0为失败  -1未经过验证
   * format: int32
   */
  code?: number
  /** 错误信息 */
  msg?: string | null
  /** 返回数据 */
  entity?: any
  /** 描述信息 */
  data?: any | null
}
type ReturnEntityType<T> = T extends ReturnMessageArg ? T['entity'] : T
export type { AxiosRequestConfig }
/**
 * 解析url中的参数  /abc/:id 替换id
 * @param url
 * @param option
 */
export const parseUrl = (url: string, option?: RequestParameter): string => {
  if (option) {
    if (option.path) {
      Object.getOwnPropertyNames(option.path).forEach((k) => {
        option.path[k] = encodeURIComponent(String(option.path[k]))
      })
      url = pathToRegexp.compile(url)(option.path)
    }
  }
  return url
}
/**
 * 转换成axios里面的配置
 * @param url
 * @param option
 */
export function interceptRequest(url: string, option?: RequestParameter): [string, AxiosRequestConfig] {
  try {
    url = parseUrl(url, option)
  } catch (e) {
    throw new Error(e.message)
  }
  option = option || {}
  const requestOption: AxiosRequestConfig = {
    method: option.method || 'get',
  }
  if (option.header) {
    requestOption.headers = option.header
  }
  if (option.body) {
    requestOption.data = option.body
  }
  if (option.formData) {
    requestOption.data = option.formData
  }
  if (option.query) {
    requestOption.params = option.query
  }
  return [url, requestOption]
}
/**
 * 创建请求方法
 * @param ax
 */
export const createRequester = (ax: AxiosInstance) => {
  return <T>(apiUrl: string, param: RequestParameter, config: AxiosRequestConfig = {}) => {
    // eslint-disable-next-line prefer-const
    let [url, option] = interceptRequest(apiUrl, param)
    option = { url, ...option, ...config }
    return (ax!.request<T>(option) as unknown) as Promise<ReturnEntityType<T>>
  }
}
// endregion

// 创建request 对request进行拦截各种操作
const request = axios.create({
  baseURL: 'http://localhost:8080',
})
request.interceptors.response.use((res) => {
  const data = res.data
  if (data.code != 1) {
    throw new Error(data.msg!)
  }
  return data.entity
})

export const http = createRequester(request)