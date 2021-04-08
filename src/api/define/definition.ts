/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
export type ComponentsSchemasSeriesEntityDtoStatus = 0 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 20
export type ComponentsSchemasSeriesEntityDtoChangeStatus = 0 | 10 | 20 | 40
export interface GetSpecByBatchDto {
  /**
   * 系列ID
   * example: 1
   */
  seriesId: number
  /**
   * 版本
   * default:
   */
  version?: string
  /**
   * 条数索引默认0
   * default: 0
   */
  index?: number
  /**
   * 拉取条数 1000
   * default: 1000
   */
  limit?: number
}

export interface ResCategoryDto {
  id: number
  name: string
}

export interface ResSpecDto {
  name: string
  mcode: string
  /** default: 台 */
  unit: string
  /** default: 1 */
  factory_status: number
}

export interface GetSpecByBatchResDto {
  index: number
  limit: number
  total: number
  seriesId: number
  /** 类别 */
  category: Array<ResCategoryDto>
  data: Array<ResSpecDto>
}

export interface GetSpecByCodesDto {
  /**
   * 物料号
   * default:
   * example: 3.A01.05H222-10+28,3.A01.05G20-12T5
   */
  codes: Array<string>
}

export interface ResSpecCodeDto {
  name: string
  mcode: string
  /** default: 台 */
  unit: string
  /** default: 1 */
  factory_status: number
  seriesId: number
  category: Array<ResCategoryDto>
}

export interface GetSeriesCategoryDto {
  /**
   * 系列ID
   * example: 1
   */
  seriesId: number
}

export interface GetFactListReqDto {
  /** default: 1 */
  page: any
  /** default: 10 */
  size: any
  /** 搜索关键字 */
  name: string | null
  /** 省份 */
  province: string
  /**
   * 启用状态
   * 0-停用
   * 1-启用
   */
  enableStatus: number
}

export interface ZdProvinceEntity {
  id: number
  dm: string
  ct: string | null
  jp: string | null
  qp: string | null
  gltj: string | null
  jlbs: number | null
  isDelete: number | null
  createUser: number | null
  /** format: date-time */
  createTime: string | null
  updateUser: number | null
  /** format: date-time */
  updateTime: string | null
}

export interface ZdCountryEntity {
  id: number
  dm: string
  ct: string
  jp: string | null
  qp: string | null
  gltj: string | null
  jlbs: number | null
  isDelete: number | null
  createUser: number | null
  /** format: date-time */
  createTime: string | null
  updateUser: number | null
  /** format: date-time */
  updateTime: string | null
}

export interface TblFactoryExtEntity {
  factId: number
  enableStatus: number | null
  changeStatus: number | null
  categoryType: string | null
  keyWords: string | null
  imgs: string | null
  isDefault: number | null
  isDelete: number | null
  createUser: number | null
  /** format: date-time */
  createTime: string | null
  updateUser: number | null
  /** format: date-time */
  updateTime: string | null
}

export interface TblFactoryEntity {
  factId: number
  keyName: string | null
  factName: string
  shortCusName: string | null
  eName: string | null
  phone: string | null
  phone2: string | null
  website: string | null
  corporation: string | null
  fax: string | null
  email: string | null
  postCode: string | null
  address: string | null
  country: string | null
  province: string | null
  provinceExt: ZdProvinceEntity
  countryExt: ZdCountryEntity
  city: string | null
  description: string | null
  useAddress: string | null
  showOrder: number | null
  isDelete: number | null
  createUser: number | null
  /** format: date-time */
  createTime: string | null
  updateUser: number | null
  /** format: date-time */
  updateTime: string | null
  factoryExt: TblFactoryExtEntity
}

export interface GetFactListResDto {
  list: Array<TblFactoryEntity>
  total: number
}

export interface GetAllFactListReqDto {
  name: string | null
}

export interface SaveFactReqDto {
  /**
   * 品牌名称
   * example: 测试品牌
   */
  factName: string
  /** 品牌简称 */
  shortCusName: string
  /** 拼音 */
  keyName: string
  /** 拼音简码 */
  eName: string
  /** 显示顺序 */
  showOrder: number
  /** 品牌行业 */
  categoryType: string
  /** 品牌别名 */
  keyWords: string
  /** 联系人 */
  corporation: string
  /** 电话 */
  phone: string
  /** 电子邮箱 */
  email: string
  /** 品牌主页 */
  website: string
  /** 国家地区 */
  country: string
  /** 省 */
  province: string
  /** 市 */
  city: string
  /** 邮编 */
  postCode: string
  /** 传真／座机 */
  fax: string
  /** 详细地址 */
  address: string
  /** 简介 */
  description: string
  /** 备注 */
  useAddress: string
  /** 请选择一个logo */
  imgs: string
  /**
   * 是否默认
   * 1-是
   * 0-否
   */
  isDefault: number
  /**
   * 启用状态
   * 0-停用
   * 1-启用
   */
  enableStatus: number
}

export interface FactProdTypeSaveDto {
  typeId?: number
  factoryId: number
  typeName: string
  eName: string
  keyWords: string
  imgs: string
  parentId: number
}

export interface TblFactoryProdtypeEntity {
  typeId: number
  factoryId: number
  typeName: string
  eName: string | null
  keyWords: string | null
  parentId: number | null
  showOrder: number | null
  imgs: string | null
  version: string | null
  isDelete: number | null
  createUser: number | null
  /** format: date-time */
  createTime: string | null
  updateUser: number | null
  /** format: date-time */
  updateTime: string | null
  children: Array<TblFactoryProdtypeEntity>
}

export interface FactProdTypeDeleteDto {
  typeId: number
}

export interface GetTreeDto {
  factoryId: number
}

export interface SortDto {
  typeId: number
  parentId: number
  showOrder: number
}

export interface TblIndustryProdtypeEntity {
  typeId: number
  typeName: string
  industryId: number
  parentId: number
  simpleCode: string | null
  description: string | null
  isDelete: number | null
  createUser: number | null
  /** format: date-time */
  createTime: string | null
  updateUser: number | null
  /** format: date-time */
  updateTime: string | null
  children: Array<TblIndustryProdtypeEntity>
}

export interface TblIndustryEntity {
  industryId: number
  itemName: string
  itemCode: string | null
  description: string | null
  isDelete: number | null
  createUser: number | null
  /** format: date-time */
  createTime: string | null
  updateUser: number | null
  /** format: date-time */
  updateTime: string | null
  children: Array<TblIndustryProdtypeEntity>
}

export interface GetAllSeriesDto {
  /** 品牌ID */
  fid: number
}

export interface SeriesEntityDto {
  /**
   * 状态
   * 0-新建
   * 3-定义完成，又重新修改
   * 4-定价完成，又重新修改
   * 5-发布后，又重新修改
   * 6-定义完成
   * 7-定价完成又重新修改
   * 8-发布后，又重新修改定价
   * 9-已定价完成
   * 10-已发布
   * 20-已停产
   */
  status?: ComponentsSchemasSeriesEntityDtoStatus
  /**
   * 数据变化标志
   * 0-编辑中
   * 10-待审核
   * 20-待发布
   * 40-已发布
   */
  changeStatus?: ComponentsSchemasSeriesEntityDtoChangeStatus
  /** 系列最后更新时间 */
  lastUpdateTime?: number
  /** 系列ID */
  seriesId: number
  /** 系列代号-拼规格名称用 */
  seriesName?: string
  /** 系列名称 */
  seriesFullName: string
  /** 系列英文简称 */
  seriesNameEn?: string
  /** 品牌ID */
  factoryId?: number
  /** 最后一级类目ID */
  ptypeId?: number
  /** 系列描述 */
  sDesc?: string
  /** 显示顺序 */
  showOrder?: number
  /** oss图片路径 */
  picName?: string
  /**
   * 生产状态
   *    0-已停产
   *    1-生产中
   */
  prodStatus?: number
  /** 启用停用 1: 启用 0: 停用 */
  enableStatus?: number
  /** 索引关键字 */
  keyWords?: string
  /** 是否品牌默认系列 */
  isFactDefault?: number
  /** 审批前是否删除 1-已删除 0-未删除 */
  isAuditDelete?: number
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * 是否显示价格
   *    1： 显示
   *    0：不显示
   */
  showPrice?: number
}

export interface SortItemDto {
  seriesId: number
  showOrder: number
  ptypeId?: number
}

export interface SeriesSortDto {
  sort: Array<SortItemDto>
}

export interface DeleteFactReqDto {
  id: number
}
