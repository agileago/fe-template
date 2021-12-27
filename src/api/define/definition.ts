/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
export type ComponentsSchemasOpenFactEntityDtoEnableStatus = 0 | 1
export type ComponentsSchemasOpenFactEntityDtoChangeStatus = 0 | 1 | 39 | 40
export type ComponentsSchemasGetFactCategoryResOpenDtoType =
  | 'series'
  | 'category'
  | 'compGroup'
  | 'comp'
export type ComponentsSchemasGetFactCategoryResOpenDtoChangeStatus =
  | 0
  | 10
  | 20
  | 40
export type ComponentsSchemasTblComponentEntityIsMain = -2 | -1 | 0 | 1
export type ComponentsSchemasTblComponentEntityNameFlag = 0 | 1
export type ComponentsSchemasTblComponentEntityPriceFlag = 0 | 1
export type ComponentsSchemasOpenGetSeriesCompsTreeResDtoIsMain =
  | -2
  | -1
  | 0
  | 1
export type ComponentsSchemasOpenGetSeriesCompsTreeResDtoType =
  | 'compGroup'
  | 'comp'
export type ComponentsSchemasFactEntityDtoEnableStatus = 0 | 1
export type ComponentsSchemasFactEntityDtoChangeStatus = 0 | 1 | 39 | 40
export type ComponentsSchemasFactCreateReqDtoEnableStatus = 0 | 1
export type ComponentsSchemasFactCreateReqDtoChangeStatus = 0 | 1 | 39 | 40
export type ComponentsSchemasFactUpdateReqDtoEnableStatus = 0 | 1
export type ComponentsSchemasFactUpdateReqDtoChangeStatus = 0 | 1 | 39 | 40
export type ComponentsSchemasSeriesEntityDtoStatus =
  | 0
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 20
export type ComponentsSchemasSeriesEntityDtoChangeStatus = 0 | 10 | 20 | 40
export type ComponentsSchemasSeriesCreateReqDtoStatus =
  | 0
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 20
export type ComponentsSchemasSeriesCreateReqDtoChangeStatus = 0 | 10 | 20 | 40
export type ComponentsSchemasSeriesCreateReqDtoEnableStatus = '停用' | '启用'
export type ComponentsSchemasSeriesCreateReqDtoIsFactDefault = '否' | '是'
export type ComponentsSchemasSeriesCreateReqDtoProdStatus = '停产' | '生产中'
export type ComponentsSchemasSeriesCreateReqDtoIsAuditDelete = '否' | '是'
export type ComponentsSchemasSeriesCreateReqDtoShowPrice = '否' | '是'
export type ComponentsSchemasSeriesUpdateReqDtoStatus =
  | 0
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 20
export type ComponentsSchemasSeriesUpdateReqDtoChangeStatus = 0 | 10 | 20 | 40
export type ComponentsSchemasSeriesGetNamePropsResDtoJlbs = 0 | 1 | 2 | 3 | 4
export type ComponentsSchemasTblPropertyEntityJlbs = 0 | 1 | 2 | 3 | 4
export type ComponentsSchemasTblSeriesExtEntityChangeStatus = 0 | 10 | 20 | 40
export type ComponentsSchemasSeriesChangeSatusReqDtoFrom =
  | '定义变动'
  | '价格变动'
  | '物料变动'
export type ComponentsSchemasTblComponentEntityWithExtIsMain = -2 | -1 | 0 | 1
export type ComponentsSchemasTblComponentEntityWithExtNameFlag = 0 | 1
export type ComponentsSchemasTblComponentEntityWithExtPriceFlag = 0 | 1
export type ComponentsSchemasCompCreateReqDtoIsMain = -2 | -1 | 0 | 1
export type ComponentsSchemasCompCreateReqDtoNameFlag = 0 | 1
export type ComponentsSchemasCompCreateReqDtoPriceFlag = 0 | 1
export type ComponentsSchemasCompUpdateReqDtoIsMain = -2 | -1 | 0 | 1
export type ComponentsSchemasCompUpdateReqDtoNameFlag = 0 | 1
export type ComponentsSchemasCompUpdateReqDtoPriceFlag = 0 | 1
export type ComponentsSchemasTblPropertyEntityWithOptJlbs = 0 | 1 | 2 | 3 | 4
export type ComponentsSchemasPropsCreateReqDtoJlbs = 0 | 1 | 2 | 3 | 4
export type ComponentsSchemasPropsUpdateReqDtoJlbs = 0 | 1 | 2 | 3 | 4
export type ComponentsSchemasPubGetTreeItemDtoType = 'fact' | 'series'
export type ComponentsSchemasPubGetListPageReqDtoPubType = 1 | 2 | 3 | 4
export type ComponentsSchemasPubGetListPageReqDtoEnableStatus = 0 | 1
export type ComponentsSchemasAuditCreateReqDtoWhere =
  | '数据定义'
  | '物料号维护'
  | '价格维护'
export interface GetSpecByBatchDto {
  /**
   * @description
   *   系列ID
   * @example
   *   1
   */
  seriesId: number
  /**
   * @description
   *   版本
   * @default:
   */
  version?: string
  /**
   * @description
   *   条数索引默认0
   * @default: 0
   */
  index?: number
  /**
   * @description
   *   拉取条数 1000
   * @default: 1000
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
  /** @default: 台 */
  unit: string
  /** @default: 1 */
  factory_status: number
}

export interface GetSpecByBatchResDto {
  index: number
  limit: number
  total: number
  seriesId: number
  /**
   * @description
   *   类别
   */
  category: Array<ResCategoryDto>
  data: Array<ResSpecDto>
}

export interface GetSpecByCodesDto {
  /**
   * @description
   *   物料号
   * @default:
   * @example
   *   3.A01.05H222-10+28,3.A01.05G20-12T5
   */
  codes: Array<string>
}

export interface ResSpecCodeDto {
  name: string
  mcode: string
  /** @default: 台 */
  unit: string
  /** @default: 1 */
  factory_status: number
  seriesId: number
  category: Array<ResCategoryDto>
}

export interface GetSeriesCategoryDto {
  /**
   * @description
   *   系列ID
   * @example
   *   1
   */
  seriesId: number
}

export interface OpenFactEntityDto {
  /**
   * @description
   *   启用状态
   *    0-停用
   *    1-启用
   */
  enableStatus?: ComponentsSchemasOpenFactEntityDtoEnableStatus
  /**
   * @description
   *   数据状态
   * 品牌新建 = 0,
   *    类目编辑中 = 1,
   *    正在发布 = 39,
   *    已发布 = 40,
   */
  changeStatus?: ComponentsSchemasOpenFactEntityDtoChangeStatus
  /**
   * @description
   *   版本
   */
  version?: number
  /**
   * @description
   *   品牌ID
   */
  factId: number
  /**
   * @description
   *   拼音简码
   */
  keyName?: string
  /**
   * @description
   *   品牌全称
   */
  factName: string
  /**
   * @description
   *   简  称
   */
  shortCusName?: string
  /**
   * @description
   *   拼  音
   */
  eName?: string
  /**
   * @description
   *   电  话
   */
  phone?: string
  /**
   * @description
   *   电  话2
   */
  phone2?: string
  /**
   * @description
   *   品牌主页
   */
  website?: string
  /**
   * @description
   *   联系人
   */
  corporation?: string
  /**
   * @description
   *   传真
   */
  fax?: string
  /**
   * @description
   *   电子邮箱
   */
  email?: string
  /**
   * @description
   *   邮编
   */
  postCode?: string
  /**
   * @description
   *   详细地址
   */
  address?: string
  /**
   * @description
   *   国家地区
   */
  country?: string
  /**
   * @description
   *   省
   */
  province?: string
  /**
   * @description
   *   市
   */
  city?: string
  /**
   * @description
   *   简  介
   */
  description?: string
  /**
   * @description
   *   备注
   */
  useAddress?: string
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   品牌行业
   */
  categoryType?: string
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   是否默认品牌
   *    1: 是
   *    0： 否
   */
  isDefault?: number
}

export interface GetFactCategoryOpenDto {
  /**
   * @description
   *   品牌ID
   */
  factId: number
}

export interface GetFactCategoryResOpenDto {
  /**
   * @description
   *   类型
   */
  type: ComponentsSchemasGetFactCategoryResOpenDtoType
  /**
   * @description
   *   数据变化状态
   */
  changeStatus?: ComponentsSchemasGetFactCategoryResOpenDtoChangeStatus
  /**
   * @description
   *   子节点
   */
  children?: Array<GetFactCategoryResOpenDto>
  /**
   * @description
   *   类目ID
   */
  id: number
  /**
   * @description
   *   父节点ID
   */
  pid: number
  /**
   * @description
   *   类目名称
   */
  name: string
  /**
   * @description
   *   类目英文名称
   */
  ename?: string
  /**
   * @description
   *   启用状态
   */
  enableStatus?: boolean
  /**
   * @description
   *   数据状态 详细状态
   */
  status?: number
  /**
   * @description
   *   是否审核前删除
   */
  isDelete?: boolean
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   版本
   */
  version?: string
}

export interface GetFactCategoryAddiResOpenDto {
  /**
   * @description
   *   分类
   */
  category: Array<GetFactCategoryResOpenDto>
  /**
   * @description
   *   未分配系列
   */
  seriesNoParent: Array<GetFactCategoryResOpenDto>
}

export interface SeriesIdOpenDto {
  /**
   * @description
   *   系列ID
   */
  sid: number
}

export interface TblComponentEntity {
  /**
   * @description
   *   组件类型：
   *    -2：图片
   *    -1：行业分类
   *    0：附件
   *    1：本体
   */
  isMain?: ComponentsSchemasTblComponentEntityIsMain
  /**
   * @description
   *   是否参与命名-无用
   */
  nameFlag?: ComponentsSchemasTblComponentEntityNameFlag
  /**
   * @description
   *   是否标配
   */
  priceFlag?: ComponentsSchemasTblComponentEntityPriceFlag
  /**
   * @description
   *   组件ID
   */
  compId: number
  /**
   * @description
   *   组件名称
   */
  compName?: string
  /**
   * @description
   *   组件英文名
   */
  compNameEn?: string
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   显示顺序
   */
  nOrder?: number
  /**
   * @description
   *   组件代号
   */
  compCode?: string
  /**
   * @description
   *   描述
   */
  description?: string
  /**
   * @description
   *   分组ID
   */
  typeId?: number
  /**
   * @description
   *   组件默认图片oss路径
   */
  picName?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface OpenGetSeriesCompsTreeResDto {
  /**
   * @description
   *   组件类型：
   *    -2：图片
   *    -1：行业分类
   *    0：附件
   *    1：本体
   */
  isMain?: ComponentsSchemasOpenGetSeriesCompsTreeResDtoIsMain
  /**
   * @description
   *   level 类型
   */
  type: ComponentsSchemasOpenGetSeriesCompsTreeResDtoType
  /**
   * @description
   *   子节点
   */
  children?: Array<OpenGetSeriesCompsTreeResDto>
  /**
   * @description
   *   节点ID
   */
  id: number
  /**
   * @description
   *   父节点ID
   */
  pid: number
  /**
   * @description
   *   名称
   */
  name: string
  /**
   * @description
   *   组件代号
   */
  code?: string
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
}

export interface OpenGetEffectMcodesReqDto {
  /**
   * @description
   *   系列ID
   */
  sid: number
  /**
   * @description
   *   选项ID分组集合
   */
  optIds: Array<string>
}

export interface GetPcodeOneReqDto {
  fid: number
  /**
   * @description
   *   厂商名称
   */
  prodName: string
}

export interface SearchPcodeEntity {
  id: number
  /**
   * @description
   *   物料号
   */
  prodCode?: string
  /**
   * @description
   *   厂商名称
   */
  prodName?: string
  /**
   * @description
   *   规格名称
   */
  prodEpname?: string
  /**
   * @description
   *   类型
   *    1-本体
   *    2-附件
   *    3-组合
   */
  mainFlag?: number
  sid?: number
  fid?: number
  status?: number
  price?: string
  stockStatus?: string
  gid?: string
  insWay?: number
  pkey?: string
}

export interface GetPcodeListReqDto {
  prodName: string
  /** @default: 10 */
  limit: number
}

export interface GetCombBulkReqDto {
  sid?: number
  combId?: number
  propOptSets: Array<string>
}

export interface CompIdReqDto {
  /**
   * @description
   *   组件ID
   */
  compId: number
}

export interface MacafeRequestDto {
  /**
   * @description
   *   系列ID
   */
  sid: number
  /**
   * @description
   *   pkey
   */
  pkey?: string
}

export interface MacafeResponseDto {
  factId: number
  factName: string
  seriesId: number
  seriesName: string
  seriesShortName: string
  industryId: number
  industryName: string
  name: string
  img: string
  pkey: string
  pnkey: string
  /**
   * @description
   *   bom pkey串
   */
  pbkey: string
  version: string
  mcode: string
  hasPrice: boolean
  price: number
  parts: any
  props: any
  combs: any
  comb: any
  views?: any
}

export interface ZdProvinceEntity {
  id: number
  /**
   * @description
   *   代码
   */
  dm: string
  /**
   * @description
   *   名称
   */
  ct: string | null
  jp: string | null
  qp: string | null
  /**
   * @description
   *   国家
   */
  gltj: string | null
  jlbs: number | null
}

export interface ZdCountryEntity {
  id: number
  /**
   * @description
   *   代号
   */
  dm: string
  /**
   * @description
   *   名称
   */
  ct: string
  /**
   * @description
   *   简称
   */
  jp?: string
  qp?: string
  gltj?: string
  jlbs?: number
}

export interface FactGetByPageReqDto {
  /**
   * @description
   *   搜索关键字
   */
  name?: string
  /**
   * @description
   *   省份
   */
  province?: string
  /**
   * @description
   *   启用状态
   * 0-停用
   * 1-启用
   */
  enableStatus?: number
  /**
   * @description
   *   页数
   * @default: 1
   */
  page?: number
  /**
   * @description
   *   页码
   * @default: 10
   */
  size?: number
}

export interface FactEntityDto {
  /**
   * @description
   *   启用状态
   *    0-停用
   *    1-启用
   */
  enableStatus?: ComponentsSchemasFactEntityDtoEnableStatus
  /**
   * @description
   *   数据状态
   * 品牌新建 = 0,
   *    类目编辑中 = 1,
   *    正在发布 = 39,
   *    已发布 = 40,
   */
  changeStatus?: ComponentsSchemasFactEntityDtoChangeStatus
  /**
   * @description
   *   省份名称
   */
  provinceName?: string
  /** @format: date-time */
  createTime: string
  /**
   * @description
   *   品牌ID
   */
  factId: number
  /**
   * @description
   *   拼音简码
   */
  keyName?: string
  /**
   * @description
   *   品牌全称
   */
  factName: string
  /**
   * @description
   *   简  称
   */
  shortCusName?: string
  /**
   * @description
   *   拼  音
   */
  eName?: string
  /**
   * @description
   *   电  话
   */
  phone?: string
  /**
   * @description
   *   电  话2
   */
  phone2?: string
  /**
   * @description
   *   品牌主页
   */
  website?: string
  /**
   * @description
   *   联系人
   */
  corporation?: string
  /**
   * @description
   *   传真
   */
  fax?: string
  /**
   * @description
   *   电子邮箱
   */
  email?: string
  /**
   * @description
   *   邮编
   */
  postCode?: string
  /**
   * @description
   *   详细地址
   */
  address?: string
  /**
   * @description
   *   国家地区
   */
  country?: string
  /**
   * @description
   *   省
   */
  province?: string
  /**
   * @description
   *   市
   */
  city?: string
  /**
   * @description
   *   简  介
   */
  description?: string
  /**
   * @description
   *   备注
   */
  useAddress?: string
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   品牌行业
   */
  categoryType?: string
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   是否默认品牌
   *    1: 是
   *    0： 否
   */
  isDefault?: number
}

export interface FactGetByPageResDto {
  /**
   * @description
   *   总数
   */
  total: number
  /**
   * @description
   *   数据
   */
  list: Array<FactEntityDto>
}

export interface FactGetAllReqDto {
  /**
   * @description
   *   名称
   */
  name?: string
}

export interface TblFactoryEntity {
  /**
   * @description
   *   品牌ID
   */
  factId: number
  /**
   * @description
   *   拼音简码
   */
  keyName?: string
  /**
   * @description
   *   品牌全称
   */
  factName: string
  /**
   * @description
   *   简  称
   */
  shortCusName?: string
  /**
   * @description
   *   拼  音
   */
  eName?: string
  /**
   * @description
   *   电  话
   */
  phone?: string
  /**
   * @description
   *   电  话2
   */
  phone2?: string
  /**
   * @description
   *   品牌主页
   */
  website?: string
  /**
   * @description
   *   联系人
   */
  corporation?: string
  /**
   * @description
   *   传真
   */
  fax?: string
  /**
   * @description
   *   电子邮箱
   */
  email?: string
  /**
   * @description
   *   邮编
   */
  postCode?: string
  /**
   * @description
   *   详细地址
   */
  address?: string
  /**
   * @description
   *   国家地区
   */
  country?: string
  /**
   * @description
   *   省
   */
  province?: string
  /**
   * @description
   *   市
   */
  city?: string
  /**
   * @description
   *   简  介
   */
  description?: string
  /**
   * @description
   *   备注
   */
  useAddress?: string
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
}

export interface FactIdReqDto {
  /**
   * @description
   *   品牌ID
   */
  factId: number
}

export interface FactCreateReqDto {
  /**
   * @description
   *   启用状态
   *    0-停用
   *    1-启用
   * @default: 1
   */
  enableStatus?: ComponentsSchemasFactCreateReqDtoEnableStatus
  /**
   * @description
   *   数据状态
   * 品牌新建 = 0,
   *    类目编辑中 = 1,
   *    正在发布 = 39,
   *    已发布 = 40,
   */
  changeStatus?: ComponentsSchemasFactCreateReqDtoChangeStatus
  /**
   * @description
   *   品牌全称
   */
  factName: string
  /**
   * @description
   *   简  称
   */
  shortCusName: string
  /**
   * @description
   *   拼音简码
   */
  keyName: string
  /**
   * @description
   *   拼  音
   */
  eName: string
  /**
   * @description
   *   显示顺序
   */
  showOrder: number
  /**
   * @description
   *   品牌行业
   */
  categoryType: string
  /**
   * @description
   *   索引关键字
   */
  keyWords: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs: string
  /**
   * @description
   *   是否默认品牌
   *    1: 是
   *    0： 否
   * @default: 0
   */
  isDefault?: number
  /**
   * @description
   *   电  话
   */
  phone?: string
  /**
   * @description
   *   电  话2
   */
  phone2?: string
  /**
   * @description
   *   品牌主页
   */
  website?: string
  /**
   * @description
   *   联系人
   */
  corporation?: string
  /**
   * @description
   *   传真
   */
  fax?: string
  /**
   * @description
   *   电子邮箱
   */
  email?: string
  /**
   * @description
   *   邮编
   */
  postCode?: string
  /**
   * @description
   *   详细地址
   */
  address?: string
  /**
   * @description
   *   国家地区
   */
  country?: string
  /**
   * @description
   *   省
   */
  province?: string
  /**
   * @description
   *   市
   */
  city?: string
  /**
   * @description
   *   简  介
   */
  description?: string
  /**
   * @description
   *   备注
   */
  useAddress?: string
}

export interface FactUpdateReqDto {
  /**
   * @description
   *   启用状态
   *    0-停用
   *    1-启用
   */
  enableStatus?: ComponentsSchemasFactUpdateReqDtoEnableStatus
  /**
   * @description
   *   数据状态
   * 品牌新建 = 0,
   *    类目编辑中 = 1,
   *    正在发布 = 39,
   *    已发布 = 40,
   */
  changeStatus?: ComponentsSchemasFactUpdateReqDtoChangeStatus
  /**
   * @description
   *   品牌ID
   */
  factId: number
  /**
   * @description
   *   品牌全称
   */
  factName?: string
  /**
   * @description
   *   拼音简码
   */
  keyName?: string
  /**
   * @description
   *   简  称
   */
  shortCusName?: string
  /**
   * @description
   *   拼  音
   */
  eName?: string
  /**
   * @description
   *   电  话
   */
  phone?: string
  /**
   * @description
   *   电  话2
   */
  phone2?: string
  /**
   * @description
   *   品牌主页
   */
  website?: string
  /**
   * @description
   *   联系人
   */
  corporation?: string
  /**
   * @description
   *   传真
   */
  fax?: string
  /**
   * @description
   *   电子邮箱
   */
  email?: string
  /**
   * @description
   *   邮编
   */
  postCode?: string
  /**
   * @description
   *   详细地址
   */
  address?: string
  /**
   * @description
   *   国家地区
   */
  country?: string
  /**
   * @description
   *   省
   */
  province?: string
  /**
   * @description
   *   市
   */
  city?: string
  /**
   * @description
   *   简  介
   */
  description?: string
  /**
   * @description
   *   备注
   */
  useAddress?: string
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   品牌行业
   */
  categoryType?: string
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   是否默认品牌
   *    1: 是
   *    0： 否
   */
  isDefault?: number
}

export interface FactRemoveIdsReqDto {
  /**
   * @description
   *   id集合
   */
  ids: Array<number>
}

export interface ExistNameReqDto {
  /**
   * @description
   *   名称
   */
  name: string
  /**
   * @description
   *   排除的id
   */
  excludeId?: number
}

export interface FactProdTypeFactIdReqDto {
  /**
   * @description
   *   品牌ID
   */
  factoryId: number
}

export interface TblFactoryProdtypeEntityWithExt {
  /**
   * @description
   *   子节点
   */
  children?: Array<TblFactoryProdtypeEntityWithExt>
  /**
   * @description
   *   类目ID
   */
  typeId: number
  /**
   * @description
   *   品牌ID
   */
  factoryId: number
  /**
   * @description
   *   类目名称
   */
  typeName: string
  /**
   * @description
   *   目录英文名称
   */
  eName?: string
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   父节点ID
   */
  parentId?: number
  /**
   * @description
   *   类目显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface TblFactoryProdtypeEntity {
  /**
   * @description
   *   类目ID
   */
  typeId: number
  /**
   * @description
   *   品牌ID
   */
  factoryId: number
  /**
   * @description
   *   类目名称
   */
  typeName: string
  /**
   * @description
   *   目录英文名称
   */
  eName?: string
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   父节点ID
   */
  parentId?: number
  /**
   * @description
   *   类目显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface FactProdTypeCreateReqDto {
  /**
   * @description
   *   品牌ID
   */
  factoryId: number
  /**
   * @description
   *   类目名称
   */
  typeName: string
  /**
   * @description
   *   父节点ID
   */
  parentId: number
  /**
   * @description
   *   目录英文名称
   */
  eName?: string
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   类目显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface FactProdTypeUpdateReqDto {
  /**
   * @description
   *   类目ID
   */
  typeId: number
  /**
   * @description
   *   类目名称
   */
  typeName?: string
  /**
   * @description
   *   品牌ID
   */
  factoryId?: number
  /**
   * @description
   *   目录英文名称
   */
  eName?: string
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   父节点ID
   */
  parentId?: number
  /**
   * @description
   *   类目显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface IdsReqDto {
  /**
   * @description
   *   id集合
   */
  ids: Array<number>
}

export interface FactProdTypeUpdateBatchReqDto {
  /**
   * @description
   *   集合
   */
  data: Array<FactProdTypeUpdateReqDto>
}

export interface FactProdTypeExistNameReqDto {
  /**
   * @description
   *   品牌ID
   */
  factoryId: number
  /**
   * @description
   *   类目名称
   */
  typeName: string
}

export interface TblIndustryProdtypeEntity {
  /**
   * @description
   *   分类ID
   */
  typeId: number
  /**
   * @description
   *   分类名称
   */
  typeName: string
  /**
   * @description
   *   行业ID
   */
  industryId: number
  /**
   * @description
   *   父节点ID
   */
  parentId: number
  /**
   * @description
   *   简码
   */
  simpleCode?: string
  /**
   * @description
   *   描述
   */
  description?: string
  children: Array<TblIndustryProdtypeEntity>
}

export interface TblIndustryEntity {
  /**
   * @description
   *   行业ID
   */
  industryId: number
  /**
   * @description
   *   行业名称
   */
  itemName: string
  /**
   * @description
   *   行业代号
   */
  itemCode?: string
  /**
   * @description
   *   描述
   */
  description?: string
  children: Array<TblIndustryProdtypeEntity>
}

export interface SeriesFidReqDto {
  /**
   * @description
   *   品牌ID
   */
  factoryId: number
}

export interface SeriesEntityDto {
  /**
   * @description
   *   状态
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
   * @description
   *   数据变化标志
   * 0-编辑中
   * 10-待审核
   * 20-待发布
   * 40-已发布
   */
  changeStatus?: ComponentsSchemasSeriesEntityDtoChangeStatus
  /**
   * @description
   *   系列最后更新时间
   * @format: date-time
   */
  lastUpdateTime?: string
  /**
   * @description
   *   系列最后更新人
   */
  lastUpdateUser?: number
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   系列代号-拼规格名称用
   */
  seriesName?: string
  /**
   * @description
   *   系列名称
   */
  seriesFullName: string
  /**
   * @description
   *   系列英文简称
   */
  seriesNameEn?: string
  /**
   * @description
   *   品牌ID
   */
  factoryId?: number
  /**
   * @description
   *   最后一级类目ID
   */
  ptypeId?: number
  /**
   * @description
   *   系列描述
   */
  sDesc?: string
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   oss图片路径
   */
  picName?: string
  /**
   * @description
   *   生产状态
   *    0-已停产
   *    1-生产中
   */
  prodStatus?: number
  /**
   * @description
   *   启用停用 1: 启用 0: 停用
   */
  enableStatus?: number
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   是否品牌默认系列
   */
  isFactDefault?: number
  /**
   * @description
   *   审批前是否删除 1-已删除 0-未删除
   */
  isAuditDelete?: number
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   是否显示价格
   *    1： 显示
   *    0：不显示
   */
  showPrice?: number
  /**
   * @description
   *   审批单ID
   */
  auditId?: number
}

export interface SeriesIdReqDto {
  /**
   * @description
   *   系列ID
   */
  seriesId: number
}

export interface SeriesCreateReqDto {
  /**
   * @description
   *   状态
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
   * @default: 0
   */
  status: ComponentsSchemasSeriesCreateReqDtoStatus
  /**
   * @description
   *   数据变化标志
   * 0-编辑中
   * 10-待审核
   * 20-待发布
   * 40-已发布
   * @default: 0
   */
  changeStatus: ComponentsSchemasSeriesCreateReqDtoChangeStatus
  /**
   * @description
   *   品牌ID
   */
  factoryId: number
  /**
   * @description
   *   系列名称
   */
  seriesFullName: string
  /**
   * @description
   *   显示顺序
   * @default: 0
   */
  showOrder: any
  /**
   * @description
   *   启用停用 1: 启用 0: 停用
   * @default: 1
   */
  enableStatus: ComponentsSchemasSeriesCreateReqDtoEnableStatus
  /**
   * @description
   *   是否品牌默认系列
   * @default: 0
   */
  isFactDefault: ComponentsSchemasSeriesCreateReqDtoIsFactDefault
  /**
   * @description
   *   生产状态
   *    0-已停产
   *    1-生产中
   * @default: 1
   */
  prodStatus: ComponentsSchemasSeriesCreateReqDtoProdStatus
  /**
   * @description
   *   审批前是否删除 1-已删除 0-未删除
   * @default: 0
   */
  isAuditDelete: ComponentsSchemasSeriesCreateReqDtoIsAuditDelete
  /**
   * @description
   *   是否显示价格
   *    1： 显示
   *    0：不显示
   * @default: 1
   */
  showPrice: ComponentsSchemasSeriesCreateReqDtoShowPrice
  /**
   * @description
   *   系列代号-拼规格名称用
   */
  seriesName?: string
  /**
   * @description
   *   系列英文简称
   */
  seriesNameEn?: string
  /**
   * @description
   *   最后一级类目ID
   */
  ptypeId?: number
  /**
   * @description
   *   系列描述
   */
  sDesc?: string
  /**
   * @description
   *   oss图片路径
   */
  picName?: string
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   审批单ID
   */
  auditId?: number
}

export interface SeriesUpdateStatusReqDto {
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   启用停用 1: 启用 0: 停用
   */
  enableStatus?: number
  /**
   * @description
   *   生产状态
   *    0-已停产
   *    1-生产中
   */
  prodStatus?: number
  /**
   * @description
   *   是否品牌默认系列
   */
  isFactDefault?: number
}

export interface SeriesUpdateReqDto {
  /**
   * @description
   *   状态
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
  status?: ComponentsSchemasSeriesUpdateReqDtoStatus
  /**
   * @description
   *   数据变化标志
   * 0-编辑中
   * 10-待审核
   * 20-待发布
   * 40-已发布
   */
  changeStatus?: ComponentsSchemasSeriesUpdateReqDtoChangeStatus
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   系列名称
   */
  seriesFullName?: string
  /**
   * @description
   *   系列代号-拼规格名称用
   */
  seriesName?: string
  /**
   * @description
   *   系列英文简称
   */
  seriesNameEn?: string
  /**
   * @description
   *   品牌ID
   */
  factoryId?: number
  /**
   * @description
   *   最后一级类目ID
   */
  ptypeId?: number
  /**
   * @description
   *   系列描述
   */
  sDesc?: string
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   oss图片路径
   */
  picName?: string
  /**
   * @description
   *   生产状态
   *    0-已停产
   *    1-生产中
   */
  prodStatus?: number
  /**
   * @description
   *   启用停用 1: 启用 0: 停用
   */
  enableStatus?: number
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   是否品牌默认系列
   */
  isFactDefault?: number
  /**
   * @description
   *   审批前是否删除 1-已删除 0-未删除
   */
  isAuditDelete?: number
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   是否显示价格
   *    1： 显示
   *    0：不显示
   */
  showPrice?: number
  /**
   * @description
   *   审批单ID
   */
  auditId?: number
}

export interface SeriesUpdateBatchReqDto {
  data: Array<SeriesUpdateReqDto>
}

export interface GetSeriesIndustryReqDto {
  /**
   * @description
   *   系列ID
   */
  sid: number
}

export interface TblIndustryEntityDto {
  /**
   * @description
   *   行业ID
   */
  industryId: number
  /**
   * @description
   *   行业名称
   */
  itemName: string
  /**
   * @description
   *   行业代号
   */
  itemCode?: string
  /**
   * @description
   *   描述
   */
  description?: string
}

export interface TblIndustryProdtypeEntityDto {
  /**
   * @description
   *   分类ID
   */
  typeId: number
  /**
   * @description
   *   分类名称
   */
  typeName: string
  /**
   * @description
   *   行业ID
   */
  industryId: number
  /**
   * @description
   *   父节点ID
   */
  parentId: number
  /**
   * @description
   *   简码
   */
  simpleCode?: string
  /**
   * @description
   *   描述
   */
  description?: string
}

export interface GetSeriesIndustryResDto {
  /**
   * @description
   *   行业
   */
  industry: TblIndustryEntityDto
  /**
   * @description
   *   行业分类
   */
  industryProdtype: TblIndustryProdtypeEntityDto
  /**
   * @description
   *   关系ID
   */
  relId?: number
  /**
   * @description
   *   系列ID
   */
  seriesId?: number
  /**
   * @description
   *   行业类别ID
   */
  induTypeId?: number
}

export interface SaveSeriesIndustryDto {
  /**
   * @description
   *   系列ID
   */
  sid: number
  /**
   * @description
   *   行业分类id数组
   */
  industryIds: Array<number>
}

export interface SeriesGetNamePropsResDto {
  /**
   * @description
   *   属性类型
   *
   *    0：普通属性
   *    1：系统属性 选用状态
   *    2：外接属性
   *    3：行业分类标识
   *    4：图片规格属性
   */
  jlbs?: ComponentsSchemasSeriesGetNamePropsResDtoJlbs
  /**
   * @description
   *   组件
   */
  comp: TblComponentEntity
  /**
   * @description
   *   属性ID
   */
  propId: number
  /**
   * @description
   *   属性名称
   */
  propName: string
  /**
   * @description
   *   英文名
   */
  propNameEn?: string
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   组件ID
   */
  compId: number
  /**
   * @description
   *   是否显示
   */
  isShow?: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   系列命名顺序
   */
  nOrder?: number
  /**
   * @description
   *   组件命名顺序
   */
  cnOrder?: number
  /**
   * @description
   *   不知-无用
   */
  compOrder?: number
  /**
   * @description
   *   系列命名相关
   */
  isRelName?: number
  /**
   * @description
   *   组件命名相关
   */
  isRelCname?: number
  /**
   * @description
   *   价格相关
   */
  isRelPrice?: number
  /**
   * @description
   *   系列命名连接符
   */
  connectChar?: string
  /**
   * @description
   *   组件命名连接符
   */
  compChar?: string
  /**
   * @description
   *   描述
   */
  description?: string
  /**
   * @description
   *   外接属性
   */
  fPropId?: number
  /**
   * @description
   *   状态-无用
   */
  status?: number
  /**
   * @description
   *   属性展示类型
   *
   *    0：文本
   *    1：图片
   *    2：图片+文字
   */
  showType?: number
  /**
   * @description
   *   属性选项值类型
   */
  valueType?: number
  /**
   * @description
   *   标准属性名称
   */
  standardName?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   值单位
   */
  valueUnit?: string
  /**
   * @description
   *   属性代号
   */
  propCode?: string
  /**
   * @description
   *   属性别名
   */
  keyWords?: string
}

export interface TblPropertyEntity {
  /**
   * @description
   *   属性类型
   *
   *    0：普通属性
   *    1：系统属性 选用状态
   *    2：外接属性
   *    3：行业分类标识
   *    4：图片规格属性
   */
  jlbs?: ComponentsSchemasTblPropertyEntityJlbs
  /**
   * @description
   *   属性ID
   */
  propId: number
  /**
   * @description
   *   属性名称
   */
  propName: string
  /**
   * @description
   *   英文名
   */
  propNameEn?: string
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   组件ID
   */
  compId: number
  /**
   * @description
   *   是否显示
   */
  isShow?: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   系列命名顺序
   */
  nOrder?: number
  /**
   * @description
   *   组件命名顺序
   */
  cnOrder?: number
  /**
   * @description
   *   不知-无用
   */
  compOrder?: number
  /**
   * @description
   *   系列命名相关
   */
  isRelName?: number
  /**
   * @description
   *   组件命名相关
   */
  isRelCname?: number
  /**
   * @description
   *   价格相关
   */
  isRelPrice?: number
  /**
   * @description
   *   系列命名连接符
   */
  connectChar?: string
  /**
   * @description
   *   组件命名连接符
   */
  compChar?: string
  /**
   * @description
   *   描述
   */
  description?: string
  /**
   * @description
   *   外接属性
   */
  fPropId?: number
  /**
   * @description
   *   状态-无用
   */
  status?: number
  /**
   * @description
   *   属性展示类型
   *
   *    0：文本
   *    1：图片
   *    2：图片+文字
   */
  showType?: number
  /**
   * @description
   *   属性选项值类型
   */
  valueType?: number
  /**
   * @description
   *   标准属性名称
   */
  standardName?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   值单位
   */
  valueUnit?: string
  /**
   * @description
   *   属性代号
   */
  propCode?: string
  /**
   * @description
   *   属性别名
   */
  keyWords?: string
}

export interface SeriesExistNameReqDto {
  /**
   * @description
   *   品牌ID
   */
  factoryId: number
  /**
   * @description
   *   系列名称
   */
  seriesFullName: string
}

export interface TblSeriesExtEntity {
  /**
   * @description
   *   数据变化标志
   * 0-编辑中
   * 10-待审核
   * 20-待发布
   * 40-已发布
   */
  changeStatus?: ComponentsSchemasTblSeriesExtEntityChangeStatus
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   生产状态
   *    0-已停产
   *    1-生产中
   */
  prodStatus?: number
  /**
   * @description
   *   启用停用 1: 启用 0: 停用
   */
  enableStatus?: number
  /**
   * @description
   *   索引关键字
   */
  keyWords?: string
  /**
   * @description
   *   是否品牌默认系列
   */
  isFactDefault?: number
  /**
   * @description
   *   审批前是否删除 1-已删除 0-未删除
   */
  isAuditDelete?: number
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   是否显示价格
   *    1： 显示
   *    0：不显示
   */
  showPrice?: number
  /**
   * @description
   *   审批单ID
   */
  auditId?: number
}

export interface SeriesChangeSatusReqDto {
  /**
   * @description
   *   何处修改的
   *    品牌变动
   *    定义变动
   *    价格变动
   *    物料变动
   */
  from?: ComponentsSchemasSeriesChangeSatusReqDtoFrom
  /**
   * @description
   *   系列ID
   */
  seriesId: number
}

export interface SeriesCopyReqDto {
  /**
   * @description
   *   品牌ID
   */
  factoryId: number
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   系列名称
   */
  seriesFullName: string
  /**
   * @description
   *   系列代号-拼规格名称用
   */
  seriesName: string
  /**
   * @description
   *   最后一级类目ID
   */
  ptypeId: number
  /**
   * @description
   *   显示顺序
   */
  showOrder: number
  /**
   * @description
   *   本体简码
   */
  mainCompCode: string
  compIds: Array<number>
}

export interface SeriesIdReqCompDto {
  /**
   * @description
   *   系列ID
   */
  seriesId: number
}

export interface TblComponentTypeEntity {
  /**
   * @description
   *   分组ID
   */
  typeId: number
  /**
   * @description
   *   分组名称
   */
  typeName: string
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
}

export interface CompGroupIdReqDto {
  /**
   * @description
   *   分组ID
   */
  typeId: number
}

export interface CompGroupCreateReqDto {
  /**
   * @description
   *   分组名称
   */
  typeName: string
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
}

export interface CompGroupUpdateReqDto {
  /**
   * @description
   *   分组ID
   */
  typeId: number
  /**
   * @description
   *   分组名称
   */
  typeName?: string
  /**
   * @description
   *   系列ID
   */
  seriesId?: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
}

export interface CompGroupBatchUpdateReqDto {
  /**
   * @description
   *   分组数据
   */
  data: Array<CompGroupUpdateReqDto>
}

export interface TblComponentEntityWithExt {
  /**
   * @description
   *   组件类型：
   *    -2：图片
   *    -1：行业分类
   *    0：附件
   *    1：本体
   */
  isMain?: ComponentsSchemasTblComponentEntityWithExtIsMain
  /**
   * @description
   *   是否参与命名-无用
   */
  nameFlag?: ComponentsSchemasTblComponentEntityWithExtNameFlag
  /**
   * @description
   *   是否标配
   */
  priceFlag?: ComponentsSchemasTblComponentEntityWithExtPriceFlag
  /**
   * @description
   *   属性集合
   */
  children: Array<TblPropertyEntity>
  /**
   * @description
   *   组件ID
   */
  compId: number
  /**
   * @description
   *   组件名称
   */
  compName?: string
  /**
   * @description
   *   组件英文名
   */
  compNameEn?: string
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   显示顺序
   */
  nOrder?: number
  /**
   * @description
   *   组件代号
   */
  compCode?: string
  /**
   * @description
   *   描述
   */
  description?: string
  /**
   * @description
   *   分组ID
   */
  typeId?: number
  /**
   * @description
   *   组件默认图片oss路径
   */
  picName?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface CompCreateReqDto {
  /**
   * @description
   *   组件类型：
   *    -2：图片
   *    -1：行业分类
   *    0：附件
   *    1：本体
   */
  isMain?: ComponentsSchemasCompCreateReqDtoIsMain
  /**
   * @description
   *   是否参与命名-无用
   */
  nameFlag?: ComponentsSchemasCompCreateReqDtoNameFlag
  /**
   * @description
   *   是否标配
   * @default: 0
   */
  priceFlag: ComponentsSchemasCompCreateReqDtoPriceFlag
  /**
   * @description
   *   组件名称
   */
  compName?: string
  /**
   * @description
   *   组件英文名
   */
  compNameEn?: string
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   显示顺序
   */
  nOrder?: number
  /**
   * @description
   *   组件代号
   */
  compCode?: string
  /**
   * @description
   *   描述
   */
  description?: string
  /**
   * @description
   *   分组ID
   */
  typeId?: number
  /**
   * @description
   *   组件默认图片oss路径
   */
  picName?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface CompUpdateReqDto {
  /**
   * @description
   *   组件类型：
   *    -2：图片
   *    -1：行业分类
   *    0：附件
   *    1：本体
   */
  isMain?: ComponentsSchemasCompUpdateReqDtoIsMain
  /**
   * @description
   *   是否参与命名-无用
   */
  nameFlag?: ComponentsSchemasCompUpdateReqDtoNameFlag
  /**
   * @description
   *   是否标配
   */
  priceFlag?: ComponentsSchemasCompUpdateReqDtoPriceFlag
  /**
   * @description
   *   组件ID
   */
  compId: number
  /**
   * @description
   *   组件名称
   */
  compName?: string
  /**
   * @description
   *   组件英文名
   */
  compNameEn?: string
  /**
   * @description
   *   系列ID
   */
  seriesId?: number
  /**
   * @description
   *   显示顺序
   */
  nOrder?: number
  /**
   * @description
   *   组件代号
   */
  compCode?: string
  /**
   * @description
   *   描述
   */
  description?: string
  /**
   * @description
   *   分组ID
   */
  typeId?: number
  /**
   * @description
   *   组件默认图片oss路径
   */
  picName?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface CompUpdateBatchReqDto {
  /**
   * @description
   *   组件批量数据
   */
  data: Array<CompUpdateReqDto>
}

export interface PropsCompIdReqDto {
  /**
   * @description
   *   组件ID
   */
  compId: number
}

export interface TblPropertyOptionEntity {
  /**
   * @description
   *   选项ID
   */
  optId: number
  /**
   * @description
   *   选项名称
   */
  optName: string
  /**
   * @description
   *   选项值
   */
  optValue?: string
  /**
   * @description
   *   选项代码-拼名字用
   */
  optCode?: string
  /**
   * @description
   *   组件命名代码-以后用
   */
  optCompCode?: string
  /**
   * @description
   *   选项描述
   */
  optDesc?: string
  /**
   * @description
   *   属性ID
   */
  propId: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   是否默认
   */
  isDefault?: number
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   选项图片地址oss
   */
  extVal?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface TblPropertyEntityWithOpt {
  /**
   * @description
   *   属性类型
   *
   *    0：普通属性
   *    1：系统属性 选用状态
   *    2：外接属性
   *    3：行业分类标识
   *    4：图片规格属性
   */
  jlbs?: ComponentsSchemasTblPropertyEntityWithOptJlbs
  /**
   * @description
   *   属性ID
   */
  propId: number
  /**
   * @description
   *   属性名称
   */
  propName: string
  /**
   * @description
   *   英文名
   */
  propNameEn?: string
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   组件ID
   */
  compId: number
  /**
   * @description
   *   是否显示
   */
  isShow?: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   系列命名顺序
   */
  nOrder?: number
  /**
   * @description
   *   组件命名顺序
   */
  cnOrder?: number
  /**
   * @description
   *   不知-无用
   */
  compOrder?: number
  /**
   * @description
   *   系列命名相关
   */
  isRelName?: number
  /**
   * @description
   *   组件命名相关
   */
  isRelCname?: number
  /**
   * @description
   *   价格相关
   */
  isRelPrice?: number
  /**
   * @description
   *   系列命名连接符
   */
  connectChar?: string
  /**
   * @description
   *   组件命名连接符
   */
  compChar?: string
  /**
   * @description
   *   描述
   */
  description?: string
  /**
   * @description
   *   外接属性
   */
  fPropId?: number
  /**
   * @description
   *   状态-无用
   */
  status?: number
  /**
   * @description
   *   属性展示类型
   *
   *    0：文本
   *    1：图片
   *    2：图片+文字
   */
  showType?: number
  /**
   * @description
   *   属性选项值类型
   */
  valueType?: number
  /**
   * @description
   *   标准属性名称
   */
  standardName?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   值单位
   */
  valueUnit?: string
  /**
   * @description
   *   属性代号
   */
  propCode?: string
  /**
   * @description
   *   属性别名
   */
  keyWords?: string
  /**
   * @description
   *   选项集合
   */
  optList: Array<TblPropertyOptionEntity>
}

export interface PropsIdReqDto {
  /**
   * @description
   *   属性ID
   */
  propId: number
}

export interface PropsCreateReqDto {
  /**
   * @description
   *   属性类型
   *
   *    0：普通属性
   *    1：系统属性 选用状态
   *    2：外接属性
   *    3：行业分类标识
   *    4：图片规格属性
   * @default: 0
   */
  jlbs?: ComponentsSchemasPropsCreateReqDtoJlbs
  /**
   * @description
   *   属性名称
   */
  propName: string
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   组件ID
   */
  compId: number
  /**
   * @description
   *   英文名
   */
  propNameEn?: string
  /**
   * @description
   *   是否显示
   */
  isShow?: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   系列命名顺序
   */
  nOrder?: number
  /**
   * @description
   *   组件命名顺序
   */
  cnOrder?: number
  /**
   * @description
   *   不知-无用
   */
  compOrder?: number
  /**
   * @description
   *   系列命名相关
   */
  isRelName?: number
  /**
   * @description
   *   组件命名相关
   */
  isRelCname?: number
  /**
   * @description
   *   价格相关
   */
  isRelPrice?: number
  /**
   * @description
   *   系列命名连接符
   */
  connectChar?: string
  /**
   * @description
   *   组件命名连接符
   */
  compChar?: string
  /**
   * @description
   *   描述
   */
  description?: string
  /**
   * @description
   *   外接属性
   */
  fPropId?: number
  /**
   * @description
   *   状态-无用
   */
  status?: number
  /**
   * @description
   *   属性展示类型
   *
   *    0：文本
   *    1：图片
   *    2：图片+文字
   */
  showType?: number
  /**
   * @description
   *   属性选项值类型
   */
  valueType?: number
  /**
   * @description
   *   标准属性名称
   */
  standardName?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   值单位
   */
  valueUnit?: string
  /**
   * @description
   *   属性代号
   */
  propCode?: string
  /**
   * @description
   *   属性别名
   */
  keyWords?: string
}

export interface PropsCreateBatchReqDto {
  /**
   * @description
   *   属性集合
   */
  data: Array<PropsCreateReqDto>
}

export interface PropsUpdateReqDto {
  /**
   * @description
   *   属性类型
   *
   *    0：普通属性
   *    1：系统属性 选用状态
   *    2：外接属性
   *    3：行业分类标识
   *    4：图片规格属性
   */
  jlbs?: ComponentsSchemasPropsUpdateReqDtoJlbs
  /**
   * @description
   *   属性ID
   */
  propId: number
  /**
   * @description
   *   属性名称
   */
  propName?: string
  /**
   * @description
   *   英文名
   */
  propNameEn?: string
  /**
   * @description
   *   系列ID
   */
  seriesId?: number
  /**
   * @description
   *   组件ID
   */
  compId?: number
  /**
   * @description
   *   是否显示
   */
  isShow?: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   系列命名顺序
   */
  nOrder?: number
  /**
   * @description
   *   组件命名顺序
   */
  cnOrder?: number
  /**
   * @description
   *   不知-无用
   */
  compOrder?: number
  /**
   * @description
   *   系列命名相关
   */
  isRelName?: number
  /**
   * @description
   *   组件命名相关
   */
  isRelCname?: number
  /**
   * @description
   *   价格相关
   */
  isRelPrice?: number
  /**
   * @description
   *   系列命名连接符
   */
  connectChar?: string
  /**
   * @description
   *   组件命名连接符
   */
  compChar?: string
  /**
   * @description
   *   描述
   */
  description?: string
  /**
   * @description
   *   外接属性
   */
  fPropId?: number
  /**
   * @description
   *   状态-无用
   */
  status?: number
  /**
   * @description
   *   属性展示类型
   *
   *    0：文本
   *    1：图片
   *    2：图片+文字
   */
  showType?: number
  /**
   * @description
   *   属性选项值类型
   */
  valueType?: number
  /**
   * @description
   *   标准属性名称
   */
  standardName?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * @description
   *   值单位
   */
  valueUnit?: string
  /**
   * @description
   *   属性代号
   */
  propCode?: string
  /**
   * @description
   *   属性别名
   */
  keyWords?: string
}

export interface PropsUpdateBatchReqDto {
  /**
   * @description
   *   属性集合
   */
  data: Array<PropsUpdateReqDto>
}

export interface PropsCreateRefPropsReqDto {
  /**
   * @description
   *   组件ID
   */
  compId: number
  refProps: Array<PropsUpdateReqDto>
}

export interface PropsExistNameReqDto {
  /**
   * @description
   *   组件ID
   */
  compId: number
  /**
   * @description
   *   属性名称
   */
  propName: string
  /**
   * @description
   *   属性ID
   */
  propId?: number
}

export interface PropsRelFPropIdReqDto {
  /**
   * @description
   *   被动属性ID
   */
  fPropId: number
}

export interface TblPropertyProprelEntity {
  /**
   * @description
   *   关系id
   */
  rId: number
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   主动属性ID
   */
  mPropId: number
  /**
   * @description
   *   被动属性ID
   */
  fPropId: number
}

export interface SharedCompIdReqDto {
  /**
   * @description
   *   组件ID
   */
  compId: number
}

export interface PropsRelCreateReqDto {
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   主动属性ID
   */
  mPropId: number
  /**
   * @description
   *   被动属性ID
   */
  fPropId: number
}

export interface PropsRelCreateBatchReqDto {
  /**
   * @description
   *   被动属性ID
   */
  fPropId: number
  /**
   * @description
   *   主动数据集合
   */
  data: Array<PropsRelCreateReqDto>
}

export interface OptPropsIdReqDto {
  /**
   * @description
   *   属性ID
   */
  propId: number
}

export interface OptIdReqDto {
  /**
   * @description
   *   选项ID
   */
  optId: number
}

export interface OptCreateReqDto {
  /**
   * @description
   *   选项名称
   */
  optName: string
  /**
   * @description
   *   选项值
   */
  optValue?: string
  /**
   * @description
   *   选项代码-拼名字用
   */
  optCode?: string
  /**
   * @description
   *   组件命名代码-以后用
   */
  optCompCode?: string
  /**
   * @description
   *   选项描述
   */
  optDesc?: string
  /**
   * @description
   *   属性ID
   */
  propId: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   是否默认
   */
  isDefault?: number
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   选项图片地址oss
   */
  extVal?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface OptCreateBatchReqDto {
  /**
   * @description
   *   属性集合
   */
  data: Array<OptCreateReqDto>
}

export interface OptUpdateReqDto {
  /**
   * @description
   *   属性ID
   */
  optId: number
  /**
   * @description
   *   选项名称
   */
  optName?: string
  /**
   * @description
   *   选项值
   */
  optValue?: string
  /**
   * @description
   *   选项代码-拼名字用
   */
  optCode?: string
  /**
   * @description
   *   组件命名代码-以后用
   */
  optCompCode?: string
  /**
   * @description
   *   选项描述
   */
  optDesc?: string
  /**
   * @description
   *   属性ID
   */
  propId?: number
  /**
   * @description
   *   显示顺序
   */
  showOrder?: number
  /**
   * @description
   *   是否默认
   */
  isDefault?: number
  /**
   * @description
   *   系列ID
   */
  seriesId?: number
  /**
   * @description
   *   选项图片地址oss
   */
  extVal?: string
  /**
   * @description
   *   json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface OptUpdateBatchReqDto {
  /**
   * @description
   *   属性集合
   */
  data: Array<OptUpdateReqDto>
}

export interface OptBatchIdsReqDto {
  /**
   * @description
   *   id集合
   */
  ids: Array<number>
}

export interface OptRelFpropIdReqDto {
  /**
   * @description
   *   被动属性ID
   * @example
   *   239
   */
  fpropId: number
}

export interface OptRelEntityResDto {
  /**
   * @description
   *   主动属性选项组合
   */
  mopts: {
    /**
        @description
          主动属性选项组合 */
    [propertyName: string]: string
  }
  /**
   * @description
   *   属性约束关系
   */
  multiIds: string
  /**
   * @description
   *   第几组约束
   */
  sort: number
  /**
   * @description
   *   主动属性
   */
  mprops: Array<number>
  /**
   * @description
   *   被约束属性ID
   */
  fpropId: number
  /**
   * @description
   *   约束值范围
   */
  fOptIds?: string
  /**
   * @description
   *   约束值默认选项
   */
  fOptDefaultId?: number
}

export interface OptRelCreateReqDto {
  /**
   * @description
   *   主动属性id集合
   */
  mpropIds: Array<number>
  /**
   * @description
   *   主动属性选项值集合
   */
  mpropOptIds: Array<string>
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   属性约束关系
   */
  multiIds: string
  /**
   * @description
   *   约束值范围
   */
  fOptIds: string
  /**
   * @description
   *   被约束属性ID
   */
  fpropId: number
  /**
   * @description
   *   约束值默认选项
   */
  fOptDefaultId?: number
}

export interface OptRelCreateBatchReqDto {
  data: Array<OptRelCreateReqDto>
}

export interface OptRelUpdateReqDto {
  /**
   * @description
   *   属性约束关系
   */
  multiIds: string
  /**
   * @description
   *   约束值范围
   */
  fOptIds: string
  /**
   * @description
   *   约束值默认选项
   */
  fOptDefaultId?: number
}

export interface OptRelRemoveIdsReqDto {
  ids: Array<string>
}

export interface TblPubVersionEntity {
  /**
   * @description
   *   版本ID
   */
  id: number
  /**
   * @description
   *   版本类型
   * 1-类目
   *    2-系列
   */
  type?: number
  /**
   * @description
   *   发布类型 1-分类更新  2-系列更新 3-分类删除 4-系列删除
   */
  pubType?: number
  /**
   * @description
   *   版本名称
   *      分类 C{品牌ID}_20210112_0001
   *      系列 S{系列ID}_20210112_0001
   */
  name?: string
  /**
   * @description
   *   生成时间
   * @format: date-time
   */
  pubTime?: string
  /**
   * @description
   *   当天生成次数
   */
  count?: number
  /**
   * @description
   *   发布记录ID
   */
  publishId?: number
  /**
   * @description
   *   差异
   */
  diff?: string
  /**
   * @description
   *   前一版本名称
   *    分类 C{品牌ID}_20210112_0001
   *    系列 S{系列ID}_20210112_0001
   */
  prevVersion?: string
  /**
   * @description
   *   前一版本ID
   *    分类 C{品牌ID}_20210112_0001
   *    系列 S{系列ID}_20210112_0001
   */
  prevVersionId?: number
  /**
   * @description
   *   业务ID 根据类型区分，是品牌或者系列
   */
  dataId?: number
  /**
   * @description
   *   启用状态
   */
  enableStatus?: number
  /**
   * @description
   *   品牌
   */
  factName?: string
  /**
   * @description
   *   分类
   */
  categoryName?: string
  /**
   * @description
   *   系列
   */
  seriesName?: string
  /**
   * @description
   *   是否操作删除
   */
  isPubDelete?: number
  /**
   * @description
   *   分类版本
   */
  categoryVersion?: string
  /**
   * @description
   *   发布说明
   */
  pubRemark?: string
  /**
   * @description
   *   对外的发布日期 系列
   * @format: date-time
   */
  pubShowTime?: string
}

export interface PubGetTreeItemDto {
  /**
   * @description
   *   类型
   */
  type: ComponentsSchemasPubGetTreeItemDtoType
  /**
   * @description
   *   子节点
   */
  children?: Array<PubGetTreeItemDto>
  /**
   * @description
   *   唯一ID
   */
  uid: string
  /**
   * @description
   *   ID
   */
  id: number
  /**
   * @description
   *   父节点ID
   */
  pid: number
  /**
   * @description
   *   名称
   */
  name: string
  /**
   * @description
   *   是否审核前删除
   */
  isDelete?: boolean
  /**
   * @description
   *   差异
   */
  diff?: string
  /**
   * @description
   *   系列发布日期
   * @format: date-time
   */
  pubShowTime?: string
  /**
   * @description
   *   前一版本
   */
  prevVersion?: TblPubVersionEntity
}

export interface PubCategoryDto {
  /**
   * @description
   *   品牌ID
   */
  id: number
  /**
   * @description
   *   发布变动内容
   */
  diff?: string
}

export interface PubSeriesPubTimeDto {
  /**
   * @description
   *   系列ID
   */
  id: number
  /**
   * @description
   *   系列发布时间
   * @format: date-time
   */
  pubShowTime: string
  /**
   * @description
   *   发布变动内容
   */
  diff?: string
}

export interface PubSaveDataReqDto {
  /**
   * @description
   *   发布的品牌
   */
  fids: Array<PubCategoryDto>
  /**
   * @description
   *   更新的系列
   */
  sids: Array<PubSeriesPubTimeDto>
  /**
   * @description
   *   发布说明
   */
  pubRemark: string
}

export interface PubGetListPageReqDto {
  /**
   * @description
   *   发布类型 1-分类更新  2-系列更新 3-分类删除 4-系列删除
   */
  pubType?: ComponentsSchemasPubGetListPageReqDtoPubType
  /**
   * @description
   *   启用状态 1-启用  0-停用
   */
  enableStatus?: ComponentsSchemasPubGetListPageReqDtoEnableStatus
  /**
   * @description
   *   版本号
   */
  version_name?: string
  /**
   * @description
   *   品牌／分类/系列/ 名称搜索
   */
  name?: string
  /**
   * @description
   *   页数
   * @default: 1
   */
  page?: number
  /**
   * @description
   *   页码
   * @default: 10
   */
  size?: number
}

export interface TblDatapubEntity {
  /**
   * @description
   *   发布ID
   */
  publishId: number
  /**
   * @description
   *   发布时间
   * @format: date-time
   */
  publishDate: string
  /**
   * @description
   *   备注
   */
  remarks?: string
  /**
   * @description
   *   完成标志位
   */
  completeFlag?: number
}

export interface TblPubVersionEntityShow {
  /**
   * @description
   *   版本ID
   */
  id: number
  /**
   * @description
   *   版本类型
   * 1-类目
   *    2-系列
   */
  type?: number
  /**
   * @description
   *   发布类型 1-分类更新  2-系列更新 3-分类删除 4-系列删除
   */
  pubType?: number
  /**
   * @description
   *   版本名称
   *      分类 C{品牌ID}_20210112_0001
   *      系列 S{系列ID}_20210112_0001
   */
  name?: string
  /**
   * @description
   *   生成时间
   * @format: date-time
   */
  pubTime?: string
  /**
   * @description
   *   当天生成次数
   */
  count?: number
  /**
   * @description
   *   发布记录ID
   */
  publishId?: number
  /**
   * @description
   *   差异
   */
  diff?: string
  /**
   * @description
   *   前一版本名称
   *    分类 C{品牌ID}_20210112_0001
   *    系列 S{系列ID}_20210112_0001
   */
  prevVersion?: string
  /**
   * @description
   *   前一版本ID
   *    分类 C{品牌ID}_20210112_0001
   *    系列 S{系列ID}_20210112_0001
   */
  prevVersionId?: number
  /**
   * @description
   *   业务ID 根据类型区分，是品牌或者系列
   */
  dataId?: number
  /**
   * @description
   *   启用状态
   */
  enableStatus?: number
  /**
   * @description
   *   品牌
   */
  factName?: string
  /**
   * @description
   *   分类
   */
  categoryName?: string
  /**
   * @description
   *   系列
   */
  seriesName?: string
  /**
   * @description
   *   是否操作删除
   */
  isPubDelete?: number
  /**
   * @description
   *   分类版本
   */
  categoryVersion?: string
  /**
   * @description
   *   发布说明
   */
  pubRemark?: string
  /**
   * @description
   *   对外的发布日期 系列
   * @format: date-time
   */
  pubShowTime?: string
  /**
   * @description
   *   创建人
   */
  createUser?: number
  /**
   * @description
   *   创建时间
   * @format: date-time
   */
  createTime?: string
  /**
   * @description
   *   发布记录
   */
  record: TblDatapubEntity
}

export interface PubGetListByPageResDto {
  /**
   * @description
   *   数据
   */
  list: Array<TblPubVersionEntityShow>
  /**
   * @description
   *   总数
   */
  total: number
}

export interface PubUpdateReqDto {
  /**
   * @description
   *   版本ID
   */
  id: number
  /**
   * @description
   *   启用状态
   */
  enableStatus: number
}

export interface PubUpdateBatchReqDto {
  ids: Array<number>
  /**
   * @description
   *   启用状态
   */
  enableStatus: number
}

export interface PubGetMcodeReqDto {
  /**
   * @description
   *   系列ID
   */
  sid: number
  /**
   * @description
   *   系列版本
   */
  version: number
}

export interface SearchSpecItemEntity {
  hisId: string
  id: number
  specid: string | null
  itemname: string
  price: string | null
  combId: number | null
  compId: number | null
  mainFlag: number | null
  pcode: string | null
  sid: number | null
  pkey: string | null
  prodName: string | null
  stockStatus: string | null
  prodStatus: number | null
  version: number | null
  minVersion: number | null
  maxVersion: number | null
  isDelete: number | null
  createUser: number | null
  /** @format: date-time */
  createTime: string | null
  updateUser: number | null
  /** @format: date-time */
  updateTime: string | null
}

export interface AuditCreateReqDto {
  /**
   * @description
   *   从哪里提交的
   */
  where: ComponentsSchemasAuditCreateReqDtoWhere
  /**
   * @description
   *   系列ID
   */
  seriesId: number
  /**
   * @description
   *   审批提交内容
   */
  content: string
  /**
   * @description
   *   系列查看链接 前端动态生成 因为域名会变化
   */
  contentUrl: string
  /**
   * @description
   *   是否是删除系列
   * @default: false
   */
  isDelete?: boolean
}
