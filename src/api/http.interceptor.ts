import { abcRequest } from '@/api/http'
import type { AxiosError, AxiosResponse } from 'axios'

// 过滤返回数据
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

// 请求拦截
abcRequest.interceptors.response.use(handleResponseSuccess)
abcRequest.interceptors.response.use(undefined, handleResponseError)
