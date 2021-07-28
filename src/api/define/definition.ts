/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
export type ComponentsSchemasOpenFactEntityDtoEnableStatus = 0 | 1
export type ComponentsSchemasOpenFactEntityDtoChangeStatus = 0 | 1 | 39 | 40
export type ComponentsSchemasGetFactCategoryResOpenDtoType = 'series' | 'category' | 'compGroup' | 'comp'
export type ComponentsSchemasGetFactCategoryResOpenDtoChangeStatus = 0 | 10 | 20 | 40
export type ComponentsSchemasTblComponentEntityIsMain = -2 | -1 | 0 | 1
export type ComponentsSchemasTblComponentEntityNameFlag = 0 | 1
export type ComponentsSchemasTblComponentEntityPriceFlag = 0 | 1
export type ComponentsSchemasOpenGetSeriesCompsTreeResDtoIsMain = -2 | -1 | 0 | 1
export type ComponentsSchemasOpenGetSeriesCompsTreeResDtoType = 'compGroup' | 'comp'
export type ComponentsSchemasFactEntityDtoEnableStatus = 0 | 1
export type ComponentsSchemasFactEntityDtoChangeStatus = 0 | 1 | 39 | 40
export type ComponentsSchemasFactCreateReqDtoEnableStatus = 0 | 1
export type ComponentsSchemasFactCreateReqDtoChangeStatus = 0 | 1 | 39 | 40
export type ComponentsSchemasFactUpdateReqDtoEnableStatus = 0 | 1
export type ComponentsSchemasFactUpdateReqDtoChangeStatus = 0 | 1 | 39 | 40
export type ComponentsSchemasSeriesEntityDtoStatus = 0 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 20
export type ComponentsSchemasSeriesEntityDtoChangeStatus = 0 | 10 | 20 | 40
export type ComponentsSchemasSeriesCreateReqDtoStatus = 0 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 20
export type ComponentsSchemasSeriesCreateReqDtoChangeStatus = 0 | 10 | 20 | 40
export type ComponentsSchemasSeriesCreateReqDtoEnableStatus = '停用' | '启用'
export type ComponentsSchemasSeriesCreateReqDtoIsFactDefault = '否' | '是'
export type ComponentsSchemasSeriesCreateReqDtoProdStatus = '停产' | '生产中'
export type ComponentsSchemasSeriesCreateReqDtoIsAuditDelete = '否' | '是'
export type ComponentsSchemasSeriesCreateReqDtoShowPrice = '否' | '是'
export type ComponentsSchemasSeriesUpdateReqDtoStatus = 0 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 20
export type ComponentsSchemasSeriesUpdateReqDtoChangeStatus = 0 | 10 | 20 | 40
export type ComponentsSchemasSeriesGetNamePropsResDtoJlbs = 0 | 1 | 2 | 3 | 4
export type ComponentsSchemasTblPropertyEntityJlbs = 0 | 1 | 2 | 3 | 4
export type ComponentsSchemasTblSeriesExtEntityChangeStatus = 0 | 10 | 20 | 40
export type ComponentsSchemasSeriesChangeSatusReqDtoFrom = '定义变动' | '价格变动' | '物料变动'
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
export type ComponentsSchemasAuditCreateReqDtoWhere = '数据定义' | '物料号维护' | '价格维护'
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

export interface OpenFactEntityDto {
  /**
   * 启用状态
   *    0-停用
   *    1-启用
   */
  enableStatus?: ComponentsSchemasOpenFactEntityDtoEnableStatus
  /**
   * 数据状态
   * 品牌新建 = 0,
   *    类目编辑中 = 1,
   *    正在发布 = 39,
   *    已发布 = 40,
   */
  changeStatus?: ComponentsSchemasOpenFactEntityDtoChangeStatus
  /** 版本 */
  version?: number
  /** 品牌ID */
  factId: number
  /** 拼音简码 */
  keyName?: string
  /** 品牌全称 */
  factName: string
  /** 简  称 */
  shortCusName?: string
  /** 拼  音 */
  eName?: string
  /** 电  话 */
  phone?: string
  /** 电  话2 */
  phone2?: string
  /** 品牌主页 */
  website?: string
  /** 联系人 */
  corporation?: string
  /** 传真 */
  fax?: string
  /** 电子邮箱 */
  email?: string
  /** 邮编 */
  postCode?: string
  /** 详细地址 */
  address?: string
  /** 国家地区 */
  country?: string
  /** 省 */
  province?: string
  /** 市 */
  city?: string
  /** 简  介 */
  description?: string
  /** 备注 */
  useAddress?: string
  /** 显示顺序 */
  showOrder?: number
  /** 品牌行业 */
  categoryType?: string
  /** 索引关键字 */
  keyWords?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * 是否默认品牌
   *    1: 是
   *    0： 否
   */
  isDefault?: number
}

export interface GetFactCategoryOpenDto {
  /** 品牌ID */
  factId: number
}

export interface GetFactCategoryResOpenDto {
  /** 类型 */
  type: ComponentsSchemasGetFactCategoryResOpenDtoType
  /** 数据变化状态 */
  changeStatus?: ComponentsSchemasGetFactCategoryResOpenDtoChangeStatus
  /** 子节点 */
  children?: Array<GetFactCategoryResOpenDto>
  /** 类目ID */
  id: number
  /** 父节点ID */
  pid: number
  /** 类目名称 */
  name: string
  /** 类目英文名称 */
  ename?: string
  /** 启用状态 */
  enableStatus?: boolean
  /** 数据状态 详细状态 */
  status?: number
  /** 是否审核前删除 */
  isDelete?: boolean
  /** 显示顺序 */
  showOrder?: number
  /** 版本 */
  version?: string
}

export interface GetFactCategoryAddiResOpenDto {
  /** 分类 */
  category: Array<GetFactCategoryResOpenDto>
  /** 未分配系列 */
  seriesNoParent: Array<GetFactCategoryResOpenDto>
}

export interface SeriesIdOpenDto {
  /** 系列ID */
  sid: number
}

export interface TblComponentEntity {
  /**
   * 组件类型：
   *    -2：图片
   *    -1：行业分类
   *    0：附件
   *    1：本体
   */
  isMain?: ComponentsSchemasTblComponentEntityIsMain
  /** 是否参与命名-无用 */
  nameFlag?: ComponentsSchemasTblComponentEntityNameFlag
  /** 是否标配 */
  priceFlag?: ComponentsSchemasTblComponentEntityPriceFlag
  /** 组件ID */
  compId: number
  /** 组件名称 */
  compName?: string
  /** 组件英文名 */
  compNameEn?: string
  /** 系列ID */
  seriesId: number
  /** 显示顺序 */
  nOrder?: number
  /** 组件代号 */
  compCode?: string
  /** 描述 */
  description?: string
  /** 分组ID */
  typeId?: number
  /** 组件默认图片oss路径 */
  picName?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface OpenGetSeriesCompsTreeResDto {
  /**
   * 组件类型：
   *    -2：图片
   *    -1：行业分类
   *    0：附件
   *    1：本体
   */
  isMain?: ComponentsSchemasOpenGetSeriesCompsTreeResDtoIsMain
  /** level 类型 */
  type: ComponentsSchemasOpenGetSeriesCompsTreeResDtoType
  /** 子节点 */
  children?: Array<OpenGetSeriesCompsTreeResDto>
  /** 节点ID */
  id: number
  /** 父节点ID */
  pid: number
  /** 名称 */
  name: string
  /** 组件代号 */
  code?: string
  /** 显示顺序 */
  showOrder?: number
}

export interface OpenGetEffectMcodesReqDto {
  /** 系列ID */
  sid: number
  /** 选项ID分组集合 */
  optIds: Array<string>
}

export interface GetPcodeOneReqDto {
  sid: number
  /** 厂商名称 */
  prodName: string
}

export interface SearchPcodeEntity {
  id: number
  /** 物料号 */
  prodCode?: string
  /** 厂商名称 */
  prodName?: string
  /** 规格名称 */
  prodEpname?: string
  /**
   * 类型
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
  /** default: 10 */
  limit: number
}

export interface GetCombBulkReqDto {
  sid?: number
  combId?: number
  propOptSets: Array<string>
}

export interface CompIdReqDto {
  /** 组件ID */
  compId: number
}

export interface ZdProvinceEntity {
  id: number
  /** 代码 */
  dm: string
  /** 名称 */
  ct: string | null
  jp: string | null
  qp: string | null
  /** 国家 */
  gltj: string | null
  jlbs: number | null
}

export interface ZdCountryEntity {
  id: number
  /** 代号 */
  dm: string
  /** 名称 */
  ct: string
  /** 简称 */
  jp?: string
  qp?: string
  gltj?: string
  jlbs?: number
}

export interface FactGetByPageReqDto {
  /** 搜索关键字 */
  name?: string
  /** 省份 */
  province?: string
  /**
   * 启用状态
   * 0-停用
   * 1-启用
   */
  enableStatus?: number
  /**
   * 页数
   * default: 1
   */
  page?: number
  /**
   * 页码
   * default: 10
   */
  size?: number
}

export interface FactEntityDto {
  /**
   * 启用状态
   *    0-停用
   *    1-启用
   */
  enableStatus?: ComponentsSchemasFactEntityDtoEnableStatus
  /**
   * 数据状态
   * 品牌新建 = 0,
   *    类目编辑中 = 1,
   *    正在发布 = 39,
   *    已发布 = 40,
   */
  changeStatus?: ComponentsSchemasFactEntityDtoChangeStatus
  /** 省份名称 */
  provinceName?: string
  /** format: date-time */
  createTime: string
  /** 品牌ID */
  factId: number
  /** 拼音简码 */
  keyName?: string
  /** 品牌全称 */
  factName: string
  /** 简  称 */
  shortCusName?: string
  /** 拼  音 */
  eName?: string
  /** 电  话 */
  phone?: string
  /** 电  话2 */
  phone2?: string
  /** 品牌主页 */
  website?: string
  /** 联系人 */
  corporation?: string
  /** 传真 */
  fax?: string
  /** 电子邮箱 */
  email?: string
  /** 邮编 */
  postCode?: string
  /** 详细地址 */
  address?: string
  /** 国家地区 */
  country?: string
  /** 省 */
  province?: string
  /** 市 */
  city?: string
  /** 简  介 */
  description?: string
  /** 备注 */
  useAddress?: string
  /** 显示顺序 */
  showOrder?: number
  /** 品牌行业 */
  categoryType?: string
  /** 索引关键字 */
  keyWords?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * 是否默认品牌
   *    1: 是
   *    0： 否
   */
  isDefault?: number
}

export interface FactGetByPageResDto {
  /** 总数 */
  total: number
  /** 数据 */
  list: Array<FactEntityDto>
}

export interface FactGetAllReqDto {
  /** 名称 */
  name?: string
}

export interface TblFactoryEntity {
  /** 品牌ID */
  factId: number
  /** 拼音简码 */
  keyName?: string
  /** 品牌全称 */
  factName: string
  /** 简  称 */
  shortCusName?: string
  /** 拼  音 */
  eName?: string
  /** 电  话 */
  phone?: string
  /** 电  话2 */
  phone2?: string
  /** 品牌主页 */
  website?: string
  /** 联系人 */
  corporation?: string
  /** 传真 */
  fax?: string
  /** 电子邮箱 */
  email?: string
  /** 邮编 */
  postCode?: string
  /** 详细地址 */
  address?: string
  /** 国家地区 */
  country?: string
  /** 省 */
  province?: string
  /** 市 */
  city?: string
  /** 简  介 */
  description?: string
  /** 备注 */
  useAddress?: string
  /** 显示顺序 */
  showOrder?: number
}

export interface FactIdReqDto {
  /** 品牌ID */
  factId: number
}

export interface FactCreateReqDto {
  /**
   * 启用状态
   *    0-停用
   *    1-启用
   * default: 1
   */
  enableStatus?: ComponentsSchemasFactCreateReqDtoEnableStatus
  /**
   * 数据状态
   * 品牌新建 = 0,
   *    类目编辑中 = 1,
   *    正在发布 = 39,
   *    已发布 = 40,
   */
  changeStatus?: ComponentsSchemasFactCreateReqDtoChangeStatus
  /** 品牌全称 */
  factName: string
  /** 简  称 */
  shortCusName: string
  /** 拼音简码 */
  keyName: string
  /** 拼  音 */
  eName: string
  /** 显示顺序 */
  showOrder: number
  /** 品牌行业 */
  categoryType: string
  /** 索引关键字 */
  keyWords: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs: string
  /**
   * 是否默认品牌
   *    1: 是
   *    0： 否
   * default: 0
   */
  isDefault?: number
  /** 电  话 */
  phone?: string
  /** 电  话2 */
  phone2?: string
  /** 品牌主页 */
  website?: string
  /** 联系人 */
  corporation?: string
  /** 传真 */
  fax?: string
  /** 电子邮箱 */
  email?: string
  /** 邮编 */
  postCode?: string
  /** 详细地址 */
  address?: string
  /** 国家地区 */
  country?: string
  /** 省 */
  province?: string
  /** 市 */
  city?: string
  /** 简  介 */
  description?: string
  /** 备注 */
  useAddress?: string
}

export interface FactUpdateReqDto {
  /**
   * 启用状态
   *    0-停用
   *    1-启用
   */
  enableStatus?: ComponentsSchemasFactUpdateReqDtoEnableStatus
  /**
   * 数据状态
   * 品牌新建 = 0,
   *    类目编辑中 = 1,
   *    正在发布 = 39,
   *    已发布 = 40,
   */
  changeStatus?: ComponentsSchemasFactUpdateReqDtoChangeStatus
  /** 品牌ID */
  factId: number
  /** 品牌全称 */
  factName?: string
  /** 拼音简码 */
  keyName?: string
  /** 简  称 */
  shortCusName?: string
  /** 拼  音 */
  eName?: string
  /** 电  话 */
  phone?: string
  /** 电  话2 */
  phone2?: string
  /** 品牌主页 */
  website?: string
  /** 联系人 */
  corporation?: string
  /** 传真 */
  fax?: string
  /** 电子邮箱 */
  email?: string
  /** 邮编 */
  postCode?: string
  /** 详细地址 */
  address?: string
  /** 国家地区 */
  country?: string
  /** 省 */
  province?: string
  /** 市 */
  city?: string
  /** 简  介 */
  description?: string
  /** 备注 */
  useAddress?: string
  /** 显示顺序 */
  showOrder?: number
  /** 品牌行业 */
  categoryType?: string
  /** 索引关键字 */
  keyWords?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /**
   * 是否默认品牌
   *    1: 是
   *    0： 否
   */
  isDefault?: number
}

export interface FactRemoveIdsReqDto {
  /** id集合 */
  ids: Array<number>
}

export interface ExistNameReqDto {
  /** 名称 */
  name: string
  /** 排除的id */
  excludeId?: number
}

export interface FactProdTypeFactIdReqDto {
  /** 品牌ID */
  factoryId: number
}

export interface TblFactoryProdtypeEntityWithExt {
  /** 子节点 */
  children?: Array<TblFactoryProdtypeEntityWithExt>
  /** 类目ID */
  typeId: number
  /** 品牌ID */
  factoryId: number
  /** 类目名称 */
  typeName: string
  /** 目录英文名称 */
  eName?: string
  /** 索引关键字 */
  keyWords?: string
  /** 父节点ID */
  parentId?: number
  /** 类目显示顺序 */
  showOrder?: number
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface TblFactoryProdtypeEntity {
  /** 类目ID */
  typeId: number
  /** 品牌ID */
  factoryId: number
  /** 类目名称 */
  typeName: string
  /** 目录英文名称 */
  eName?: string
  /** 索引关键字 */
  keyWords?: string
  /** 父节点ID */
  parentId?: number
  /** 类目显示顺序 */
  showOrder?: number
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface FactProdTypeCreateReqDto {
  /** 品牌ID */
  factoryId: number
  /** 类目名称 */
  typeName: string
  /** 父节点ID */
  parentId: number
  /** 目录英文名称 */
  eName?: string
  /** 索引关键字 */
  keyWords?: string
  /** 类目显示顺序 */
  showOrder?: number
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface FactProdTypeUpdateReqDto {
  /** 类目ID */
  typeId: number
  /** 类目名称 */
  typeName?: string
  /** 品牌ID */
  factoryId?: number
  /** 目录英文名称 */
  eName?: string
  /** 索引关键字 */
  keyWords?: string
  /** 父节点ID */
  parentId?: number
  /** 类目显示顺序 */
  showOrder?: number
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface IdsReqDto {
  /** id集合 */
  ids: Array<number>
}

export interface FactProdTypeUpdateBatchReqDto {
  /** 集合 */
  data: Array<FactProdTypeUpdateReqDto>
}

export interface FactProdTypeExistNameReqDto {
  /** 品牌ID */
  factoryId: number
  /** 类目名称 */
  typeName: string
}

export interface TblIndustryProdtypeEntity {
  /** 分类ID */
  typeId: number
  /** 分类名称 */
  typeName: string
  /** 行业ID */
  industryId: number
  /** 父节点ID */
  parentId: number
  /** 简码 */
  simpleCode?: string
  /** 描述 */
  description?: string
  children: Array<TblIndustryProdtypeEntity>
}

export interface TblIndustryEntity {
  /** 行业ID */
  industryId: number
  /** 行业名称 */
  itemName: string
  /** 行业代号 */
  itemCode?: string
  /** 描述 */
  description?: string
  children: Array<TblIndustryProdtypeEntity>
}

export interface SeriesFidReqDto {
  /** 品牌ID */
  factoryId: number
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
  /**
   * 系列最后更新时间
   * format: date-time
   */
  lastUpdateTime?: string
  /** 系列最后更新人 */
  lastUpdateUser?: number
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
  /** 审批单ID */
  auditId?: number
}

export interface SeriesIdReqDto {
  /** 系列ID */
  seriesId: number
}

export interface SeriesCreateReqDto {
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
   * default: 0
   */
  status: ComponentsSchemasSeriesCreateReqDtoStatus
  /**
   * 数据变化标志
   * 0-编辑中
   * 10-待审核
   * 20-待发布
   * 40-已发布
   * default: 0
   */
  changeStatus: ComponentsSchemasSeriesCreateReqDtoChangeStatus
  /** 品牌ID */
  factoryId: number
  /** 系列名称 */
  seriesFullName: string
  /**
   * 显示顺序
   * default: 0
   */
  showOrder: any
  /**
   * 启用停用 1: 启用 0: 停用
   * default: 1
   */
  enableStatus: ComponentsSchemasSeriesCreateReqDtoEnableStatus
  /**
   * 是否品牌默认系列
   * default: 0
   */
  isFactDefault: ComponentsSchemasSeriesCreateReqDtoIsFactDefault
  /**
   * 生产状态
   *    0-已停产
   *    1-生产中
   * default: 1
   */
  prodStatus: ComponentsSchemasSeriesCreateReqDtoProdStatus
  /**
   * 审批前是否删除 1-已删除 0-未删除
   * default: 0
   */
  isAuditDelete: ComponentsSchemasSeriesCreateReqDtoIsAuditDelete
  /**
   * 是否显示价格
   *    1： 显示
   *    0：不显示
   * default: 1
   */
  showPrice: ComponentsSchemasSeriesCreateReqDtoShowPrice
  /** 系列代号-拼规格名称用 */
  seriesName?: string
  /** 系列英文简称 */
  seriesNameEn?: string
  /** 最后一级类目ID */
  ptypeId?: number
  /** 系列描述 */
  sDesc?: string
  /** oss图片路径 */
  picName?: string
  /** 索引关键字 */
  keyWords?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /** 审批单ID */
  auditId?: number
}

export interface SeriesUpdateStatusReqDto {
  /** 系列ID */
  seriesId: number
  /** 启用停用 1: 启用 0: 停用 */
  enableStatus?: number
  /**
   * 生产状态
   *    0-已停产
   *    1-生产中
   */
  prodStatus?: number
  /** 是否品牌默认系列 */
  isFactDefault?: number
}

export interface SeriesUpdateReqDto {
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
  status?: ComponentsSchemasSeriesUpdateReqDtoStatus
  /**
   * 数据变化标志
   * 0-编辑中
   * 10-待审核
   * 20-待发布
   * 40-已发布
   */
  changeStatus?: ComponentsSchemasSeriesUpdateReqDtoChangeStatus
  /** 系列ID */
  seriesId: number
  /** 系列名称 */
  seriesFullName?: string
  /** 系列代号-拼规格名称用 */
  seriesName?: string
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
  /** 审批单ID */
  auditId?: number
}

export interface SeriesUpdateBatchReqDto {
  data: Array<SeriesUpdateReqDto>
}

export interface GetSeriesIndustryReqDto {
  /** 系列ID */
  sid: number
}

export interface TblIndustryEntityDto {
  /** 行业ID */
  industryId: number
  /** 行业名称 */
  itemName: string
  /** 行业代号 */
  itemCode?: string
  /** 描述 */
  description?: string
}

export interface TblIndustryProdtypeEntityDto {
  /** 分类ID */
  typeId: number
  /** 分类名称 */
  typeName: string
  /** 行业ID */
  industryId: number
  /** 父节点ID */
  parentId: number
  /** 简码 */
  simpleCode?: string
  /** 描述 */
  description?: string
}

export interface GetSeriesIndustryResDto {
  /** 行业 */
  industry: TblIndustryEntityDto
  /** 行业分类 */
  industryProdtype: TblIndustryProdtypeEntityDto
  /** 关系ID */
  relId?: number
  /** 系列ID */
  seriesId?: number
  /** 行业类别ID */
  induTypeId?: number
}

export interface SaveSeriesIndustryDto {
  /** 系列ID */
  sid: number
  /** 行业分类id数组 */
  industryIds: Array<number>
}

export interface SeriesGetNamePropsResDto {
  /**
   * 属性类型
   *
   *    0：普通属性
   *    1：系统属性 选用状态
   *    2：外接属性
   *    3：行业分类标识
   *    4：图片规格属性
   */
  jlbs?: ComponentsSchemasSeriesGetNamePropsResDtoJlbs
  /** 组件 */
  comp: TblComponentEntity
  /** 属性ID */
  propId: number
  /** 属性名称 */
  propName: string
  /** 英文名 */
  propNameEn?: string
  /** 系列ID */
  seriesId: number
  /** 组件ID */
  compId: number
  /** 是否显示 */
  isShow?: number
  /** 显示顺序 */
  showOrder?: number
  /** 系列命名顺序 */
  nOrder?: number
  /** 组件命名顺序 */
  cnOrder?: number
  /** 不知-无用 */
  compOrder?: number
  /** 系列命名相关 */
  isRelName?: number
  /** 组件命名相关 */
  isRelCname?: number
  /** 价格相关 */
  isRelPrice?: number
  /** 系列命名连接符 */
  connectChar?: string
  /** 组件命名连接符 */
  compChar?: string
  /** 描述 */
  description?: string
  /** 外接属性 */
  fPropId?: number
  /** 状态-无用 */
  status?: number
  /**
   * 属性展示类型
   *
   *    0：文本
   *    1：图片
   *    2：图片+文字
   */
  showType?: number
  /** 属性选项值类型 */
  valueType?: number
  /** 标准属性名称 */
  standardName?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /** 值单位 */
  valueUnit?: string
  /** 属性代号 */
  propCode?: string
  /** 属性别名 */
  keyWords?: string
}

export interface TblPropertyEntity {
  /**
   * 属性类型
   *
   *    0：普通属性
   *    1：系统属性 选用状态
   *    2：外接属性
   *    3：行业分类标识
   *    4：图片规格属性
   */
  jlbs?: ComponentsSchemasTblPropertyEntityJlbs
  /** 属性ID */
  propId: number
  /** 属性名称 */
  propName: string
  /** 英文名 */
  propNameEn?: string
  /** 系列ID */
  seriesId: number
  /** 组件ID */
  compId: number
  /** 是否显示 */
  isShow?: number
  /** 显示顺序 */
  showOrder?: number
  /** 系列命名顺序 */
  nOrder?: number
  /** 组件命名顺序 */
  cnOrder?: number
  /** 不知-无用 */
  compOrder?: number
  /** 系列命名相关 */
  isRelName?: number
  /** 组件命名相关 */
  isRelCname?: number
  /** 价格相关 */
  isRelPrice?: number
  /** 系列命名连接符 */
  connectChar?: string
  /** 组件命名连接符 */
  compChar?: string
  /** 描述 */
  description?: string
  /** 外接属性 */
  fPropId?: number
  /** 状态-无用 */
  status?: number
  /**
   * 属性展示类型
   *
   *    0：文本
   *    1：图片
   *    2：图片+文字
   */
  showType?: number
  /** 属性选项值类型 */
  valueType?: number
  /** 标准属性名称 */
  standardName?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /** 值单位 */
  valueUnit?: string
  /** 属性代号 */
  propCode?: string
  /** 属性别名 */
  keyWords?: string
}

export interface SeriesExistNameReqDto {
  /** 品牌ID */
  factoryId: number
  /** 系列名称 */
  seriesFullName: string
}

export interface TblSeriesExtEntity {
  /**
   * 数据变化标志
   * 0-编辑中
   * 10-待审核
   * 20-待发布
   * 40-已发布
   */
  changeStatus?: ComponentsSchemasTblSeriesExtEntityChangeStatus
  /** 系列ID */
  seriesId: number
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
  /** 审批单ID */
  auditId?: number
}

export interface SeriesChangeSatusReqDto {
  /**
   * 何处修改的
   *    品牌变动
   *    定义变动
   *    价格变动
   *    物料变动
   */
  from?: ComponentsSchemasSeriesChangeSatusReqDtoFrom
  /** 系列ID */
  seriesId: number
}

export interface SeriesCopyReqDto {
  /** 品牌ID */
  factoryId: number
  /** 系列ID */
  seriesId: number
  /** 系列名称 */
  seriesFullName: string
  /** 系列代号-拼规格名称用 */
  seriesName: string
  /** 最后一级类目ID */
  ptypeId: number
  /** 显示顺序 */
  showOrder: number
  /** 本体简码 */
  mainCompCode: string
  compIds: Array<number>
}

export interface SeriesIdReqCompDto {
  /** 系列ID */
  seriesId: number
}

export interface TblComponentTypeEntity {
  /** 分组ID */
  typeId: number
  /** 分组名称 */
  typeName: string
  /** 系列ID */
  seriesId: number
  /** 显示顺序 */
  showOrder?: number
}

export interface CompGroupIdReqDto {
  /** 分组ID */
  typeId: number
}

export interface CompGroupCreateReqDto {
  /** 分组名称 */
  typeName: string
  /** 系列ID */
  seriesId: number
  /** 显示顺序 */
  showOrder?: number
}

export interface CompGroupUpdateReqDto {
  /** 分组ID */
  typeId: number
  /** 分组名称 */
  typeName?: string
  /** 系列ID */
  seriesId?: number
  /** 显示顺序 */
  showOrder?: number
}

export interface CompGroupBatchUpdateReqDto {
  /** 分组数据 */
  data: Array<CompGroupUpdateReqDto>
}

export interface TblComponentEntityWithExt {
  /**
   * 组件类型：
   *    -2：图片
   *    -1：行业分类
   *    0：附件
   *    1：本体
   */
  isMain?: ComponentsSchemasTblComponentEntityWithExtIsMain
  /** 是否参与命名-无用 */
  nameFlag?: ComponentsSchemasTblComponentEntityWithExtNameFlag
  /** 是否标配 */
  priceFlag?: ComponentsSchemasTblComponentEntityWithExtPriceFlag
  /** 属性集合 */
  children: Array<TblPropertyEntity>
  /** 组件ID */
  compId: number
  /** 组件名称 */
  compName?: string
  /** 组件英文名 */
  compNameEn?: string
  /** 系列ID */
  seriesId: number
  /** 显示顺序 */
  nOrder?: number
  /** 组件代号 */
  compCode?: string
  /** 描述 */
  description?: string
  /** 分组ID */
  typeId?: number
  /** 组件默认图片oss路径 */
  picName?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface CompCreateReqDto {
  /**
   * 组件类型：
   *    -2：图片
   *    -1：行业分类
   *    0：附件
   *    1：本体
   */
  isMain?: ComponentsSchemasCompCreateReqDtoIsMain
  /** 是否参与命名-无用 */
  nameFlag?: ComponentsSchemasCompCreateReqDtoNameFlag
  /**
   * 是否标配
   * default: 0
   */
  priceFlag: ComponentsSchemasCompCreateReqDtoPriceFlag
  /** 组件名称 */
  compName?: string
  /** 组件英文名 */
  compNameEn?: string
  /** 系列ID */
  seriesId: number
  /** 显示顺序 */
  nOrder?: number
  /** 组件代号 */
  compCode?: string
  /** 描述 */
  description?: string
  /** 分组ID */
  typeId?: number
  /** 组件默认图片oss路径 */
  picName?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface CompUpdateReqDto {
  /**
   * 组件类型：
   *    -2：图片
   *    -1：行业分类
   *    0：附件
   *    1：本体
   */
  isMain?: ComponentsSchemasCompUpdateReqDtoIsMain
  /** 是否参与命名-无用 */
  nameFlag?: ComponentsSchemasCompUpdateReqDtoNameFlag
  /** 是否标配 */
  priceFlag?: ComponentsSchemasCompUpdateReqDtoPriceFlag
  /** 组件ID */
  compId: number
  /** 组件名称 */
  compName?: string
  /** 组件英文名 */
  compNameEn?: string
  /** 系列ID */
  seriesId?: number
  /** 显示顺序 */
  nOrder?: number
  /** 组件代号 */
  compCode?: string
  /** 描述 */
  description?: string
  /** 分组ID */
  typeId?: number
  /** 组件默认图片oss路径 */
  picName?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface CompUpdateBatchReqDto {
  /** 组件批量数据 */
  data: Array<CompUpdateReqDto>
}

export interface PropsCompIdReqDto {
  /** 组件ID */
  compId: number
}

export interface TblPropertyOptionEntity {
  /** 选项ID */
  optId: number
  /** 选项名称 */
  optName: string
  /** 选项值 */
  optValue?: string
  /** 选项代码-拼名字用 */
  optCode?: string
  /** 组件命名代码-以后用 */
  optCompCode?: string
  /** 选项描述 */
  optDesc?: string
  /** 属性ID */
  propId: number
  /** 显示顺序 */
  showOrder?: number
  /** 是否默认 */
  isDefault?: number
  /** 系列ID */
  seriesId: number
  /** 选项图片地址oss */
  extVal?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface TblPropertyEntityWithOpt {
  /**
   * 属性类型
   *
   *    0：普通属性
   *    1：系统属性 选用状态
   *    2：外接属性
   *    3：行业分类标识
   *    4：图片规格属性
   */
  jlbs?: ComponentsSchemasTblPropertyEntityWithOptJlbs
  /** 属性ID */
  propId: number
  /** 属性名称 */
  propName: string
  /** 英文名 */
  propNameEn?: string
  /** 系列ID */
  seriesId: number
  /** 组件ID */
  compId: number
  /** 是否显示 */
  isShow?: number
  /** 显示顺序 */
  showOrder?: number
  /** 系列命名顺序 */
  nOrder?: number
  /** 组件命名顺序 */
  cnOrder?: number
  /** 不知-无用 */
  compOrder?: number
  /** 系列命名相关 */
  isRelName?: number
  /** 组件命名相关 */
  isRelCname?: number
  /** 价格相关 */
  isRelPrice?: number
  /** 系列命名连接符 */
  connectChar?: string
  /** 组件命名连接符 */
  compChar?: string
  /** 描述 */
  description?: string
  /** 外接属性 */
  fPropId?: number
  /** 状态-无用 */
  status?: number
  /**
   * 属性展示类型
   *
   *    0：文本
   *    1：图片
   *    2：图片+文字
   */
  showType?: number
  /** 属性选项值类型 */
  valueType?: number
  /** 标准属性名称 */
  standardName?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /** 值单位 */
  valueUnit?: string
  /** 属性代号 */
  propCode?: string
  /** 属性别名 */
  keyWords?: string
  /** 选项集合 */
  optList: Array<TblPropertyOptionEntity>
}

export interface PropsIdReqDto {
  /** 属性ID */
  propId: number
}

export interface PropsCreateReqDto {
  /**
   * 属性类型
   *
   *    0：普通属性
   *    1：系统属性 选用状态
   *    2：外接属性
   *    3：行业分类标识
   *    4：图片规格属性
   * default: 0
   */
  jlbs?: ComponentsSchemasPropsCreateReqDtoJlbs
  /** 属性名称 */
  propName: string
  /** 系列ID */
  seriesId: number
  /** 组件ID */
  compId: number
  /** 英文名 */
  propNameEn?: string
  /** 是否显示 */
  isShow?: number
  /** 显示顺序 */
  showOrder?: number
  /** 系列命名顺序 */
  nOrder?: number
  /** 组件命名顺序 */
  cnOrder?: number
  /** 不知-无用 */
  compOrder?: number
  /** 系列命名相关 */
  isRelName?: number
  /** 组件命名相关 */
  isRelCname?: number
  /** 价格相关 */
  isRelPrice?: number
  /** 系列命名连接符 */
  connectChar?: string
  /** 组件命名连接符 */
  compChar?: string
  /** 描述 */
  description?: string
  /** 外接属性 */
  fPropId?: number
  /** 状态-无用 */
  status?: number
  /**
   * 属性展示类型
   *
   *    0：文本
   *    1：图片
   *    2：图片+文字
   */
  showType?: number
  /** 属性选项值类型 */
  valueType?: number
  /** 标准属性名称 */
  standardName?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /** 值单位 */
  valueUnit?: string
  /** 属性代号 */
  propCode?: string
  /** 属性别名 */
  keyWords?: string
}

export interface PropsCreateBatchReqDto {
  /** 属性集合 */
  data: Array<PropsCreateReqDto>
}

export interface PropsUpdateReqDto {
  /**
   * 属性类型
   *
   *    0：普通属性
   *    1：系统属性 选用状态
   *    2：外接属性
   *    3：行业分类标识
   *    4：图片规格属性
   */
  jlbs?: ComponentsSchemasPropsUpdateReqDtoJlbs
  /** 属性ID */
  propId: number
  /** 属性名称 */
  propName?: string
  /** 英文名 */
  propNameEn?: string
  /** 系列ID */
  seriesId?: number
  /** 组件ID */
  compId?: number
  /** 是否显示 */
  isShow?: number
  /** 显示顺序 */
  showOrder?: number
  /** 系列命名顺序 */
  nOrder?: number
  /** 组件命名顺序 */
  cnOrder?: number
  /** 不知-无用 */
  compOrder?: number
  /** 系列命名相关 */
  isRelName?: number
  /** 组件命名相关 */
  isRelCname?: number
  /** 价格相关 */
  isRelPrice?: number
  /** 系列命名连接符 */
  connectChar?: string
  /** 组件命名连接符 */
  compChar?: string
  /** 描述 */
  description?: string
  /** 外接属性 */
  fPropId?: number
  /** 状态-无用 */
  status?: number
  /**
   * 属性展示类型
   *
   *    0：文本
   *    1：图片
   *    2：图片+文字
   */
  showType?: number
  /** 属性选项值类型 */
  valueType?: number
  /** 标准属性名称 */
  standardName?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
  /** 值单位 */
  valueUnit?: string
  /** 属性代号 */
  propCode?: string
  /** 属性别名 */
  keyWords?: string
}

export interface PropsUpdateBatchReqDto {
  /** 属性集合 */
  data: Array<PropsUpdateReqDto>
}

export interface PropsCreateRefPropsReqDto {
  /** 组件ID */
  compId: number
  refProps: Array<PropsUpdateReqDto>
}

export interface PropsExistNameReqDto {
  /** 组件ID */
  compId: number
  /** 属性名称 */
  propName: string
  /** 属性ID */
  propId?: number
}

export interface PropsRelFPropIdReqDto {
  /** 被动属性ID */
  fPropId: number
}

export interface TblPropertyProprelEntity {
  /** 关系id */
  rId: number
  /** 系列ID */
  seriesId: number
  /** 主动属性ID */
  mPropId: number
  /** 被动属性ID */
  fPropId: number
}

export interface SharedCompIdReqDto {
  /** 组件ID */
  compId: number
}

export interface PropsRelCreateReqDto {
  /** 系列ID */
  seriesId: number
  /** 主动属性ID */
  mPropId: number
  /** 被动属性ID */
  fPropId: number
}

export interface PropsRelCreateBatchReqDto {
  /** 被动属性ID */
  fPropId: number
  /** 主动数据集合 */
  data: Array<PropsRelCreateReqDto>
}

export interface OptPropsIdReqDto {
  /** 属性ID */
  propId: number
}

export interface OptIdReqDto {
  /** 选项ID */
  optId: number
}

export interface OptCreateReqDto {
  /** 选项名称 */
  optName: string
  /** 选项值 */
  optValue?: string
  /** 选项代码-拼名字用 */
  optCode?: string
  /** 组件命名代码-以后用 */
  optCompCode?: string
  /** 选项描述 */
  optDesc?: string
  /** 属性ID */
  propId: number
  /** 显示顺序 */
  showOrder?: number
  /** 是否默认 */
  isDefault?: number
  /** 系列ID */
  seriesId: number
  /** 选项图片地址oss */
  extVal?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface OptCreateBatchReqDto {
  /** 属性集合 */
  data: Array<OptCreateReqDto>
}

export interface OptUpdateReqDto {
  /** 属性ID */
  optId: number
  /** 选项名称 */
  optName?: string
  /** 选项值 */
  optValue?: string
  /** 选项代码-拼名字用 */
  optCode?: string
  /** 组件命名代码-以后用 */
  optCompCode?: string
  /** 选项描述 */
  optDesc?: string
  /** 属性ID */
  propId?: number
  /** 显示顺序 */
  showOrder?: number
  /** 是否默认 */
  isDefault?: number
  /** 系列ID */
  seriesId?: number
  /** 选项图片地址oss */
  extVal?: string
  /**
   * json图片数组
   *    id 资源表里面的ID
   *    type: 图片类型
   *    [{id: 1, url: ‘aaaa.jpg’, type: 1}]
   */
  imgs?: string
}

export interface OptUpdateBatchReqDto {
  /** 属性集合 */
  data: Array<OptUpdateReqDto>
}

export interface OptBatchIdsReqDto {
  /** id集合 */
  ids: Array<number>
}

export interface OptRelFpropIdReqDto {
  /**
   * 被动属性ID
   * example: 239
   */
  fpropId: number
}

export interface OptRelEntityResDto {
  /** 主动属性选项组合 */
  mopts: {
    /**
        主动属性选项组合 */
    [propertyName: string]: string
  }
  /** 属性约束关系 */
  multiIds: string
  /** 第几组约束 */
  sort: number
  /** 主动属性 */
  mprops: Array<number>
  /** 被约束属性ID */
  fpropId: number
  /** 约束值范围 */
  fOptIds?: string
  /** 约束值默认选项 */
  fOptDefaultId?: number
}

export interface OptRelCreateReqDto {
  /** 主动属性id集合 */
  mpropIds: Array<number>
  /** 主动属性选项值集合 */
  mpropOptIds: Array<string>
  /** 系列ID */
  seriesId: number
  /** 属性约束关系 */
  multiIds: string
  /** 约束值范围 */
  fOptIds: string
  /** 被约束属性ID */
  fpropId: number
  /** 约束值默认选项 */
  fOptDefaultId?: number
}

export interface OptRelCreateBatchReqDto {
  data: Array<OptRelCreateReqDto>
}

export interface OptRelUpdateReqDto {
  /** 属性约束关系 */
  multiIds: string
  /** 约束值范围 */
  fOptIds: string
  /** 约束值默认选项 */
  fOptDefaultId?: number
}

export interface OptRelRemoveIdsReqDto {
  ids: Array<string>
}

export interface TblPubVersionEntity {
  /** 版本ID */
  id: number
  /**
   * 版本类型
   * 1-类目
   *    2-系列
   */
  type?: number
  /** 发布类型 1-分类更新  2-系列更新 3-分类删除 4-系列删除 */
  pubType?: number
  /**
   * 版本名称
   *      分类 C{品牌ID}_20210112_0001
   *      系列 S{系列ID}_20210112_0001
   */
  name?: string
  /**
   * 生成时间
   * format: date-time
   */
  pubTime?: string
  /** 当天生成次数 */
  count?: number
  /** 发布记录ID */
  publishId?: number
  /** 差异 */
  diff?: string
  /**
   * 前一版本名称
   *    分类 C{品牌ID}_20210112_0001
   *    系列 S{系列ID}_20210112_0001
   */
  prevVersion?: string
  /**
   * 前一版本ID
   *    分类 C{品牌ID}_20210112_0001
   *    系列 S{系列ID}_20210112_0001
   */
  prevVersionId?: number
  /** 业务ID 根据类型区分，是品牌或者系列 */
  dataId?: number
  /** 启用状态 */
  enableStatus?: number
  /** 品牌 */
  factName?: string
  /** 分类 */
  categoryName?: string
  /** 系列 */
  seriesName?: string
  /** 是否操作删除 */
  isPubDelete?: number
  /** 分类版本 */
  categoryVersion?: string
  /** 发布说明 */
  pubRemark?: string
  /**
   * 对外的发布日期 系列
   * format: date-time
   */
  pubShowTime?: string
}

export interface PubGetTreeItemDto {
  /** 类型 */
  type: ComponentsSchemasPubGetTreeItemDtoType
  /** 子节点 */
  children?: Array<PubGetTreeItemDto>
  /** 唯一ID */
  uid: string
  /** ID */
  id: number
  /** 父节点ID */
  pid: number
  /** 名称 */
  name: string
  /** 是否审核前删除 */
  isDelete?: boolean
  /** 差异 */
  diff?: string
  /**
   * 系列发布日期
   * format: date-time
   */
  pubShowTime?: string
  /** 前一版本 */
  prevVersion?: TblPubVersionEntity
}

export interface PubCategoryDto {
  /** 品牌ID */
  id: number
  /** 发布变动内容 */
  diff?: string
}

export interface PubSeriesPubTimeDto {
  /** 系列ID */
  id: number
  /**
   * 系列发布时间
   * format: date-time
   */
  pubShowTime: string
  /** 发布变动内容 */
  diff?: string
}

export interface PubSaveDataReqDto {
  /** 发布的品牌 */
  fids: Array<PubCategoryDto>
  /** 更新的系列 */
  sids: Array<PubSeriesPubTimeDto>
  /** 发布说明 */
  pubRemark: string
}

export interface PubGetListPageReqDto {
  /** 发布类型 1-分类更新  2-系列更新 3-分类删除 4-系列删除 */
  pubType?: ComponentsSchemasPubGetListPageReqDtoPubType
  /** 启用状态 1-启用  0-停用 */
  enableStatus?: ComponentsSchemasPubGetListPageReqDtoEnableStatus
  /** 版本号 */
  version_name?: string
  /** 品牌／分类/系列/ 名称搜索 */
  name?: string
  /**
   * 页数
   * default: 1
   */
  page?: number
  /**
   * 页码
   * default: 10
   */
  size?: number
}

export interface TblDatapubEntity {
  /** 发布ID */
  publishId: number
  /**
   * 发布时间
   * format: date-time
   */
  publishDate: string
  /** 备注 */
  remarks?: string
  /** 完成标志位 */
  completeFlag?: number
}

export interface TblPubVersionEntityShow {
  /** 版本ID */
  id: number
  /**
   * 版本类型
   * 1-类目
   *    2-系列
   */
  type?: number
  /** 发布类型 1-分类更新  2-系列更新 3-分类删除 4-系列删除 */
  pubType?: number
  /**
   * 版本名称
   *      分类 C{品牌ID}_20210112_0001
   *      系列 S{系列ID}_20210112_0001
   */
  name?: string
  /**
   * 生成时间
   * format: date-time
   */
  pubTime?: string
  /** 当天生成次数 */
  count?: number
  /** 发布记录ID */
  publishId?: number
  /** 差异 */
  diff?: string
  /**
   * 前一版本名称
   *    分类 C{品牌ID}_20210112_0001
   *    系列 S{系列ID}_20210112_0001
   */
  prevVersion?: string
  /**
   * 前一版本ID
   *    分类 C{品牌ID}_20210112_0001
   *    系列 S{系列ID}_20210112_0001
   */
  prevVersionId?: number
  /** 业务ID 根据类型区分，是品牌或者系列 */
  dataId?: number
  /** 启用状态 */
  enableStatus?: number
  /** 品牌 */
  factName?: string
  /** 分类 */
  categoryName?: string
  /** 系列 */
  seriesName?: string
  /** 是否操作删除 */
  isPubDelete?: number
  /** 分类版本 */
  categoryVersion?: string
  /** 发布说明 */
  pubRemark?: string
  /**
   * 对外的发布日期 系列
   * format: date-time
   */
  pubShowTime?: string
  /** 创建人 */
  createUser?: number
  /**
   * 创建时间
   * format: date-time
   */
  createTime?: string
  /** 发布记录 */
  record: TblDatapubEntity
}

export interface PubGetListByPageResDto {
  /** 数据 */
  list: Array<TblPubVersionEntityShow>
  /** 总数 */
  total: number
}

export interface PubUpdateReqDto {
  /** 版本ID */
  id: number
  /** 启用状态 */
  enableStatus: number
}

export interface PubUpdateBatchReqDto {
  ids: Array<number>
  /** 启用状态 */
  enableStatus: number
}

export interface PubGetMcodeReqDto {
  /** 系列ID */
  sid: number
  /** 系列版本 */
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
  /** format: date-time */
  createTime: string | null
  updateUser: number | null
  /** format: date-time */
  updateTime: string | null
}

export interface AuditCreateReqDto {
  /** 从哪里提交的 */
  where: ComponentsSchemasAuditCreateReqDtoWhere
  /** 系列ID */
  seriesId: number
  /** 审批提交内容 */
  content: string
  /** 系列查看链接 前端动态生成 因为域名会变化 */
  contentUrl: string
  /**
   * 是否是删除系列
   * default: false
   */
  isDelete?: boolean
}
