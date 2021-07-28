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
  OpenFactEntityDto,
  GetFactCategoryOpenDto,
  GetFactCategoryAddiResOpenDto,
  SeriesIdOpenDto,
  TblComponentEntity,
  OpenGetSeriesCompsTreeResDto,
  OpenGetEffectMcodesReqDto,
  GetPcodeOneReqDto,
  SearchPcodeEntity,
  GetPcodeListReqDto,
  GetCombBulkReqDto,
  CompIdReqDto,
  ZdProvinceEntity,
  ZdCountryEntity,
  FactGetByPageReqDto,
  FactGetByPageResDto,
  FactGetAllReqDto,
  TblFactoryEntity,
  FactIdReqDto,
  FactEntityDto,
  FactCreateReqDto,
  FactUpdateReqDto,
  FactRemoveIdsReqDto,
  ExistNameReqDto,
  FactProdTypeFactIdReqDto,
  TblFactoryProdtypeEntityWithExt,
  TblFactoryProdtypeEntity,
  FactProdTypeCreateReqDto,
  FactProdTypeUpdateReqDto,
  IdsReqDto,
  FactProdTypeUpdateBatchReqDto,
  FactProdTypeExistNameReqDto,
  TblIndustryEntity,
  SeriesFidReqDto,
  SeriesEntityDto,
  SeriesIdReqDto,
  SeriesCreateReqDto,
  SeriesUpdateStatusReqDto,
  SeriesUpdateReqDto,
  SeriesUpdateBatchReqDto,
  GetSeriesIndustryReqDto,
  GetSeriesIndustryResDto,
  SaveSeriesIndustryDto,
  SeriesGetNamePropsResDto,
  TblPropertyEntity,
  SeriesExistNameReqDto,
  TblSeriesExtEntity,
  SeriesChangeSatusReqDto,
  SeriesCopyReqDto,
  SeriesIdReqCompDto,
  TblComponentTypeEntity,
  CompGroupIdReqDto,
  CompGroupCreateReqDto,
  CompGroupUpdateReqDto,
  CompGroupBatchUpdateReqDto,
  TblComponentEntityWithExt,
  CompCreateReqDto,
  CompUpdateReqDto,
  CompUpdateBatchReqDto,
  PropsCompIdReqDto,
  TblPropertyEntityWithOpt,
  PropsIdReqDto,
  PropsCreateReqDto,
  PropsCreateBatchReqDto,
  PropsUpdateReqDto,
  PropsUpdateBatchReqDto,
  PropsCreateRefPropsReqDto,
  PropsExistNameReqDto,
  PropsRelFPropIdReqDto,
  TblPropertyProprelEntity,
  SharedCompIdReqDto,
  PropsRelCreateBatchReqDto,
  OptPropsIdReqDto,
  TblPropertyOptionEntity,
  OptIdReqDto,
  OptCreateReqDto,
  OptCreateBatchReqDto,
  OptUpdateReqDto,
  OptUpdateBatchReqDto,
  OptBatchIdsReqDto,
  OptRelFpropIdReqDto,
  OptRelEntityResDto,
  OptRelCreateReqDto,
  OptRelCreateBatchReqDto,
  OptRelUpdateReqDto,
  OptRelRemoveIdsReqDto,
  PubGetTreeItemDto,
  PubSaveDataReqDto,
  PubGetListPageReqDto,
  PubGetListByPageResDto,
  TblDatapubEntity,
  PubUpdateReqDto,
  PubUpdateBatchReqDto,
  PubGetMcodeReqDto,
  SearchSpecItemEntity,
  AuditCreateReqDto,
} from './definition'

interface PostOpenGetFactListResponse {
  /** */
  200: Array<OpenFactEntityDto>
}

type PostOpenGetFactListResponseSuccess = PostOpenGetFactListResponse[200]

/**
 * 公开-获取品牌列表
 * tags: 开放服务
 */
export function postOpenGetFactList(config?: AxiosRequestConfig) {
  return requester<PostOpenGetFactListResponseSuccess>('/open/getFactList', { method: 'post' }, config)
}

/** request parameter type for postOpenGetFactCategory */
interface PostOpenGetFactCategoryOption {
  body?: GetFactCategoryOpenDto
}

interface PostOpenGetFactCategoryResponse {
  /** */
  200: GetFactCategoryAddiResOpenDto
}

type PostOpenGetFactCategoryResponseSuccess = PostOpenGetFactCategoryResponse[200]

/**
 * 公开-获取品牌分类
 * tags: 开放服务
 */
export function postOpenGetFactCategory(option: PostOpenGetFactCategoryOption, config?: AxiosRequestConfig) {
  return requester<PostOpenGetFactCategoryResponseSuccess>(
    '/open/getFactCategory',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenGetSeriesComps */
interface PostOpenGetSeriesCompsOption {
  body?: SeriesIdOpenDto
}

interface PostOpenGetSeriesCompsResponse {
  /** */
  200: Array<TblComponentEntity>
}

type PostOpenGetSeriesCompsResponseSuccess = PostOpenGetSeriesCompsResponse[200]

/**
 * 公开-获取系列下组件
 * tags: 开放服务
 */
export function postOpenGetSeriesComps(option: PostOpenGetSeriesCompsOption, config?: AxiosRequestConfig) {
  return requester<PostOpenGetSeriesCompsResponseSuccess>('/open/getSeriesComps', { method: 'post', ...option }, config)
}

/** request parameter type for postOpenGetSeriesCompsTree */
interface PostOpenGetSeriesCompsTreeOption {
  body?: SeriesIdOpenDto
}

interface PostOpenGetSeriesCompsTreeResponse {
  /** */
  200: Array<OpenGetSeriesCompsTreeResDto>
}

type PostOpenGetSeriesCompsTreeResponseSuccess = PostOpenGetSeriesCompsTreeResponse[200]

/**
 * 公开-获取系列下分组组件树
 * tags: 开放服务
 */
export function postOpenGetSeriesCompsTree(option: PostOpenGetSeriesCompsTreeOption, config?: AxiosRequestConfig) {
  return requester<PostOpenGetSeriesCompsTreeResponseSuccess>(
    '/open/getSeriesCompsTree',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenProdGetSeriesComps */
interface PostOpenProdGetSeriesCompsOption {
  body?: SeriesIdOpenDto
}

interface PostOpenProdGetSeriesCompsResponse {
  /** */
  200: Array<TblComponentEntity>
}

type PostOpenProdGetSeriesCompsResponseSuccess = PostOpenProdGetSeriesCompsResponse[200]

/**
 * 公开-获取系列下组件-正式
 * tags: 开放服务
 */
export function postOpenProdGetSeriesComps(option: PostOpenProdGetSeriesCompsOption, config?: AxiosRequestConfig) {
  return requester<PostOpenProdGetSeriesCompsResponseSuccess>(
    '/open/prod/getSeriesComps',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenProdGetSeriesCompsTreeProd */
interface PostOpenProdGetSeriesCompsTreeProdOption {
  body?: SeriesIdOpenDto
}

interface PostOpenProdGetSeriesCompsTreeProdResponse {
  /** */
  200: Array<OpenGetSeriesCompsTreeResDto>
}

type PostOpenProdGetSeriesCompsTreeProdResponseSuccess = PostOpenProdGetSeriesCompsTreeProdResponse[200]

/**
 * 公开-获取系列下分组组件树-正式
 * tags: 开放服务
 */
export function postOpenProdGetSeriesCompsTreeProd(
  option: PostOpenProdGetSeriesCompsTreeProdOption,
  config?: AxiosRequestConfig,
) {
  return requester<PostOpenProdGetSeriesCompsTreeProdResponseSuccess>(
    '/open/prod/getSeriesCompsTreeProd',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenGetEffectMcodes */
interface PostOpenGetEffectMcodesOption {
  body?: OpenGetEffectMcodesReqDto
}

interface PostOpenGetEffectMcodesResponse {
  /** */
  200: Array<string>
}

type PostOpenGetEffectMcodesResponseSuccess = PostOpenGetEffectMcodesResponse[200]

/**
 * 公开-通途-获取选项值影响的物料号
 * tags: 开放服务
 */
export function postOpenGetEffectMcodes(option: PostOpenGetEffectMcodesOption, config?: AxiosRequestConfig) {
  return requester<PostOpenGetEffectMcodesResponseSuccess>(
    '/open/getEffectMcodes',
    { method: 'post', ...option },
    config,
  )
}

interface PostOpenProdGetFactListResponse {
  /** */
  200: Array<OpenFactEntityDto>
}

type PostOpenProdGetFactListResponseSuccess = PostOpenProdGetFactListResponse[200]

/**
 * 公开-获取品牌列表-正式库
 * tags: 开放服务
 */
export function postOpenProdGetFactList(config?: AxiosRequestConfig) {
  return requester<PostOpenProdGetFactListResponseSuccess>('/open/prod/getFactList', { method: 'post' }, config)
}

/** request parameter type for postOpenProdGetFactCategory */
interface PostOpenProdGetFactCategoryOption {
  body?: GetFactCategoryOpenDto
}

interface PostOpenProdGetFactCategoryResponse {
  /** */
  200: GetFactCategoryAddiResOpenDto
}

type PostOpenProdGetFactCategoryResponseSuccess = PostOpenProdGetFactCategoryResponse[200]

/**
 * 公开-获取品牌分类-正式库
 * tags: 开放服务
 */
export function postOpenProdGetFactCategory(option: PostOpenProdGetFactCategoryOption, config?: AxiosRequestConfig) {
  return requester<PostOpenProdGetFactCategoryResponseSuccess>(
    '/open/prod/getFactCategory',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenProdGetPcodeOne */
interface PostOpenProdGetPcodeOneOption {
  body?: GetPcodeOneReqDto
}

interface PostOpenProdGetPcodeOneResponse {
  /** */
  200: SearchPcodeEntity
}

type PostOpenProdGetPcodeOneResponseSuccess = PostOpenProdGetPcodeOneResponse[200]

/**
 * 获取规格(精准)-正式库
 * tags: 开放服务
 */
export function postOpenProdGetPcodeOne(option: PostOpenProdGetPcodeOneOption, config?: AxiosRequestConfig) {
  return requester<PostOpenProdGetPcodeOneResponseSuccess>(
    '/open/prod/getPcodeOne',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenProdGetPcodeList */
interface PostOpenProdGetPcodeListOption {
  body?: GetPcodeListReqDto
}

interface PostOpenProdGetPcodeListResponse {
  /** */
  200: Array<SearchPcodeEntity>
}

type PostOpenProdGetPcodeListResponseSuccess = PostOpenProdGetPcodeListResponse[200]

/**
 * 获取规格(模糊)-正式库
 * tags: 开放服务
 */
export function postOpenProdGetPcodeList(option: PostOpenProdGetPcodeListOption, config?: AxiosRequestConfig) {
  return requester<PostOpenProdGetPcodeListResponseSuccess>(
    '/open/prod/getPcodeList',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenProdGetComponentList */
interface PostOpenProdGetComponentListOption {
  body?: SeriesIdOpenDto
}

interface PostOpenProdGetComponentListResponse {
  /** */
  200: any
}

type PostOpenProdGetComponentListResponseSuccess = PostOpenProdGetComponentListResponse[200]

/**
 * 获取系列下组件列表-正式库
 * tags: 开放服务
 */
export function postOpenProdGetComponentList(option: PostOpenProdGetComponentListOption, config?: AxiosRequestConfig) {
  return requester<PostOpenProdGetComponentListResponseSuccess>(
    '/open/prod/getComponentList',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenProdGetDefineData */
interface PostOpenProdGetDefineDataOption {
  body?: SeriesIdOpenDto
}

interface PostOpenProdGetDefineDataResponse {
  /** */
  200: any
}

type PostOpenProdGetDefineDataResponseSuccess = PostOpenProdGetDefineDataResponse[200]

/**
 * 获取系列下定义数据-正式库
 * tags: 开放服务
 */
export function postOpenProdGetDefineData(option: PostOpenProdGetDefineDataOption, config?: AxiosRequestConfig) {
  return requester<PostOpenProdGetDefineDataResponseSuccess>(
    '/open/prod/getDefineData',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenProdGetCombList */
interface PostOpenProdGetCombListOption {
  body?: GetCombBulkReqDto
}

interface PostOpenProdGetCombListResponse {
  /** */
  200: any
}

type PostOpenProdGetCombListResponseSuccess = PostOpenProdGetCombListResponse[200]

/**
 * 获取系列下价格组根据价格pkey-正式库
 * tags: 开放服务
 */
export function postOpenProdGetCombList(option: PostOpenProdGetCombListOption, config?: AxiosRequestConfig) {
  return requester<PostOpenProdGetCombListResponseSuccess>(
    '/open/prod/getCombList',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenProdGetCombBulkByCompId */
interface PostOpenProdGetCombBulkByCompIdOption {
  body?: CompIdReqDto
}

interface PostOpenProdGetCombBulkByCompIdResponse {
  /** */
  200: any
}

type PostOpenProdGetCombBulkByCompIdResponseSuccess = PostOpenProdGetCombBulkByCompIdResponse[200]

/**
 * 获取组件下所有价格组-正式库
 * tags: 开放服务
 */
export function postOpenProdGetCombBulkByCompId(
  option: PostOpenProdGetCombBulkByCompIdOption,
  config?: AxiosRequestConfig,
) {
  return requester<PostOpenProdGetCombBulkByCompIdResponseSuccess>(
    '/open/prod/getCombBulkByCompId',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenProdGetCombPriceList */
interface PostOpenProdGetCombPriceListOption {
  body?: GetCombBulkReqDto
}

interface PostOpenProdGetCombPriceListResponse {
  /** */
  200: any
}

type PostOpenProdGetCombPriceListResponseSuccess = PostOpenProdGetCombPriceListResponse[200]

/**
 * 根据价格pkey获取价格-正式库
 * tags: 开放服务
 */
export function postOpenProdGetCombPriceList(option: PostOpenProdGetCombPriceListOption, config?: AxiosRequestConfig) {
  return requester<PostOpenProdGetCombPriceListResponseSuccess>(
    '/open/prod/getCombPriceList',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOpenProdGetCompInfoByCkey */
interface PostOpenProdGetCompInfoByCkeyOption {
  body?: GetCombBulkReqDto
}

interface PostOpenProdGetCompInfoByCkeyResponse {
  /** */
  200: any
}

type PostOpenProdGetCompInfoByCkeyResponseSuccess = PostOpenProdGetCompInfoByCkeyResponse[200]

/**
 * 根据价格pkey获取组件数据-正式库
 * tags: 开放服务
 */
export function postOpenProdGetCompInfoByCkey(
  option: PostOpenProdGetCompInfoByCkeyOption,
  config?: AxiosRequestConfig,
) {
  return requester<PostOpenProdGetCompInfoByCkeyResponseSuccess>(
    '/open/prod/getCompInfoByCkey',
    { method: 'post', ...option },
    config,
  )
}

interface PostCommonGetProvinceResponse {
  /** */
  200: Array<ZdProvinceEntity>
}

type PostCommonGetProvinceResponseSuccess = PostCommonGetProvinceResponse[200]

/**
 * 获取省份
 * tags: 通用
 */
export function postCommonGetProvince(config?: AxiosRequestConfig) {
  return requester<PostCommonGetProvinceResponseSuccess>('/common/getProvince', { method: 'post' }, config)
}

interface PostCommonGetCountryListResponse {
  /** */
  200: Array<ZdCountryEntity>
}

type PostCommonGetCountryListResponseSuccess = PostCommonGetCountryListResponse[200]

/**
 * 获取国家
 * tags: 通用
 */
export function postCommonGetCountryList(config?: AxiosRequestConfig) {
  return requester<PostCommonGetCountryListResponseSuccess>('/common/getCountryList', { method: 'post' }, config)
}

/** request parameter type for postFactGetByPage */
interface PostFactGetByPageOption {
  body?: FactGetByPageReqDto
}

interface PostFactGetByPageResponse {
  /** */
  200: FactGetByPageResDto
}

type PostFactGetByPageResponseSuccess = PostFactGetByPageResponse[200]

/**
 * 分页获取品牌
 * tags: 品牌
 */
export function postFactGetByPage(option: PostFactGetByPageOption, config?: AxiosRequestConfig) {
  return requester<PostFactGetByPageResponseSuccess>('/fact/getByPage', { method: 'post', ...option }, config)
}

/** request parameter type for postFactGetAll */
interface PostFactGetAllOption {
  body?: FactGetAllReqDto
}

interface PostFactGetAllResponse {
  /** */
  200: Array<TblFactoryEntity>
}

type PostFactGetAllResponseSuccess = PostFactGetAllResponse[200]

/**
 * 获取全部品牌
 * tags: 品牌
 */
export function postFactGetAll(option: PostFactGetAllOption, config?: AxiosRequestConfig) {
  return requester<PostFactGetAllResponseSuccess>('/fact/getAll', { method: 'post', ...option }, config)
}

/** request parameter type for postFactGetById */
interface PostFactGetByIdOption {
  body?: FactIdReqDto
}

interface PostFactGetByIdResponse {
  /** */
  200: FactEntityDto
}

type PostFactGetByIdResponseSuccess = PostFactGetByIdResponse[200]

/**
 * 获取单个品牌
 * tags: 品牌
 */
export function postFactGetById(option: PostFactGetByIdOption, config?: AxiosRequestConfig) {
  return requester<PostFactGetByIdResponseSuccess>('/fact/getById', { method: 'post', ...option }, config)
}

/** request parameter type for postFactCreate */
interface PostFactCreateOption {
  body?: FactCreateReqDto
}

interface PostFactCreateResponse {
  /** */
  200: FactEntityDto
}

type PostFactCreateResponseSuccess = PostFactCreateResponse[200]

/**
 * 保存品牌
 * tags: 品牌
 */
export function postFactCreate(option: PostFactCreateOption, config?: AxiosRequestConfig) {
  return requester<PostFactCreateResponseSuccess>('/fact/create', { method: 'post', ...option }, config)
}

/** request parameter type for postFactUpdate */
interface PostFactUpdateOption {
  body?: FactUpdateReqDto
}

interface PostFactUpdateResponse {
  /** */
  200: any
}

type PostFactUpdateResponseSuccess = PostFactUpdateResponse[200]

/**
 * 更新品牌
 * tags: 品牌
 */
export function postFactUpdate(option: PostFactUpdateOption, config?: AxiosRequestConfig) {
  return requester<PostFactUpdateResponseSuccess>('/fact/update', { method: 'post', ...option }, config)
}

/** request parameter type for postFactRemove */
interface PostFactRemoveOption {
  body?: FactRemoveIdsReqDto
}

interface PostFactRemoveResponse {
  /** */
  200: any
}

type PostFactRemoveResponseSuccess = PostFactRemoveResponse[200]

/**
 * 删除品牌
 * tags: 品牌
 */
export function postFactRemove(option: PostFactRemoveOption, config?: AxiosRequestConfig) {
  return requester<PostFactRemoveResponseSuccess>('/fact/remove', { method: 'post', ...option }, config)
}

/** request parameter type for postFactExistName */
interface PostFactExistNameOption {
  body?: ExistNameReqDto
}

interface PostFactExistNameResponse {
  /** */
  200: boolean
}

type PostFactExistNameResponseSuccess = PostFactExistNameResponse[200]

/**
 * 品牌名称是否存在
 * tags: 品牌
 */
export function postFactExistName(option: PostFactExistNameOption, config?: AxiosRequestConfig) {
  return requester<PostFactExistNameResponseSuccess>('/fact/existName', { method: 'post', ...option }, config)
}

/** request parameter type for postFactExistCategory */
interface PostFactExistCategoryOption {
  body?: FactIdReqDto
}

interface PostFactExistCategoryResponse {
  /** */
  200: boolean
}

type PostFactExistCategoryResponseSuccess = PostFactExistCategoryResponse[200]

/**
 * 品牌目录是否存在
 * tags: 品牌
 */
export function postFactExistCategory(option: PostFactExistCategoryOption, config?: AxiosRequestConfig) {
  return requester<PostFactExistCategoryResponseSuccess>('/fact/existCategory', { method: 'post', ...option }, config)
}

/** request parameter type for postFactProdTypeGetTree */
interface PostFactProdTypeGetTreeOption {
  body?: FactProdTypeFactIdReqDto
}

interface PostFactProdTypeGetTreeResponse {
  /** */
  200: Array<TblFactoryProdtypeEntityWithExt>
}

type PostFactProdTypeGetTreeResponseSuccess = PostFactProdTypeGetTreeResponse[200]

/**
 * 获得目录树
 * tags: 目录
 */
export function postFactProdTypeGetTree(option: PostFactProdTypeGetTreeOption, config?: AxiosRequestConfig) {
  return requester<PostFactProdTypeGetTreeResponseSuccess>(
    '/factProdType/getTree',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postFactProdTypeGetByFactoryId */
interface PostFactProdTypeGetByFactoryIdOption {
  body?: FactProdTypeFactIdReqDto
}

interface PostFactProdTypeGetByFactoryIdResponse {
  /** */
  200: Array<TblFactoryProdtypeEntity>
}

type PostFactProdTypeGetByFactoryIdResponseSuccess = PostFactProdTypeGetByFactoryIdResponse[200]

/**
 * 获得所有目录
 * tags: 目录
 */
export function postFactProdTypeGetByFactoryId(
  option: PostFactProdTypeGetByFactoryIdOption,
  config?: AxiosRequestConfig,
) {
  return requester<PostFactProdTypeGetByFactoryIdResponseSuccess>(
    '/factProdType/getByFactoryId',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postFactProdTypeCreate */
interface PostFactProdTypeCreateOption {
  body?: FactProdTypeCreateReqDto
}

interface PostFactProdTypeCreateResponse {
  /** */
  200: TblFactoryProdtypeEntity
}

type PostFactProdTypeCreateResponseSuccess = PostFactProdTypeCreateResponse[200]

/**
 * 保存目录
 * tags: 目录
 */
export function postFactProdTypeCreate(option: PostFactProdTypeCreateOption, config?: AxiosRequestConfig) {
  return requester<PostFactProdTypeCreateResponseSuccess>('/factProdType/create', { method: 'post', ...option }, config)
}

/** request parameter type for postFactProdTypeUpdate */
interface PostFactProdTypeUpdateOption {
  body?: FactProdTypeUpdateReqDto
}

interface PostFactProdTypeUpdateResponse {
  /** */
  200: any
}

type PostFactProdTypeUpdateResponseSuccess = PostFactProdTypeUpdateResponse[200]

/**
 * 更新目录
 * tags: 目录
 */
export function postFactProdTypeUpdate(option: PostFactProdTypeUpdateOption, config?: AxiosRequestConfig) {
  return requester<PostFactProdTypeUpdateResponseSuccess>('/factProdType/update', { method: 'post', ...option }, config)
}

/** request parameter type for postFactProdTypeRemove */
interface PostFactProdTypeRemoveOption {
  body?: IdsReqDto
}

interface PostFactProdTypeRemoveResponse {
  /** */
  200: any
}

type PostFactProdTypeRemoveResponseSuccess = PostFactProdTypeRemoveResponse[200]

/**
 * 删除目录
 * tags: 目录
 */
export function postFactProdTypeRemove(option: PostFactProdTypeRemoveOption, config?: AxiosRequestConfig) {
  return requester<PostFactProdTypeRemoveResponseSuccess>('/factProdType/remove', { method: 'post', ...option }, config)
}

/** request parameter type for postFactProdTypeUpdateBatch */
interface PostFactProdTypeUpdateBatchOption {
  body?: FactProdTypeUpdateBatchReqDto
}

interface PostFactProdTypeUpdateBatchResponse {
  /** */
  200: any
}

type PostFactProdTypeUpdateBatchResponseSuccess = PostFactProdTypeUpdateBatchResponse[200]

/**
 * 批量更新
 * tags: 目录
 */
export function postFactProdTypeUpdateBatch(option: PostFactProdTypeUpdateBatchOption, config?: AxiosRequestConfig) {
  return requester<PostFactProdTypeUpdateBatchResponseSuccess>(
    '/factProdType/updateBatch',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postFactProdTypeExistName */
interface PostFactProdTypeExistNameOption {
  body?: FactProdTypeExistNameReqDto
}

interface PostFactProdTypeExistNameResponse {
  /** */
  200: boolean
}

type PostFactProdTypeExistNameResponseSuccess = PostFactProdTypeExistNameResponse[200]

/**
 * 是否存在同名目录
 * tags: 目录
 */
export function postFactProdTypeExistName(option: PostFactProdTypeExistNameOption, config?: AxiosRequestConfig) {
  return requester<PostFactProdTypeExistNameResponseSuccess>(
    '/factProdType/existName',
    { method: 'post', ...option },
    config,
  )
}

interface PostIndustryGetWholeTreeResponse {
  /** */
  200: Array<TblIndustryEntity>
}

type PostIndustryGetWholeTreeResponseSuccess = PostIndustryGetWholeTreeResponse[200]

/**
 * 获取行业分类树
 * tags: 行业分类
 */
export function postIndustryGetWholeTree(config?: AxiosRequestConfig) {
  return requester<PostIndustryGetWholeTreeResponseSuccess>('/industry/getWholeTree', { method: 'post' }, config)
}

interface PostIndustryGetListResponse {
  /** */
  200: Array<TblIndustryEntity>
}

type PostIndustryGetListResponseSuccess = PostIndustryGetListResponse[200]

/**
 * 获取所有行业
 * tags: 行业分类
 */
export function postIndustryGetList(config?: AxiosRequestConfig) {
  return requester<PostIndustryGetListResponseSuccess>('/industry/getList', { method: 'post' }, config)
}

/** request parameter type for postSeriesGetAll */
interface PostSeriesGetAllOption {
  body?: SeriesFidReqDto
}

interface PostSeriesGetAllResponse {
  /** */
  200: Array<SeriesEntityDto>
}

type PostSeriesGetAllResponseSuccess = PostSeriesGetAllResponse[200]

/**
 * 获取所有系列
 * tags: 系列
 */
export function postSeriesGetAll(option: PostSeriesGetAllOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesGetAllResponseSuccess>('/series/getAll', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesGetById */
interface PostSeriesGetByIdOption {
  body?: SeriesIdReqDto
}

interface PostSeriesGetByIdResponse {
  /** */
  200: SeriesEntityDto
}

type PostSeriesGetByIdResponseSuccess = PostSeriesGetByIdResponse[200]

/**
 * 获取系列
 * tags: 系列
 */
export function postSeriesGetById(option: PostSeriesGetByIdOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesGetByIdResponseSuccess>('/series/getById', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesCreate */
interface PostSeriesCreateOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: SeriesCreateReqDto
}

interface PostSeriesCreateResponse {
  /** */
  200: SeriesEntityDto
}

type PostSeriesCreateResponseSuccess = PostSeriesCreateResponse[200]

/**
 * 保存系列
 * tags: 系列
 */
export function postSeriesCreate(option: PostSeriesCreateOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesCreateResponseSuccess>('/series/create', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesUpdateSeriesStatus */
interface PostSeriesUpdateSeriesStatusOption {
  body?: SeriesUpdateStatusReqDto
}

interface PostSeriesUpdateSeriesStatusResponse {
  /** */
  200: any
}

type PostSeriesUpdateSeriesStatusResponseSuccess = PostSeriesUpdateSeriesStatusResponse[200]

/**
 * 更新系列启用、停产、默认状态
 * tags: 系列
 */
export function postSeriesUpdateSeriesStatus(option: PostSeriesUpdateSeriesStatusOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesUpdateSeriesStatusResponseSuccess>(
    '/series/updateSeriesStatus',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postSeriesUpdate */
interface PostSeriesUpdateOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: SeriesUpdateReqDto
}

interface PostSeriesUpdateResponse {
  /** */
  200: any
}

type PostSeriesUpdateResponseSuccess = PostSeriesUpdateResponse[200]

/**
 * 更新系列
 * tags: 系列
 */
export function postSeriesUpdate(option: PostSeriesUpdateOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesUpdateResponseSuccess>('/series/update', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesUpdateBatch */
interface PostSeriesUpdateBatchOption {
  body?: SeriesUpdateBatchReqDto
}

interface PostSeriesUpdateBatchResponse {
  /** */
  200: any
}

type PostSeriesUpdateBatchResponseSuccess = PostSeriesUpdateBatchResponse[200]

/**
 * 批量更新（系列树排序用）
 * tags: 系列
 */
export function postSeriesUpdateBatch(option: PostSeriesUpdateBatchOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesUpdateBatchResponseSuccess>('/series/updateBatch', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesRemove */
interface PostSeriesRemoveOption {
  body?: IdsReqDto
}

interface PostSeriesRemoveResponse {
  /** */
  200: any
}

type PostSeriesRemoveResponseSuccess = PostSeriesRemoveResponse[200]

/**
 * 删除系列
 * tags: 系列
 */
export function postSeriesRemove(option: PostSeriesRemoveOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesRemoveResponseSuccess>('/series/remove', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesRemoveById */
interface PostSeriesRemoveByIdOption {
  body?: SeriesIdReqDto
}

interface PostSeriesRemoveByIdResponse {
  /** */
  200: any
}

type PostSeriesRemoveByIdResponseSuccess = PostSeriesRemoveByIdResponse[200]

/**
 * 删除单个系列(如果错误消息是 需审批 需提示审批)
 * tags: 系列
 */
export function postSeriesRemoveById(option: PostSeriesRemoveByIdOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesRemoveByIdResponseSuccess>('/series/removeById', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesIsAuditBeforeDelete */
interface PostSeriesIsAuditBeforeDeleteOption {
  body?: SeriesIdReqDto
}

interface PostSeriesIsAuditBeforeDeleteResponse {
  /** */
  200: boolean
}

type PostSeriesIsAuditBeforeDeleteResponseSuccess = PostSeriesIsAuditBeforeDeleteResponse[200]

/**
 * 删除系列是否要审批
 * tags: 系列
 */
export function postSeriesIsAuditBeforeDelete(
  option: PostSeriesIsAuditBeforeDeleteOption,
  config?: AxiosRequestConfig,
) {
  return requester<PostSeriesIsAuditBeforeDeleteResponseSuccess>(
    '/series/isAuditBeforeDelete',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postSeriesGetSeriesIndustry */
interface PostSeriesGetSeriesIndustryOption {
  body?: GetSeriesIndustryReqDto
}

interface PostSeriesGetSeriesIndustryResponse {
  /** */
  200: Array<GetSeriesIndustryResDto>
}

type PostSeriesGetSeriesIndustryResponseSuccess = PostSeriesGetSeriesIndustryResponse[200]

/**
 * 获取系列行业分类
 * tags: 系列
 */
export function postSeriesGetSeriesIndustry(option: PostSeriesGetSeriesIndustryOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesGetSeriesIndustryResponseSuccess>(
    '/series/getSeriesIndustry',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postSeriesSaveSeriesIndustry */
interface PostSeriesSaveSeriesIndustryOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: SaveSeriesIndustryDto
}

interface PostSeriesSaveSeriesIndustryResponse {
  /** */
  200: Array<GetSeriesIndustryResDto>
}

type PostSeriesSaveSeriesIndustryResponseSuccess = PostSeriesSaveSeriesIndustryResponse[200]

/**
 * 保存系列行业关系
 * tags: 系列
 */
export function postSeriesSaveSeriesIndustry(option: PostSeriesSaveSeriesIndustryOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesSaveSeriesIndustryResponseSuccess>(
    '/series/saveSeriesIndustry',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postSeriesGetNameProps */
interface PostSeriesGetNamePropsOption {
  body?: GetSeriesIndustryReqDto
}

interface PostSeriesGetNamePropsResponse {
  /** */
  200: Array<SeriesGetNamePropsResDto>
}

type PostSeriesGetNamePropsResponseSuccess = PostSeriesGetNamePropsResponse[200]

/**
 * 获取系列下系列命名相关属性
 * tags: 系列
 */
export function postSeriesGetNameProps(option: PostSeriesGetNamePropsOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesGetNamePropsResponseSuccess>('/series/getNameProps', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesGetAllProps */
interface PostSeriesGetAllPropsOption {
  body?: GetSeriesIndustryReqDto
}

interface PostSeriesGetAllPropsResponse {
  /** */
  200: Array<TblPropertyEntity>
}

type PostSeriesGetAllPropsResponseSuccess = PostSeriesGetAllPropsResponse[200]

/**
 * 获取系列下系列所有属性
 * tags: 系列
 */
export function postSeriesGetAllProps(option: PostSeriesGetAllPropsOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesGetAllPropsResponseSuccess>('/series/getAllProps', { method: 'post', ...option }, config)
}

/** request parameter type for postSeriesExistSameName */
interface PostSeriesExistSameNameOption {
  body?: SeriesExistNameReqDto
}

interface PostSeriesExistSameNameResponse {
  /** */
  200: boolean
}

type PostSeriesExistSameNameResponseSuccess = PostSeriesExistSameNameResponse[200]

/**
 * 品牌下是否存在相同名称系列
 * tags: 系列
 */
export function postSeriesExistSameName(option: PostSeriesExistSameNameOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesExistSameNameResponseSuccess>(
    '/series/existSameName',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postSeriesGetSeriesStatus */
interface PostSeriesGetSeriesStatusOption {
  body?: SeriesIdReqDto
}

interface PostSeriesGetSeriesStatusResponse {
  /** */
  200: TblSeriesExtEntity
}

type PostSeriesGetSeriesStatusResponseSuccess = PostSeriesGetSeriesStatusResponse[200]

/**
 * 获取当前系列状态
 * tags: 系列
 */
export function postSeriesGetSeriesStatus(option: PostSeriesGetSeriesStatusOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesGetSeriesStatusResponseSuccess>(
    '/series/getSeriesStatus',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postSeriesChangeSeriesStatus */
interface PostSeriesChangeSeriesStatusOption {
  body?: SeriesChangeSatusReqDto
}

interface PostSeriesChangeSeriesStatusResponse {
  /** */
  200: any
}

type PostSeriesChangeSeriesStatusResponseSuccess = PostSeriesChangeSeriesStatusResponse[200]

/**
 * 修改系列状态
 * tags: 系列
 */
export function postSeriesChangeSeriesStatus(option: PostSeriesChangeSeriesStatusOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesChangeSeriesStatusResponseSuccess>(
    '/series/changeSeriesStatus',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postSeriesGetSeriesCompTree */
interface PostSeriesGetSeriesCompTreeOption {
  body?: SeriesIdReqDto
}

interface PostSeriesGetSeriesCompTreeResponse {
  /** */
  200: Array<OpenGetSeriesCompsTreeResDto>
}

type PostSeriesGetSeriesCompTreeResponseSuccess = PostSeriesGetSeriesCompTreeResponse[200]

/**
 * 获取系列下组件分组树
 * tags: 系列
 */
export function postSeriesGetSeriesCompTree(option: PostSeriesGetSeriesCompTreeOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesGetSeriesCompTreeResponseSuccess>(
    '/series/getSeriesCompTree',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postSeriesCopySeries */
interface PostSeriesCopySeriesOption {
  body?: SeriesCopyReqDto
}

interface PostSeriesCopySeriesResponse {
  /** */
  200: SeriesEntityDto
}

type PostSeriesCopySeriesResponseSuccess = PostSeriesCopySeriesResponse[200]

/**
 * 复制系列
 * tags: 系列
 */
export function postSeriesCopySeries(option: PostSeriesCopySeriesOption, config?: AxiosRequestConfig) {
  return requester<PostSeriesCopySeriesResponseSuccess>('/series/copySeries', { method: 'post', ...option }, config)
}

/** request parameter type for postCompGetAllGroupBySid */
interface PostCompGetAllGroupBySidOption {
  body?: SeriesIdReqCompDto
}

interface PostCompGetAllGroupBySidResponse {
  /** */
  200: Array<TblComponentTypeEntity>
}

type PostCompGetAllGroupBySidResponseSuccess = PostCompGetAllGroupBySidResponse[200]

/**
 * 获取系列下所有组件分组
 * tags: 组件
 */
export function postCompGetAllGroupBySid(option: PostCompGetAllGroupBySidOption, config?: AxiosRequestConfig) {
  return requester<PostCompGetAllGroupBySidResponseSuccess>(
    '/comp/getAllGroupBySid',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postCompGetGroup */
interface PostCompGetGroupOption {
  body?: CompGroupIdReqDto
}

interface PostCompGetGroupResponse {
  /** */
  200: TblComponentTypeEntity
}

type PostCompGetGroupResponseSuccess = PostCompGetGroupResponse[200]

/**
 * 获取组件分组
 * tags: 组件
 */
export function postCompGetGroup(option: PostCompGetGroupOption, config?: AxiosRequestConfig) {
  return requester<PostCompGetGroupResponseSuccess>('/comp/getGroup', { method: 'post', ...option }, config)
}

/** request parameter type for postCompGetGroupBatch */
interface PostCompGetGroupBatchOption {
  body?: IdsReqDto
}

interface PostCompGetGroupBatchResponse {
  /** */
  200: Array<TblComponentTypeEntity>
}

type PostCompGetGroupBatchResponseSuccess = PostCompGetGroupBatchResponse[200]

/**
 * 批量获取组件分组
 * tags: 组件
 */
export function postCompGetGroupBatch(option: PostCompGetGroupBatchOption, config?: AxiosRequestConfig) {
  return requester<PostCompGetGroupBatchResponseSuccess>('/comp/getGroupBatch', { method: 'post', ...option }, config)
}

/** request parameter type for postCompCreateGroup */
interface PostCompCreateGroupOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: CompGroupCreateReqDto
}

interface PostCompCreateGroupResponse {
  /** */
  200: TblComponentTypeEntity
}

type PostCompCreateGroupResponseSuccess = PostCompCreateGroupResponse[200]

/**
 * 保存分组
 * tags: 组件
 */
export function postCompCreateGroup(option: PostCompCreateGroupOption, config?: AxiosRequestConfig) {
  return requester<PostCompCreateGroupResponseSuccess>('/comp/createGroup', { method: 'post', ...option }, config)
}

/** request parameter type for postCompUpdateGroup */
interface PostCompUpdateGroupOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: CompGroupUpdateReqDto
}

interface PostCompUpdateGroupResponse {
  /** */
  200: any
}

type PostCompUpdateGroupResponseSuccess = PostCompUpdateGroupResponse[200]

/**
 * 更新分组
 * tags: 组件
 */
export function postCompUpdateGroup(option: PostCompUpdateGroupOption, config?: AxiosRequestConfig) {
  return requester<PostCompUpdateGroupResponseSuccess>('/comp/updateGroup', { method: 'post', ...option }, config)
}

/** request parameter type for postCompRemoveGroup */
interface PostCompRemoveGroupOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: IdsReqDto
}

interface PostCompRemoveGroupResponse {
  /** */
  200: any
}

type PostCompRemoveGroupResponseSuccess = PostCompRemoveGroupResponse[200]

/**
 * 批量删除分组信息
 * tags: 组件
 */
export function postCompRemoveGroup(option: PostCompRemoveGroupOption, config?: AxiosRequestConfig) {
  return requester<PostCompRemoveGroupResponseSuccess>('/comp/removeGroup', { method: 'post', ...option }, config)
}

/** request parameter type for postCompSaveBatchGroup */
interface PostCompSaveBatchGroupOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: CompGroupBatchUpdateReqDto
}

interface PostCompSaveBatchGroupResponse {
  /** */
  200: string
}

type PostCompSaveBatchGroupResponseSuccess = PostCompSaveBatchGroupResponse[200]

/**
 * 批量更新分组信息
 * tags: 组件
 */
export function postCompSaveBatchGroup(option: PostCompSaveBatchGroupOption, config?: AxiosRequestConfig) {
  return requester<PostCompSaveBatchGroupResponseSuccess>('/comp/saveBatchGroup', { method: 'post', ...option }, config)
}

/** request parameter type for postCompGetAll */
interface PostCompGetAllOption {
  body?: SeriesIdReqCompDto
}

interface PostCompGetAllResponse {
  /** */
  200: Array<TblComponentEntityWithExt>
}

type PostCompGetAllResponseSuccess = PostCompGetAllResponse[200]

/**
 * 获取系列下所有组件
 * tags: 组件
 */
export function postCompGetAll(option: PostCompGetAllOption, config?: AxiosRequestConfig) {
  return requester<PostCompGetAllResponseSuccess>('/comp/getAll', { method: 'post', ...option }, config)
}

/** request parameter type for postCompGetById */
interface PostCompGetByIdOption {
  body?: CompIdReqDto
}

interface PostCompGetByIdResponse {
  /** */
  200: TblComponentEntity
}

type PostCompGetByIdResponseSuccess = PostCompGetByIdResponse[200]

/**
 * 获取组件
 * tags: 组件
 */
export function postCompGetById(option: PostCompGetByIdOption, config?: AxiosRequestConfig) {
  return requester<PostCompGetByIdResponseSuccess>('/comp/getById', { method: 'post', ...option }, config)
}

/** request parameter type for postCompCreate */
interface PostCompCreateOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: CompCreateReqDto
}

interface PostCompCreateResponse {
  /** */
  200: TblComponentEntity
}

type PostCompCreateResponseSuccess = PostCompCreateResponse[200]

/**
 * 保存组件
 * tags: 组件
 */
export function postCompCreate(option: PostCompCreateOption, config?: AxiosRequestConfig) {
  return requester<PostCompCreateResponseSuccess>('/comp/create', { method: 'post', ...option }, config)
}

/** request parameter type for postCompUpdate */
interface PostCompUpdateOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: CompUpdateReqDto
}

interface PostCompUpdateResponse {
  /** */
  200: any
}

type PostCompUpdateResponseSuccess = PostCompUpdateResponse[200]

/**
 * 更新组件
 * tags: 组件
 */
export function postCompUpdate(option: PostCompUpdateOption, config?: AxiosRequestConfig) {
  return requester<PostCompUpdateResponseSuccess>('/comp/update', { method: 'post', ...option }, config)
}

/** request parameter type for postCompRemove */
interface PostCompRemoveOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: IdsReqDto
}

interface PostCompRemoveResponse {
  /** */
  200: any
}

type PostCompRemoveResponseSuccess = PostCompRemoveResponse[200]

/**
 * 删除组件
 * tags: 组件
 */
export function postCompRemove(option: PostCompRemoveOption, config?: AxiosRequestConfig) {
  return requester<PostCompRemoveResponseSuccess>('/comp/remove', { method: 'post', ...option }, config)
}

/** request parameter type for postCompUpdateBatch */
interface PostCompUpdateBatchOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: CompUpdateBatchReqDto
}

interface PostCompUpdateBatchResponse {
  /** */
  200: any
}

type PostCompUpdateBatchResponseSuccess = PostCompUpdateBatchResponse[200]

/**
 * 批量更新组件信息
 * tags: 组件
 */
export function postCompUpdateBatch(option: PostCompUpdateBatchOption, config?: AxiosRequestConfig) {
  return requester<PostCompUpdateBatchResponseSuccess>('/comp/updateBatch', { method: 'post', ...option }, config)
}

/** request parameter type for postPropsGetByCombId */
interface PostPropsGetByCombIdOption {
  body?: PropsCompIdReqDto
}

interface PostPropsGetByCombIdResponse {
  /** */
  200: Array<TblPropertyEntityWithOpt>
}

type PostPropsGetByCombIdResponseSuccess = PostPropsGetByCombIdResponse[200]

/**
 * 获取组件下所有属性集合
 * tags: 属性
 */
export function postPropsGetByCombId(option: PostPropsGetByCombIdOption, config?: AxiosRequestConfig) {
  return requester<PostPropsGetByCombIdResponseSuccess>('/props/getByCombId', { method: 'post', ...option }, config)
}

/** request parameter type for postPropsGetById */
interface PostPropsGetByIdOption {
  body?: PropsIdReqDto
}

interface PostPropsGetByIdResponse {
  /** */
  200: TblPropertyEntity
}

type PostPropsGetByIdResponseSuccess = PostPropsGetByIdResponse[200]

/**
 * 获取属性
 * tags: 属性
 */
export function postPropsGetById(option: PostPropsGetByIdOption, config?: AxiosRequestConfig) {
  return requester<PostPropsGetByIdResponseSuccess>('/props/getById', { method: 'post', ...option }, config)
}

/** request parameter type for postPropsGetByIds */
interface PostPropsGetByIdsOption {
  body?: IdsReqDto
}

interface PostPropsGetByIdsResponse {
  /** */
  200: Array<TblPropertyEntity>
}

type PostPropsGetByIdsResponseSuccess = PostPropsGetByIdsResponse[200]

/**
 * 批量获取属性
 * tags: 属性
 */
export function postPropsGetByIds(option: PostPropsGetByIdsOption, config?: AxiosRequestConfig) {
  return requester<PostPropsGetByIdsResponseSuccess>('/props/getByIds', { method: 'post', ...option }, config)
}

/** request parameter type for postPropsCreate */
interface PostPropsCreateOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: PropsCreateReqDto
}

interface PostPropsCreateResponse {
  /** */
  200: TblPropertyEntity
}

type PostPropsCreateResponseSuccess = PostPropsCreateResponse[200]

/**
 * 保存属性
 * tags: 属性
 */
export function postPropsCreate(option: PostPropsCreateOption, config?: AxiosRequestConfig) {
  return requester<PostPropsCreateResponseSuccess>('/props/create', { method: 'post', ...option }, config)
}

/** request parameter type for postPropsCreateBatch */
interface PostPropsCreateBatchOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: PropsCreateBatchReqDto
}

interface PostPropsCreateBatchResponse {
  /** */
  200: Array<TblPropertyEntity>
}

type PostPropsCreateBatchResponseSuccess = PostPropsCreateBatchResponse[200]

/**
 * 批量保存属性
 * tags: 属性
 */
export function postPropsCreateBatch(option: PostPropsCreateBatchOption, config?: AxiosRequestConfig) {
  return requester<PostPropsCreateBatchResponseSuccess>('/props/createBatch', { method: 'post', ...option }, config)
}

/** request parameter type for postPropsUpdate */
interface PostPropsUpdateOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: PropsUpdateReqDto
}

interface PostPropsUpdateResponse {
  /** */
  200: string
}

type PostPropsUpdateResponseSuccess = PostPropsUpdateResponse[200]

/**
 * 更新属性
 * tags: 属性
 */
export function postPropsUpdate(option: PostPropsUpdateOption, config?: AxiosRequestConfig) {
  return requester<PostPropsUpdateResponseSuccess>('/props/update', { method: 'post', ...option }, config)
}

/** request parameter type for postPropsUpdateBatch */
interface PostPropsUpdateBatchOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: PropsUpdateBatchReqDto
}

interface PostPropsUpdateBatchResponse {
  /** */
  200: string
}

type PostPropsUpdateBatchResponseSuccess = PostPropsUpdateBatchResponse[200]

/**
 * 批量更新属性
 * tags: 属性
 */
export function postPropsUpdateBatch(option: PostPropsUpdateBatchOption, config?: AxiosRequestConfig) {
  return requester<PostPropsUpdateBatchResponseSuccess>('/props/updateBatch', { method: 'post', ...option }, config)
}

/** request parameter type for postPropsRemove */
interface PostPropsRemoveOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: IdsReqDto
}

interface PostPropsRemoveResponse {
  /** */
  200: any
}

type PostPropsRemoveResponseSuccess = PostPropsRemoveResponse[200]

/**
 * 删除属性
 * tags: 属性
 */
export function postPropsRemove(option: PostPropsRemoveOption, config?: AxiosRequestConfig) {
  return requester<PostPropsRemoveResponseSuccess>('/props/remove', { method: 'post', ...option }, config)
}

/** request parameter type for postPropsCreateRefProps */
interface PostPropsCreateRefPropsOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: PropsCreateRefPropsReqDto
}

interface PostPropsCreateRefPropsResponse {
  /** */
  200: Array<TblPropertyEntityWithOpt>
}

type PostPropsCreateRefPropsResponseSuccess = PostPropsCreateRefPropsResponse[200]

/**
 * 保存外接属性
 * tags: 属性
 */
export function postPropsCreateRefProps(option: PostPropsCreateRefPropsOption, config?: AxiosRequestConfig) {
  return requester<PostPropsCreateRefPropsResponseSuccess>(
    '/props/createRefProps',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postPropsExistPropName */
interface PostPropsExistPropNameOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: PropsExistNameReqDto
}

interface PostPropsExistPropNameResponse {
  /** */
  200: boolean
}

type PostPropsExistPropNameResponseSuccess = PostPropsExistPropNameResponse[200]

/**
 * 组件下是否存在属性重名
 * tags: 属性
 */
export function postPropsExistPropName(option: PostPropsExistPropNameOption, config?: AxiosRequestConfig) {
  return requester<PostPropsExistPropNameResponseSuccess>('/props/existPropName', { method: 'post', ...option }, config)
}

/** request parameter type for postPropsRelGetListById */
interface PostPropsRelGetListByIdOption {
  body?: PropsRelFPropIdReqDto
}

interface PostPropsRelGetListByIdResponse {
  /** */
  200: Array<TblPropertyProprelEntity>
}

type PostPropsRelGetListByIdResponseSuccess = PostPropsRelGetListByIdResponse[200]

/**
 * 获取主动属性集合(根据被动属性ID)
 * tags: 主被动属性关系
 */
export function postPropsRelGetListById(option: PostPropsRelGetListByIdOption, config?: AxiosRequestConfig) {
  return requester<PostPropsRelGetListByIdResponseSuccess>(
    '/propsRel/getListById',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postPropsRelGetListByCombId */
interface PostPropsRelGetListByCombIdOption {
  body?: SharedCompIdReqDto
}

interface PostPropsRelGetListByCombIdResponse {
  /** */
  200: {
    [propertyName: string]: Array<number>
  }
}

type PostPropsRelGetListByCombIdResponseSuccess = PostPropsRelGetListByCombIdResponse[200]

/**
 * 获取组件下所有主被动属性关系
 * tags: 主被动属性关系
 */
export function postPropsRelGetListByCombId(option: PostPropsRelGetListByCombIdOption, config?: AxiosRequestConfig) {
  return requester<PostPropsRelGetListByCombIdResponseSuccess>(
    '/propsRel/getListByCombId',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postPropsRelCreateBatch */
interface PostPropsRelCreateBatchOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: PropsRelCreateBatchReqDto
}

interface PostPropsRelCreateBatchResponse {
  /** */
  200: any
}

type PostPropsRelCreateBatchResponseSuccess = PostPropsRelCreateBatchResponse[200]

/**
 * 保存主动属性
 * tags: 主被动属性关系
 */
export function postPropsRelCreateBatch(option: PostPropsRelCreateBatchOption, config?: AxiosRequestConfig) {
  return requester<PostPropsRelCreateBatchResponseSuccess>(
    '/propsRel/createBatch',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postPropsRelExistOptRel */
interface PostPropsRelExistOptRelOption {
  body?: PropsRelFPropIdReqDto
}

interface PostPropsRelExistOptRelResponse {
  /** */
  200: boolean
}

type PostPropsRelExistOptRelResponseSuccess = PostPropsRelExistOptRelResponse[200]

/**
 * 是否存在选项约束
 * tags: 主被动属性关系
 */
export function postPropsRelExistOptRel(option: PostPropsRelExistOptRelOption, config?: AxiosRequestConfig) {
  return requester<PostPropsRelExistOptRelResponseSuccess>(
    '/propsRel/existOptRel',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOptGetByPropsId */
interface PostOptGetByPropsIdOption {
  body?: OptPropsIdReqDto
}

interface PostOptGetByPropsIdResponse {
  /** */
  200: Array<TblPropertyOptionEntity>
}

type PostOptGetByPropsIdResponseSuccess = PostOptGetByPropsIdResponse[200]

/**
 * 根据属性ID获取选项集合
 * tags: 选项
 */
export function postOptGetByPropsId(option: PostOptGetByPropsIdOption, config?: AxiosRequestConfig) {
  return requester<PostOptGetByPropsIdResponseSuccess>('/opt/getByPropsId', { method: 'post', ...option }, config)
}

/** request parameter type for postOptGetById */
interface PostOptGetByIdOption {
  body?: OptIdReqDto
}

interface PostOptGetByIdResponse {
  /** */
  200: TblPropertyOptionEntity
}

type PostOptGetByIdResponseSuccess = PostOptGetByIdResponse[200]

/**
 * 获取选项
 * tags: 选项
 */
export function postOptGetById(option: PostOptGetByIdOption, config?: AxiosRequestConfig) {
  return requester<PostOptGetByIdResponseSuccess>('/opt/getById', { method: 'post', ...option }, config)
}

/** request parameter type for postOptGetByIds */
interface PostOptGetByIdsOption {
  body?: IdsReqDto
}

interface PostOptGetByIdsResponse {
  /** */
  200: Array<TblPropertyOptionEntity>
}

type PostOptGetByIdsResponseSuccess = PostOptGetByIdsResponse[200]

/**
 * 批量获取选项
 * tags: 选项
 */
export function postOptGetByIds(option: PostOptGetByIdsOption, config?: AxiosRequestConfig) {
  return requester<PostOptGetByIdsResponseSuccess>('/opt/getByIds', { method: 'post', ...option }, config)
}

/** request parameter type for postOptCreate */
interface PostOptCreateOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: OptCreateReqDto
}

interface PostOptCreateResponse {
  /** */
  200: TblPropertyOptionEntity
}

type PostOptCreateResponseSuccess = PostOptCreateResponse[200]

/**
 * 保存选项
 * tags: 选项
 */
export function postOptCreate(option: PostOptCreateOption, config?: AxiosRequestConfig) {
  return requester<PostOptCreateResponseSuccess>('/opt/create', { method: 'post', ...option }, config)
}

/** request parameter type for postOptCreateBatch */
interface PostOptCreateBatchOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: OptCreateBatchReqDto
}

interface PostOptCreateBatchResponse {
  /** */
  200: any
}

type PostOptCreateBatchResponseSuccess = PostOptCreateBatchResponse[200]

/**
 * 批量保存选项
 * tags: 选项
 */
export function postOptCreateBatch(option: PostOptCreateBatchOption, config?: AxiosRequestConfig) {
  return requester<PostOptCreateBatchResponseSuccess>('/opt/createBatch', { method: 'post', ...option }, config)
}

/** request parameter type for postOptUpdate */
interface PostOptUpdateOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: OptUpdateReqDto
}

interface PostOptUpdateResponse {
  /** */
  200: string
}

type PostOptUpdateResponseSuccess = PostOptUpdateResponse[200]

/**
 * 更新选项
 * tags: 选项
 */
export function postOptUpdate(option: PostOptUpdateOption, config?: AxiosRequestConfig) {
  return requester<PostOptUpdateResponseSuccess>('/opt/update', { method: 'post', ...option }, config)
}

/** request parameter type for postOptUpdateBatch */
interface PostOptUpdateBatchOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: OptUpdateBatchReqDto
}

interface PostOptUpdateBatchResponse {
  /** */
  200: string
}

type PostOptUpdateBatchResponseSuccess = PostOptUpdateBatchResponse[200]

/**
 * 批量更新选项
 * tags: 选项
 */
export function postOptUpdateBatch(option: PostOptUpdateBatchOption, config?: AxiosRequestConfig) {
  return requester<PostOptUpdateBatchResponseSuccess>('/opt/updateBatch', { method: 'post', ...option }, config)
}

/** request parameter type for postOptRemove */
interface PostOptRemoveOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: OptBatchIdsReqDto
}

interface PostOptRemoveResponse {
  /** */
  200: any
}

type PostOptRemoveResponseSuccess = PostOptRemoveResponse[200]

/**
 * 删除选项
 * tags: 选项
 */
export function postOptRemove(option: PostOptRemoveOption, config?: AxiosRequestConfig) {
  return requester<PostOptRemoveResponseSuccess>('/opt/remove', { method: 'post', ...option }, config)
}

/** request parameter type for postOptRelGetListById */
interface PostOptRelGetListByIdOption {
  body?: OptRelFpropIdReqDto
}

interface PostOptRelGetListByIdResponse {
  /** */
  200: Array<OptRelEntityResDto>
}

type PostOptRelGetListByIdResponseSuccess = PostOptRelGetListByIdResponse[200]

/**
 * 获取被动属性选项约束关系
 * tags: 选项约束
 */
export function postOptRelGetListById(option: PostOptRelGetListByIdOption, config?: AxiosRequestConfig) {
  return requester<PostOptRelGetListByIdResponseSuccess>('/optRel/getListById', { method: 'post', ...option }, config)
}

/** request parameter type for postOptRelGetListByCompId */
interface PostOptRelGetListByCompIdOption {
  body?: SharedCompIdReqDto
}

interface PostOptRelGetListByCompIdResponse {
  /** */
  200: Array<OptRelEntityResDto>
}

type PostOptRelGetListByCompIdResponseSuccess = PostOptRelGetListByCompIdResponse[200]

/**
 * 获取组件下被动属性选项约束关系
 * tags: 选项约束
 */
export function postOptRelGetListByCompId(option: PostOptRelGetListByCompIdOption, config?: AxiosRequestConfig) {
  return requester<PostOptRelGetListByCompIdResponseSuccess>(
    '/optRel/getListByCompId',
    { method: 'post', ...option },
    config,
  )
}

/** request parameter type for postOptRelCreate */
interface PostOptRelCreateOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: OptRelCreateReqDto
}

interface PostOptRelCreateResponse {
  /** */
  200: any
}

type PostOptRelCreateResponseSuccess = PostOptRelCreateResponse[200]

/**
 * 保存被动属性选项约束关系-增量
 * tags: 选项约束
 */
export function postOptRelCreate(option: PostOptRelCreateOption, config?: AxiosRequestConfig) {
  return requester<PostOptRelCreateResponseSuccess>('/optRel/create', { method: 'post', ...option }, config)
}

/** request parameter type for postOptRelCreateBatch */
interface PostOptRelCreateBatchOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: OptRelCreateBatchReqDto
}

interface PostOptRelCreateBatchResponse {
  /** */
  200: any
}

type PostOptRelCreateBatchResponseSuccess = PostOptRelCreateBatchResponse[200]

/**
 * 批量保存被动属性约束关系-增量
 * tags: 选项约束
 */
export function postOptRelCreateBatch(option: PostOptRelCreateBatchOption, config?: AxiosRequestConfig) {
  return requester<PostOptRelCreateBatchResponseSuccess>('/optRel/createBatch', { method: 'post', ...option }, config)
}

/** request parameter type for postOptRelUpdate */
interface PostOptRelUpdateOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: OptRelUpdateReqDto
}

interface PostOptRelUpdateResponse {
  /** */
  200: any
}

type PostOptRelUpdateResponseSuccess = PostOptRelUpdateResponse[200]

/**
 * 更新被动属性选项约束关系
 * tags: 选项约束
 */
export function postOptRelUpdate(option: PostOptRelUpdateOption, config?: AxiosRequestConfig) {
  return requester<PostOptRelUpdateResponseSuccess>('/optRel/update', { method: 'post', ...option }, config)
}

/** request parameter type for postOptRelRemove */
interface PostOptRelRemoveOption {
  /** 系列ID */
  query: {
    /**
        系列ID */
    sid: number
  }
  body?: OptRelRemoveIdsReqDto
}

interface PostOptRelRemoveResponse {
  /** */
  200: any
}

type PostOptRelRemoveResponseSuccess = PostOptRelRemoveResponse[200]

/**
 * 删除选项约束关系
 * tags: 选项约束
 */
export function postOptRelRemove(option: PostOptRelRemoveOption, config?: AxiosRequestConfig) {
  return requester<PostOptRelRemoveResponseSuccess>('/optRel/remove', { method: 'post', ...option }, config)
}

interface PostPubGetPubDataResponse {
  /** */
  200: Array<PubGetTreeItemDto>
}

type PostPubGetPubDataResponseSuccess = PostPubGetPubDataResponse[200]

/**
 * 获取发布数据
 * tags: 数据发布
 */
export function postPubGetPubData(config?: AxiosRequestConfig) {
  return requester<PostPubGetPubDataResponseSuccess>('/pub/getPubData', { method: 'post' }, config)
}

/** request parameter type for postPubSavePubData */
interface PostPubSavePubDataOption {
  body?: PubSaveDataReqDto
}

interface PostPubSavePubDataResponse {
  /** */
  200: string
}

type PostPubSavePubDataResponseSuccess = PostPubSavePubDataResponse[200]

/**
 * 保存发布数据
 * tags: 数据发布
 */
export function postPubSavePubData(option: PostPubSavePubDataOption, config?: AxiosRequestConfig) {
  return requester<PostPubSavePubDataResponseSuccess>('/pub/savePubData', { method: 'post', ...option }, config)
}

/** request parameter type for postPubGetListByPage */
interface PostPubGetListByPageOption {
  body?: PubGetListPageReqDto
}

interface PostPubGetListByPageResponse {
  /** */
  200: PubGetListByPageResDto
}

type PostPubGetListByPageResponseSuccess = PostPubGetListByPageResponse[200]

/**
 * 获取发布记录
 * tags: 数据发布
 */
export function postPubGetListByPage(option: PostPubGetListByPageOption, config?: AxiosRequestConfig) {
  return requester<PostPubGetListByPageResponseSuccess>('/pub/getListByPage', { method: 'post', ...option }, config)
}

/** request parameter type for postPubGetPubRecord */
interface PostPubGetPubRecordOption {
  body?: IdsReqDto
}

interface PostPubGetPubRecordResponse {
  /** */
  200: Array<TblDatapubEntity>
}

type PostPubGetPubRecordResponseSuccess = PostPubGetPubRecordResponse[200]

/**
 * 获取发布状态
 * tags: 数据发布
 */
export function postPubGetPubRecord(option: PostPubGetPubRecordOption, config?: AxiosRequestConfig) {
  return requester<PostPubGetPubRecordResponseSuccess>('/pub/getPubRecord', { method: 'post', ...option }, config)
}

/** request parameter type for postPubUpdate */
interface PostPubUpdateOption {
  body?: PubUpdateReqDto
}

interface PostPubUpdateResponse {
  /** */
  200: any
}

type PostPubUpdateResponseSuccess = PostPubUpdateResponse[200]

/**
 * 更新版本启用停用
 * tags: 数据发布
 */
export function postPubUpdate(option: PostPubUpdateOption, config?: AxiosRequestConfig) {
  return requester<PostPubUpdateResponseSuccess>('/pub/update', { method: 'post', ...option }, config)
}

/** request parameter type for postPubUpdateBatch */
interface PostPubUpdateBatchOption {
  body?: PubUpdateBatchReqDto
}

interface PostPubUpdateBatchResponse {
  /** */
  200: any
}

type PostPubUpdateBatchResponseSuccess = PostPubUpdateBatchResponse[200]

/**
 * 批量更新启用停用
 * tags: 数据发布
 */
export function postPubUpdateBatch(option: PostPubUpdateBatchOption, config?: AxiosRequestConfig) {
  return requester<PostPubUpdateBatchResponseSuccess>('/pub/updateBatch', { method: 'post', ...option }, config)
}

/** request parameter type for postPubGetMcodeList */
interface PostPubGetMcodeListOption {
  body?: PubGetMcodeReqDto
}

interface PostPubGetMcodeListResponse {
  /** */
  200: Array<SearchSpecItemEntity>
}

type PostPubGetMcodeListResponseSuccess = PostPubGetMcodeListResponse[200]

/**
 * 获取系列物料
 * tags: 数据发布
 */
export function postPubGetMcodeList(option: PostPubGetMcodeListOption, config?: AxiosRequestConfig) {
  return requester<PostPubGetMcodeListResponseSuccess>('/pub/getMcodeList', { method: 'post', ...option }, config)
}

/** request parameter type for postPubSendmsg4Js */
interface PostPubSendmsg4JsOption {
  query: {
    recordId: number
  }
}

interface PostPubSendmsg4JsResponse {
  /** */
  200: any
}

type PostPubSendmsg4JsResponseSuccess = PostPubSendmsg4JsResponse[200]

/**
 * 发送生成js消息
 * tags: 数据发布
 */
export function postPubSendmsg4Js(option: PostPubSendmsg4JsOption, config?: AxiosRequestConfig) {
  return requester<PostPubSendmsg4JsResponseSuccess>('/pub/sendmsg4js', { method: 'post', ...option }, config)
}

/** request parameter type for postAuditCreate */
interface PostAuditCreateOption {
  body?: AuditCreateReqDto
}

interface PostAuditCreateResponse {
  /** */
  200: any
}

type PostAuditCreateResponseSuccess = PostAuditCreateResponse[200]

/**
 * 提交审批
 * tags: 审批
 */
export function postAuditCreate(option: PostAuditCreateOption, config?: AxiosRequestConfig) {
  return requester<PostAuditCreateResponseSuccess>('/audit/create', { method: 'post', ...option }, config)
}
