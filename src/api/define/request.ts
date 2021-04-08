/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { http as requester, AxiosRequestConfig } from '../http'
import type {
  GetSpecByBatchDto,
  GetSpecByBatchResDto,
  GetSpecByCodesDto,
  ResSpecCodeDto,
  GetSeriesCategoryDto,
  ResCategoryDto,
  GetFactListReqDto,
  GetFactListResDto,
  GetAllFactListReqDto,
  TblFactoryEntity,
  SaveFactReqDto,
  DeleteFactReqDto,
  ZdProvinceEntity,
  ZdCountryEntity,
  FactProdTypeSaveDto,
  TblFactoryProdtypeEntity,
  FactProdTypeDeleteDto,
  GetTreeDto,
  SortDto,
  TblIndustryEntity,
  GetAllSeriesDto,
  SeriesEntityDto,
  SeriesSortDto,
} from './definition'

/** request parameter type for getUser */
interface GetUserOption {
  /** 用户信息 */
  header?: {
    /**
        用户信息 */
    KEY_USERINFO_IN_HTTP_HEADER?: string
  }
}

interface GetUserResponse {
  /** */
  200: string
}

type GetUserResponseSuccess = GetUserResponse[200]

/**
         undefined
         */
export function getUser(option: GetUserOption, config?: AxiosRequestConfig) {
  return requester<GetUserResponseSuccess>('/user', { method: 'get', ...option }, config)
}

/** request parameter type for postFactGetList */
interface PostFactGetListOption {
  body?: GetFactListReqDto
}

interface PostFactGetListResponse {
  /** */
  201: GetFactListResDto
}

type PostFactGetListResponseSuccess = PostFactGetListResponse[201]

/**
 * tags: 品牌
 */
export function postFactGetList(option: PostFactGetListOption, config?: AxiosRequestConfig) {
  return requester<PostFactGetListResponseSuccess>('/fact/getList', { method: 'post', ...option }, config)
}

/** request parameter type for postFactAllFact */
interface PostFactAllFactOption {
  body?: GetAllFactListReqDto
}

interface PostFactAllFactResponse {
  /** */
  201: Array<TblFactoryEntity>
}

type PostFactAllFactResponseSuccess = PostFactAllFactResponse[201]

/**
 * tags: 品牌
 */
export function postFactAllFact(option: PostFactAllFactOption, config?: AxiosRequestConfig) {
  return requester<PostFactAllFactResponseSuccess>('/fact/allFact', { method: 'post', ...option }, config)
}

/** request parameter type for postFactSave */
interface PostFactSaveOption {
  body?: SaveFactReqDto
}

interface PostFactSaveResponse {
  /** */
  200: any
  /** */
  202: TblFactoryEntity
}

type PostFactSaveResponseSuccess = PostFactSaveResponse[200]

/**
 * tags: 品牌
 */
export function postFactSave(option: PostFactSaveOption, config?: AxiosRequestConfig) {
  return requester<PostFactSaveResponseSuccess>('/fact/save', { method: 'post', ...option }, config)
}

/** request parameter type for postFactDelete */
interface PostFactDeleteOption {
  body?: DeleteFactReqDto
}

interface PostFactDeleteResponse {
  /** */
  201: string
}

type PostFactDeleteResponseSuccess = PostFactDeleteResponse[201]

/**
 * tags: 品牌
 */
export function postFactDelete(option: PostFactDeleteOption, config?: AxiosRequestConfig) {
  return requester<PostFactDeleteResponseSuccess>('/fact/delete', { method: 'post', ...option }, config)
}

interface GetFactSwaggerJsonResponse {
  /** */
  200: string
}

type GetFactSwaggerJsonResponseSuccess = GetFactSwaggerJsonResponse[200]

/**
 * tags: 品牌
 */
export function getFactSwaggerJson(config?: AxiosRequestConfig) {
  return requester<GetFactSwaggerJsonResponseSuccess>('/fact/swagger.json', { method: 'get' }, config)
}

interface GetCommonGetProvinceResponse {
  /** */
  200: Array<ZdProvinceEntity>
}

type GetCommonGetProvinceResponseSuccess = GetCommonGetProvinceResponse[200]

/**
 * tags: 通用
 */
export function getCommonGetProvince(config?: AxiosRequestConfig) {
  return requester<GetCommonGetProvinceResponseSuccess>('/common/getProvince', { method: 'get' }, config)
}

interface GetCommonGetCountriesResponse {
  /** */
  200: Array<ZdCountryEntity>
}

type GetCommonGetCountriesResponseSuccess = GetCommonGetCountriesResponse[200]

/**
 * tags: 通用
 */
export function getCommonGetCountries(config?: AxiosRequestConfig) {
  return requester<GetCommonGetCountriesResponseSuccess>('/common/getCountries', { method: 'get' }, config)
}

/** request parameter type for postFactProdTypeSave */
interface PostFactProdTypeSaveOption {
  body?: FactProdTypeSaveDto
}

interface PostFactProdTypeSaveResponse {
  /** */
  201: TblFactoryProdtypeEntity
}

type PostFactProdTypeSaveResponseSuccess = PostFactProdTypeSaveResponse[201]

/**
 * tags: 目录
 */
export function postFactProdTypeSave(option: PostFactProdTypeSaveOption, config?: AxiosRequestConfig) {
  return requester<PostFactProdTypeSaveResponseSuccess>('/fact-prod-type/save', { method: 'post', ...option }, config)
}

/** request parameter type for postFactProdTypeRemove */
interface PostFactProdTypeRemoveOption {
  body?: FactProdTypeDeleteDto
}

interface PostFactProdTypeRemoveResponse {
  /** */
  201: string
}

type PostFactProdTypeRemoveResponseSuccess = PostFactProdTypeRemoveResponse[201]

/**
 * tags: 目录
 */
export function postFactProdTypeRemove(option: PostFactProdTypeRemoveOption, config?: AxiosRequestConfig) {
  return requester<PostFactProdTypeRemoveResponseSuccess>(
    '/fact-prod-type/remove',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postFactProdTypeGetTree */
interface PostFactProdTypeGetTreeOption {
  body?: GetTreeDto
}

interface PostFactProdTypeGetTreeResponse {
  /** */
  201: Array<TblFactoryProdtypeEntity>
}

type PostFactProdTypeGetTreeResponseSuccess = PostFactProdTypeGetTreeResponse[201]

/**
 * tags: 目录
 */
export function postFactProdTypeGetTree(option: PostFactProdTypeGetTreeOption, config?: AxiosRequestConfig) {
  return requester<PostFactProdTypeGetTreeResponseSuccess>(
    '/fact-prod-type/getTree',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postFactProdTypeSort */
interface PostFactProdTypeSortOption {
  body?: Array<SortDto>
}

interface PostFactProdTypeSortResponse {
  /** */
  201: Array<any>
}

type PostFactProdTypeSortResponseSuccess = PostFactProdTypeSortResponse[201]

/**
 * tags: 目录
 */
export function postFactProdTypeSort(option: PostFactProdTypeSortOption, config?: AxiosRequestConfig) {
  return requester<PostFactProdTypeSortResponseSuccess>('/fact-prod-type/sort', { method: 'post', ...option }, config)
}

interface GetIndustryGetWholeTreeResponse {
  /** */
  200: Array<TblIndustryEntity>
}

type GetIndustryGetWholeTreeResponseSuccess = GetIndustryGetWholeTreeResponse[200]

/**
 * tags: 行业分类
 */
export function getIndustryGetWholeTree(config?: AxiosRequestConfig) {
  return requester<GetIndustryGetWholeTreeResponseSuccess>('/industry/getWholeTree', { method: 'get' }, config)
}

interface GetIndustryGetListResponse {
  /** */
  200: Array<TblIndustryEntity>
}

type GetIndustryGetListResponseSuccess = GetIndustryGetListResponse[200]

/**
 * tags: 行业分类
 */
export function getIndustryGetList(config?: AxiosRequestConfig) {
  return requester<GetIndustryGetListResponseSuccess>('/industry/getList', { method: 'get' }, config)
}

/** request parameter type for postSeriesGetAll */
interface PostSeriesGetAllOption {
  body?: GetAllSeriesDto
}

interface PostSeriesGetAllResponse {
  /** */
  200: Array<SeriesEntityDto>
}

type PostSeriesGetAllResponseSuccess = PostSeriesGetAllResponse[200]

/**
 * 获取所有系列
 * 获取所有系列
 * tags: 系列
 */
export function postSeriesGetAll(option: PostSeriesGetAllOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesGetAllResponseSuccess>('/series/getAll', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesSave */
interface PostSeriesSaveOption {
  /** 用户信息 */
  header?: {
    /**
        用户信息 */
    KEY_USERINFO_IN_HTTP_HEADER?: string
  }
  body?: SeriesEntityDto
}

interface PostSeriesSaveResponse {
  /** */
  200: SeriesEntityDto
}

type PostSeriesSaveResponseSuccess = PostSeriesSaveResponse[200]

/**
 * 保存／更新系列
 * 保存／更新
 * tags: 系列
 */
export function postSeriesSave(option: PostSeriesSaveOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesSaveResponseSuccess>('/series/save', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesSort */
interface PostSeriesSortOption {
  /** 用户信息 */
  header?: {
    /**
        用户信息 */
    KEY_USERINFO_IN_HTTP_HEADER?: string
  }
  body?: SeriesSortDto
}

interface PostSeriesSortResponse {
  /** */
  200: string
}

type PostSeriesSortResponseSuccess = PostSeriesSortResponse[200]

/**
 * 更新排序
 * 更新排序
 * tags: 系列
 */
export function postSeriesSort(option: PostSeriesSortOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesSortResponseSuccess>('/series/sort', { method: 'post', ...option }, config)
}
