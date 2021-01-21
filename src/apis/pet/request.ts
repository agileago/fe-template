/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { http as requester } from '../http'
import type { CreateCatDto } from './definition'

export interface GetResponse {
  /** */
  200: any
}

export type GetResponseSuccess = GetResponse[200]
export const getMockData = ('' as unknown) as GetResponseSuccess
export const get = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/'
  function get(): Promise<GetResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(getMockData)
    }
    return requester(url, { method }) as Promise<GetResponseSuccess>
  }

  get.method = method
  get.url = url
  return get
})()

/** request parameter type for getCatsId */
export interface GetCatsIdOption {
  path: {
    id: number
  }
}

export interface GetCatsIdResponse {
  /** */
  200: Array<CreateCatDto>
}

export type GetCatsIdResponseSuccess = GetCatsIdResponse[200]
export const getCatsIdMockData = ([
  { name: 'string', age: 0, breed: 'string' },
] as unknown) as GetCatsIdResponseSuccess
/**
 * get
 * tags: cats
 */
export const getCatsId = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/cats/:id'
  function getCatsId(option: GetCatsIdOption): Promise<GetCatsIdResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(getCatsIdMockData)
    }
    return requester(url, { method, ...option }) as Promise<GetCatsIdResponseSuccess>
  }

  getCatsId.method = method
  getCatsId.url = url
  return getCatsId
})()

/** request parameter type for postCatsCreate */
export interface PostCatsCreateOption {
  body?: CreateCatDto
}

export interface PostCatsCreateResponse {
  /** */
  201: any
}

export type PostCatsCreateResponseSuccess = PostCatsCreateResponse[201]
export const postCatsCreateMockData = ('' as unknown) as PostCatsCreateResponseSuccess
/**
 * create
 * tags: cats
 */
export const postCatsCreate = /* #__PURE__ */ (() => {
  const method = 'post'
  const url = '/cats/create'
  function postCatsCreate(option?: PostCatsCreateOption): Promise<PostCatsCreateResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(postCatsCreateMockData)
    }
    return requester(url, { method, ...option }) as Promise<PostCatsCreateResponseSuccess>
  }

  postCatsCreate.method = method
  postCatsCreate.url = url
  return postCatsCreate
})()
