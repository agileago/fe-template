import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import * as pathToRegexp from 'path-to-regexp'
import type { Requester, RequestParameter } from 'ts-gear'

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
export function interceptRequest(
  url: string,
  option?: RequestParameter,
): [string, AxiosRequestConfig] {
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
  return [url, requestOption]
}
export const createRequester = (ax?: AxiosInstance): Requester => {
  ax = ax || axios.create()
  return (apiUrl: string, param?: RequestParameter) => {
    const [url, option] = interceptRequest(apiUrl, param)
    return ax!(url, option)
  }
}

const request = axios.create({
  baseURL: 'http://localhost:3000',
})
request.interceptors.response.use((res) => res.data)

export const http = createRequester(request)
