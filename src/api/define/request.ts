/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
 content is generated automatically by `ts-gear`. */
import { AxiosRequestConfig, http as requester } from '../http'
import type {
  AuditCreateReqDto,
  CompCreateReqDto,
  CompGroupBatchUpdateReqDto,
  CompGroupCreateReqDto,
  CompGroupIdReqDto,
  CompGroupUpdateReqDto,
  CompIdReqDto,
  CompUpdateBatchReqDto,
  CompUpdateReqDto,
  ExistNameReqDto,
  FactCreateReqDto,
  FactEntityDto,
  FactGetAllReqDto,
  FactGetByPageReqDto,
  FactGetByPageResDto,
  FactIdReqDto,
  FactProdTypeCreateReqDto,
  FactProdTypeExistNameReqDto,
  FactProdTypeFactIdReqDto,
  FactProdTypeUpdateBatchReqDto,
  FactProdTypeUpdateReqDto,
  FactRemoveIdsReqDto,
  FactUpdateReqDto,
  GetCombBulkReqDto,
  GetFactCategoryAddiResOpenDto,
  GetFactCategoryOpenDto,
  GetPcodeListReqDto,
  GetPcodeOneReqDto,
  GetSeriesIndustryReqDto,
  GetSeriesIndustryResDto,
  IdsReqDto,
  MacafeRequestDto,
  MacafeResponseDto,
  OpenFactEntityDto,
  OpenGetEffectMcodesReqDto,
  OpenGetSeriesCompsTreeResDto,
  OptBatchIdsReqDto,
  OptCreateBatchReqDto,
  OptCreateReqDto,
  OptIdReqDto,
  OptPropsIdReqDto,
  OptRelCreateBatchReqDto,
  OptRelCreateReqDto,
  OptRelEntityResDto,
  OptRelFpropIdReqDto,
  OptRelRemoveIdsReqDto,
  OptRelUpdateReqDto,
  OptUpdateBatchReqDto,
  OptUpdateReqDto,
  PropsCompIdReqDto,
  PropsCreateBatchReqDto,
  PropsCreateRefPropsReqDto,
  PropsCreateReqDto,
  PropsExistNameReqDto,
  PropsIdReqDto,
  PropsRelCreateBatchReqDto,
  PropsRelFPropIdReqDto,
  PropsUpdateBatchReqDto,
  PropsUpdateReqDto,
  PubGetListByPageResDto,
  PubGetListPageReqDto,
  PubGetMcodeReqDto,
  PubGetTreeItemDto,
  PubSaveDataReqDto,
  PubUpdateBatchReqDto,
  PubUpdateReqDto,
  SaveSeriesIndustryDto,
  SearchPcodeEntity,
  SearchSpecItemEntity,
  SeriesChangeSatusReqDto,
  SeriesCopyReqDto,
  SeriesCreateReqDto,
  SeriesEntityDto,
  SeriesExistNameReqDto,
  SeriesFidReqDto,
  SeriesGetNamePropsResDto,
  SeriesIdOpenDto,
  SeriesIdReqCompDto,
  SeriesIdReqDto,
  SeriesUpdateBatchReqDto,
  SeriesUpdateReqDto,
  SeriesUpdateStatusReqDto,
  SharedCompIdReqDto,
  TblComponentEntity,
  TblComponentEntityWithExt,
  TblComponentTypeEntity,
  TblDatapubEntity,
  TblFactoryEntity,
  TblFactoryProdtypeEntity,
  TblFactoryProdtypeEntityWithExt,
  TblIndustryEntity,
  TblPropertyEntity,
  TblPropertyEntityWithOpt,
  TblPropertyOptionEntity,
  TblPropertyProprelEntity,
  TblSeriesExtEntity,
  ZdCountryEntity,
  ZdProvinceEntity,
} from './definition'

/** @description response type for postOpenGetFactList */
interface PostOpenGetFactListResponse {
  /**
   * @description
   *
   */
  200: Array<OpenFactEntityDto>
}

type PostOpenGetFactListResponseSuccess = PostOpenGetFactListResponse[200]
/**
 * @description
 *   公开-获取品牌列表
 * @tags: 开放服务
 */
export const postOpenGetFactList = (config?: AxiosRequestConfig) =>
  requester<PostOpenGetFactListResponseSuccess>(
    '/open/getFactList',
    { method: 'post' },
    config,
  )

/** @description request parameter type for postOpenGetFactCategory */
export interface PostOpenGetFactCategoryOption {
  body: GetFactCategoryOpenDto
}

/** @description response type for postOpenGetFactCategory */
interface PostOpenGetFactCategoryResponse {
  /**
   * @description
   *
   */
  200: GetFactCategoryAddiResOpenDto
}

type PostOpenGetFactCategoryResponseSuccess =
  PostOpenGetFactCategoryResponse[200]
/**
 * @description
 *   公开-获取品牌分类
 * @tags: 开放服务
 */
export const postOpenGetFactCategory = (
  option: PostOpenGetFactCategoryOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenGetFactCategoryResponseSuccess>(
    '/open/getFactCategory',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenGetSeriesComps */
export interface PostOpenGetSeriesCompsOption {
  body: SeriesIdOpenDto
}

/** @description response type for postOpenGetSeriesComps */
interface PostOpenGetSeriesCompsResponse {
  /**
   * @description
   *
   */
  200: Array<TblComponentEntity>
}

type PostOpenGetSeriesCompsResponseSuccess = PostOpenGetSeriesCompsResponse[200]
/**
 * @description
 *   公开-获取系列下组件
 * @tags: 开放服务
 */
export const postOpenGetSeriesComps = (
  option: PostOpenGetSeriesCompsOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenGetSeriesCompsResponseSuccess>(
    '/open/getSeriesComps',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenGetSeriesCompsTree */
export interface PostOpenGetSeriesCompsTreeOption {
  body: SeriesIdOpenDto
}

/** @description response type for postOpenGetSeriesCompsTree */
interface PostOpenGetSeriesCompsTreeResponse {
  /**
   * @description
   *
   */
  200: Array<OpenGetSeriesCompsTreeResDto>
}

type PostOpenGetSeriesCompsTreeResponseSuccess =
  PostOpenGetSeriesCompsTreeResponse[200]
/**
 * @description
 *   公开-获取系列下分组组件树
 * @tags: 开放服务
 */
export const postOpenGetSeriesCompsTree = (
  option: PostOpenGetSeriesCompsTreeOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenGetSeriesCompsTreeResponseSuccess>(
    '/open/getSeriesCompsTree',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetSeriesComps */
export interface PostOpenProdGetSeriesCompsOption {
  body: SeriesIdOpenDto
}

/** @description response type for postOpenProdGetSeriesComps */
interface PostOpenProdGetSeriesCompsResponse {
  /**
   * @description
   *
   */
  200: Array<TblComponentEntity>
}

type PostOpenProdGetSeriesCompsResponseSuccess =
  PostOpenProdGetSeriesCompsResponse[200]
/**
 * @description
 *   公开-获取系列下组件-正式
 * @tags: 开放服务
 */
export const postOpenProdGetSeriesComps = (
  option: PostOpenProdGetSeriesCompsOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetSeriesCompsResponseSuccess>(
    '/open/prod/getSeriesComps',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetSeriesCompsTreeProd */
export interface PostOpenProdGetSeriesCompsTreeProdOption {
  body: SeriesIdOpenDto
}

/** @description response type for postOpenProdGetSeriesCompsTreeProd */
interface PostOpenProdGetSeriesCompsTreeProdResponse {
  /**
   * @description
   *
   */
  200: Array<OpenGetSeriesCompsTreeResDto>
}

type PostOpenProdGetSeriesCompsTreeProdResponseSuccess =
  PostOpenProdGetSeriesCompsTreeProdResponse[200]
/**
 * @description
 *   公开-获取系列下分组组件树-正式
 * @tags: 开放服务
 */
export const postOpenProdGetSeriesCompsTreeProd = (
  option: PostOpenProdGetSeriesCompsTreeProdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetSeriesCompsTreeProdResponseSuccess>(
    '/open/prod/getSeriesCompsTreeProd',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenGetEffectMcodes */
export interface PostOpenGetEffectMcodesOption {
  body: OpenGetEffectMcodesReqDto
}

/** @description response type for postOpenGetEffectMcodes */
interface PostOpenGetEffectMcodesResponse {
  /**
   * @description
   *
   */
  200: Array<string>
}

type PostOpenGetEffectMcodesResponseSuccess =
  PostOpenGetEffectMcodesResponse[200]
/**
 * @description
 *   公开-通途-获取选项值影响的物料号
 * @tags: 开放服务
 */
export const postOpenGetEffectMcodes = (
  option: PostOpenGetEffectMcodesOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenGetEffectMcodesResponseSuccess>(
    '/open/getEffectMcodes',
    { method: 'post', ...option },
    config,
  )

/** @description response type for postOpenProdGetFactList */
interface PostOpenProdGetFactListResponse {
  /**
   * @description
   *
   */
  200: Array<OpenFactEntityDto>
}

type PostOpenProdGetFactListResponseSuccess =
  PostOpenProdGetFactListResponse[200]
/**
 * @description
 *   公开-获取品牌列表-正式库
 * @tags: 开放服务
 */
export const postOpenProdGetFactList = (config?: AxiosRequestConfig) =>
  requester<PostOpenProdGetFactListResponseSuccess>(
    '/open/prod/getFactList',
    { method: 'post' },
    config,
  )

/** @description request parameter type for postOpenProdGetFactCategory */
export interface PostOpenProdGetFactCategoryOption {
  body: GetFactCategoryOpenDto
}

/** @description response type for postOpenProdGetFactCategory */
interface PostOpenProdGetFactCategoryResponse {
  /**
   * @description
   *
   */
  200: GetFactCategoryAddiResOpenDto
}

type PostOpenProdGetFactCategoryResponseSuccess =
  PostOpenProdGetFactCategoryResponse[200]
/**
 * @description
 *   公开-获取品牌分类-正式库
 * @tags: 开放服务
 */
export const postOpenProdGetFactCategory = (
  option: PostOpenProdGetFactCategoryOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetFactCategoryResponseSuccess>(
    '/open/prod/getFactCategory',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetPcodeOne */
export interface PostOpenProdGetPcodeOneOption {
  body: GetPcodeOneReqDto
}

/** @description response type for postOpenProdGetPcodeOne */
interface PostOpenProdGetPcodeOneResponse {
  /**
   * @description
   *
   */
  200: SearchPcodeEntity
}

type PostOpenProdGetPcodeOneResponseSuccess =
  PostOpenProdGetPcodeOneResponse[200]
/**
 * @description
 *   获取规格(精准)-正式库
 * @tags: 开放服务
 */
export const postOpenProdGetPcodeOne = (
  option: PostOpenProdGetPcodeOneOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetPcodeOneResponseSuccess>(
    '/open/prod/getPcodeOne',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetPcodeList */
export interface PostOpenProdGetPcodeListOption {
  body: GetPcodeListReqDto
}

/** @description response type for postOpenProdGetPcodeList */
interface PostOpenProdGetPcodeListResponse {
  /**
   * @description
   *
   */
  200: Array<SearchPcodeEntity>
}

type PostOpenProdGetPcodeListResponseSuccess =
  PostOpenProdGetPcodeListResponse[200]
/**
 * @description
 *   获取规格(模糊)-正式库
 * @tags: 开放服务
 */
export const postOpenProdGetPcodeList = (
  option: PostOpenProdGetPcodeListOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetPcodeListResponseSuccess>(
    '/open/prod/getPcodeList',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetComponentList */
export interface PostOpenProdGetComponentListOption {
  body: SeriesIdOpenDto
}

/** @description response type for postOpenProdGetComponentList */
interface PostOpenProdGetComponentListResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOpenProdGetComponentListResponseSuccess =
  PostOpenProdGetComponentListResponse[200]
/**
 * @description
 *   获取系列下组件列表-正式库
 * @tags: 开放服务
 */
export const postOpenProdGetComponentList = (
  option: PostOpenProdGetComponentListOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetComponentListResponseSuccess>(
    '/open/prod/getComponentList',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetDefineData */
export interface PostOpenProdGetDefineDataOption {
  body: SeriesIdOpenDto
}

/** @description response type for postOpenProdGetDefineData */
interface PostOpenProdGetDefineDataResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOpenProdGetDefineDataResponseSuccess =
  PostOpenProdGetDefineDataResponse[200]
/**
 * @description
 *   获取系列下定义数据-正式库
 * @tags: 开放服务
 */
export const postOpenProdGetDefineData = (
  option: PostOpenProdGetDefineDataOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetDefineDataResponseSuccess>(
    '/open/prod/getDefineData',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetCombList */
export interface PostOpenProdGetCombListOption {
  body: GetCombBulkReqDto
}

/** @description response type for postOpenProdGetCombList */
interface PostOpenProdGetCombListResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOpenProdGetCombListResponseSuccess =
  PostOpenProdGetCombListResponse[200]
/**
 * @description
 *   获取系列下价格组根据价格pkey-正式库
 * @tags: 开放服务
 */
export const postOpenProdGetCombList = (
  option: PostOpenProdGetCombListOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetCombListResponseSuccess>(
    '/open/prod/getCombList',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetCombBulkByCompId */
export interface PostOpenProdGetCombBulkByCompIdOption {
  body: CompIdReqDto
}

/** @description response type for postOpenProdGetCombBulkByCompId */
interface PostOpenProdGetCombBulkByCompIdResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOpenProdGetCombBulkByCompIdResponseSuccess =
  PostOpenProdGetCombBulkByCompIdResponse[200]
/**
 * @description
 *   获取组件下所有价格组-正式库
 * @tags: 开放服务
 */
export const postOpenProdGetCombBulkByCompId = (
  option: PostOpenProdGetCombBulkByCompIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetCombBulkByCompIdResponseSuccess>(
    '/open/prod/getCombBulkByCompId',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetCombPriceList */
export interface PostOpenProdGetCombPriceListOption {
  body: GetCombBulkReqDto
}

/** @description response type for postOpenProdGetCombPriceList */
interface PostOpenProdGetCombPriceListResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOpenProdGetCombPriceListResponseSuccess =
  PostOpenProdGetCombPriceListResponse[200]
/**
 * @description
 *   根据价格pkey获取价格-正式库
 * @tags: 开放服务
 */
export const postOpenProdGetCombPriceList = (
  option: PostOpenProdGetCombPriceListOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetCombPriceListResponseSuccess>(
    '/open/prod/getCombPriceList',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetCompInfoByCkey */
export interface PostOpenProdGetCompInfoByCkeyOption {
  body: GetCombBulkReqDto
}

/** @description response type for postOpenProdGetCompInfoByCkey */
interface PostOpenProdGetCompInfoByCkeyResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOpenProdGetCompInfoByCkeyResponseSuccess =
  PostOpenProdGetCompInfoByCkeyResponse[200]
/**
 * @description
 *   根据价格pkey获取组件数据-正式库
 * @tags: 开放服务
 */
export const postOpenProdGetCompInfoByCkey = (
  option: PostOpenProdGetCompInfoByCkeyOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetCompInfoByCkeyResponseSuccess>(
    '/open/prod/getCompInfoByCkey',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOpenProdGetState */
export interface PostOpenProdGetStateOption {
  body: MacafeRequestDto
}

/** @description response type for postOpenProdGetState */
interface PostOpenProdGetStateResponse {
  /**
   * @description
   *
   */
  200: MacafeResponseDto
}

type PostOpenProdGetStateResponseSuccess = PostOpenProdGetStateResponse[200]
/**
 * @description
 *   根据pkey获取规格数据
 * @tags: 开放服务
 */
export const postOpenProdGetState = (
  option: PostOpenProdGetStateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOpenProdGetStateResponseSuccess>(
    '/open/prod/getState',
    { method: 'post', ...option },
    config,
  )

/** @description response type for postCommonGetProvince */
interface PostCommonGetProvinceResponse {
  /**
   * @description
   *
   */
  200: Array<ZdProvinceEntity>
}

type PostCommonGetProvinceResponseSuccess = PostCommonGetProvinceResponse[200]
/**
 * @description
 *   获取省份
 * @tags: 通用
 */
export const postCommonGetProvince = (config?: AxiosRequestConfig) =>
  requester<PostCommonGetProvinceResponseSuccess>(
    '/common/getProvince',
    { method: 'post' },
    config,
  )

/** @description response type for postCommonGetCountryList */
interface PostCommonGetCountryListResponse {
  /**
   * @description
   *
   */
  200: Array<ZdCountryEntity>
}

type PostCommonGetCountryListResponseSuccess =
  PostCommonGetCountryListResponse[200]
/**
 * @description
 *   获取国家
 * @tags: 通用
 */
export const postCommonGetCountryList = (config?: AxiosRequestConfig) =>
  requester<PostCommonGetCountryListResponseSuccess>(
    '/common/getCountryList',
    { method: 'post' },
    config,
  )

/** @description request parameter type for postFactGetByPage */
export interface PostFactGetByPageOption {
  body: FactGetByPageReqDto
}

/** @description response type for postFactGetByPage */
interface PostFactGetByPageResponse {
  /**
   * @description
   *
   */
  200: FactGetByPageResDto
}

type PostFactGetByPageResponseSuccess = PostFactGetByPageResponse[200]
/**
 * @description
 *   分页获取品牌
 * @tags: 品牌
 */
export const postFactGetByPage = (
  option: PostFactGetByPageOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactGetByPageResponseSuccess>(
    '/fact/getByPage',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactGetAll */
export interface PostFactGetAllOption {
  body: FactGetAllReqDto
}

/** @description response type for postFactGetAll */
interface PostFactGetAllResponse {
  /**
   * @description
   *
   */
  200: Array<TblFactoryEntity>
}

type PostFactGetAllResponseSuccess = PostFactGetAllResponse[200]
/**
 * @description
 *   获取全部品牌
 * @tags: 品牌
 */
export const postFactGetAll = (
  option: PostFactGetAllOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactGetAllResponseSuccess>(
    '/fact/getAll',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactGetById */
export interface PostFactGetByIdOption {
  body: FactIdReqDto
}

/** @description response type for postFactGetById */
interface PostFactGetByIdResponse {
  /**
   * @description
   *
   */
  200: FactEntityDto
}

type PostFactGetByIdResponseSuccess = PostFactGetByIdResponse[200]
/**
 * @description
 *   获取单个品牌
 * @tags: 品牌
 */
export const postFactGetById = (
  option: PostFactGetByIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactGetByIdResponseSuccess>(
    '/fact/getById',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactCreate */
export interface PostFactCreateOption {
  body: FactCreateReqDto
}

/** @description response type for postFactCreate */
interface PostFactCreateResponse {
  /**
   * @description
   *
   */
  200: FactEntityDto
}

type PostFactCreateResponseSuccess = PostFactCreateResponse[200]
/**
 * @description
 *   保存品牌
 * @tags: 品牌
 */
export const postFactCreate = (
  option: PostFactCreateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactCreateResponseSuccess>(
    '/fact/create',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactUpdate */
export interface PostFactUpdateOption {
  body: FactUpdateReqDto
}

/** @description response type for postFactUpdate */
interface PostFactUpdateResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostFactUpdateResponseSuccess = PostFactUpdateResponse[200]
/**
 * @description
 *   更新品牌
 * @tags: 品牌
 */
export const postFactUpdate = (
  option: PostFactUpdateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactUpdateResponseSuccess>(
    '/fact/update',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactRemove */
export interface PostFactRemoveOption {
  body: FactRemoveIdsReqDto
}

/** @description response type for postFactRemove */
interface PostFactRemoveResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostFactRemoveResponseSuccess = PostFactRemoveResponse[200]
/**
 * @description
 *   删除品牌
 * @tags: 品牌
 */
export const postFactRemove = (
  option: PostFactRemoveOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactRemoveResponseSuccess>(
    '/fact/remove',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactExistName */
export interface PostFactExistNameOption {
  body: ExistNameReqDto
}

/** @description response type for postFactExistName */
interface PostFactExistNameResponse {
  /**
   * @description
   *
   */
  200: boolean
}

type PostFactExistNameResponseSuccess = PostFactExistNameResponse[200]
/**
 * @description
 *   品牌名称是否存在
 * @tags: 品牌
 */
export const postFactExistName = (
  option: PostFactExistNameOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactExistNameResponseSuccess>(
    '/fact/existName',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactExistCategory */
export interface PostFactExistCategoryOption {
  body: FactIdReqDto
}

/** @description response type for postFactExistCategory */
interface PostFactExistCategoryResponse {
  /**
   * @description
   *
   */
  200: boolean
}

type PostFactExistCategoryResponseSuccess = PostFactExistCategoryResponse[200]
/**
 * @description
 *   品牌目录是否存在
 * @tags: 品牌
 */
export const postFactExistCategory = (
  option: PostFactExistCategoryOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactExistCategoryResponseSuccess>(
    '/fact/existCategory',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactProdTypeGetTree */
export interface PostFactProdTypeGetTreeOption {
  body: FactProdTypeFactIdReqDto
}

/** @description response type for postFactProdTypeGetTree */
interface PostFactProdTypeGetTreeResponse {
  /**
   * @description
   *
   */
  200: Array<TblFactoryProdtypeEntityWithExt>
}

type PostFactProdTypeGetTreeResponseSuccess =
  PostFactProdTypeGetTreeResponse[200]
/**
 * @description
 *   获得目录树
 * @tags: 目录
 */
export const postFactProdTypeGetTree = (
  option: PostFactProdTypeGetTreeOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactProdTypeGetTreeResponseSuccess>(
    '/factProdType/getTree',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactProdTypeGetByFactoryId */
export interface PostFactProdTypeGetByFactoryIdOption {
  body: FactProdTypeFactIdReqDto
}

/** @description response type for postFactProdTypeGetByFactoryId */
interface PostFactProdTypeGetByFactoryIdResponse {
  /**
   * @description
   *
   */
  200: Array<TblFactoryProdtypeEntity>
}

type PostFactProdTypeGetByFactoryIdResponseSuccess =
  PostFactProdTypeGetByFactoryIdResponse[200]
/**
 * @description
 *   获得所有目录
 * @tags: 目录
 */
export const postFactProdTypeGetByFactoryId = (
  option: PostFactProdTypeGetByFactoryIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactProdTypeGetByFactoryIdResponseSuccess>(
    '/factProdType/getByFactoryId',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactProdTypeCreate */
export interface PostFactProdTypeCreateOption {
  body: FactProdTypeCreateReqDto
}

/** @description response type for postFactProdTypeCreate */
interface PostFactProdTypeCreateResponse {
  /**
   * @description
   *
   */
  200: TblFactoryProdtypeEntity
}

type PostFactProdTypeCreateResponseSuccess = PostFactProdTypeCreateResponse[200]
/**
 * @description
 *   保存目录
 * @tags: 目录
 */
export const postFactProdTypeCreate = (
  option: PostFactProdTypeCreateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactProdTypeCreateResponseSuccess>(
    '/factProdType/create',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactProdTypeUpdate */
export interface PostFactProdTypeUpdateOption {
  body: FactProdTypeUpdateReqDto
}

/** @description response type for postFactProdTypeUpdate */
interface PostFactProdTypeUpdateResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostFactProdTypeUpdateResponseSuccess = PostFactProdTypeUpdateResponse[200]
/**
 * @description
 *   更新目录
 * @tags: 目录
 */
export const postFactProdTypeUpdate = (
  option: PostFactProdTypeUpdateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactProdTypeUpdateResponseSuccess>(
    '/factProdType/update',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactProdTypeRemove */
export interface PostFactProdTypeRemoveOption {
  body: IdsReqDto
}

/** @description response type for postFactProdTypeRemove */
interface PostFactProdTypeRemoveResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostFactProdTypeRemoveResponseSuccess = PostFactProdTypeRemoveResponse[200]
/**
 * @description
 *   删除目录
 * @tags: 目录
 */
export const postFactProdTypeRemove = (
  option: PostFactProdTypeRemoveOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactProdTypeRemoveResponseSuccess>(
    '/factProdType/remove',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactProdTypeUpdateBatch */
export interface PostFactProdTypeUpdateBatchOption {
  body: FactProdTypeUpdateBatchReqDto
}

/** @description response type for postFactProdTypeUpdateBatch */
interface PostFactProdTypeUpdateBatchResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostFactProdTypeUpdateBatchResponseSuccess =
  PostFactProdTypeUpdateBatchResponse[200]
/**
 * @description
 *   批量更新
 * @tags: 目录
 */
export const postFactProdTypeUpdateBatch = (
  option: PostFactProdTypeUpdateBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactProdTypeUpdateBatchResponseSuccess>(
    '/factProdType/updateBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postFactProdTypeExistName */
export interface PostFactProdTypeExistNameOption {
  body: FactProdTypeExistNameReqDto
}

/** @description response type for postFactProdTypeExistName */
interface PostFactProdTypeExistNameResponse {
  /**
   * @description
   *
   */
  200: boolean
}

type PostFactProdTypeExistNameResponseSuccess =
  PostFactProdTypeExistNameResponse[200]
/**
 * @description
 *   是否存在同名目录
 * @tags: 目录
 */
export const postFactProdTypeExistName = (
  option: PostFactProdTypeExistNameOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostFactProdTypeExistNameResponseSuccess>(
    '/factProdType/existName',
    { method: 'post', ...option },
    config,
  )

/** @description response type for postIndustryGetWholeTree */
interface PostIndustryGetWholeTreeResponse {
  /**
   * @description
   *
   */
  200: Array<TblIndustryEntity>
}

type PostIndustryGetWholeTreeResponseSuccess =
  PostIndustryGetWholeTreeResponse[200]
/**
 * @description
 *   获取行业分类树
 * @tags: 行业分类
 */
export const postIndustryGetWholeTree = (config?: AxiosRequestConfig) =>
  requester<PostIndustryGetWholeTreeResponseSuccess>(
    '/industry/getWholeTree',
    { method: 'post' },
    config,
  )

/** @description response type for postIndustryGetList */
interface PostIndustryGetListResponse {
  /**
   * @description
   *
   */
  200: Array<TblIndustryEntity>
}

type PostIndustryGetListResponseSuccess = PostIndustryGetListResponse[200]
/**
 * @description
 *   获取所有行业
 * @tags: 行业分类
 */
export const postIndustryGetList = (config?: AxiosRequestConfig) =>
  requester<PostIndustryGetListResponseSuccess>(
    '/industry/getList',
    { method: 'post' },
    config,
  )

/** @description request parameter type for postSeriesGetAll */
export interface PostSeriesGetAllOption {
  body: SeriesFidReqDto
}

/** @description response type for postSeriesGetAll */
interface PostSeriesGetAllResponse {
  /**
   * @description
   *
   */
  200: Array<SeriesEntityDto>
}

type PostSeriesGetAllResponseSuccess = PostSeriesGetAllResponse[200]
/**
 * @description
 *   获取所有系列
 * @tags: 系列
 */
export const postSeriesGetAll = (
  option: PostSeriesGetAllOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesGetAllResponseSuccess>(
    '/series/getAll',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesGetById */
export interface PostSeriesGetByIdOption {
  body: SeriesIdReqDto
}

/** @description response type for postSeriesGetById */
interface PostSeriesGetByIdResponse {
  /**
   * @description
   *
   */
  200: SeriesEntityDto
}

type PostSeriesGetByIdResponseSuccess = PostSeriesGetByIdResponse[200]
/**
 * @description
 *   获取系列
 * @tags: 系列
 */
export const postSeriesGetById = (
  option: PostSeriesGetByIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesGetByIdResponseSuccess>(
    '/series/getById',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesCreate */
export interface PostSeriesCreateOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: SeriesCreateReqDto
}

/** @description response type for postSeriesCreate */
interface PostSeriesCreateResponse {
  /**
   * @description
   *
   */
  200: SeriesEntityDto
}

type PostSeriesCreateResponseSuccess = PostSeriesCreateResponse[200]
/**
 * @description
 *   保存系列
 * @tags: 系列
 */
export const postSeriesCreate = (
  option: PostSeriesCreateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesCreateResponseSuccess>(
    '/series/create',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesUpdateSeriesStatus */
export interface PostSeriesUpdateSeriesStatusOption {
  body: SeriesUpdateStatusReqDto
}

/** @description response type for postSeriesUpdateSeriesStatus */
interface PostSeriesUpdateSeriesStatusResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostSeriesUpdateSeriesStatusResponseSuccess =
  PostSeriesUpdateSeriesStatusResponse[200]
/**
 * @description
 *   更新系列启用、停产、默认状态
 * @tags: 系列
 */
export const postSeriesUpdateSeriesStatus = (
  option: PostSeriesUpdateSeriesStatusOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesUpdateSeriesStatusResponseSuccess>(
    '/series/updateSeriesStatus',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesUpdate */
export interface PostSeriesUpdateOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: SeriesUpdateReqDto
}

/** @description response type for postSeriesUpdate */
interface PostSeriesUpdateResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostSeriesUpdateResponseSuccess = PostSeriesUpdateResponse[200]
/**
 * @description
 *   更新系列
 * @tags: 系列
 */
export const postSeriesUpdate = (
  option: PostSeriesUpdateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesUpdateResponseSuccess>(
    '/series/update',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesUpdateBatch */
export interface PostSeriesUpdateBatchOption {
  body: SeriesUpdateBatchReqDto
}

/** @description response type for postSeriesUpdateBatch */
interface PostSeriesUpdateBatchResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostSeriesUpdateBatchResponseSuccess = PostSeriesUpdateBatchResponse[200]
/**
 * @description
 *   批量更新（系列树排序用）
 * @tags: 系列
 */
export const postSeriesUpdateBatch = (
  option: PostSeriesUpdateBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesUpdateBatchResponseSuccess>(
    '/series/updateBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesRemove */
export interface PostSeriesRemoveOption {
  body: IdsReqDto
}

/** @description response type for postSeriesRemove */
interface PostSeriesRemoveResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostSeriesRemoveResponseSuccess = PostSeriesRemoveResponse[200]
/**
 * @description
 *   删除系列
 * @tags: 系列
 */
export const postSeriesRemove = (
  option: PostSeriesRemoveOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesRemoveResponseSuccess>(
    '/series/remove',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesRemoveById */
export interface PostSeriesRemoveByIdOption {
  body: SeriesIdReqDto
}

/** @description response type for postSeriesRemoveById */
interface PostSeriesRemoveByIdResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostSeriesRemoveByIdResponseSuccess = PostSeriesRemoveByIdResponse[200]
/**
 * @description
 *   删除单个系列(如果错误消息是 需审批 需提示审批)
 * @tags: 系列
 */
export const postSeriesRemoveById = (
  option: PostSeriesRemoveByIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesRemoveByIdResponseSuccess>(
    '/series/removeById',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesIsAuditBeforeDelete */
export interface PostSeriesIsAuditBeforeDeleteOption {
  body: SeriesIdReqDto
}

/** @description response type for postSeriesIsAuditBeforeDelete */
interface PostSeriesIsAuditBeforeDeleteResponse {
  /**
   * @description
   *
   */
  200: boolean
}

type PostSeriesIsAuditBeforeDeleteResponseSuccess =
  PostSeriesIsAuditBeforeDeleteResponse[200]
/**
 * @description
 *   删除系列是否要审批
 * @tags: 系列
 */
export const postSeriesIsAuditBeforeDelete = (
  option: PostSeriesIsAuditBeforeDeleteOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesIsAuditBeforeDeleteResponseSuccess>(
    '/series/isAuditBeforeDelete',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesGetSeriesIndustry */
export interface PostSeriesGetSeriesIndustryOption {
  body: GetSeriesIndustryReqDto
}

/** @description response type for postSeriesGetSeriesIndustry */
interface PostSeriesGetSeriesIndustryResponse {
  /**
   * @description
   *
   */
  200: Array<GetSeriesIndustryResDto>
}

type PostSeriesGetSeriesIndustryResponseSuccess =
  PostSeriesGetSeriesIndustryResponse[200]
/**
 * @description
 *   获取系列行业分类
 * @tags: 系列
 */
export const postSeriesGetSeriesIndustry = (
  option: PostSeriesGetSeriesIndustryOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesGetSeriesIndustryResponseSuccess>(
    '/series/getSeriesIndustry',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesSaveSeriesIndustry */
export interface PostSeriesSaveSeriesIndustryOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: SaveSeriesIndustryDto
}

/** @description response type for postSeriesSaveSeriesIndustry */
interface PostSeriesSaveSeriesIndustryResponse {
  /**
   * @description
   *
   */
  200: Array<GetSeriesIndustryResDto>
}

type PostSeriesSaveSeriesIndustryResponseSuccess =
  PostSeriesSaveSeriesIndustryResponse[200]
/**
 * @description
 *   保存系列行业关系
 * @tags: 系列
 */
export const postSeriesSaveSeriesIndustry = (
  option: PostSeriesSaveSeriesIndustryOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesSaveSeriesIndustryResponseSuccess>(
    '/series/saveSeriesIndustry',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesGetNameProps */
export interface PostSeriesGetNamePropsOption {
  body: GetSeriesIndustryReqDto
}

/** @description response type for postSeriesGetNameProps */
interface PostSeriesGetNamePropsResponse {
  /**
   * @description
   *
   */
  200: Array<SeriesGetNamePropsResDto>
}

type PostSeriesGetNamePropsResponseSuccess = PostSeriesGetNamePropsResponse[200]
/**
 * @description
 *   获取系列下系列命名相关属性
 * @tags: 系列
 */
export const postSeriesGetNameProps = (
  option: PostSeriesGetNamePropsOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesGetNamePropsResponseSuccess>(
    '/series/getNameProps',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesGetAllProps */
export interface PostSeriesGetAllPropsOption {
  body: GetSeriesIndustryReqDto
}

/** @description response type for postSeriesGetAllProps */
interface PostSeriesGetAllPropsResponse {
  /**
   * @description
   *
   */
  200: Array<TblPropertyEntity>
}

type PostSeriesGetAllPropsResponseSuccess = PostSeriesGetAllPropsResponse[200]
/**
 * @description
 *   获取系列下系列所有属性
 * @tags: 系列
 */
export const postSeriesGetAllProps = (
  option: PostSeriesGetAllPropsOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesGetAllPropsResponseSuccess>(
    '/series/getAllProps',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesExistSameName */
export interface PostSeriesExistSameNameOption {
  body: SeriesExistNameReqDto
}

/** @description response type for postSeriesExistSameName */
interface PostSeriesExistSameNameResponse {
  /**
   * @description
   *
   */
  200: boolean
}

type PostSeriesExistSameNameResponseSuccess =
  PostSeriesExistSameNameResponse[200]
/**
 * @description
 *   品牌下是否存在相同名称系列
 * @tags: 系列
 */
export const postSeriesExistSameName = (
  option: PostSeriesExistSameNameOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesExistSameNameResponseSuccess>(
    '/series/existSameName',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesGetSeriesStatus */
export interface PostSeriesGetSeriesStatusOption {
  body: SeriesIdReqDto
}

/** @description response type for postSeriesGetSeriesStatus */
interface PostSeriesGetSeriesStatusResponse {
  /**
   * @description
   *
   */
  200: TblSeriesExtEntity
}

type PostSeriesGetSeriesStatusResponseSuccess =
  PostSeriesGetSeriesStatusResponse[200]
/**
 * @description
 *   获取当前系列状态
 * @tags: 系列
 */
export const postSeriesGetSeriesStatus = (
  option: PostSeriesGetSeriesStatusOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesGetSeriesStatusResponseSuccess>(
    '/series/getSeriesStatus',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesChangeSeriesStatus */
export interface PostSeriesChangeSeriesStatusOption {
  body: SeriesChangeSatusReqDto
}

/** @description response type for postSeriesChangeSeriesStatus */
interface PostSeriesChangeSeriesStatusResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostSeriesChangeSeriesStatusResponseSuccess =
  PostSeriesChangeSeriesStatusResponse[200]
/**
 * @description
 *   修改系列状态
 * @tags: 系列
 */
export const postSeriesChangeSeriesStatus = (
  option: PostSeriesChangeSeriesStatusOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesChangeSeriesStatusResponseSuccess>(
    '/series/changeSeriesStatus',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesGetSeriesCompTree */
export interface PostSeriesGetSeriesCompTreeOption {
  body: SeriesIdReqDto
}

/** @description response type for postSeriesGetSeriesCompTree */
interface PostSeriesGetSeriesCompTreeResponse {
  /**
   * @description
   *
   */
  200: Array<OpenGetSeriesCompsTreeResDto>
}

type PostSeriesGetSeriesCompTreeResponseSuccess =
  PostSeriesGetSeriesCompTreeResponse[200]
/**
 * @description
 *   获取系列下组件分组树
 * @tags: 系列
 */
export const postSeriesGetSeriesCompTree = (
  option: PostSeriesGetSeriesCompTreeOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesGetSeriesCompTreeResponseSuccess>(
    '/series/getSeriesCompTree',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postSeriesCopySeries */
export interface PostSeriesCopySeriesOption {
  body: SeriesCopyReqDto
}

/** @description response type for postSeriesCopySeries */
interface PostSeriesCopySeriesResponse {
  /**
   * @description
   *
   */
  200: SeriesEntityDto
}

type PostSeriesCopySeriesResponseSuccess = PostSeriesCopySeriesResponse[200]
/**
 * @description
 *   复制系列
 * @tags: 系列
 */
export const postSeriesCopySeries = (
  option: PostSeriesCopySeriesOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostSeriesCopySeriesResponseSuccess>(
    '/series/copySeries',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompGetAllGroupBySid */
export interface PostCompGetAllGroupBySidOption {
  body: SeriesIdReqCompDto
}

/** @description response type for postCompGetAllGroupBySid */
interface PostCompGetAllGroupBySidResponse {
  /**
   * @description
   *
   */
  200: Array<TblComponentTypeEntity>
}

type PostCompGetAllGroupBySidResponseSuccess =
  PostCompGetAllGroupBySidResponse[200]
/**
 * @description
 *   获取系列下所有组件分组
 * @tags: 组件
 */
export const postCompGetAllGroupBySid = (
  option: PostCompGetAllGroupBySidOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompGetAllGroupBySidResponseSuccess>(
    '/comp/getAllGroupBySid',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompGetGroup */
export interface PostCompGetGroupOption {
  body: CompGroupIdReqDto
}

/** @description response type for postCompGetGroup */
interface PostCompGetGroupResponse {
  /**
   * @description
   *
   */
  200: TblComponentTypeEntity
}

type PostCompGetGroupResponseSuccess = PostCompGetGroupResponse[200]
/**
 * @description
 *   获取组件分组
 * @tags: 组件
 */
export const postCompGetGroup = (
  option: PostCompGetGroupOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompGetGroupResponseSuccess>(
    '/comp/getGroup',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompGetGroupBatch */
export interface PostCompGetGroupBatchOption {
  body: IdsReqDto
}

/** @description response type for postCompGetGroupBatch */
interface PostCompGetGroupBatchResponse {
  /**
   * @description
   *
   */
  200: Array<TblComponentTypeEntity>
}

type PostCompGetGroupBatchResponseSuccess = PostCompGetGroupBatchResponse[200]
/**
 * @description
 *   批量获取组件分组
 * @tags: 组件
 */
export const postCompGetGroupBatch = (
  option: PostCompGetGroupBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompGetGroupBatchResponseSuccess>(
    '/comp/getGroupBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompCreateGroup */
export interface PostCompCreateGroupOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: CompGroupCreateReqDto
}

/** @description response type for postCompCreateGroup */
interface PostCompCreateGroupResponse {
  /**
   * @description
   *
   */
  200: TblComponentTypeEntity
}

type PostCompCreateGroupResponseSuccess = PostCompCreateGroupResponse[200]
/**
 * @description
 *   保存分组
 * @tags: 组件
 */
export const postCompCreateGroup = (
  option: PostCompCreateGroupOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompCreateGroupResponseSuccess>(
    '/comp/createGroup',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompUpdateGroup */
export interface PostCompUpdateGroupOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: CompGroupUpdateReqDto
}

/** @description response type for postCompUpdateGroup */
interface PostCompUpdateGroupResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostCompUpdateGroupResponseSuccess = PostCompUpdateGroupResponse[200]
/**
 * @description
 *   更新分组
 * @tags: 组件
 */
export const postCompUpdateGroup = (
  option: PostCompUpdateGroupOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompUpdateGroupResponseSuccess>(
    '/comp/updateGroup',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompRemoveGroup */
export interface PostCompRemoveGroupOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: IdsReqDto
}

/** @description response type for postCompRemoveGroup */
interface PostCompRemoveGroupResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostCompRemoveGroupResponseSuccess = PostCompRemoveGroupResponse[200]
/**
 * @description
 *   批量删除分组信息
 * @tags: 组件
 */
export const postCompRemoveGroup = (
  option: PostCompRemoveGroupOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompRemoveGroupResponseSuccess>(
    '/comp/removeGroup',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompSaveBatchGroup */
export interface PostCompSaveBatchGroupOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: CompGroupBatchUpdateReqDto
}

/** @description response type for postCompSaveBatchGroup */
interface PostCompSaveBatchGroupResponse {
  /**
   * @description
   *
   */
  200: string
}

type PostCompSaveBatchGroupResponseSuccess = PostCompSaveBatchGroupResponse[200]
/**
 * @description
 *   批量更新分组信息
 * @tags: 组件
 */
export const postCompSaveBatchGroup = (
  option: PostCompSaveBatchGroupOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompSaveBatchGroupResponseSuccess>(
    '/comp/saveBatchGroup',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompGetAll */
export interface PostCompGetAllOption {
  body: SeriesIdReqCompDto
}

/** @description response type for postCompGetAll */
interface PostCompGetAllResponse {
  /**
   * @description
   *
   */
  200: Array<TblComponentEntityWithExt>
}

type PostCompGetAllResponseSuccess = PostCompGetAllResponse[200]
/**
 * @description
 *   获取系列下所有组件
 * @tags: 组件
 */
export const postCompGetAll = (
  option: PostCompGetAllOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompGetAllResponseSuccess>(
    '/comp/getAll',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompGetById */
export interface PostCompGetByIdOption {
  body: CompIdReqDto
}

/** @description response type for postCompGetById */
interface PostCompGetByIdResponse {
  /**
   * @description
   *
   */
  200: TblComponentEntity
}

type PostCompGetByIdResponseSuccess = PostCompGetByIdResponse[200]
/**
 * @description
 *   获取组件
 * @tags: 组件
 */
export const postCompGetById = (
  option: PostCompGetByIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompGetByIdResponseSuccess>(
    '/comp/getById',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompCreate */
export interface PostCompCreateOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: CompCreateReqDto
}

/** @description response type for postCompCreate */
interface PostCompCreateResponse {
  /**
   * @description
   *
   */
  200: TblComponentEntity
}

type PostCompCreateResponseSuccess = PostCompCreateResponse[200]
/**
 * @description
 *   保存组件
 * @tags: 组件
 */
export const postCompCreate = (
  option: PostCompCreateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompCreateResponseSuccess>(
    '/comp/create',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompUpdate */
export interface PostCompUpdateOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: CompUpdateReqDto
}

/** @description response type for postCompUpdate */
interface PostCompUpdateResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostCompUpdateResponseSuccess = PostCompUpdateResponse[200]
/**
 * @description
 *   更新组件
 * @tags: 组件
 */
export const postCompUpdate = (
  option: PostCompUpdateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompUpdateResponseSuccess>(
    '/comp/update',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompRemove */
export interface PostCompRemoveOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: IdsReqDto
}

/** @description response type for postCompRemove */
interface PostCompRemoveResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostCompRemoveResponseSuccess = PostCompRemoveResponse[200]
/**
 * @description
 *   删除组件
 * @tags: 组件
 */
export const postCompRemove = (
  option: PostCompRemoveOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompRemoveResponseSuccess>(
    '/comp/remove',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postCompUpdateBatch */
export interface PostCompUpdateBatchOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: CompUpdateBatchReqDto
}

/** @description response type for postCompUpdateBatch */
interface PostCompUpdateBatchResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostCompUpdateBatchResponseSuccess = PostCompUpdateBatchResponse[200]
/**
 * @description
 *   批量更新组件信息
 * @tags: 组件
 */
export const postCompUpdateBatch = (
  option: PostCompUpdateBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostCompUpdateBatchResponseSuccess>(
    '/comp/updateBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsGetByCombId */
export interface PostPropsGetByCombIdOption {
  body: PropsCompIdReqDto
}

/** @description response type for postPropsGetByCombId */
interface PostPropsGetByCombIdResponse {
  /**
   * @description
   *
   */
  200: Array<TblPropertyEntityWithOpt>
}

type PostPropsGetByCombIdResponseSuccess = PostPropsGetByCombIdResponse[200]
/**
 * @description
 *   获取组件下所有属性集合
 * @tags: 属性
 */
export const postPropsGetByCombId = (
  option: PostPropsGetByCombIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsGetByCombIdResponseSuccess>(
    '/props/getByCombId',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsGetById */
export interface PostPropsGetByIdOption {
  body: PropsIdReqDto
}

/** @description response type for postPropsGetById */
interface PostPropsGetByIdResponse {
  /**
   * @description
   *
   */
  200: TblPropertyEntity
}

type PostPropsGetByIdResponseSuccess = PostPropsGetByIdResponse[200]
/**
 * @description
 *   获取属性
 * @tags: 属性
 */
export const postPropsGetById = (
  option: PostPropsGetByIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsGetByIdResponseSuccess>(
    '/props/getById',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsGetByIds */
export interface PostPropsGetByIdsOption {
  body: IdsReqDto
}

/** @description response type for postPropsGetByIds */
interface PostPropsGetByIdsResponse {
  /**
   * @description
   *
   */
  200: Array<TblPropertyEntity>
}

type PostPropsGetByIdsResponseSuccess = PostPropsGetByIdsResponse[200]
/**
 * @description
 *   批量获取属性
 * @tags: 属性
 */
export const postPropsGetByIds = (
  option: PostPropsGetByIdsOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsGetByIdsResponseSuccess>(
    '/props/getByIds',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsCreate */
export interface PostPropsCreateOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: PropsCreateReqDto
}

/** @description response type for postPropsCreate */
interface PostPropsCreateResponse {
  /**
   * @description
   *
   */
  200: TblPropertyEntity
}

type PostPropsCreateResponseSuccess = PostPropsCreateResponse[200]
/**
 * @description
 *   保存属性
 * @tags: 属性
 */
export const postPropsCreate = (
  option: PostPropsCreateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsCreateResponseSuccess>(
    '/props/create',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsCreateBatch */
export interface PostPropsCreateBatchOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: PropsCreateBatchReqDto
}

/** @description response type for postPropsCreateBatch */
interface PostPropsCreateBatchResponse {
  /**
   * @description
   *
   */
  200: Array<TblPropertyEntity>
}

type PostPropsCreateBatchResponseSuccess = PostPropsCreateBatchResponse[200]
/**
 * @description
 *   批量保存属性
 * @tags: 属性
 */
export const postPropsCreateBatch = (
  option: PostPropsCreateBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsCreateBatchResponseSuccess>(
    '/props/createBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsUpdate */
export interface PostPropsUpdateOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: PropsUpdateReqDto
}

/** @description response type for postPropsUpdate */
interface PostPropsUpdateResponse {
  /**
   * @description
   *
   */
  200: string
}

type PostPropsUpdateResponseSuccess = PostPropsUpdateResponse[200]
/**
 * @description
 *   更新属性
 * @tags: 属性
 */
export const postPropsUpdate = (
  option: PostPropsUpdateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsUpdateResponseSuccess>(
    '/props/update',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsUpdateBatch */
export interface PostPropsUpdateBatchOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: PropsUpdateBatchReqDto
}

/** @description response type for postPropsUpdateBatch */
interface PostPropsUpdateBatchResponse {
  /**
   * @description
   *
   */
  200: string
}

type PostPropsUpdateBatchResponseSuccess = PostPropsUpdateBatchResponse[200]
/**
 * @description
 *   批量更新属性
 * @tags: 属性
 */
export const postPropsUpdateBatch = (
  option: PostPropsUpdateBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsUpdateBatchResponseSuccess>(
    '/props/updateBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsRemove */
export interface PostPropsRemoveOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: IdsReqDto
}

/** @description response type for postPropsRemove */
interface PostPropsRemoveResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostPropsRemoveResponseSuccess = PostPropsRemoveResponse[200]
/**
 * @description
 *   删除属性
 * @tags: 属性
 */
export const postPropsRemove = (
  option: PostPropsRemoveOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsRemoveResponseSuccess>(
    '/props/remove',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsCreateRefProps */
export interface PostPropsCreateRefPropsOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: PropsCreateRefPropsReqDto
}

/** @description response type for postPropsCreateRefProps */
interface PostPropsCreateRefPropsResponse {
  /**
   * @description
   *
   */
  200: Array<TblPropertyEntityWithOpt>
}

type PostPropsCreateRefPropsResponseSuccess =
  PostPropsCreateRefPropsResponse[200]
/**
 * @description
 *   保存外接属性
 * @tags: 属性
 */
export const postPropsCreateRefProps = (
  option: PostPropsCreateRefPropsOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsCreateRefPropsResponseSuccess>(
    '/props/createRefProps',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsExistPropName */
export interface PostPropsExistPropNameOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: PropsExistNameReqDto
}

/** @description response type for postPropsExistPropName */
interface PostPropsExistPropNameResponse {
  /**
   * @description
   *
   */
  200: boolean
}

type PostPropsExistPropNameResponseSuccess = PostPropsExistPropNameResponse[200]
/**
 * @description
 *   组件下是否存在属性重名
 * @tags: 属性
 */
export const postPropsExistPropName = (
  option: PostPropsExistPropNameOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsExistPropNameResponseSuccess>(
    '/props/existPropName',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsRelGetListById */
export interface PostPropsRelGetListByIdOption {
  body: PropsRelFPropIdReqDto
}

/** @description response type for postPropsRelGetListById */
interface PostPropsRelGetListByIdResponse {
  /**
   * @description
   *
   */
  200: Array<TblPropertyProprelEntity>
}

type PostPropsRelGetListByIdResponseSuccess =
  PostPropsRelGetListByIdResponse[200]
/**
 * @description
 *   获取主动属性集合(根据被动属性ID)
 * @tags: 主被动属性关系
 */
export const postPropsRelGetListById = (
  option: PostPropsRelGetListByIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsRelGetListByIdResponseSuccess>(
    '/propsRel/getListById',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsRelGetListByCombId */
export interface PostPropsRelGetListByCombIdOption {
  body: SharedCompIdReqDto
}

/** @description response type for postPropsRelGetListByCombId */
interface PostPropsRelGetListByCombIdResponse {
  /**
   * @description
   *
   */
  200: {
    [propertyName: string]: Array<number>
  }
}

type PostPropsRelGetListByCombIdResponseSuccess =
  PostPropsRelGetListByCombIdResponse[200]
/**
 * @description
 *   获取组件下所有主被动属性关系
 * @tags: 主被动属性关系
 */
export const postPropsRelGetListByCombId = (
  option: PostPropsRelGetListByCombIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsRelGetListByCombIdResponseSuccess>(
    '/propsRel/getListByCombId',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsRelCreateBatch */
export interface PostPropsRelCreateBatchOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: PropsRelCreateBatchReqDto
}

/** @description response type for postPropsRelCreateBatch */
interface PostPropsRelCreateBatchResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostPropsRelCreateBatchResponseSuccess =
  PostPropsRelCreateBatchResponse[200]
/**
 * @description
 *   保存主动属性
 * @tags: 主被动属性关系
 */
export const postPropsRelCreateBatch = (
  option: PostPropsRelCreateBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsRelCreateBatchResponseSuccess>(
    '/propsRel/createBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPropsRelExistOptRel */
export interface PostPropsRelExistOptRelOption {
  body: PropsRelFPropIdReqDto
}

/** @description response type for postPropsRelExistOptRel */
interface PostPropsRelExistOptRelResponse {
  /**
   * @description
   *
   */
  200: boolean
}

type PostPropsRelExistOptRelResponseSuccess =
  PostPropsRelExistOptRelResponse[200]
/**
 * @description
 *   是否存在选项约束
 * @tags: 主被动属性关系
 */
export const postPropsRelExistOptRel = (
  option: PostPropsRelExistOptRelOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPropsRelExistOptRelResponseSuccess>(
    '/propsRel/existOptRel',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptGetByPropsId */
export interface PostOptGetByPropsIdOption {
  body: OptPropsIdReqDto
}

/** @description response type for postOptGetByPropsId */
interface PostOptGetByPropsIdResponse {
  /**
   * @description
   *
   */
  200: Array<TblPropertyOptionEntity>
}

type PostOptGetByPropsIdResponseSuccess = PostOptGetByPropsIdResponse[200]
/**
 * @description
 *   根据属性ID获取选项集合
 * @tags: 选项
 */
export const postOptGetByPropsId = (
  option: PostOptGetByPropsIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptGetByPropsIdResponseSuccess>(
    '/opt/getByPropsId',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptGetById */
export interface PostOptGetByIdOption {
  body: OptIdReqDto
}

/** @description response type for postOptGetById */
interface PostOptGetByIdResponse {
  /**
   * @description
   *
   */
  200: TblPropertyOptionEntity
}

type PostOptGetByIdResponseSuccess = PostOptGetByIdResponse[200]
/**
 * @description
 *   获取选项
 * @tags: 选项
 */
export const postOptGetById = (
  option: PostOptGetByIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptGetByIdResponseSuccess>(
    '/opt/getById',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptGetByIds */
export interface PostOptGetByIdsOption {
  body: IdsReqDto
}

/** @description response type for postOptGetByIds */
interface PostOptGetByIdsResponse {
  /**
   * @description
   *
   */
  200: Array<TblPropertyOptionEntity>
}

type PostOptGetByIdsResponseSuccess = PostOptGetByIdsResponse[200]
/**
 * @description
 *   批量获取选项
 * @tags: 选项
 */
export const postOptGetByIds = (
  option: PostOptGetByIdsOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptGetByIdsResponseSuccess>(
    '/opt/getByIds',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptCreate */
export interface PostOptCreateOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: OptCreateReqDto
}

/** @description response type for postOptCreate */
interface PostOptCreateResponse {
  /**
   * @description
   *
   */
  200: TblPropertyOptionEntity
}

type PostOptCreateResponseSuccess = PostOptCreateResponse[200]
/**
 * @description
 *   保存选项
 * @tags: 选项
 */
export const postOptCreate = (
  option: PostOptCreateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptCreateResponseSuccess>(
    '/opt/create',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptCreateBatch */
export interface PostOptCreateBatchOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: OptCreateBatchReqDto
}

/** @description response type for postOptCreateBatch */
interface PostOptCreateBatchResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOptCreateBatchResponseSuccess = PostOptCreateBatchResponse[200]
/**
 * @description
 *   批量保存选项
 * @tags: 选项
 */
export const postOptCreateBatch = (
  option: PostOptCreateBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptCreateBatchResponseSuccess>(
    '/opt/createBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptUpdate */
export interface PostOptUpdateOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: OptUpdateReqDto
}

/** @description response type for postOptUpdate */
interface PostOptUpdateResponse {
  /**
   * @description
   *
   */
  200: string
}

type PostOptUpdateResponseSuccess = PostOptUpdateResponse[200]
/**
 * @description
 *   更新选项
 * @tags: 选项
 */
export const postOptUpdate = (
  option: PostOptUpdateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptUpdateResponseSuccess>(
    '/opt/update',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptUpdateBatch */
export interface PostOptUpdateBatchOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: OptUpdateBatchReqDto
}

/** @description response type for postOptUpdateBatch */
interface PostOptUpdateBatchResponse {
  /**
   * @description
   *
   */
  200: string
}

type PostOptUpdateBatchResponseSuccess = PostOptUpdateBatchResponse[200]
/**
 * @description
 *   批量更新选项
 * @tags: 选项
 */
export const postOptUpdateBatch = (
  option: PostOptUpdateBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptUpdateBatchResponseSuccess>(
    '/opt/updateBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptRemove */
export interface PostOptRemoveOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: OptBatchIdsReqDto
}

/** @description response type for postOptRemove */
interface PostOptRemoveResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOptRemoveResponseSuccess = PostOptRemoveResponse[200]
/**
 * @description
 *   删除选项
 * @tags: 选项
 */
export const postOptRemove = (
  option: PostOptRemoveOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptRemoveResponseSuccess>(
    '/opt/remove',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptRelGetListById */
export interface PostOptRelGetListByIdOption {
  body: OptRelFpropIdReqDto
}

/** @description response type for postOptRelGetListById */
interface PostOptRelGetListByIdResponse {
  /**
   * @description
   *
   */
  200: Array<OptRelEntityResDto>
}

type PostOptRelGetListByIdResponseSuccess = PostOptRelGetListByIdResponse[200]
/**
 * @description
 *   获取被动属性选项约束关系
 * @tags: 选项约束
 */
export const postOptRelGetListById = (
  option: PostOptRelGetListByIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptRelGetListByIdResponseSuccess>(
    '/optRel/getListById',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptRelGetListByCompId */
export interface PostOptRelGetListByCompIdOption {
  body: SharedCompIdReqDto
}

/** @description response type for postOptRelGetListByCompId */
interface PostOptRelGetListByCompIdResponse {
  /**
   * @description
   *
   */
  200: Array<OptRelEntityResDto>
}

type PostOptRelGetListByCompIdResponseSuccess =
  PostOptRelGetListByCompIdResponse[200]
/**
 * @description
 *   获取组件下被动属性选项约束关系
 * @tags: 选项约束
 */
export const postOptRelGetListByCompId = (
  option: PostOptRelGetListByCompIdOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptRelGetListByCompIdResponseSuccess>(
    '/optRel/getListByCompId',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptRelCreate */
export interface PostOptRelCreateOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: OptRelCreateReqDto
}

/** @description response type for postOptRelCreate */
interface PostOptRelCreateResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOptRelCreateResponseSuccess = PostOptRelCreateResponse[200]
/**
 * @description
 *   保存被动属性选项约束关系-增量
 * @tags: 选项约束
 */
export const postOptRelCreate = (
  option: PostOptRelCreateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptRelCreateResponseSuccess>(
    '/optRel/create',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptRelCreateBatch */
export interface PostOptRelCreateBatchOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: OptRelCreateBatchReqDto
}

/** @description response type for postOptRelCreateBatch */
interface PostOptRelCreateBatchResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOptRelCreateBatchResponseSuccess = PostOptRelCreateBatchResponse[200]
/**
 * @description
 *   批量保存被动属性约束关系-增量
 * @tags: 选项约束
 */
export const postOptRelCreateBatch = (
  option: PostOptRelCreateBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptRelCreateBatchResponseSuccess>(
    '/optRel/createBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptRelUpdate */
export interface PostOptRelUpdateOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: OptRelUpdateReqDto
}

/** @description response type for postOptRelUpdate */
interface PostOptRelUpdateResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOptRelUpdateResponseSuccess = PostOptRelUpdateResponse[200]
/**
 * @description
 *   更新被动属性选项约束关系
 * @tags: 选项约束
 */
export const postOptRelUpdate = (
  option: PostOptRelUpdateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptRelUpdateResponseSuccess>(
    '/optRel/update',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postOptRelRemove */
export interface PostOptRelRemoveOption {
  /**
   * @description
   *   系列ID
   */
  query: {
    /**
        @description
          系列ID */
    sid: number
  }
  body: OptRelRemoveIdsReqDto
}

/** @description response type for postOptRelRemove */
interface PostOptRelRemoveResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostOptRelRemoveResponseSuccess = PostOptRelRemoveResponse[200]
/**
 * @description
 *   删除选项约束关系
 * @tags: 选项约束
 */
export const postOptRelRemove = (
  option: PostOptRelRemoveOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostOptRelRemoveResponseSuccess>(
    '/optRel/remove',
    { method: 'post', ...option },
    config,
  )

/** @description response type for postPubGetPubData */
interface PostPubGetPubDataResponse {
  /**
   * @description
   *
   */
  200: Array<PubGetTreeItemDto>
}

type PostPubGetPubDataResponseSuccess = PostPubGetPubDataResponse[200]
/**
 * @description
 *   获取发布数据
 * @tags: 数据发布
 */
export const postPubGetPubData = (config?: AxiosRequestConfig) =>
  requester<PostPubGetPubDataResponseSuccess>(
    '/pub/getPubData',
    { method: 'post' },
    config,
  )

/** @description request parameter type for postPubSavePubData */
export interface PostPubSavePubDataOption {
  body: PubSaveDataReqDto
}

/** @description response type for postPubSavePubData */
interface PostPubSavePubDataResponse {
  /**
   * @description
   *
   */
  200: string
}

type PostPubSavePubDataResponseSuccess = PostPubSavePubDataResponse[200]
/**
 * @description
 *   保存发布数据
 * @tags: 数据发布
 */
export const postPubSavePubData = (
  option: PostPubSavePubDataOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPubSavePubDataResponseSuccess>(
    '/pub/savePubData',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPubGetListByPage */
export interface PostPubGetListByPageOption {
  body: PubGetListPageReqDto
}

/** @description response type for postPubGetListByPage */
interface PostPubGetListByPageResponse {
  /**
   * @description
   *
   */
  200: PubGetListByPageResDto
}

type PostPubGetListByPageResponseSuccess = PostPubGetListByPageResponse[200]
/**
 * @description
 *   获取发布记录
 * @tags: 数据发布
 */
export const postPubGetListByPage = (
  option: PostPubGetListByPageOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPubGetListByPageResponseSuccess>(
    '/pub/getListByPage',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPubGetPubRecord */
export interface PostPubGetPubRecordOption {
  body: IdsReqDto
}

/** @description response type for postPubGetPubRecord */
interface PostPubGetPubRecordResponse {
  /**
   * @description
   *
   */
  200: Array<TblDatapubEntity>
}

type PostPubGetPubRecordResponseSuccess = PostPubGetPubRecordResponse[200]
/**
 * @description
 *   获取发布状态
 * @tags: 数据发布
 */
export const postPubGetPubRecord = (
  option: PostPubGetPubRecordOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPubGetPubRecordResponseSuccess>(
    '/pub/getPubRecord',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPubUpdate */
export interface PostPubUpdateOption {
  body: PubUpdateReqDto
}

/** @description response type for postPubUpdate */
interface PostPubUpdateResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostPubUpdateResponseSuccess = PostPubUpdateResponse[200]
/**
 * @description
 *   更新版本启用停用
 * @tags: 数据发布
 */
export const postPubUpdate = (
  option: PostPubUpdateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPubUpdateResponseSuccess>(
    '/pub/update',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPubUpdateBatch */
export interface PostPubUpdateBatchOption {
  body: PubUpdateBatchReqDto
}

/** @description response type for postPubUpdateBatch */
interface PostPubUpdateBatchResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostPubUpdateBatchResponseSuccess = PostPubUpdateBatchResponse[200]
/**
 * @description
 *   批量更新启用停用
 * @tags: 数据发布
 */
export const postPubUpdateBatch = (
  option: PostPubUpdateBatchOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPubUpdateBatchResponseSuccess>(
    '/pub/updateBatch',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPubGetMcodeList */
export interface PostPubGetMcodeListOption {
  body: PubGetMcodeReqDto
}

/** @description response type for postPubGetMcodeList */
interface PostPubGetMcodeListResponse {
  /**
   * @description
   *
   */
  200: Array<SearchSpecItemEntity>
}

type PostPubGetMcodeListResponseSuccess = PostPubGetMcodeListResponse[200]
/**
 * @description
 *   获取系列物料
 * @tags: 数据发布
 */
export const postPubGetMcodeList = (
  option: PostPubGetMcodeListOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPubGetMcodeListResponseSuccess>(
    '/pub/getMcodeList',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postPubSendmsg4Js */
export interface PostPubSendmsg4JsOption {
  query: {
    recordId: number
  }
}

/** @description response type for postPubSendmsg4Js */
interface PostPubSendmsg4JsResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostPubSendmsg4JsResponseSuccess = PostPubSendmsg4JsResponse[200]
/**
 * @description
 *   发送生成js消息
 * @tags: 数据发布
 */
export const postPubSendmsg4Js = (
  option: PostPubSendmsg4JsOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostPubSendmsg4JsResponseSuccess>(
    '/pub/sendmsg4js',
    { method: 'post', ...option },
    config,
  )

/** @description request parameter type for postAuditCreate */
export interface PostAuditCreateOption {
  body: AuditCreateReqDto
}

/** @description response type for postAuditCreate */
interface PostAuditCreateResponse {
  /**
   * @description
   *
   */
  200: any
}

type PostAuditCreateResponseSuccess = PostAuditCreateResponse[200]
/**
 * @description
 *   提交审批
 * @tags: 审批
 */
export const postAuditCreate = (
  option: PostAuditCreateOption,
  config?: AxiosRequestConfig,
) =>
  requester<PostAuditCreateResponseSuccess>(
    '/audit/create',
    { method: 'post', ...option },
    config,
  )
