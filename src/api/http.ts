import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import config from '@/config'
import { createRequester, type RequestParameter } from '@vue3-oop/ts-gear/requester'

// region 基础方法 需要对返回类型做转换

type ReturnEntityType<T> = T

export type { AxiosRequestConfig }
// 重写返回类型
interface RequesterWrapper {
  <T>(url: string, param?: RequestParameter, config?: AxiosRequestConfig): Promise<ReturnEntityType<T>>
}

// 处理响应
function handleResponseSuccess(res: AxiosResponse) {
  return res.data
}
// 处理错误
function handleResponseError(error: AxiosError<any>) {
  // 后端返回401直接到登录
  if (error?.response?.status === 401) {
    // location.href = config.BASE_ROUTE + 'login'
  }
  if (error?.response) {
    throw new Error(error.response.data)
  }
  return Promise.reject(error)
}

// endregion

export const [petRequest, petRequester] = createRequester({
  baseURL: config.API,
}) as [AxiosInstance, RequesterWrapper]

// 请求拦截
petRequest.interceptors.response.use(handleResponseSuccess)
petRequest.interceptors.response.use(undefined, handleResponseError)
