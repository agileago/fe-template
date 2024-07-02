/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
export type PMapDateTypeUpdateDtoPhysicalMapDataTypeEnum =
  | 'PROJECT'
  | 'JOB_TICKET'
export interface AccountInfoVO {
  /**
   * @description
   *   参与者账号id
   */
  accountId: string
  /**
   * @description
   *   邮箱
   */
  email: string
  /**
   * @description
   *   登录名
   */
  loginName: string
  /**
   * @description
   *   手机号
   */
  mobile: string
  /**
   * @description
   *   昵称
   */
  nickname: string
}

export interface AccountRoleQueryDTO {
  /**
   * @description
   *   用户id
   */
  accountId: string
  /**
   * @description
   *   当前页码
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   每页数量
   * @format int32
   */
  pageSize: number
}

export interface AlarmQueryDTO {
  /**
   * @description
   *   距离（单位：米）
   * @format int32
   */
  distance: number
  /**
   * @description
   *   纬度
   */
  latitude: string
  /**
   * @description
   *   经度
   */
  longitude: string
}

/**
 * @description
 *   清单
 */
export interface Assemble {
  /**
   * @description
   *   组件类型：1-设备设施类，2-人员操作类，3-综合排查，4-计划偏差，5-环境变化类，6-危险作业类，7-迎检类
   * @format int32
   */
  assembleType: number
  /**
   * @description
   *   每个组件检查详情
   */
  detailList: Array<AssembleCheckDetail>
  /**
   * @description
   *   综合排查组件
   */
  dpcHazardComprehensive: DpcHazardComprehensive
}

export interface AssembleCheckAddDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
}

/**
 * @description
 *   组件检查详情
 */
export interface AssembleCheckDetail {
  /**
   * @description
   *   排查状态：0-正常，1-异常
   * @format int32
   */
  assembleCheckStatus: number
  /**
   * @description
   *   组件ID
   * @format int64
   */
  assembleId: number
  /**
   * @description
   *   检查内容名称
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   隐患ID
   * @format int64
   */
  hazardId: number
  /**
   * @description
   *   隐患状态：1-待复核，2-已复核，3-待治理，4-治理中，5-待验收，6-验收中，7-已验收，8-验收通过，9-验收不通过
   * @format int32
   */
  hazardStatus: number
  /**
   * @description
   *   组件清单id
   * @format int64
   */
  hazardTaskListId: number
  /**
   * @description
   *   隐患排查信息
   */
  processRecords: Array<DpcHazardProcessRecord>
}

export interface AssembleCheckUpdateDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
}

export interface AssembleCheckVO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   组织id
   */
  companyInfoId: string
  /**
   * @description
   *   创建人id
   */
  createBy: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   租户id
   */
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   清单
 */
export interface AssembleCollect {
  /**
   * @description
   *   组件类型：1-设备设施类，2-人员操作类，3-综合排查，4-计划偏差，5-环境变化类，6-危险作业类，7-迎检类
   * @format int32
   */
  assembleType: number
  /**
   * @description
   *   每个组件检查详情
   */
  detailList: Array<AssembleCollectCheckDetail>
}

export interface AssembleCollectCheckDetail {
  /**
   * @description
   *   排查状态：0-无，1-有
   * @format int32
   */
  assembleCheckStatus: number
  /**
   * @description
   *   采集状态：1-待复核，2-已复核
   * @format int32
   */
  assembleCollectStatus: number
  /**
   * @description
   *   组件ID
   * @format int64
   */
  assembleId: number
  /**
   * @description
   *   组件排序
   * @format int32
   */
  assembleSort: number
  /**
   * @description
   *   检查内容名称
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   隐患ID
   * @format int64
   */
  collectId: number
  /**
   * @description
   *   组件清单id
   * @format int64
   */
  collectTaskListId: number
  /**
   * @description
   *   数据采集信息
   */
  processRecords: Array<DpcCollectInfoProcessRecord>
}

export interface AssembleDangerAddDTO {
  /**
   * @description
   *   设备设施类-检查内容
   */
  checkContent: string
  /**
   * @description
   *   设备设施类-检查标准
   */
  checkStandard: string
}

export interface AssembleDangerUpdateDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
}

export interface AssembleDangerVO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   组织id
   */
  companyInfoId: string
  /**
   * @description
   *   创建人id
   */
  createBy: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   租户id
   */
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface AssembleEnvironmentAddDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
}

export interface AssembleEnvironmentUpdateDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
}

export interface AssembleEnvironmentVO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   组织id
   */
  companyInfoId: string
  /**
   * @description
   *   创建人id
   */
  createBy: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   租户id
   */
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface AssembleEquipmentAddDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
}

export interface AssembleEquipmentUpdateDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
}

export interface AssembleEquipmentVO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   组织id
   */
  companyInfoId: string
  /**
   * @description
   *   创建人id
   */
  createBy: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   租户id
   */
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface AssembleInspecteAddDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
}

export interface AssembleInspecteUpdateDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
}

export interface AssembleInspecteVO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   组织id
   */
  companyInfoId: string
  /**
   * @description
   *   创建人id
   */
  createBy: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   租户id
   */
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface AssembleOperationAddDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
}

export interface AssembleOperationUpdateDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
}

export interface AssembleOperationVO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   组织id
   */
  companyInfoId: string
  /**
   * @description
   *   创建人id
   */
  createBy: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   租户id
   */
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface AssemblePlanAddDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
}

export interface AssemblePlanUpdateDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
}

export interface AssemblePlanVO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   组织id
   */
  companyInfoId: string
  /**
   * @description
   *   创建人id
   */
  createBy: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   偏差描述
   */
  deviationDescription: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   改进措施
   */
  improvementMeasures: string
  /**
   * @description
   *   租户id
   */
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface AtUser {
  dingtalkId: string
  staffId: string
}

export interface AuthPerm {
  /**
   * @description
   *   资源权限所属appId
   */
  appId: string
  /**
   * @description
   *   资源一对一的权限
   */
  authId: string
  /**
   * @description
   *   功能包编码集合
   */
  productIds: Array<string>
  /**
   * @description
   *   资源编码
   */
  resId: string
}

export interface AuthRequest {
  appId: string
  entrustedTenantId: string
  grantCode: string
  rememberMe: boolean
  tenantId: string
}

/**
 * @description
 *   用户token相关信息
 */
export interface AuthRequestPass {
  /**
   * @description
   *   请求头信息
   */
  headerInfo: HeaderInfo
  /**
   * @description
   *   请求方法
   */
  requestMethod: string
  /**
   * @description
   *   接口路径
   */
  requestURI: string
  /**
   * @description
   *   用户关于url拦截的配置
   */
  ticketConfig: TicketConfig
}

export interface AuthRequestPassResult {
  headerInfo: HeaderInfo
  /**
   * @description
   *   鉴权消息
   */
  msg: string
  /**
   * @description
   *   鉴权是否通过
   */
  pass: boolean
  safetyUserInfo: SafetyUserInfo
}

export interface BaseIndoorQueryDto {
  /**
   * @description
   *   八位实体编码
   */
  orgCode: string
  /**
   * @description
   *   状态：1待处置 4处理中 5已完成
   * @format int32
   */
  statusCode: number
}

/**
 * @description
 *   公司具体指标
 */
export interface BaseKpiCompanyVO {
  /**
   * @description
   *   公司编码
   */
  compCode: string
  /**
   * @description
   *   公司名称
   */
  compName: string
  /**
   * @description
   *   指标时间
   */
  dateTime: string
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   单位
   */
  unit: string
}

export interface BaseRoleSaveDTO {
  /**
   * @description
   *   角色分类编码
   */
  categoryCode: string
  /**
   * @description
   *   角色分类名称
   */
  categoryName: string
  /**
   * @description
   *   角色编码前缀
   */
  roleCodePrefix: string
  /**
   * @description
   *   角色编码后缀
   */
  roleCodeSuffix: string
  /**
   * @description
   *   角色类型编码
   */
  roleTypeCode: string
  /**
   * @description
   *   角色类型名称
   */
  roleTypeName: string
}

export interface BaseRoleVO {
  /**
   * @description
   *   角色分类编码
   */
  categoryCode: string
  /**
   * @description
   *   角色分类名称
   */
  categoryName: string
  /**
   * @description
   *   角色编码前缀
   */
  roleCodePrefix: string
  /**
   * @description
   *   角色编码后缀
   */
  roleCodeSuffix: string
  /**
   * @description
   *   角色类型编码
   */
  roleTypeCode: string
  /**
   * @description
   *   角色类型名称
   */
  roleTypeName: string
}

/**
 * @description
 *   基础指标类
 */
export interface BaseVO {
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   单位
   */
  unit: string
}

export interface BodyData {
  contents: Array<DataContent>
  eventId: string
  orgCode: string
}

export interface CameraOnlineDetailVO {
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   列表数据
   */
  list: Array<ProjectCameraOnlineDTO>
  /**
   * @description
   *   近 7 天风险态势
   */
  riskTrend: Array<CameraOnlineTrendDTO>
  /**
   * @description
   *   标题
   */
  title: string
}

/**
 * @description
 *   球机在线趋势
 */
export interface CameraOnlineTrendDTO {
  /**
   * @description
   *   数量
   * @format int32
   * @example
   *   1
   */
  count: number
  /**
   * @description
   *   日期
   * @example
   *   116.4074
   */
  date: string
  /**
   * @description
   *   对比昨日增长率
   * @format double
   * @example
   *   39.9042
   */
  growthRate: number
}

export interface CancelCertificateInfo {
  /**
   * @description
   *   证件编码
   */
  certificateCode: string
  /**
   * @description
   *   证件类型
   */
  certificateTypeName: string
  /**
   * @description
   *   是否超期：0-临期证件；1-超期证件
   * @format int32
   */
  isOverdue: number
  /**
   * @description
   *   销项时间
   * @format date-time
   */
  lastModifiedTime: string
  /**
   * @description
   *   电话
   */
  mobile: string
  /**
   * @description
   *   是否超期：临期证件；超期证件
   */
  overDueLabel: string
  /**
   * @description
   *   姓名
   */
  workerName: string
  /**
   * @description
   *   自建/分包标签：自建、分包
   */
  workerRoleTypeLabel: string
}

export interface CancelInsuranceRiskInfo {
  /**
   * @description
   *   销项时间
   * @format date-time
   */
  lastModifiedTime: string
  /**
   * @description
   *   电话
   */
  mobile: string
  /**
   * @description
   *   姓名
   */
  workerName: string
}

export interface CancelUnPhysicalInfo {
  /**
   * @description
   *   分包单位名称
   */
  labourEnterpriseName: string
  /**
   * @description
   *   销项时间
   * @format date-time
   */
  lastModifiedTime: string
  /**
   * @description
   *   电话
   */
  mobile: string
  /**
   * @description
   *   姓名
   */
  workerName: string
  /**
   * @description
   *   自建/分包标签：自建、分包
   */
  workerRoleTypeLabel: string
}

export interface CategoryKpiSourceVO {
  /**
   * @description
   *   指标总数
   * @format int32
   */
  allNum: number
  /**
   * @description
   *   业务系统数量
   * @format int32
   */
  businessNum: number
  /**
   * @description
   *   业务系统百分比
   */
  businessPercent: string
  /**
   * @description
   *   物联数量
   * @format int32
   */
  iotNum: number
  /**
   * @description
   *   物联百分比
   */
  iotPercent: string
  /**
   * @description
   *   手工填报数量
   * @format int32
   */
  manualNum: number
  /**
   * @description
   *   手工填报百分比
   */
  manualPercent: string
}

export interface CategoryKpiVO {
  /**
   * @description
   *   业务分类编码
   */
  bizCategoryCode: string
  /**
   * @description
   *   业务分类名称
   */
  bizCategoryName: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   关键事项编码
   */
  mattersCode: string
  /**
   * @description
   *   关键事项名称
   */
  mattersName: string
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
  /**
   * @description
   *   衡量指标名称
   */
  measurableName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

export interface CertificateInfo {
  /**
   * @description
   *   年龄
   * @format int32
   */
  age: number
  /**
   * @description
   *   证件编码
   */
  certificateCode: string
  /**
   * @description
   *   证件类型
   */
  certificateTypeName: string
  /**
   * @description
   *   证件有效期-截止日期
   * @format date-time
   */
  certificateValidityEnd: string
  /**
   * @description
   *   证件有效期-起始日期
   * @format date-time
   */
  certificateValidityStart: string
  /**
   * @description
   *   是否超期：0-临期；1-超期
   * @format int32
   */
  isOverdue: number
  /**
   * @description
   *   电话
   */
  mobile: string
  /**
   * @description
   *   新增标签
   */
  newAddLabel: string
  /**
   * @description
   *   超期/临期天数中文描述
   */
  relativeDaysStr: string
  /**
   * @description
   *   应复审日期
   * @format date-time
   */
  shouldReviewDate: string
  /**
   * @description
   *   所属班组
   */
  teamName: string
  /**
   * @description
   *   升级标签
   */
  upLevelLabel: string
  /**
   * @description
   *   姓名
   */
  workerName: string
  /**
   * @description
   *   自建/分包标签：自建、分包
   */
  workerRoleTypeLabel: string
}

export interface ChangeBusinessUserDTO {
  /**
   * @description
   *   业务负责人姓名
   */
  businessRealName: string
  /**
   * @description
   *   业务负责人工号
   */
  businessUserNo: string
  /**
   * @description
   *   业务负责人手机号
   */
  businessUserPhone: string
  /**
   * @description
   *   token
   */
  token: string
  /**
   * @description
   *   示险隐患id
   */
  troubleId: string
}

export interface ChangeHolderDTO {
  /**
   * @description
   *   发起人工号
   */
  operatorNo: string
  /**
   * @description
   *   发起人手机号
   */
  operatorPhone: string
  /**
   * @description
   *   发起人姓名
   */
  operatorRealName: string
  /**
   * @description
   *   发起人域账号
   */
  operatorUserName: string
  /**
   * @description
   *   整改期限
   * @format date-time
   */
  rectificationEndTime: string
  /**
   * @description
   *   整改人姓名
   */
  rectifyRealName: string
  /**
   * @description
   *   整改人域账号
   */
  rectifyUserName: string
  /**
   * @description
   *   整改人工号
   */
  rectifyUserNo: string
  /**
   * @description
   *   整改人手机号
   */
  rectifyUserPhone: string
  /**
   * @description
   *   token
   */
  token: string
  /**
   * @description
   *   示险隐患id
   */
  troubleId: string
}

export interface ChatHistoryVO {
  content: string
  /** @format date-time */
  createTime: string
  recordOwner: string
}

/**
 * @description
 *   聊天分页参数
 */
export interface ChatPageQuery {
  /**
   * @description
   *   页码不能为空
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   每页记录数
   * @format int32
   */
  pageSize: number
}

export interface ChatVO {
  content: string
}

/**
 * @description
 *   数据采集单
 */
export interface CollectInfo {
  /**
   * @description
   *   采集状态：1、待复核 2、已复核
   * @format int32
   */
  assembleCollectStatus: number
  /** @format date-time */
  collectTime: string
  collectUser: string
  companyInfoId: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体名称
   */
  cpmoCopTxt: string
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   数据采集内容
   */
  dataCollectContent: string
  /** @format int32 */
  deleteFlag: number
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   图片、视频、音频
   */
  fileDTOList: Array<FileDTO>
  /** @format int64 */
  id: number
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

/**
 * @description
 *   数据采集单采集保存组件
 */
export interface CollectTaskCheckSaveAssemble {
  /**
   * @description
   *   任务状态：0-正常，1-异常
   * @format int32
   */
  assembleCollectStatus: number
  /**
   * @description
   *   组件ID
   * @format int64
   */
  assembleId: number
  /**
   * @description
   *   组件顺序
   * @format int32
   */
  assembleSort: number
  /**
   * @description
   *   采集信息
   */
  collectInfo: CollectInfo
  /**
   * @description
   *   组件清单id
   * @format int64
   */
  collectTaskListId: number
}

/**
 * @description
 *   数据采集单采集保存组件类型列表
 */
export interface CollectTaskCheckSaveAssembleTypeList {
  /**
   * @description
   *   组件类型：1-设备设施类，2-人员操作类，3-综合排查，4-计划偏差，5-环境变化类，6-危险作业类，7-迎检类
   * @format int32
   */
  assembleType: number
  /**
   * @description
   *   采集相关组件
   */
  collectTaskCheckSaveAssembles: Array<CollectTaskCheckSaveAssemble>
}

/**
 * @description
 *   数据采集单采集保存入参
 */
export interface CollectTaskCheckSaveReqDTO {
  /**
   * @description
   *   采集单名称
   */
  collectName: string
  /**
   * @description
   *   保存组件类型
   */
  collectTaskCheckSaveAssembleTypeList: Array<CollectTaskCheckSaveAssembleTypeList>
  /**
   * @description
   *   数据采集单id
   * @format int64
   */
  collectTaskId: number
  /**
   * @description
   *   班组id
   */
  teamId: string
  /**
   * @description
   *   班组长
   */
  teamLeader: string
  /**
   * @description
   *   班组名称
   */
  teamName: string
}

/**
 * @description
 *   数据采集单采集保存响应
 */
export interface CollectTaskCheckSaveVO {
  /**
   * @description
   *   数据采集单id
   * @format int64
   */
  collectTaskId: number
}

export interface CollectTaskDetailListVO {
  /**
   * @description
   *   清单列表
   */
  assembleList: Array<AssembleCollect>
  /**
   * @description
   *   数据采集单id
   * @format int64
   */
  dataCollectId: number
}

export interface CollectTaskIdReqDTO {
  /**
   * @description
   *   数据采集单id
   * @format int64
   */
  dataCollectId: number
}

/**
 * @description
 *   数据采集任务状态更新入参
 */
export interface CollectTaskStatusUpdateReqDto {
  /**
   * @description
   *   排查情况：1-未全部采集；2-已全部采集
   * @format int32
   */
  allCollectFlag: number
  /**
   * @description
   *   任务状态：1-待采集；2-采集中；3-采集完成
   * @format int32
   */
  collectStatus: number
  /**
   * @description
   *   数据采集任务id
   * @format int64
   */
  id: number
}

export interface CollectTaskSummaryVO {
  /**
   * @description
   *   采集责任人
   */
  checkUser: string
  /**
   * @description
   *   数据采集单名称
   */
  dataCollectName: string
  /**
   * @description
   *   数据采集单id
   * @format int64
   */
  dataCollectTaskId: number
  /**
   * @description
   *   计划采集时间
   * @format date-time
   */
  planCollectTime: string
  /**
   * @description
   *   任务编号
   */
  taskCode: string
  /**
   * @description
   *   任务状态：1-待采集；2-采集中；3-采集完成
   * @format int32
   */
  taskStatus: number
  /**
   * @description
   *   点位责任班组id
   */
  teamId: string
  /**
   * @description
   *   班组长
   */
  teamLeader: string
  /**
   * @description
   *   班组长id
   */
  teamLeaderIds: string
  /**
   * @description
   *   点位责任班组名称
   */
  teamName: string
  /**
   * @description
   *   实际采集时间
   * @format date-time
   */
  updateTime: string
}

export interface CommitRectificationDTO {
  /**
   * @description
   *   整改责任人
   */
  holder: string
  /**
   * @description
   *   整改责任人员工编号
   */
  holderCode: string
  /**
   * @description
   *   整改责任人手机号
   */
  holderPhone: string
  /**
   * @description
   *   整改图片，多张用逗号分开
   */
  pictures: string
  /**
   * @description
   *   整改措施
   */
  rectificationMethod: string
  /**
   * @description
   *   整改说明
   */
  rectifyDesc: string
  /**
   * @description
   *   token
   */
  token: string
  /**
   * @description
   *   示险隐患id
   */
  troubleId: string
}

/**
 * @description
 *   排名信息
 */
export interface CompanyKpiRank {
  /**
   * @description
   *   区域编码
   */
  areaId: string
  /**
   * @description
   *   区域名称
   */
  areaName: string
  /**
   * @description
   *   计算时间
   */
  calTime: string
  /**
   * @description
   *   控股公司编码
   */
  holdingId: string
  /**
   * @description
   *   区域名称
   */
  holdingName: string
  /** @format int64 */
  id: number
  /**
   * @description
   *   公司id
   */
  orgId: string
  /**
   * @description
   *   公司名称
   */
  orgName: string
  /**
   * @description
   *   得分
   */
  rankScore: string
  /**
   * @description
   *   名次
   */
  rankSort: string
  /**
   * @description
   *   参与排名的总数
   */
  rankTotal: string
  /**
   * @description
   *   排名类型
   */
  rankType: string
  /**
   * @description
   *   排名类型名称
   */
  rankTypeName: string
  /**
   * @description
   *   分数趋势类型
   */
  scoreTrendType: string
  /**
   * @description
   *   分数变化量
   */
  scoreTrendValue: string
  /**
   * @description
   *   排名趋势类型
   */
  sortTrendType: string
  /**
   * @description
   *   排名变化量
   */
  sortTrendValue: string
}

export interface ConstructionScheduleTodayDetailVO {
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   日期
   */
  date: string
  /**
   * @description
   *   卡片说明
   */
  indexSummary: string
  /**
   * @description
   *   风险辨识
   */
  matterDetail: Array<DetailInfo>
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   项目部编码
   */
  orgCode: string
  /**
   * @description
   *   项目部名称
   */
  orgName: string
}

export interface ConstructionScheduleVO {
  /**
   * @description
   *   标签
   */
  label: string
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   风险升级、降级状态：0-不变；1-升级；2-降级；3-新增
   * @format int32
   */
  matterLevelStatus: number
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   工程个数
   * @format int32
   */
  value: number
}

export interface DangerCompanySituationDataVO {
  /**
   * @description
   *   隐患未整改数
   */
  dangerNoImprovedNumber: string
  /**
   * @description
   *   横坐标
   */
  date: string
}

export interface DangerCompanySituationVO {
  /**
   * @description
   *   公司code
   */
  companyCode: string
  /**
   * @description
   *   公司名称
   */
  companyName: string
  /**
   * @description
   *   折线图数据集合
   */
  dangerCompanySituationDataVOList: Array<DangerCompanySituationDataVO>
}

export interface DangerIdentificationListVO {
  /**
   * @description
   *   公司code
   */
  companyCode: string
  /**
   * @description
   *   公司名称
   */
  companyName: string
  /**
   * @description
   *   直排式热水器指标code
   */
  directDischargeWaterCode: string
  /**
   * @description
   *   直排式热水器指标Name
   */
  directDischargeWaterName: string
  /**
   * @description
   *   直排式热水器指标值
   */
  directDischargeWaterValue: string
  /**
   * @description
   *   直排式热水器指标值单位
   */
  directDischargeWaterValueUnit: string
  /**
   * @description
   *   无熄火数据指标code
   */
  noFlameoutStoveCode: string
  /**
   * @description
   *   无熄火指标name
   */
  noFlameoutStoveName: string
  /**
   * @description
   *   无熄火指标值
   */
  noFlameoutStoveValue: string
  /**
   * @description
   *   无熄火指标值
   */
  noFlameoutStoveValueUnit: string
  /**
   * @description
   *   橡胶软管指标code
   */
  rubberHoseCode: string
  /**
   * @description
   *   橡胶软管指标name
   */
  rubberHoseName: string
  /**
   * @description
   *   橡胶软管指标value
   */
  rubberHoseValue: string
  /**
   * @description
   *   橡胶软管指标value 单位
   */
  rubberHoseValueUnit: string
}

export interface DangerImproveDetailListVO {
  /**
   * @description
   *   公司code
   */
  companyCode: string
  /**
   * @description
   *   公司名称
   */
  companyName: string
  /**
   * @description
   *   隐患整改率
   */
  dangerImproveRate: string
  /**
   * @description
   *   隐患整改率单位
   */
  dangerImproveRateUnit: string
  /**
   * @description
   *   隐患数量
   */
  dangerNumber: string
  /**
   * @description
   *   隐患数量单位
   */
  dangerNumberUnit: string
}

/**
 * @description
 *   隐患整改详情vo
 */
export interface DangerImproveDetailVO {
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   单位
   */
  unit: string
}

/**
 * @description
 *   隐患整改首页vo
 */
export interface DangerImproveHomePageVO {
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   单位
   */
  unit: string
}

/**
 * @description
 *   隐患整改率详情-隐患级别vo
 */
export interface DangerLevelDetailVO {
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   单位
   */
  unit: string
}

/**
 * @description
 *   告警人员信息出参对象
 */
export interface DangerPersonnelInfoVO {
  /**
   * @description
   *   电话
   */
  phone: string
  /**
   * @description
   *   真是姓名
   */
  realName: string
  /**
   * @description
   *   用户名
   */
  userName: string
}

/**
 * @description
 *   隐患整改率详情-隐患类型vo
 */
export interface DangerTypeDetailVO {
  /**
   * @description
   *   各公司
   */
  dangerCompanySituationVOList: Array<DangerCompanySituationVO>
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   单位
   */
  unit: string
}

/**
 * @description
 *   危险作业不合格记录参数
 */
export interface DangerWorkDetailUnqualifiedQuery {
  /**
   * @description
   *   页码不能为空
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   每页记录数
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   工程工单编码
   */
  woCode: string
}

/**
 * @description
 *   危险作业详情信息统计
 */
export interface DangerWorkDetailsVO {
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   进行中列表
   */
  doingList: Array<DangerWorkListVO>
  /**
   * @description
   *   已完成列表
   */
  finishedList: Array<DangerWorkListVO>
  /**
   * @description
   *   待完成列表
   */
  todoList: Array<DangerWorkListVO>
  /**
   * @description
   *   作业总数
   * @format int32
   */
  totalCount: number
}

/**
 * @description
 *   危险作业列表出参对象
 */
export interface DangerWorkListVO {
  /**
   * @description
   *   地址
   */
  address: string
  /**
   * @description
   *   相机编码
   */
  cameraCodes: Array<string>
  /**
   * @description
   *   联系人数组
   */
  dangerPersonnelInformationDTOS: Array<DangerPersonnelInfoVO>
  /**
   * @description
   *   作业类型
   */
  dangerWorkType: string
  /**
   * @description
   *   作业名称
   */
  engineeringName: string
  /**
   * @description
   *   id
   */
  id: string
  /**
   * @description
   *   事件纬度
   * @format double
   */
  latitude: number
  /**
   * @description
   *   事件经度
   * @format double
   */
  longitude: number
  /**
   * @description
   *   实际结束时间
   * @format date-time
   */
  pjActualEtime: string
  /**
   * @description
   *   实际开始时间
   * @format date-time
   */
  pjActualStime: string
  /**
   * @description
   *   预计结束时间
   * @format date-time
   */
  pjPlanEtime: string
  /**
   * @description
   *   预计开始时间
   * @format date-time
   */
  pjPlanStime: string
  /**
   * @description
   *   问题描述
   */
  smartGuardianDesc: string
  /**
   * @description
   *   状态
   */
  statusDesc: string
  /**
   * @description
   *   任务等级
   */
  taskLevel: string
  /**
   * @description
   *   问题列表
   */
  unqualifieds: Array<DangerWorkProblemRecordVO>
  /**
   * @description
   *   工单号
   */
  woCode: string
  workStatus: string
}

/**
 * @description
 *   危险作业-问题记录
 */
export interface DangerWorkProblemRecordVO {
  /**
   * @description
   *   记录时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   危险作业类型
   */
  dangerTypeCode: string
  /**
   * @description
   *   设备类型
   */
  deviceType: string
  /**
   * @description
   *   处置人
   */
  disposal: string
  /**
   * @description
   *   处置结果
   */
  disposalResults: string
  /**
   * @description
   *   处置时间
   * @format date-time
   */
  disposalTime: string
  /**
   * @description
   *   是否误报：0，否；1，是
   * @format int32
   */
  misinformation: number
  /**
   * @description
   *   记录人姓名
   */
  operatorName: string
  /**
   * @description
   *   图片地址，多个用逗号隔开
   */
  pictureUrl: string
  /**
   * @description
   *   问题类型
   */
  problem: string
  /**
   * @description
   *   问题来源
   */
  problemSource: string
  /**
   * @description
   *   问题描述
   */
  remark: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   工单编号
   */
  woCode: string
}

export interface DangerWorkTodayDetailVO {
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   日期
   */
  date: string
  /**
   * @description
   *   今日重点数据id
   * @format int64
   */
  focusId: number
  /**
   * @description
   *   卡片说明
   */
  indexSummary: string
  /**
   * @description
   *   危险作业详情
   */
  matterDetail: ProjectMatterDetailDangerWorkDTO
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   项目部编码
   */
  orgCode: string
  /**
   * @description
   *   项目部名称
   */
  orgName: string
  /**
   * @description
   *   近七日统计数据
   */
  staData: Array<StaData>
}

/**
 * @description
 *   危险作业各类型数量
 */
export interface DangerWorkTypeNumVO {
  /**
   * @description
   *   基坑作业
   * @format int32
   */
  excavationOperation: number
  /**
   * @description
   *   高处作业
   * @format int32
   */
  heightOperation: number
  /**
   * @description
   *   吊装作业
   * @format int32
   */
  liftingOperation: number
}

/**
 * @description
 *   危险作业出参
 */
export interface DangerWorkVO {
  /**
   * @description
   *   进行中数量
   * @format int32
   */
  currentOngoingOperations: number
  /**
   * @description
   *   日期
   */
  date: string
  /**
   * @description
   *   工程数量
   * @format int32
   */
  engineeringSites: number
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   智能监管数量（0：则代表无违规作业）
   * @format int32
   */
  intelligentSupervisionCount: number
  /**
   * @description
   *   管网数量
   * @format int32
   */
  pipelineSites: number
  /**
   * @description
   *   坐标信息
   */
  positions: Array<JSONObject>
  /**
   * @description
   *   危险作业总数
   * @format int32
   */
  totalDangerousOperations: number
}

/**
 * @description
 *   数据采集复核入参
 */
export interface DataCollectReviewReqDto {
  /**
   * @description
   *   采集工单id
   */
  collectId: string
  companyInfoId: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体名称
   */
  cpmoCopTxt: string
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   数据采集单id
   * @format int64
   */
  dataCollectId: number
  /**
   * @description
   *   组件清单id
   * @format int64
   */
  dataCollectTaskListId: number
  /** @format int32 */
  deleteFlag: number
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   图片、视频、音频
   */
  fileDTOList: Array<FileDTO>
  /** @format int64 */
  id: number
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   1:上报 2：不上报
   * @format int32
   */
  reportFirst: number
  /**
   * @description
   *   复核内容
   */
  reviewContent: string
  /**
   * @description
   *   复核次数：1-班组长审核；2-QHSE角色审核
   * @format int32
   */
  reviewOrder: number
  /**
   * @description
   *   1、通过 2、不通过
   * @format int32
   */
  reviewResult: number
  /**
   * @description
   *   示险对象
   */
  showRiskObject: string
  /**
   * @description
   *   示险对象itCode
   */
  showRiskObjectId: string
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

export interface DataCollectTaskListQueryDTO {
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   数据采集单名称
   */
  dataCollectName: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   排查结束时间
   */
  endTime: string
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   上报一号位：1-上报；2-不上报
   * @format int32
   */
  reportFirst: number
  /**
   * @description
   *   排查开始时间
   */
  startTime: string
  /**
   * @description
   *   任务编号
   */
  taskCode: string
  /**
   * @description
   *   任务状态：1-待采集，2-采集中，3-采集完成
   */
  taskStatusList: Array<number>
  /**
   * @description
   *   责任班组id列表
   */
  teamIdList: Array<string>
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface DataCollectTaskListVO {
  /**
   * @description
   *   采集情况：1-未全部采集；2-已全采集
   * @format int32
   */
  allCollectFlag: number
  /**
   * @description
   *   责任人
   */
  checkUser: string
  /**
   * @description
   *   数据采集单名称
   */
  dataCollectName: string
  /**
   * @description
   *   数据采集单id
   * @format int64
   */
  dataCollectTaskId: number
  /**
   * @description
   *   计划采集时间
   */
  planCollectTime: string
  /**
   * @description
   *   上报一号位：1-上报；2-不上报
   * @format int32
   */
  reportFirst: number
  /**
   * @description
   *   复核人
   */
  reviewUser: string
  /**
   * @description
   *   示险对象
   */
  showRiskObject: string
  /**
   * @description
   *   任务编号
   */
  taskCode: string
  /**
   * @description
   *   任务状态：1-待采集；2-采集中；3-采集完成
   * @format int32
   */
  taskStatus: number
  /**
   * @description
   *   点位责任班组id
   */
  teamId: string
  /**
   * @description
   *   点位责任班组名称
   */
  teamName: string
}

export interface DataContent {
  content: string
  contentType: string
  eventType: string
}

export interface DeptInfoVO {
  /**
   * @description
   *   组织名称 path
   */
  deptPath: string
  /**
   * @description
   *   部门类型（0：主职，1：兼职）
   */
  deptType: string
  id: string
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   组织code path
   */
  orgPath: string
  orgType: string
  staffId: string
  stationId: string
  /**
   * @description
   *   岗位
   */
  stationName: string
  tenantId: string
  useBasicUnit: string
}

export interface DetailInfo {
  /**
   * @description
   *   偏远标签
   */
  backcountryTagLabel: string
  /**
   * @description
   *   摄像头信息
   */
  cameraCodes: string
  /**
   * @description
   *   承建单位名称
   */
  companyName: string
  /**
   * @description
   *   施工内容
   */
  constructionContent: string
  /**
   * @description
   *   施工人数
   * @format int32
   */
  constructionNum: number
  /**
   * @description
   *   改造标签
   */
  makeoverTagLabel: string
  /**
   * @description
   *   项目名称
   */
  projectName: string
  /**
   * @description
   *   项目类型
   */
  projectTypeName: string
  /**
   * @description
   *   负责人
   */
  responsiblePerson: string
}

/**
 * @description
 *   设备告警列表出参对象
 */
export interface DeviceAlarmListVO {
  /**
   * @description
   *   主表告警标题，如：流量计温度告警
   */
  alarmContent: string
  /**
   * @description
   *   告警内容
   */
  alarmDesc: string
  /**
   * @description
   *   告警设备指标主键id(主表，设备指标)
   */
  alarmId: string
  /**
   * @description
   *    规则类型：1-单设备单条件告警；2-单设备多条件告警；3-多设备（主从设备）告警
   * @format int32
   */
  alarmInfoType: number
  /**
   * @description
   *   告警消息主键id(子表，消息表)
   * @format int64
   */
  alarmMsgId: number
  /**
   * @description
   *   报警值范围
   */
  alarmRange: string
  /**
   * @description
   *   告警原因
   */
  alarmReason: string
  /**
   * @description
   *   报警规则ID
   * @format int64
   */
  alarmRuleId: number
  /**
   * @description
   *   报警状态,1：告警2：结束'
   * @format int32
   */
  alarmState: number
  /**
   * @description
   *   主表告警时间
   * @format date-time
   */
  alarmTime: string
  /**
   * @description
   *   告警类型编码
   */
  alarmTypeCode: string
  /**
   * @description
   *   评价
   */
  appraise: string
  /** @format int32 */
  areaType: number
  /**
   * @description
   *   自动处置结束时间
   * @format date-time
   */
  autoDisposalEndTime: string
  /**
   * @description
   *   自动处置开始时间
   * @format date-time
   */
  autoDisposalStartTime: string
  /** @format int32 */
  autoNode: number
  /**
   * @description
   *   是否开启自动派单标识(0未开启 1开启)
   * @format int32
   */
  autoStatus: number
  /**
   * @description
   *   区域负责人itcode
   */
  chargePersonItcode: string
  /**
   * @description
   *   区域负责人姓名
   */
  chargePersonName: string
  /**
   * @description
   *   区域负责人电话
   */
  chargePersonPhone: string
  /**
   * @description
   *   设备分类id
   * @format int64
   */
  clsGid: number
  /**
   * @description
   *   设备分类名称
   */
  clsName: string
  /**
   * @description
   *   企业编码
   */
  companyCode: string
  /**
   * @description
   *   企业名称
   */
  companyName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   工商户名称
   */
  customName: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   物联业务域
   */
  dataTopic: string
  /**
   * @description
   *   处置中时间
   * @format date-time
   */
  dispatchWorkTime: string
  /**
   * @description
   *   设备编码
   */
  eqCode: string
  /**
   * @description
   *   设备id
   * @format int64
   */
  eqGid: number
  /**
   * @description
   *   设备名称
   */
  eqName: string
  /**
   * @description
   *   资产编码,用于工作台查物联数据曲线
   */
  erpCode: string
  /** @format int32 */
  errFlag: number
  /**
   * @description
   *   主表评论
   */
  evaluation: string
  exceptionCode: string
  exceptionType: string
  /**
   * @description
   *   反馈人itcode
   */
  feedbackItcode: string
  /**
   * @description
   *   反馈人名
   */
  feedbackName: string
  /**
   * @description
   *   反馈人电话
   */
  feedbackPhone: string
  /**
   * @description
   *   反馈时间
   * @format date-time
   */
  feedbackTime: string
  /**
   * @description
   *   最后反馈时间
   * @format date-time
   */
  finalFeedbackTime: string
  /**
   * @description
   *   最后反馈类型
   * @format int32
   */
  finalFeedbackType: number
  /**
   * @description
   *   完成反馈时间
   * @format date-time
   */
  finishFeedbackTime: string
  /**
   * @description
   *   首次告警时间
   * @format date-time
   */
  firstAlarmTime: string
  /**
   * @description
   *   处置结果描述
   */
  handleResult: string
  /**
   * @description
   *   处置状态: 0待处置 1处置中 2已完成
   * @format int32
   */
  handleStatus: number
  /**
   * @description
   *   处置状态: 0待处置 1处置中 2已完成
   */
  handleStatusName: string
  /**
   * @description
   *   处理人itcode
   */
  handleUserItcode: string
  /**
   * @description
   *   处理人姓名
   */
  handleUserName: string
  /**
   * @description
   *   处理人电话
   */
  handleUserPhone: string
  /** @format int64 */
  handlerUserId: number
  /** @format int64 */
  id: number
  /**
   * @description
   *   是否是手动处置（1：是）
   * @format int32
   */
  isAutoDisposal: number
  /**
   * @description
   *   是否标准
   */
  isNormal: string
  /**
   * @description
   *   精度（x坐标）
   */
  latitude: number
  /** @format int32 */
  level: number
  /**
   * @description
   *   阈值上线
   */
  limitMaxValue: string
  /**
   * @description
   *   阈值下线
   */
  limitMinValue: string
  locCode: string
  localePics: string
  /**
   * @description
   *   纬度（y坐标）
   */
  longitude: number
  /**
   * @description
   *   维保数据
   */
  maintenance: string
  /**
   * @description
   *   指标名称
   */
  metricName: string
  /**
   * @description
   *   指标全路径
   */
  metricTargetPath: string
  /**
   * @description
   *   量测集合
   */
  metrics: string
  /**
   * @description
   *   比较运算符
   */
  oper: string
  /**
   * @description
   *   组织code
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   告警其他原因
   */
  otherCause: string
  /**
   * @description
   *   告警图片
   */
  photo: string
  /**
   * @description
   *   位置描述
   */
  posDesc: string
  /**
   * @description
   *   位置id
   */
  posId: string
  /**
   * @description
   *   位置名称
   */
  posName: string
  /**
   * @description
   *   原因
   */
  reason: string
  /**
   * @description
   *   解除时间
   * @format date-time
   */
  releaseTime: string
  /**
   * @description
   *   解除方式；1：工作台解除，2：业务系统解除
   * @format int32
   */
  resolveWay: number
  /**
   * @description
   *   告警根本原因
   */
  rootCause: string
  /**
   * @description
   *   3:iot告警；7:烟台外部告警；8:ai告警, 11:三方施工上报待确认告警
   * @format int32
   */
  sourceCode: number
  /**
   * @description
   *   所属站点id
   */
  stationId: string
  /**
   * @description
   *   所属站点名称
   */
  stationName: string
  /**
   * @description
   *   主表处置状态编码
   */
  statusCode: string
  /**
   * @description
   *   电话号
   */
  telephone: string
  /**
   * @description
   *   超时违规内容
   */
  timeoutMsg: string
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   物联指标单位
   */
  unit: string
  /**
   * @description
   *   修改时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   报警规则(阈值)
   */
  value: string
  /**
   * @description
   *   物联设备id
   */
  wlEqId: string
  /**
   * @description
   *   物联设备名称
   */
  wlEqName: string
  /**
   * @description
   *   物联设备类型
   */
  wlEqType: string
  /**
   * @description
   *   物联站点id
   */
  wlStationId: string
  /**
   * @description
   *   关单评价；(false)0：待评价，(true)1：已评价
   */
  woCloseEvaluation: boolean
  /**
   * @description
   *   发单状态
   * @format int32
   */
  woStatus: number
  /**
   * @description
   *   能否发起工单；1：不能
   * @format int32
   */
  workOrder: number
}

/**
 * @description
 *   设备风险趋势
 */
export interface DeviceRiskTrendDTO {
  /**
   * @description
   *   数量
   * @format int32
   * @example
   *   北京市朝阳区
   */
  count: number
  /**
   * @description
   *   日期
   * @example
   *   116.4074
   */
  date: string
  /**
   * @description
   *   对比昨日增长率
   * @format double
   * @example
   *   39.9042
   */
  growthRate: number
}

export interface DeviceSafeDetailVO {
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   列表数据
   */
  list: Array<ProjectDeviceRiskVO>
  /**
   * @description
   *   近 7 天风险态势
   */
  riskTrend: Array<DeviceRiskTrendDTO>
  /**
   * @description
   *   标题
   */
  title: string
}

export interface DeviceSafeVO {
  /**
   * @description
   *   标签
   */
  label: string
  /**
   * @description
   *   事项级别
   */
  matterLevel: string
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   数据值
   */
  value: string
}

export interface Diagnosis {
  /**
   * @description
   *   安全风险评估明细
   */
  kpiMatterList: Array<KpiMatter>
  /**
   * @description
   *   短板与问题分析
   */
  problemDiagnoses: Array<ProblemDiagnosis>
}

export interface DictAddBatchDTO {
  /**
   * @description
   *   字典列表
   */
  list: Array<DictAddDTO>
}

/**
 * @description
 *   新增字典编码条目
 */
export interface DictAddDTO {
  /**
   * @description
   *   字典编码
   */
  code: string
  /**
   * @description
   *   字典名称
   */
  name: string
  /**
   * @description
   *   父节点id
   */
  parentId: string
  /**
   * @description
   *   字典备注
   */
  remark: string
  /**
   * @description
   *   排序码
   * @format int32
   */
  sort: number
}

/**
 * @description
 *   新增字典子项编码条目
 */
export interface DictItemAddDTO {
  /**
   * @description
   *   字典编码
   */
  dicCode: string
  /**
   * @description
   *   字典id
   */
  dicId: string
  /**
   * @description
   *   字典项
   */
  itemName: string
  /**
   * @description
   *   字典项值
   */
  itemValue: string
  /**
   * @description
   *   排序码
   * @format int32
   */
  sort: number
}

export interface DictItemBtachAddDTO {
  /**
   * @description
   *   字典列表
   */
  list: Array<DictItemAddDTO>
}

/**
 * @description
 *   编辑字典子项编码条目
 */
export interface DictItemUpdateDTO {
  /**
   * @description
   *   字典子项id
   */
  dictItemId: string
  /**
   * @description
   *   字典项
   */
  itemName: string
  /**
   * @description
   *   字典项值
   */
  itemValue: string
  /**
   * @description
   *   排序码
   * @format int32
   */
  sort: number
}

/**
 * @description
 *   编辑字典编码条目
 */
export interface DictUpdateDTO {
  /**
   * @description
   *   字典编码
   */
  code: string
  /**
   * @description
   *   字典主键id
   */
  dictId: string
  /**
   * @description
   *   字典名称
   */
  name: string
  /**
   * @description
   *   排序码
   * @format int32
   */
  sort: number
}

export interface DirectorSubImportantAddDTO {
  /**
   * @description
   *   一号位是否可见  0-可见 1-不可见
   */
  director: string
  /**
   * @description
   *   事项类别编码
   */
  matterCategoryCode: string
  /**
   * @description
   *   事项类别名称
   */
  matterCategoryName: string
  /**
   * @description
   *   重点关注主表主键
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   管网召集人是否可见  0-可见 1-不可见
   */
  pipeNetwork: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   业务扩展字段
   */
  subBusinessExp: string
  /**
   * @description
   *   业务id
   */
  subBusinessId: string
  /**
   * @description
   *   业务状态code
   */
  subBusinessStateCode: string
  /**
   * @description
   *   业务状态名称
   */
  subBusinessStateName: string
  /**
   * @description
   *   业务类型
   */
  subBusinessType: string
  /**
   * @description
   *   卡片概述
   */
  subCardSummary: string
  /**
   * @description
   *   事项类型：业务风险类、事故事件类、指标类
   */
  subItemClassification: string
  /**
   * @description
   *   事项进度编码
   */
  subKpiCategoryCode: string
  /**
   * @description
   *   事项进度名称
   */
  subKpiCategoryName: string
  /**
   * @description
   *   事项详情信息
   */
  subMatterDetail: string
  /**
   * @description
   *   事项处置历史
   */
  subMatterHistory: string
  /**
   * @description
   *   程度（红、橙、黄、蓝）
   */
  subMatterLevel: string
  /**
   * @description
   *   事项进度编码
   */
  subMatterStateCode: string
  /**
   * @description
   *   事项进度名称
   */
  subMatterStateName: string
  /**
   * @description
   *   指标事项出现在重点关注的时间
   * @format date-time
   */
  subMatterStateTime: string
  /**
   * @description
   *   事项时间
   * @format date-time
   */
  subMatterTime: string
  /**
   * @description
   *   子公司四位编码
   */
  subOrgCode: string
  /**
   * @description
   *   子公司名称
   */
  subOrgName: string
  /**
   * @description
   *   点位信息
   */
  subPointInformation: string
  /**
   * @description
   *   风险作战
   */
  subRiskCombat: string
  /**
   * @description
   *   智伴文案
   */
  subRobotSummary: string
  /**
   * @description
   *   标题
   */
  subTitle: string
}

export interface DirectorSubImportantUpdateDTO {
  /**
   * @description
   *   一号位是否可见  0-可见 1-不可见
   */
  director: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   事项类别编码
   */
  matterCategoryCode: string
  /**
   * @description
   *   事项类别名称
   */
  matterCategoryName: string
  /**
   * @description
   *   重点关注主表主键
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   管网召集人是否可见  0-可见 1-不可见
   */
  pipeNetwork: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   业务扩展字段
   */
  subBusinessExp: string
  /**
   * @description
   *   业务id
   */
  subBusinessId: string
  /**
   * @description
   *   业务状态code
   */
  subBusinessStateCode: string
  /**
   * @description
   *   业务状态名称
   */
  subBusinessStateName: string
  /**
   * @description
   *   业务类型
   */
  subBusinessType: string
  /**
   * @description
   *   卡片概述
   */
  subCardSummary: string
  /**
   * @description
   *   事项类型：业务风险类、事故事件类、指标类
   */
  subItemClassification: string
  /**
   * @description
   *   事项进度编码
   */
  subKpiCategoryCode: string
  /**
   * @description
   *   事项进度名称
   */
  subKpiCategoryName: string
  /**
   * @description
   *   事项详情信息
   */
  subMatterDetail: string
  /**
   * @description
   *   事项处置历史
   */
  subMatterHistory: string
  /**
   * @description
   *   程度（红、橙、黄、蓝）
   */
  subMatterLevel: string
  /**
   * @description
   *   事项进度编码
   */
  subMatterStateCode: string
  /**
   * @description
   *   事项进度名称
   */
  subMatterStateName: string
  /**
   * @description
   *   指标事项出现在重点关注的时间
   * @format date-time
   */
  subMatterStateTime: string
  /**
   * @description
   *   事项时间
   * @format date-time
   */
  subMatterTime: string
  /**
   * @description
   *   子公司四位编码
   */
  subOrgCode: string
  /**
   * @description
   *   子公司名称
   */
  subOrgName: string
  /**
   * @description
   *   点位信息
   */
  subPointInformation: string
  /**
   * @description
   *   风险作战
   */
  subRiskCombat: string
  /**
   * @description
   *   智伴文案
   */
  subRobotSummary: string
  /**
   * @description
   *   标题
   */
  subTitle: string
}

export interface DirectorSubImportantVO {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   数据采集来源：物联
   */
  dataCollectType: string
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源List
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   一号位是否可见  0-可见 1-不可见
   */
  director: string
  /**
   * @description
   *   评估指标算法
   */
  evalAlgorithm: string
  /**
   * @description
   *   评估项名称
   */
  evalName: string
  /**
   * @description
   *   评估项标准
   */
  evalStandard: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   事项类别编码
   */
  matterCategoryCode: string
  /**
   * @description
   *   事项类别名称
   */
  matterCategoryName: string
  /**
   * @description
   *   重点关注主表主键
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   管网召集人是否可见  0-可见 1-不可见
   */
  pipeNetwork: string
  /**
   * @description
   *   三老问题出现次数
   * @format int32
   */
  questionNum: number
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   业务扩展字段
   */
  subBusinessExp: string
  /**
   * @description
   *   业务id
   */
  subBusinessId: string
  /**
   * @description
   *   业务状态code
   */
  subBusinessStateCode: string
  /**
   * @description
   *   业务状态名称
   */
  subBusinessStateName: string
  /**
   * @description
   *   业务类型
   */
  subBusinessType: string
  /**
   * @description
   *   卡片概述
   */
  subCardSummary: string
  /**
   * @description
   *   事项类型：业务风险类、事故事件类、指标类
   */
  subItemClassification: string
  /**
   * @description
   *   事项进度编码
   */
  subKpiCategoryCode: string
  /**
   * @description
   *   事项进度名称
   */
  subKpiCategoryName: string
  /**
   * @description
   *   事项详情信息
   */
  subMatterDetail: string
  /**
   * @description
   *   事项处置历史
   */
  subMatterHistory: string
  /**
   * @description
   *   程度（红、橙、黄、蓝）
   */
  subMatterLevel: string
  /**
   * @description
   *   事项进度编码
   */
  subMatterStateCode: string
  /**
   * @description
   *   事项进度名称
   */
  subMatterStateName: string
  /**
   * @description
   *   指标事项出现在重点关注的时间
   * @format date-time
   */
  subMatterStateTime: string
  /**
   * @description
   *   事项出现距今时差的时间戳
   * @format int64
   */
  subMatterStateTimeStamp: number
  /**
   * @description
   *   事项时间
   * @format date-time
   */
  subMatterTime: string
  /**
   * @description
   *   子公司四位编码
   */
  subOrgCode: string
  /**
   * @description
   *   子公司名称
   */
  subOrgName: string
  /**
   * @description
   *   点位信息
   */
  subPointInformation: string
  /**
   * @description
   *   风险作战
   */
  subRiskCombat: string
  /**
   * @description
   *   智伴文案
   */
  subRobotSummary: string
  /**
   * @description
   *   标题
   */
  subTitle: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

/**
 * @description
 *   进度列表出参对象
 */
export interface DisposalProcessListVO {
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   节点内容
   */
  nodeContent: string
  /**
   * @description
   *   节点名称
   */
  nodeName: string
  /**
   * @description
   *   操作人员
   */
  operator: string
  /**
   * @description
   *   操作人员电话
   */
  operatorPhone: string
  /**
   * @description
   *   场景；1：管网场景，2：场站场景，3：户内场景，4：工程场景
   * @format int32
   */
  sceneCode: number
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  time: string
}

/**
 * @description
 *   派发工单查询入参
 */
export interface DistributionOrderListReqDto {
  /**
   * @description
   *   指标监控ID
   * @format int64
   */
  indexId: number
  /**
   * @description
   *   事项名称
   */
  matterName: string
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   工单状态0-待处理,1-处置中,2-处理完成,4-已关闭
   * @format int32
   */
  status: number
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

/**
 * @description
 *   派发工单列表查询出参
 */
export interface DistributionOrderListVo {
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标监控ID
   * @format int64
   */
  indexId: number
  /**
   * @description
   *   事项名称
   */
  matterName: string
  /**
   * @description
   *   责任人
   */
  responsiblePerson: string
  /**
   * @description
   *   工单状态
   * @format int32
   */
  status: number
  /**
   * @description
   *   工单号
   */
  workOrderNo: string
}

/**
 * @description
 *   隐患排查组件-迎检类
 */
export interface DpcAssembleCheckDTO {
  /**
   * @description
   *   设备设施类-检查内容
   */
  checkContent: string
  /**
   * @description
   *   设备设施类-检查标准
   */
  checkStandard: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
}

/**
 * @description
 *   隐患排查组件-危险作业类
 */
export interface DpcAssembleDangerDTO {
  /**
   * @description
   *   设备设施类-检查内容
   */
  checkContent: string
  /**
   * @description
   *   设备设施类-检查标准
   */
  checkStandard: string
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   隐患排查组件设备设施类表
 */
export interface DpcAssembleEquipmentDTO {
  /**
   * @description
   *   设备设施类-检查内容
   */
  checkContent: string
  /**
   * @description
   *   设备设施类-检查标准
   */
  checkStandard: string
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   隐患排查组件-人员操作类
 */
export interface DpcAssembleOperationDTO {
  /**
   * @description
   *   设备设施类-检查内容
   */
  checkContent: string
  /**
   * @description
   *   设备设施类-检查标准
   */
  checkStandard: string
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface DpcAssembleSaveAllDTO {
  /**
   * @description
   *   检查内容
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   组件id
   * @format int64
   */
  id: number
}

/**
 * @description
 *   隐患排查组件样板表
 */
export interface DpcAssembleTemplateDTO {
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   点位位置ID
   * @format int64
   */
  pointPositionId: number
  /**
   * @description
   *   团队ID
   * @format int64
   */
  teamId: number
  /**
   * @description
   *   样板编码
   */
  templateCode: string
  /**
   * @description
   *   样板名称
   */
  templateName: string
  /**
   * @description
   *   样板状态，1：已保存，2：已提交
   * @format int32
   */
  templateState: number
  /**
   * @description
   *   1:隐患;2:数据采集
   * @format int32
   */
  templateType: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   版本号
   * @format int64
   */
  version: number
}

/**
 * @description
 *   隐患排查样板组件映射表
 */
export interface DpcAssembleTemplateMappingDTO {
  /**
   * @description
   *   组件ID
   * @format int64
   */
  assembleId: number
  /**
   * @description
   *   组件类型：1：设备设施类；2、人员操作类；综合排查；4、计划偏差；5、环境变化类；6、危险作业类；7、迎检类
   * @format int32
   */
  assembleType: number
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   排序
   * @format int32
   */
  sort: number
  /**
   * @description
   *   样板ID
   * @format int64
   */
  templateId: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface DpcAssembleTemplateMappingSaveAllDTO {
  /**
   * @description
   *   组件类型：1：设备设施类；2、人员操作类；综合排查；4、计划偏差；5、环境变化类；6、危险作业类；7、迎检类
   * @format int32
   */
  assembleType: number
  /**
   * @description
   *   子组件列表
   */
  dpcAssembleSaveAllList: Array<DpcAssembleSaveAllDTO>
}

export interface DpcAssembleTemplateMappingSaveDTO {
  /**
   * @description
   *   组件ID
   * @format int64
   */
  assembleId: number
  /**
   * @description
   *   组件类型：1：设备设施类；2、人员操作类；综合排查；4、计划偏差；5、环境变化类；6、危险作业类；7、迎检类
   * @format int32
   */
  assembleType: number
  /**
   * @description
   *   排序
   * @format int32
   */
  sort: number
}

/**
 * @description
 *   隐患排查组件查询接口
 */
export interface DpcAssembleTemplatePageQuery {
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   点位位置ID
   * @format int64
   */
  pointPositionId: number
  /**
   * @description
   *   团队ID
   * @format int64
   */
  teamId: number
  /**
   * @description
   *   样板编码
   */
  templateCode: string
  /**
   * @description
   *   样板名称
   */
  templateName: string
  /**
   * @description
   *   样板状态，1：已保存，2：已提交
   * @format int32
   */
  templateState: number
  /**
   * @description
   *   1:隐患;2:数据采集
   * @format int32
   */
  templateType: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   版本号
   * @format int64
   */
  version: number
}

/**
 * @description
 *   样板组件整体保存
 */
export interface DpcAssembleTemplateSaveAllDTO {
  /**
   * @description
   *   样版对应组件列表
   */
  dpcAssembleTemplateMappingSaveList: Array<DpcAssembleTemplateMappingSaveAllDTO>
  /**
   * @description
   *   点位位置id
   * @format int64
   */
  pointPositionId: number
  /**
   * @description
   *   班组id
   * @format int64
   */
  teamId: number
  /**
   * @description
   *   样板编码
   */
  templateCode: string
  /**
   * @description
   *   样板名称
   */
  templateName: string
  /**
   * @description
   *   样板状态
   * @format int32
   */
  templateState: number
  /**
   * @description
   *   1:隐患;2:数据采集
   * @format int32
   */
  templateType: number
  /**
   * @description
   *   版本号
   * @format int64
   */
  version: number
}

/**
 * @description
 *   样板组件保存
 */
export interface DpcAssembleTemplateSaveDTO {
  /**
   * @description
   *   样版对应组件列表
   */
  dpcAssembleTemplateMappingSaveList: Array<DpcAssembleTemplateMappingSaveDTO>
  /**
   * @description
   *   点位位置id
   * @format int64
   */
  pointPositionId: number
  /**
   * @description
   *   班组id
   * @format int64
   */
  teamId: number
  /**
   * @description
   *   样板编码
   */
  templateCode: string
  /**
   * @description
   *   样板名称
   */
  templateName: string
  /**
   * @description
   *   样板状态
   * @format int32
   */
  templateState: number
  /**
   * @description
   *   1:隐患;2:数据采集
   * @format int32
   */
  templateType: number
  /**
   * @description
   *   版本号
   * @format int64
   */
  version: number
}

/**
 * @description
 *   样板组件状态变更
 */
export interface DpcAssembleTemplateStateChangeDTO {
  /**
   * @description
   *   点位位置id
   * @format int64
   */
  pointPositionId: number
  /**
   * @description
   *   班组id
   * @format int64
   */
  teamId: number
  /**
   * @description
   *   样版编码
   */
  templateCode: string
  /**
   * @description
   *   样版id
   * @format int64
   */
  templateId: number
  /**
   * @description
   *   样板状态
   * @format int32
   */
  templateState: number
  /**
   * @description
   *   样板类型(1:隐患;2:数据采集)
   * @format int32
   */
  templateType: number
}

/**
 * @description
 *   隐患排查-信息采集-迎检表
 */
export interface DpcAssembleWelcomeCheckDTO {
  /**
   * @description
   *   陪同人员
   */
  accompanyUser: string
  /**
   * @description
   *   组件ID
   */
  assembleId: string
  /**
   * @description
   *   检查时间
   * @format date-time
   */
  checkTime: string
  /**
   * @description
   *   检查单位
   */
  checkUnit: string
  /**
   * @description
   *   检查人员
   */
  checkUser: string
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   新增计划
 */
export interface DpcCheckPlanAddDto {
  /**
   * @description
   *   排查时间
   */
  checkTime: Array<string>
  /**
   * @description
   *   计划周期：1、每日；2、每周、3、每月、4、每季度、5、每半年、6、每年
   * @format int32
   */
  cycle: number
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   计划结束时间
   * @format date-time
   */
  endTime: string
  /**
   * @description
   *   计划频率
   * @format int32
   */
  frequency: number
  /**
   * @description
   *   计划名称
   */
  planName: string
  /**
   * @description
   *   计划状态：0：已保存，1：已生效，2：已完成，3：作废
   * @format int32
   */
  planStatus: number
  /**
   * @description
   *   1:隐患排查计划;2:数据采集计划
   * @format int32
   */
  planType: number
  /**
   * @description
   *   点位位置ID
   */
  pointPositionId: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  startTime: string
  /**
   * @description
   *   班组ID
   */
  teamId: string
  /**
   * @description
   *   样板编码
   */
  templateCode: string
  /**
   * @description
   *   样板版本号
   * @format int64
   */
  templateVersion: number
}

/**
 * @description
 *   计划
 */
export interface DpcCheckPlanQuery {
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   计划状态：0：已保存，1：已生效，2：已完成，3：作废
   * @format int32
   */
  planStatus: number
  /**
   * @description
   *   1:隐患排查计划;2:数据采集计划
   * @format int32
   */
  planType: number
  /**
   * @description
   *   班组ID
   */
  teamId: string
  /**
   * @description
   *   责任人
   */
  teamLeaderName: string
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   编辑计划
 */
export interface DpcCheckPlanUpdateDto {
  /**
   * @description
   *   排查时间
   */
  checkTime: Array<string>
  /**
   * @description
   *   计划周期：1、每日；2、每周、3、每月、4、每季度、5、每半年、6、每年
   * @format int32
   */
  cycle: number
  /**
   * @description
   *   计划结束时间
   * @format date-time
   */
  endTime: string
  /**
   * @description
   *   计划频率
   * @format int32
   */
  frequency: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   计划名称
   */
  planName: string
  /**
   * @description
   *   计划状态：0：已保存，1：已生效，2：已完成，3：作废
   * @format int32
   */
  planStatus: number
  /**
   * @description
   *   1:隐患排查计划;2:数据采集计划
   * @format int32
   */
  planType: number
  /**
   * @description
   *   点位位置ID
   */
  pointPositionId: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  startTime: string
  /**
   * @description
   *   班组ID
   */
  teamId: string
}

/**
 * @description
 *   计划
 */
export interface DpcCheckPlanVO {
  /**
   * @description
   *   排查时间
   */
  checkTime: Array<string>
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   计划周期：1、每日；2、每周、3、每月、4、每季度、5、每半年、6、每年
   * @format int32
   */
  cycle: number
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   计划结束时间
   * @format date-time
   */
  endTime: string
  /**
   * @description
   *   计划频率
   * @format int32
   */
  frequency: number
  /** @format int64 */
  id: number
  /**
   * @description
   *   计划名称
   */
  planName: string
  /**
   * @description
   *   计划状态：0：已保存，1：已生效，2：已完成，3：作废
   * @format int32
   */
  planStatus: number
  /**
   * @description
   *   1:隐患排查计划;2:数据采集计划
   * @format int32
   */
  planType: number
  /**
   * @description
   *   点位位置ID
   */
  pointPositionId: string
  /**
   * @description
   *   点位位置ID
   */
  pointPositionName: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  startTime: string
  /**
   * @description
   *   班组是否删除
   */
  teamDel: string
  /**
   * @description
   *   班组ID
   */
  teamId: string
  /**
   * @description
   *   责任人
   */
  teamLeaderName: string
  /**
   * @description
   *   班组名称
   */
  teamName: string
  /**
   * @description
   *   样板编码
   */
  templateCode: string
  /**
   * @description
   *   样板版本号
   * @format int64
   */
  templateVersion: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface DpcCollectInfoProcessRecord {
  /**
   * @description
   *   采集信息
   */
  collectProcess: Array<any>
  /**
   * @description
   *   动作类型：COLLECT-采集；COLLECT_REVIEW-复核)
   */
  collectType: string
}

/**
 * @description
 *   综合排查内容
 */
export interface DpcHazardComprehensive {
  /**
   * @description
   *   组件ID
   * @format int64
   */
  assembleId: number
  /**
   * @description
   *   组件顺序
   * @format int32
   */
  assembleSort: number
  /**
   * @description
   *   检查内容名称
   */
  checkContent: string
  /**
   * @description
   *   综合排查内容ID
   * @format int64
   */
  comprehensiveId: number
  /**
   * @description
   *   排查内容
   */
  content: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   综合排查类使用-图片、视频、音频
   */
  fileDTOList: Array<FileDTO>
}

/**
 * @description
 *   隐患排查流程记录
 */
export interface DpcHazardProcessRecord {
  /**
   * @description
   *   隐患
   */
  hazardProcess: Array<any>
  /**
   * @description
   *   动作类型：CHECK-排查；REVIEW-复核；RECT-治理；ACCEPTANCE-验收
   */
  hazardType: string
}

export interface DutyAction {
  /**
   * @description
   *   规定动作
   */
  compulsoryExercise: string
  /** @format int64 */
  id: number
  /**
   * @description
   *   量化责任ID
   * @format int64
   */
  wkbDutyInfoId: number
}

export interface DutyActionQuery {
  /**
   * @description
   *   责任ID
   * @format int64
   */
  dutyId: number
  keyword: string
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

export interface DutyInfo {
  /**
   * @description
   *   责任描述
   */
  dutyRoleDesc: string
  /** @format int64 */
  id: number
}

export interface DutyInfoQuery {
  /**
   * @description
   *   关键词
   */
  keyword: string
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

export interface EDataKpiResult {
  code: string
  content: Array<KpiContent>
  message: string
  /** @format int32 */
  totalElements: number
  /** @format int32 */
  totalPages: number
}

export interface EDataReq {
  calcEndTime: string
  calcStartTime: string
  calcTime: string
  /** @format int32 */
  calcTimeSort: number
  compCodes: Array<string>
  compType: string
  cpmoCop: string
  granularity: string
  kipCodes: Array<string>
  /** @format int32 */
  page: number
  /** @format int32 */
  size: number
  xaDept: string
  xaReig: string
}

/**
 * @description
 *   应急抢险列表出参对象
 */
export interface EmergencyRescueListVO {
  /**
   * @description
   *   险情分类（1-高压官网2-场站3-中低压官网4-用户）
   */
  dangerousType: number
  dangerousTypeName: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   工单编号
   */
  eventCode: string
  /**
   * @description
   *   公司名称
   */
  eventCompanyName: string
  /**
   * @description
   *   纬度
   */
  eventLatitude: number
  /**
   * @description
   *   1-一级紧急 2-二级紧急 3-三级紧急 依次类推
   * @format int32
   */
  eventLevel: number
  eventLevelName: string
  /**
   * @description
   *   事件地址
   */
  eventLocation: string
  /**
   * @description
   *   经度
   */
  eventLongitude: number
  /**
   * @description
   *   事件名称
   */
  eventName: string
  /**
   * @description
   *   事件时间
   * @format date-time
   */
  eventStartTime: string
  /**
   * @description
   *   状态0 待接警 1 进行中 2-已终止
   * @format int32
   */
  eventStatus: number
  eventStatusName: string
  /**
   * @description
   *   事件类型（1-着火2-漏气3-爆炸4-水堵5-破裂6-系统故障7-其他）
   */
  eventType: number
  eventTypeName: string
  /**
   * @description
   *   主键
   */
  id: string
  /**
   * @description
   *   备注
   */
  mark: string
}

/**
 * @description
 *   应急抢险流程列表出参对象
 */
export interface EmergencyRescueProgressListVO {
  /**
   * @description
   *   操作时间
   * @format date-time
   */
  createDate: string
  /**
   * @description
   *   时间
   * @format int64
   */
  createTime: number
  /**
   * @description
   *   内容节点
   */
  progress: string
}

export interface EvalReportQueryVO {
  /**
   * @description
   *   点位信息
   */
  pointInformation: string
  /**
   * @description
   *   智伴文案
   */
  robotSummary: string
}

export interface FamilyAddDTO {
  /**
   * @description
   *   知家底指标类型
   */
  dicCode: string
  /**
   * @description
   *   指标类型编码
   */
  itemName: string
  /**
   * @description
   *   指标类型名称
   */
  itemValue: string
  /**
   * @description
   *   排序号
   * @format int32
   */
  sort: number
}

/**
 * @description
 *   新增
 */
export interface FamilyLabelAddDTO {
  /**
   * @description
   *   标签编码
   */
  labelCode: string
  /**
   * @description
   *   标签名称
   */
  labelName: string
}

export interface FamilyLabelInfoDeleteDTO {
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   标签编码
   */
  labelCode: string
}

export interface FamilyLabelInfoQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   标签编码
   */
  labelCode: string
  /**
   * @description
   *   标签名称
   */
  labelName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
}

export interface FamilyLabelInfoVO {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   标签管理主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   标签编码
   */
  labelCode: string
  /**
   * @description
   *   标签名称
   */
  labelName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

export interface FamilyLabelUpdateDTO {
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   标签编码
   */
  labelCode: string
  /**
   * @description
   *   标签名称
   */
  labelName: string
}

export interface FamilyOrgKpiAddDTO {
  /**
   * @description
   *   场景编码
   */
  kpiCategoryCode: string
  /**
   * @description
   *   场景名称
   */
  kpiCategoryName: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
}

export interface FamilyOrgKpiCompareDTO {
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   用户id
   */
  userId: string
}

export interface FamilyOrgKpiDeleteDTO {
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   场景编码
   */
  kpiCategoryCode: string
  /**
   * @description
   *   组织id
   */
  orgId: string
}

export interface FamilyOrgKpiQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
}

export interface FamilyOrgKpiUpdateDTO {
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   场景编码
   */
  kpiCategoryCode: string
  /**
   * @description
   *   场景名称
   */
  kpiCategoryName: string
  /**
   * @description
   *   指标编码
   */
  kpiName: string
  /**
   * @description
   *   指标名称
   */
  kpiValue: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
}

export interface FamilyOrgKpiVO {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   场景编码
   */
  kpiCategoryCode: string
  /**
   * @description
   *   场景名称
   */
  kpiCategoryName: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

export interface FamilyPersonalAddDTO {
  /**
   * @description
   *   PC指标主键
   * @format int64
   */
  orgKpiId: number
  /**
   * @description
   *   排序号
   * @format int32
   */
  sort: number
}

export interface FamilyPersonalCompareDTO {
  /**
   * @description
   *   用户公司id
   */
  cpmoCop: string
  /**
   * @description
   *   行业类型
   */
  industryCategoryCode: string
  /**
   * @description
   *   场景类型
   */
  sceneCode: string
}

export interface FamilyPersonalDTO {
  /**
   * @description
   *   所订阅的指标信息列表
   */
  personalList: Array<FamilyPersonalAddDTO>
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
}

export interface FamilyPersonalDataDTO {
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   用户id
   */
  userId: string
}

export interface FamilyPersonalIndexDTO {
  /**
   * @description
   *   用户公司id
   */
  cpmoCop: string
  /**
   * @description
   *   行业类型
   */
  industryCategoryCode: string
  /**
   * @description
   *   场景类型
   */
  sceneCode: string
}

export interface FamilyPersonalQueryDTO {
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   用户8位工号
   */
  userId: string
}

export interface FamilyPersonalSelectDTO {
  /**
   * @description
   *   用户公司id
   */
  cpmoCop: string
  /**
   * @description
   *   场景类型
   */
  sceneCode: string
}

export interface FamilySafeQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   适用场景编码
   */
  sceneCode: string
}

export interface FamilySortQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   用户ID
   */
  userId: string
}

/**
 * @description
 *   天气信息出参
 */
export interface FeatureWeatherResutlVO {
  /**
   * @description
   *   地区名称
   */
  area: string
  /**
   * @description
   *   城市名称
   */
  city: string
  /**
   * @description
   *   天气状况白天
   */
  conditionDay: string
  /**
   * @description
   *   天气状况夜间
   */
  conditionNight: string
  /**
   * @description
   *   预报时间
   * @format date-time
   */
  date: string
  /**
   * @description
   *   预测时间间隔（小时）
   * @format int32
   */
  daysAhead: number
  /**
   * @description
   *   通用城市ID
   */
  generalId: string
  /**
   * @description
   *   湿度（%）
   * @format int32
   */
  humidity: number
  /**
   * @description
   *   纬度
   * @format double
   */
  lat: number
  /**
   * @description
   *   经度
   * @format double
   */
  lon: number
  /**
   * @description
   *   月相
   */
  moonphase: string
  /**
   * @description
   *   月落
   */
  moonrise: string
  /**
   * @description
   *   省份名称
   */
  province: string
  /**
   * @description
   *   日出
   */
  sunrise: string
  /**
   * @description
   *   日落
   */
  sunset: string
  /**
   * @description
   *   白天温度
   */
  tempDay: string
  /**
   * @description
   *   夜间温度
   */
  tempNight: string
  /**
   * @description
   *   更新时间
   */
  updateTime1: string
  /**
   * @description
   *   白天风向角度
   */
  windDegreesDay: string
  /**
   * @description
   *   夜间风向角度
   */
  windDegreesNight: string
  /**
   * @description
   *   白天风向
   */
  windDirDay: string
  /**
   * @description
   *   夜间风向
   */
  windDirNight: string
  /**
   * @description
   *   白天风级
   */
  windLevelDay: string
  /**
   * @description
   *   夜间风级
   */
  windLevelNight: string
  /**
   * @description
   *   白天风速
   */
  windSpeedDay: string
  /**
   * @description
   *   夜间风速
   */
  windSpeedNight: string
}

/**
 * @description
 *   未来天气情况出参
 */
export interface FeatureWeatherVO {
  /**
   * @description
   *   天气预警
   */
  weatherAlert: string
  /**
   * @description
   *   天气情况影响
   */
  weatherEffect: string
  /**
   * @description
   *   未来三天天气情况列表
   */
  weatherVOList: Array<FeatureWeatherResutlVO>
}

/**
 * @description
 *   隐患附件信息
 */
export interface FileDTO {
  /**
   * @description
   *   文件id
   * @format int64
   */
  id: number
  /**
   * @description
   *   备注：用于存放录音时长等
   */
  remark: string
  /**
   * @description
   *   附件地址
   */
  url: string
}

export interface FileRecordAddDTO {
  /**
   * @description
   *   文件编号/一般业务文件暂时不传CODE
   */
  code: string
  /**
   * @description
   *   文件名称
   */
  name: string
  /**
   * @description
   *   文件路径
   */
  url: string
  /**
   * @description
   *   uuid主键
   */
  uuid: string
}

export interface FirstKpiCodeDetailVO {
  createName: string
  /** @format date-time */
  createTime: string
  createUid: string
  /** @format int32 */
  deleted: number
  /**
   * @description
   *   衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   衡量指标名称
   */
  firstKpiName: string
  granType: string
  /** @format int64 */
  id: number
  /** @format int64 */
  kpiCategoryId: number
  kpiCode: string
  kpiFieldType: string
  kpiName: string
  rdfaTenantId: string
  remark: string
  secondKpiCode: string
  secondKpiName: string
  updateName: string
  /** @format date-time */
  updateTime: string
  updateUid: string
}

export interface FocusCommentDto {
  /**
   * @description
   *   评论
   */
  commentContent: string
  /**
   * @description
   *   关注事项ID
   * @format int64
   */
  importantFocusId: number
}

export interface FocusExcelDto {
  assistIds: string
  cpmoCop: string
  cpmoCopTxt: string
  createName: string
  /** @format date-time */
  createTime: string
  createUid: string
  dateRange: string
  deleted: boolean
  matterContent: string
  matterKind: string
  matterName: string
  principalIds: string
  rdfaTenantId: string
  remark: string
  updateName: string
  /** @format date-time */
  updateTime: string
  updateUid: string
}

export interface FocusExcelListDto {
  cpmoCodeTxt: string
  cpmoCop: string
  dtoList: Array<FocusExcelDto>
  filePath: string
  ifFileImport: boolean
}

export interface FocusListQueryAllDto {
  /**
   * @description
   *   是否是首页展示
   */
  isHome: boolean
  /**
   * @description
   *   关键字
   */
  keyword: string
  /**
   * @description
   *   待办类别
   */
  matterKinds: Array<string>
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   查询状态条件 0-全部 1-解决中 2-已经解决
   */
  queryStatus: string
  /**
   * @description
   *   收发对象 0-全部 1-我收到的 2-我发送的
   */
  senderReceiver: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

export interface FocusProcessReportDto {
  /**
   * @description
   *   评论
   */
  commentContent: string
  /**
   * @description
   *   关注事项ID
   * @format int64
   */
  importantFocusId: number
  /**
   * @description
   *   更新进度说明
   */
  processDescribe: string
  /**
   * @description
   *   上报百分比
   */
  processPercent: number
}

/**
 * @description
 *   新增重点关注事项
 */
export interface FocusTaskAddDto {
  /**
   * @description
   *   协同人列表
   */
  assistList: Array<ImportantFocusAssist>
  compCode: string
  compCodeTxt: string
  cpmoCop: string
  cpmoCopTxt: string
  createName: string
  /** @format date-time */
  createTime: string
  createUid: string
  deleted: boolean
  /**
   * @description
   *   责任描述
   */
  dutyDescribe: string
  isInitial: boolean
  /**
   * @description
   *   是否提交 true-提交 false-存草稿
   */
  isSubmit: boolean
  /**
   * @description
   *   附件
   */
  matterAttachment: string
  /**
   * @description
   *   待办内容
   */
  matterContent: string
  /**
   * @description
   *   待办类别
   */
  matterKind: string
  /**
   * @description
   *   待办名称
   */
  matterName: string
  /**
   * @description
   *   计划结束时间
   * @format date-time
   */
  planEndTime: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  planStartTime: string
  /**
   * @description
   *   负责人列表
   */
  principalList: Array<ImportantFocusPrincipal>
  rdfaTenantId: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   规定动作
   */
  requiredAction: string
  /**
   * @description
   *   示险记录表ID
   * @format int64
   */
  riskId: number
  /**
   * @description
   *   状态
   */
  status: string
  updateName: string
  /** @format date-time */
  updateTime: string
  updateUid: string
}

/**
 * @description
 *   修改重点关注事项
 */
export interface FocusTaskModifyDto {
  /**
   * @description
   *   协同人列表
   */
  assistList: Array<ImportantFocusAssist>
  /**
   * @description
   *   责任描述
   */
  dutyDescribe: string
  /**
   * @description
   *   id
   * @format int64
   */
  id: number
  /**
   * @description
   *   是否提交 true-提交 false-存草稿
   */
  isSubmit: boolean
  /**
   * @description
   *   附件
   */
  matterAttachment: string
  /**
   * @description
   *   待办内容
   */
  matterContent: string
  /**
   * @description
   *   待办类别
   */
  matterKind: string
  /**
   * @description
   *   待办名称
   */
  matterName: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  planEndTime: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  planStartTime: string
  /**
   * @description
   *   负责人列表
   */
  principalList: Array<ImportantFocusPrincipal>
  /**
   * @description
   *   规定动作
   */
  requiredAction: string
  /**
   * @description
   *   示险记录表ID
   * @format int64
   */
  riskId: number
}

/**
 * @description
 *   重点关注事项详情
 */
export interface FocusTaskVo {
  /**
   * @description
   *   协同人列表
   */
  assistList: Array<ImportantFocusAssist>
  /**
   * @description
   *   法人公司编码
   */
  compCode: string
  /**
   * @description
   *   法人公司
   */
  compCodeTxt: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体
   */
  cpmoCopTxt: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人
   */
  createUid: string
  dataId: string
  dataSource: string
  deleted: boolean
  /**
   * @description
   *   状态相差天数
   * @format int64
   */
  deltaStatusNum: number
  /**
   * @description
   *   责任描述
   */
  dutyDescribe: string
  /**
   * @description
   *   责任描述具体详情
   */
  dutyDescribeInfo: DutyInfo
  /**
   * @description
   *   id
   * @format int64
   */
  id: number
  /**
   * @description
   *   最后上报进度
   */
  lastReport: ImportantFocusReport
  /**
   * @description
   *   附件
   */
  matterAttachment: string
  /**
   * @description
   *   附件具体详情
   */
  matterAttachmentInfo: Array<SysFile>
  /**
   * @description
   *   待办内容
   */
  matterContent: string
  /**
   * @description
   *   待办类别
   */
  matterKind: string
  /**
   * @description
   *   待办名称
   */
  matterName: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  planEndTime: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  planStartTime: string
  /**
   * @description
   *   负责人列表
   */
  principalList: Array<ImportantFocusPrincipal>
  processPercent: number
  /**
   * @description
   *   RDFA租户ID
   */
  rdfaTenantId: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   是否有上报权限,true-有 false-无
   */
  reportAuth: boolean
  /**
   * @description
   *   规定动作
   */
  requiredAction: string
  /**
   * @description
   *   规定动作具体详情
   */
  requiredActionInfo: DutyAction
  /**
   * @description
   *   示险记录表ID
   * @format int64
   */
  riskId: number
  safetyUserInfo: SafetyUserInfo
  /**
   * @description
   *   状态
   */
  status: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人
   */
  updateUid: string
}

export interface GridStatisticCode {
  /**
   * @description
   *   大数据指标编码
   */
  kpiCode: string
  /**
   * @description
   *   二级指标编码
   */
  secondKpiCode: string
  /**
   * @description
   *   二级指标名称
   */
  secondKpiName: string
  /**
   * @description
   *    展现类型 LINE折线图，BAR柱形图
   */
  type: string
  /**
   * @description
   *   单位
   */
  unit: string
}

/**
 * @description
 *   用户组配置用户参数
 */
export interface GroupAddUser {
  /**
   * @description
   *   参与者用户id,多个以逗号隔开
   */
  accountIds: string
  /**
   * @description
   *   参与者用户组id
   */
  groupId: string
  /**
   * @description
   *   参与者组织id集合
   */
  orgIds: Array<string>
}

/**
 * @description
 *   用户组移除用户参数
 */
export interface GroupRemoveUser {
  /**
   * @description
   *   参与者用户id
   */
  accountId: string
  /**
   * @description
   *   参与者用户组id
   */
  groupId: string
}

/**
 * @description
 *   用户组新增编辑-配置权限-角色列表查询参数
 */
export interface GroupRoleQuery {
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  /**
   * @description
   *   查询类型 0-全部 1-未关联 2-已关联
   * @format int32
   */
  related: number
  /**
   * @description
   *   角色名称
   */
  roleName: string
  /**
   * @description
   *   用户组id(本地主键)
   * @format int64
   */
  userGroupId: number
}

/**
 * @description
 *   用户组-用户列表查询参数
 */
export interface GroupUserQuery {
  /**
   * @description
   *   参与者用户组id
   */
  groupId: string
  /**
   * @description
   *   搜索关键字
   */
  keyword: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
}

export interface GuessListQueryDto {
  /**
   * @description
   *   是否按照点击数量排序，true-是（不传默认是） false-否
   */
  ifOrderByClick: boolean
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   展示标识，0-用户未选择的数据，1-用户选择的数据（不传默认1）
   * @format int32
   */
  showFlag: number
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

export interface GuessVO {
  /**
   * @description
   *   点击次数
   * @format int64
   */
  clickCount: number
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建人姓名
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人
   */
  createUid: string
  /** @format int64 */
  id: number
  /**
   * @description
   *   RDFA租户ID
   */
  rdfaTenantId: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   展示标识  0-不展示 1-展示
   * @format int32
   */
  showFlag: number
  /**
   * @description
   *   序号
   * @format int32
   */
  sort: number
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人
   */
  updateUid: string
}

export interface HashMap {
  [key: string]: any
}

export interface HazardAcceptanceReqDto {
  /**
   * @description
   *   验收内容
   */
  acceptanceContent: string
  /**
   * @description
   *   验收结果：1、通过 2、不通过
   * @format int32
   */
  acceptanceResult: number
  /**
   * @description
   *   验收人
   */
  acceptanceUser: string
  /**
   * @description
   *   验收人itCode
   */
  acceptanceUserId: string
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   图片、视频、音频
   */
  fileDTOList: Array<FileDTO>
  /**
   * @description
   *   隐患验收ID
   * @format int64
   */
  hazardAcceptanceId: number
  /**
   * @description
   *   隐患ID
   * @format int64
   */
  hazardId: number
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
  /**
   * @description
   *   组件清单id
   * @format int64
   */
  hazardTaskListId: number
  /**
   * @description
   *   排查点位名称
   */
  pointPositionName: string
  /**
   * @description
   *   治理责任人itCode
   */
  responsibleUserId: string
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

export interface HazardDetailVo {
  /**
   * @description
   *   负责人
   */
  business_user_code: string
  /**
   * @description
   *   负责人姓名
   */
  business_user_name: string
  /**
   * @description
   *   整改期限
   */
  rectify_end_time: string
  /**
   * @description
   *   整改时间
   */
  rectify_time: string
  /**
   * @description
   *   隐患名称
   */
  trouble_name: string
}

/**
 * @description
 *   隐患排查单排查-隐患
 */
export interface HazardInfo {
  /**
   * @description
   *   检查时间
   * @format date-time
   */
  checkTime: string
  /**
   * @description
   *   检查人
   */
  checkUser: string
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   图片、视频、音频
   */
  fileDTOList: Array<FileDTO>
  /**
   * @description
   *   隐患内容
   */
  hazardContent: string
  /**
   * @description
   *   隐患id
   * @format int64
   */
  hazardId: number
  /**
   * @description
   *   隐患等级-取排查地图配置
   */
  hazardLevel: string
  /**
   * @description
   *   隐患名称
   */
  hazardName: string
  /**
   * @description
   *   隐患状态：1-待复核，2-已复核，3-待治理，4-治理中，5-待验收，6-验收中，7-已验收，8-验收通过，9-验收不通过
   * @format int32
   */
  hazardStatus: number
  /**
   * @description
   *   治理类型：1-自己治理，2-别人治理
   * @format int32
   */
  rectificationType: number
  /**
   * @description
   *   示险纠偏id
   * @format int64
   */
  riskId: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   隐患等级
 */
export interface HazardLevel {
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  createBy: string
  createByName: string
  createTime: string
  /** @format int32 */
  delFlag: number
  dicCode: string
  dicId: string
  /** @format int64 */
  id: number
  itemName: string
  itemValue: string
  remark: string
  /** @format int32 */
  sort: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  updateBy: string
  updateByName: string
  updateTime: string
}

/**
 * @description
 *   新增字典子项编码条目
 */
export interface HazardLevelAddDto {
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   等级名称
   */
  itemName: string
  /**
   * @description
   *   等级编码
   */
  itemValue: string
  /**
   * @description
   *   排序码
   * @format int32
   */
  sort: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
}

export interface HazardLevelQuery {
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

/**
 * @description
 *   编辑字典子项编码条目
 */
export interface HazardLevelUpdateDto {
  /**
   * @description
   *   删除状态 0:正常 1:已删除      默认0
   * @format int32
   */
  delFlag: number
  /**
   * @description
   *   字典id
   * @format int64
   */
  id: number
  /**
   * @description
   *   等级名称
   */
  itemName: string
  /**
   * @description
   *   排序码
   * @format int32
   */
  sort: number
}

/**
 * @description
 *   隐患治理人
 */
export interface HazardRectificationUser {
  /**
   * @description
   *   治理人
   */
  rectificationUser: string
  /**
   * @description
   *   治理人itCode
   */
  rectificationUserId: string
}

/**
 * @description
 *   隐患治理入参
 */
export interface HazardRectifyReqDto {
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   图片、视频、音频
   */
  fileDTOList: Array<FileDTO>
  /**
   * @description
   *   隐患ID
   * @format int64
   */
  hazardId: number
  /**
   * @description
   *   隐患治理id
   * @format int64
   */
  hazardRectId: number
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
  /**
   * @description
   *   组件清单id
   * @format int64
   */
  hazardTaskListId: number
  /**
   * @description
   *   排查点位名称
   */
  pointPositionName: string
  /**
   * @description
   *   治理内容
   */
  rectContent: string
  /**
   * @description
   *   治理人
   */
  rectificationUserList: Array<HazardRectificationUser>
  /**
   * @description
   *   进度
   */
  schedule: string
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   隐患复核入参
 */
export interface HazardReviewReqDto {
  /**
   * @description
   *   验收人
   */
  acceptanceUser: string
  /**
   * @description
   *   验收人itCode
   */
  acceptanceUserId: string
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   图片、视频、音频
   */
  fileDTOList: Array<FileDTO>
  /**
   * @description
   *   隐患ID
   * @format int64
   */
  hazardId: number
  /**
   * @description
   *   隐患ID
   * @format int64
   */
  hazardReviewId: number
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
  /**
   * @description
   *   组件清单id
   * @format int64
   */
  hazardTaskListId: number
  /**
   * @description
   *   治理结束时间
   * @format date-time
   */
  rectStartEnd: string
  /**
   * @description
   *   治理开始时间
   * @format date-time
   */
  rectStartTime: string
  /**
   * @description
   *   上报一号位：1-上报 2-不上报
   * @format int32
   */
  reportFirst: number
  /**
   * @description
   *   治理责任人
   */
  responsibleUser: string
  /**
   * @description
   *   治理责任人itCode
   */
  responsibleUserId: string
  /**
   * @description
   *   复核内容
   */
  reviewContent: string
  /**
   * @description
   *   复核次数：1-班组长审核；2-QHSE角色审核
   * @format int32
   */
  reviewOrder: number
  /**
   * @description
   *   复核结果：1、通过 2、不通过
   * @format int32
   */
  reviewResult: number
  /**
   * @description
   *   示险对象
   */
  showRiskObject: string
  /**
   * @description
   *   示险对象itCode
   */
  showRiskObjectId: string
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   隐患情况
 */
export interface HazardSituation {
  /**
   * @description
   *   隐患等级code
   */
  hazardLevel: string
  /**
   * @description
   *   隐患等级名称
   */
  hazardLevelName: string
  /**
   * @description
   *   对应数量
   * @format int32
   */
  num: number
}

/**
 * @description
 *   隐患状态更新入参
 */
export interface HazardStatusUpdateReqDto {
  /**
   * @description
   *   隐患id
   * @format int64
   */
  hazardInfoId: number
  /**
   * @description
   *   隐患状态：1-待复核，2-已复核，3-待治理，4-治理中，5-待验收，6-验收中，7-已验收，8-验收通过，9-验收不通过
   * @format int32
   */
  hazardStatus: number
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
  /**
   * @description
   *   排查点位名称
   */
  pointPositionName: string
}

/**
 * @description
 *   隐患排查单排查保存组件
 */
export interface HazardTaskCheckSaveAssemble {
  /**
   * @description
   *   排查状态：0-正常，1-异常
   * @format int32
   */
  assembleCheckStatus: number
  /**
   * @description
   *   组件ID
   * @format int64
   */
  assembleId: number
  /**
   * @description
   *   组件顺序
   * @format int32
   */
  assembleSort: number
  /**
   * @description
   *   检查内容名称
   */
  checkContent: string
  /**
   * @description
   *   检查标准
   */
  checkStandard: string
  /**
   * @description
   *   隐患信息
   */
  hazardInfo: HazardInfo
  /**
   * @description
   *   组件清单id
   * @format int64
   */
  hazardTaskListId: number
}

/**
 * @description
 *   隐患排查单排查保存组件类型列表
 */
export interface HazardTaskCheckSaveAssembleTypeList {
  /**
   * @description
   *   组件类型：1-设备设施类，2-人员操作类，3-综合排查，4-计划偏差，5-环境变化类，6-危险作业类，7-迎检类
   * @format int32
   */
  assembleType: number
  /**
   * @description
   *   综合排查组件
   */
  dpcHazardComprehensive: DpcHazardComprehensive
  /**
   * @description
   *   隐患相关组件
   */
  hazardTaskCheckSaveAssembleList: Array<HazardTaskCheckSaveAssemble>
  /**
   * @description
   *   组件清单id
   * @format int64
   */
  hazardTaskListId: number
}

/**
 * @description
 *   隐患排查单排查保存入参
 */
export interface HazardTaskCheckSaveReqDto {
  /**
   * @description
   *   保存组件类型
   */
  hazardTaskCheckSaveAssembleTypeListList: Array<HazardTaskCheckSaveAssembleTypeList>
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
  /**
   * @description
   *   填经纬度信息
   */
  latitudeLongitude: string
  /**
   * @description
   *   点位经纬度
   */
  pointLatitudeLongitude: string
  /**
   * @description
   *   点位位置
   */
  pointPosition: string
  /**
   * @description
   *   排查点位名称
   */
  pointPositionName: string
  /**
   * @description
   *   所在位置，填经纬度信息
   */
  position: string
  /**
   * @description
   *   班组id
   */
  teamId: string
  /**
   * @description
   *   班组长
   */
  teamLeader: string
  /**
   * @description
   *   班组名称
   */
  teamName: string
}

/**
 * @description
 *   隐患排查单排查保存响应
 */
export interface HazardTaskCheckSaveVO {
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
}

/**
 * @description
 *   隐患排查单详情-排查清单
 */
export interface HazardTaskDetailListVO {
  /**
   * @description
   *   清单列表
   */
  assembleList: Array<Assemble>
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
  /**
   * @description
   *   排查项统计
   */
  taskItemStatistics: TaskItemStatistics
}

/**
 * @description
 *   隐患排查单排查-表单页详情
 */
export interface HazardTaskDetailVO {
  /**
   * @description
   *   保存组件类型
   */
  hazardTaskCheckSaveAssembleTypeListList: Array<HazardTaskCheckSaveAssembleTypeList>
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
  /**
   * @description
   *   填经纬度信息
   */
  latitudeLongitude: string
  /**
   * @description
   *   点位经纬度
   */
  pointLatitudeLongitude: string
  /**
   * @description
   *   点位位置
   */
  pointPosition: string
  /**
   * @description
   *   排查点位名称
   */
  pointPositionName: string
  /**
   * @description
   *   所在位置
   */
  position: string
  /**
   * @description
   *   任务状态：1-待排查，2-排查中，3-待复核，4-已复核，5-待治理，6-治理中，7-待验收，8-验收中，9-验收通过，10-验收不通过
   * @format int32
   */
  taskStatus: number
  /**
   * @description
   *   班组id
   */
  teamId: string
  /**
   * @description
   *   班组长
   */
  teamLeader: string
  /**
   * @description
   *   班组名称
   */
  teamName: string
}

/**
 * @description
 *   隐患排查单id
 */
export interface HazardTaskIdReqDto {
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
}

/**
 * @description
 *   隐患排查单列表入参
 */
export interface HazardTaskListReqDto {
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   排查结束时间
   */
  endTime: string
  /**
   * @description
   *   隐患情况：1-一般隐患；2-重大隐患；3-较大
   */
  hazardLevelList: Array<string>
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   排查点位名称
   */
  pointPositionName: string
  /**
   * @description
   *   上报一号位：1-上报；2-不上报
   * @format int32
   */
  reportFirst: number
  /**
   * @description
   *   排查开始时间
   */
  startTime: string
  /**
   * @description
   *   任务编号
   */
  taskCode: string
  /**
   * @description
   *   任务状态：1-待排查，2-排查中，3-排查完成
   */
  taskStatusList: Array<number>
  /**
   * @description
   *   点位责任班组id
   */
  teamIdList: Array<string>
  /**
   * @description
   *   点位责任班组
   */
  teamName: string
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   隐患排查列表响应
 */
export interface HazardTaskListVO {
  /**
   * @description
   *   验收人
   */
  acceptanceUser: string
  /**
   * @description
   *   排查情况：1-未全部排查；2-已全排查
   * @format int32
   */
  allCheckFlag: number
  /**
   * @description
   *   排查责任人
   */
  checkUser: string
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   创建人
   */
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createByName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   删除标记,0-可用，1-已删除
   * @format int32
   */
  deleteFlag: number
  /**
   * @description
   *   隐患情况
   */
  hazardSituationList: Array<HazardSituation>
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   排查点位名称
   */
  pointPositionName: string
  /**
   * @description
   *   上报一号位：1-上报；2-不上报
   * @format int32
   */
  reportFirst: number
  /**
   * @description
   *   治理责任人
   */
  responsibleUser: string
  /**
   * @description
   *   复核人
   */
  reviewUser: string
  /**
   * @description
   *   示险对象
   */
  showRiskObject: string
  /**
   * @description
   *   计划排查时间
   */
  startTime: string
  /**
   * @description
   *   任务编号
   */
  taskCode: string
  /**
   * @description
   *   任务状态：1-待排查；2-排查中；3-排查完成
   * @format int32
   */
  taskStatus: number
  /**
   * @description
   *   点位责任班组id
   */
  teamId: string
  /**
   * @description
   *   点位责任班组
   */
  teamName: string
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
  /**
   * @description
   *   更新人
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateByName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   隐患排查单状态更新入参
 */
export interface HazardTaskStatusUpdateReqDto {
  /**
   * @description
   *   排查情况：1-未全部排查；2-已全排查
   * @format int32
   */
  allCheckFlag: number
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
  /**
   * @description
   *   任务状态：1-待排查；2-排查中；3-排查完成
   * @format int32
   */
  taskStatus: number
}

/**
 * @description
 *   隐患排查单详情-概况
 */
export interface HazardTaskSummaryVO {
  /**
   * @description
   *   排查责任人
   */
  checkUser: string
  /**
   * @description
   *   隐患排查单id
   * @format int64
   */
  hazardTaskId: number
  /**
   * @description
   *   填经纬度信息
   */
  latitudeLongitude: string
  /**
   * @description
   *   点位经纬度
   */
  pointLatitudeLongitude: string
  /**
   * @description
   *   点位位置
   */
  pointPosition: string
  /**
   * @description
   *   排查点位名称
   */
  pointPositionName: string
  /**
   * @description
   *   所在位置，填经纬度信息
   */
  position: string
  /**
   * @description
   *   计划排查时间
   */
  startTime: string
  /**
   * @description
   *   任务编号
   */
  taskCode: string
  /**
   * @description
   *   任务状态：1-待排查；2-排查中；3-排查完成
   * @format int32
   */
  taskStatus: number
  /**
   * @description
   *   点位责任班组id
   */
  teamId: string
  /**
   * @description
   *   责任班组长
   */
  teamLeader: string
  /**
   * @description
   *   班组长id
   */
  teamLeaderIds: string
  /**
   * @description
   *   点位责任班组
   */
  teamName: string
  /**
   * @description
   *   排查时间
   * @format date-time
   */
  updateTime: string
}

export interface HazardVo {
  /**
   * @description
   *   未整改未超期
   * @format int32
   */
  notRectifiedInTime: number
  /**
   * @description
   *   未整改已超期
   * @format int32
   */
  notRectifiedOutTime: number
  /**
   * @description
   *   已整改
   * @format int32
   */
  rectified: number
  /**
   * @description
   *   整改完成率
   */
  rectifiedPercent: string
  /**
   * @description
   *   总数
   * @format int32
   */
  total: number
}

export interface HeaderInfo {
  ennUnifiedAuthorization: string
  ennUnifiedCsrfToken: string
  orgId: string
  orgName: string
  tenantId: string
  xgwAccessKey: string
}

/**
 * @description
 *   高风险
 */
export interface HighRiskItemVO {
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   单位
   */
  unit: string
  /**
   * @description
   *   昨日比较数量
   * @format int32
   */
  yesterdayCompare: number
}

export interface IComeActionCardMessageDTO {
  /**
   * @description
   *   第一个按钮跳转链接
   */
  actionUrl1: string
  /**
   * @description
   *   第二个按钮跳转链接
   */
  actionUrl2: string
  /**
   * @description
   *   卡片通知内容
   */
  content: string
  /**
   * @description
   *   卡片主题图片链接
   */
  imageUrl: string
  /**
   * @description
   *   是否为Job发起通知
   */
  jobFlag: boolean
  /**
   * @description
   *   卡片模块名称
   */
  moduleName: string
  /**
   * @description
   *   卡片模块名称-颜色编码
   */
  moduleNameColour: string
  /**
   * @description
   *   卡片通知时提示名称
   */
  notifyName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   第一个按钮名称
   */
  title1: string
  /**
   * @description
   *   第二个按钮名称
   */
  title2: string
  /**
   * @description
   *   主题名称
   */
  topicName: string
  /**
   * @description
   *   通知对象集合
   */
  userIds: Array<string>
  /**
   * @description
   *   卡片通知时 uuid
   */
  uuid: string
}

export interface ImportantFocusAssist {
  assistItcode: string
  assistName: string
  /** @format int64 */
  id: number
  /** @format int64 */
  importantFocusId: number
  remark: string
}

export interface ImportantFocusBrief {
  /**
   * @description
   *   负责人itcode逗号连接
   */
  auditorItcodes: string
  /**
   * @description
   *   负责人姓名逗号连接
   */
  auditorNames: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人
   */
  createUid: string
  /**
   * @description
   *   第三方数据ID
   */
  dataId: string
  /**
   * @description
   *   第三方数据来源，RISK_REPORT-风险上报
   */
  dataSource: string
  /**
   * @description
   *   状态相差天数
   * @format int64
   */
  deltaStatusNum: number
  /**
   * @description
   *   是否有人跟踪
   */
  followed: boolean
  /**
   * @description
   *   id
   * @format int64
   */
  id: number
  /**
   * @description
   *   待办类别
   */
  matterKind: string
  /**
   * @description
   *   待办类别中文名称
   */
  matterKindLabel: string
  /**
   * @description
   *   待办名称
   */
  matterName: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  planEndTime: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  planStartTime: string
  /**
   * @description
   *   上报进度
   */
  processPercent: number
  /**
   * @description
   *   进度表ID
   * @format int64
   */
  reportId: number
  /**
   * @description
   *   示险记录表ID
   * @format int64
   */
  riskId: number
  /**
   * @description
   *   状态
   */
  status: string
}

export interface ImportantFocusComment {
  /**
   * @description
   *   评论内容
   */
  commentContent: string
  /**
   * @description
   *   评论人itcode
   */
  commentItcode: string
  /**
   * @description
   *   评论人姓名
   */
  commentName: string
  /**
   * @description
   *   评论时间
   * @format date-time
   */
  commentTime: string
  /**
   * @description
   *   法人公司编码
   */
  compCode: string
  /**
   * @description
   *   法人公司
   */
  compCodeTxt: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体
   */
  cpmoCopTxt: string
  createName: string
  /** @format date-time */
  createTime: string
  createUid: string
  deleted: boolean
  /** @format int64 */
  id: number
  /**
   * @description
   *   重点关注id
   * @format int64
   */
  importantFocusId: number
  rdfaTenantId: string
  remark: string
  updateName: string
  /** @format date-time */
  updateTime: string
  updateUid: string
}

export interface ImportantFocusPrincipal {
  auditorItcode: string
  auditorName: string
  /** @format int64 */
  id: number
  /** @format int64 */
  importantFocusId: number
  remark: string
}

export interface ImportantFocusReport {
  /**
   * @description
   *   法人公司编码
   */
  compCode: string
  /**
   * @description
   *   法人公司
   */
  compCodeTxt: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体
   */
  cpmoCopTxt: string
  createName: string
  /** @format date-time */
  createTime: string
  createUid: string
  deleted: boolean
  /** @format int64 */
  id: number
  /**
   * @description
   *   重点关注id
   * @format int64
   */
  importantFocusId: number
  /**
   * @description
   *   上报进度说明
   */
  processDescribe: string
  /**
   * @description
   *   上报进度
   */
  processPercent: number
  rdfaTenantId: string
  remark: string
  /**
   * @description
   *   上报人itcode
   */
  reportItcode: string
  /**
   * @description
   *   上报人姓名
   */
  reportName: string
  /**
   * @description
   *   上报时间
   * @format date-time
   */
  reportTime: string
  updateName: string
  /** @format date-time */
  updateTime: string
  updateUid: string
}

/**
 * @description
 *   基础数据同步DTO
 */
export interface IndexBaseDataSynDto {
  /**
   * @description
   *   数据名称
   */
  dataName: string
  /**
   * @description
   *   同步时间
   * @format date-time
   */
  synDate: string
}

/**
 * @description
 *   基础数据新增
 */
export interface IndexBasisDataAddDto {
  /**
   * @description
   *   数据名称
   */
  dataName: string
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标监控ID
   * @format int64
   */
  indexId: number
  /**
   * @description
   *   组织code
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   同步完成时间
   * @format date-time
   */
  synFinishTime: string
  /**
   * @description
   *   同步状态：0：未同步；1：同步成功；3：同步失败
   * @format int32
   */
  synStatus: number
}

/**
 * @description
 *   基础数据查询入参
 */
export interface IndexBasisDataListReqDto {
  /**
   * @description
   *   数据名称
   */
  dataName: string
  /**
   * @description
   *   指标监控ID
   * @format int64
   */
  indexId: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   同步完成时间。预留入参
   * @format date-time
   */
  synFinishTime: string
  /**
   * @description
   *   同步状态：0：未同步；1：同步成功；3：同步失败。预留入参
   * @format int32
   */
  synStatus: number
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

/**
 * @description
 *   查询基础数据对象
 */
export interface IndexBasisDataListVo {
  /**
   * @description
   *   数据名称
   */
  dataName: string
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标监控ID
   * @format int64
   */
  indexId: number
  /**
   * @description
   *   同步完成时间
   * @format date-time
   */
  synFinishTime: string
  /**
   * @description
   *   同步状态：0：未同步；1：同步成功；3：同步失败
   * @format int32
   */
  synStatus: number
}

/**
 * @description
 *   指标数据同步DTO
 */
export interface IndexDataSynDto {
  /**
   * @description
   *   日期(yyyy-MM-dd)
   */
  generateDate: string
  /**
   * @description
   *   基础数据列表
   */
  indexBaseDataList: Array<IndexBaseDataSynDto>
  /**
   * @description
   *   派发工单列表
   */
  indexDistributionOrderSynList: Array<IndexDistributionOrderSynDto>
  indexExceptionReportSynList: Array<IndexExceptionReportSynDto>
  /**
   * @description
   *   指标信息列表
   */
  indexInfoSynList: Array<IndexInfoSynDto>
  /**
   * @description
   *   报告是否生成0：未生成；1：已生成
   * @format int32
   */
  isGenerateReport: number
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   报告url
   */
  reportUrl: string
}

/**
 * @description
 *   指标监控派发工单同步DTO
 */
export interface IndexDistributionOrderSynDto {
  /**
   * @description
   *   事项名称
   */
  matterName: string
  /**
   * @description
   *   责任人
   */
  responsiblePerson: string
  /**
   * @description
   *   工单状态0-待处理,1-处置中,2-处理完成,4-已关闭
   * @format int32
   */
  status: number
  /**
   * @description
   *   工单号
   */
  workOrderNo: string
}

/**
 * @description
 *   异常报告数据对象
 */
export interface IndexExceptionReportListVo {
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标监控ID
   * @format int64
   */
  indexId: number
}

/**
 * @description
 *   异常报告查询入参
 */
export interface IndexExceptionReportReqDto {
  /**
   * @description
   *   指标监控ID
   * @format int64
   */
  indexId: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

/**
 * @description
 *   指标监控异常报告DTO
 */
export interface IndexExceptionReportSynDto {
  /**
   * @description
   *   异常名称
   */
  exceptionName: string
  /**
   * @description
   *   异常原因
   */
  exceptionReason: string
  /**
   * @description
   *   备注
   */
  remark: string
}

/**
 * @description
 *   指标信息新增
 */
export interface IndexInfoAddDto {
  /**
   * @description
   *   计算维度
   */
  calculateDimension: string
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标编码
   */
  indexCode: string
  /**
   * @description
   *   指标监控ID
   * @format int64
   */
  indexId: number
  /**
   * @description
   *   指标名称
   */
  indexName: string
  /**
   * @description
   *   指标状态（0：未完成；1：已完成；2：异常）
   * @format int32
   */
  indexStatus: number
  /**
   * @description
   *   指标值
   */
  indexValue: string
  /**
   * @description
   *   组织code
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
}

/**
 * @description
 *   指标信息列表查询入参
 */
export interface IndexInfoListReqDto {
  /**
   * @description
   *   计算维度。预留入参
   */
  calculateDimension: string
  /**
   * @description
   *   指标编码
   */
  indexCode: string
  /**
   * @description
   *   指标监控ID
   * @format int64
   */
  indexId: number
  /**
   * @description
   *   指标名称
   */
  indexName: string
  /**
   * @description
   *   指标状态（0：未完成；1：已完成；2：异常）。异常列表使用
   * @format int32
   */
  indexStatus: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

/**
 * @description
 *   指标信息列表查询出参
 */
export interface IndexInfoListVo {
  /**
   * @description
   *   计算维度
   */
  calculateDimension: string
  /**
   * @description
   *   ID
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标编码
   */
  indexCode: string
  /**
   * @description
   *   指标监控ID
   * @format int64
   */
  indexId: number
  /**
   * @description
   *   指标名称
   */
  indexName: string
  /**
   * @description
   *   指标状态（0：未完成；1：已完成；2：异常）
   * @format int32
   */
  indexStatus: number
  /**
   * @description
   *   指标值
   */
  indexValue: string
}

/**
 * @description
 *   指标数据DTO
 */
export interface IndexInfoSynDto {
  /**
   * @description
   *   计算维度
   */
  calculateDimension: string
  /**
   * @description
   *   指标编码
   */
  indexCode: string
  /**
   * @description
   *   指标名称
   */
  indexName: string
  /**
   * @description
   *   指标状态 0：未完成；1：已完成；2：异常
   * @format int32
   */
  indexStatus: number
  /**
   * @description
   *   指标值
   */
  indexValue: string
}

export interface IndexInfoVO {
  /**
   * @description
   *   统计周期
   */
  calTime: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体名称
   */
  cpmoCopTxt: string
  /**
   * @description
   *   创建时间
   */
  creatDate: string
  /**
   * @description
   *   时间粒度
   */
  granName: string
  /**
   * @description
   *   时间粒度编码
   */
  granType: string
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: number
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   部门编码
   * @format int64
   */
  xaDept: number
  /**
   * @description
   *   部门描述
   */
  xaDeptTxt: string
  /**
   * @description
   *   大区编码
   */
  xaReig: string
  /**
   * @description
   *   大区描述
   */
  xaReigTxt: string
}

/**
 * @description
 *   监控管理查询入参
 */
export interface IndexMonitorSearchReqDto {
  /**
   * @description
   *   结束日期
   * @format date-time
   */
  endDate: string
  /**
   * @description
   *   指标监控类型(0:评估报告)
   * @format int32
   */
  indexMonitorType: number
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页数
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   开始日期
   * @format date-time
   */
  startDate: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

export interface IndexMonitorSearchVo {
  /**
   * @description
   *   全部基础数据数
   * @format int32
   */
  basicDataA: number
  /**
   * @description
   *   已完成基础数据数
   * @format int32
   */
  basicDataC: number
  /**
   * @description
   *   公司编码
   */
  companyCode: string
  companyInfoId: string
  /**
   * @description
   *   企业名称
   */
  companyName: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体名称
   */
  cpmoCopTxt: string
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /** @format int32 */
  deleteFlag: number
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   派发工单目标量
   * @format int32
   */
  distributionOrderA: number
  /**
   * @description
   *   派发工单实际量
   * @format int32
   */
  distributionOrderC: number
  /**
   * @description
   *   全部评估指标数
   * @format int32
   */
  evaluateIndexA: number
  /**
   * @description
   *   已计算指标数
   * @format int32
   */
  evaluateIndexC: number
  /**
   * @description
   *   异常指标数
   * @format int32
   */
  exceptionIndex: number
  /**
   * @description
   *   异常报告数
   * @format int32
   */
  exceptionReportNum: number
  /**
   * @description
   *   数据生成日期
   * @format date-time
   */
  generateDate: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标监控类型(0:评估报告)
   * @format int32
   */
  indexMonitorTpe: number
  /**
   * @description
   *   报告是否生成0：未生成；1：已生成
   * @format int32
   */
  isGenerateReport: number
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   报告url
   */
  reportUrl: string
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

export interface IndexRelateDTO {
  /**
   * @description
   *   衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   排序号
   * @format int32
   */
  kpiSort: number
}

export interface IndexSearchDTO {
  /**
   * @description
   *   是否查草稿（1：提交的 2：草稿的）
   * @format int32
   */
  draft: number
  /**
   * @description
   *   搜索关键词
   */
  keyword: string
  /**
   * @description
   *   待办类别（重点关注事项）
   */
  matterKinds: Array<string>
  /**
   * @description
   *   查询页数
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   查询条数
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   搜索tab（1：示险纠偏，2：重点关注事项，3：安全知家底，4：法律法规，5：安全微小课，6：良好实践，7：安全理正应用）
   * @format int32
   */
  searchTab: number
}

export interface IndexSearchMindVO {
  address: string
  categoryId: string
  categoryName: string
  clause: string
  /** @format int32 */
  collection: number
  /** @format int32 */
  comment: number
  content: string
  courseId: string
  courseName: string
  coverMap: string
  /** @format date-time */
  ctime: string
  /** @format int32 */
  del: number
  deptId: string
  deptName: string
  /** @format int32 */
  draft: number
  /** @format date-time */
  expirationTime: string
  file: string
  fileName: string
  fileSize: string
  fileType: string
  id: string
  /**
   * @description
   *   图标url（安全理正应用）
   */
  imageUrl: string
  /** @format date-time */
  implementationTime: string
  industryId: string
  /** @format int32 */
  insertType: number
  /**
   * @description
   *   是否收藏
   * @format int32
   */
  isCollection: number
  /**
   * @description
   *   是否赞过
   * @format int32
   */
  isFocus: number
  /**
   * @description
   *   是否踩过
   * @format int32
   */
  isStep: number
  /** @format date-time */
  issueTime: string
  /** @format int32 */
  jurisdiction: number
  keyword: string
  knowledgePoint: string
  legalProvisions: string
  /** @format int32 */
  likes: number
  orgId: string
  orgName: string
  /**
   * @description
   *   分享人的安全达人编号
   */
  peopleId: string
  /**
   * @description
   *   订阅标记（0：已订阅，1：未订阅）（安全理正应用）
   * @format int32
   */
  personalFlag: number
  picture: string
  richText: string
  section: string
  /** @format int32 */
  status: number
  /** @format int32 */
  step: number
  subTypeId: string
  /**
   * @description
   *   目标路径（安全理正应用）
   */
  targetUrl: string
  themeId: string
  themeName: string
  /**
   * @description
   *   时间
   */
  time: string
  /**
   * @description
   *   标题
   */
  title: string
  /** @format int32 */
  type: number
  /**
   * @description
   *   类型编号
   */
  typeCode: string
  unscramble: string
  url: string
  userId: string
  userName: string
  /** @format date-time */
  utime: string
  /** @format int32 */
  views: number
}

export interface IndexSearchVO {
  /**
   * @description
   *   第三方数据ID（重点关注事项）
   */
  dataId: string
  /**
   * @description
   *   第三方数据来源，RISK_REPORT-风险上报（重点关注事项）
   */
  dataSource: string
  /**
   * @description
   *   数据来源标签（示险纠偏）
   */
  datasourceTag: string
  /**
   * @description
   *   状态相差天数（重点关注事项）
   * @format int64
   */
  deltaStatusNum: number
  /**
   * @description
   *   详情页地址（示险纠偏）
   */
  detailUrl: string
  /**
   * @description
   *   是否有人跟踪（示险纠偏，重点关注事项）
   */
  followed: boolean
  /**
   * @description
   *   主键id（示险纠偏，重点关注事项）
   * @format int64
   */
  id: number
  /**
   * @description
   *   大数据指标值（安全知家底）
   */
  kpiValue: string
  /**
   * @description
   *   待办类别（重点关注事项）
   */
  matterKind: string
  /**
   * @description
   *   上报进度（重点关注事项）
   */
  processPercent: number
  /**
   * @description
   *   状态（重点关注事项）
   */
  status: string
  /**
   * @description
   *   时间
   */
  time: string
  /**
   * @description
   *   距离当前时间（示险纠偏）
   */
  timeFromCurrent: string
  /**
   * @description
   *   标题
   */
  title: string
}

export interface IndexSelectDTO {
  /**
   * @description
   *   组织编码
   */
  cpmoCop: string
  /**
   * @description
   *   创建时间
   */
  creatDate: string
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
}

/**
 * @description
 *   个人履职-详情页响应
 */
export interface IndividualPerformanceDetailVO {
  /**
   * @description
   *   当前红线数量
   */
  currentRedLine: string
  /**
   * @description
   *   现有红线列表
   */
  currentRedLineList: Array<RedLineList>
  /**
   * @description
   *   累计红线数量
   */
  redLineCount: string
  /**
   * @description
   *   累计红线列表
   */
  redLineCountList: Array<RedLineList>
  /**
   * @description
   *   待办任务数
   */
  toDoTask: string
  /**
   * @description
   *   待办任务列表
   */
  todoTaskLists: Array<TodoTaskList>
}

/**
 * @description
 *   个人履职请求
 */
export type IndividualPerformanceReqDto = any

/**
 * @description
 *   个人履职响应
 */
export interface IndividualPerformanceVO {
  /**
   * @description
   *   组织编码
   */
  cpmoCop: string
  /**
   * @description
   *   现有红线
   */
  currentRedLine: string
  /**
   * @description
   *   应得积分
   */
  dueScore: string
  /**
   * @description
   *   控股排名
   */
  holdingRanking: string
  /**
   * @description
   *   累计红线
   */
  redLineCount: string
  /**
   * @description
   *   企业排名
   */
  sort: string
  /**
   * @description
   *   当前积分
   */
  sumScore: string
  /**
   * @description
   *   待办任务
   */
  toDoTask: string
  /**
   * @description
   *   履职者itCode
   */
  userCode: string
}

export interface IndoorDangerCountDataVo {
  /**
   * @description
   *   隐患未整改个数
   * @format int64
   */
  dangerNotCount: number
  /**
   * @description
   *   隐患已整改个数
   * @format int64
   */
  dangerStopCount: number
}

export interface IndoorRescueCountDataVo {
  /**
   * @description
   *   处置中个数
   * @format int32
   */
  haveSum: number
  /**
   * @description
   *   今日已解除个数
   * @format int32
   */
  secureSum: number
  /**
   * @description
   *   待处置个数
   * @format int32
   */
  treatSum: number
}

export interface IndoorRescueDetailsListVo {
  /**
   * @description
   *   报警时间
   * @format date-time
   */
  alarmTime: string
  /**
   * @description
   *   公司编码
   */
  companyCode: string
  /**
   * @description
   *   公司名称
   */
  companyName: string
  /**
   * @description
   *   现场情况说明
   */
  content: string
  /**
   * @description
   *   进度跟踪列表
   */
  disposalProcessList: Array<IndoorRescueDisposalProcessVo>
  /**
   * @description
   *   关联ID
   * @format int64
   */
  eventId: number
  /**
   * @description
   *   隐患整改状态:0未整改，1已整改
   */
  improveStatus: string
  /**
   * @description
   *   纬度
   */
  latitude: string
  /**
   * @description
   *   险情等级 1：高，2：中，3：低'
   * @format int32
   */
  level: number
  /**
   * @description
   *   地址
   */
  location: string
  /**
   * @description
   *   经度
   */
  longitude: string
  /**
   * @description
   *   抢险类型 1：抢险，2：告警
   * @format int32
   */
  rescueType: number
  /**
   * @description
   *   服务站
   */
  serviceSite: string
  /**
   * @description
   *   状态：1待处置 4处理中 5已完成
   * @format int32
   */
  statusCode: number
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   单号编码
   */
  workOrder: string
  /**
   * @description
   *   负责人
   */
  workerName: string
  /**
   * @description
   *   负责人电话
   */
  workerPhone: string
}

export interface IndoorRescueDisposalProcessVo {
  /** @format date-time */
  createTime: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   节点内容
   */
  nodeContent: string
  /**
   * @description
   *   节点名称
   */
  nodeName: string
  /**
   * @description
   *   操作人员
   */
  operator: string
  /**
   * @description
   *   操作人员电话
   */
  operatorPhone: string
}

export interface IndoorRescueTabulationVo {
  /**
   * @description
   *   报警时间
   * @format date-time
   */
  alarmTime: string
  /**
   * @description
   *   现场情况说明
   */
  content: string
  /**
   * @description
   *   关联ID
   * @format int64
   */
  eventId: number
  /**
   * @description
   *   纬度
   */
  latitude: string
  /**
   * @description
   *   险情等级 1：高，2：中，3：低'
   * @format int32
   */
  level: number
  /**
   * @description
   *   地址
   */
  location: string
  /**
   * @description
   *   经度
   */
  longitude: string
  /**
   * @description
   *   抢险类型 1：抢险，2：告警
   * @format int32
   */
  rescueType: number
  /**
   * @description
   *   状态：1待处置 4处理中 5已完成
   * @format int32
   */
  statusCode: number
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   负责人
   */
  workerName: string
  /**
   * @description
   *   负责人电话
   */
  workerPhone: string
}

export interface InsuranceInfo {
  /**
   * @description
   *   年龄
   * @format int32
   */
  age: number
  /**
   * @description
   *   建档时间
   * @format date-time
   */
  entryTime: string
  /**
   * @description
   *   分包单位名称
   */
  labourEnterpriseName: string
  /**
   * @description
   *   电话
   */
  mobile: string
  /**
   * @description
   *   新增标签：新增
   */
  newAddLabel: string
  /**
   * @description
   *   所属班组
   */
  teamName: string
  /**
   * @description
   *   升级标签：升级
   */
  upLevelLabel: string
  /**
   * @description
   *   姓名
   */
  workerName: string
  /**
   * @description
   *   自建/分包标签：自建、分包
   */
  workerRoleTypeLabel: string
}

export interface InteractivePictureCardDTO {
  /**
   * @description
   *   组织Id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   图片链接
   */
  pictureUrl: string
  /**
   * @description
   *   风险报告路径url
   */
  riskReportUrl: string
  /**
   * @description
   *   加密token
   */
  token: string
}

export interface IotApplicationVO {
  /**
   * @description
   *   当前球机在线数量
   * @format int32
   */
  cameraOnlineCount: number
  /**
   * @description
   *   设备安全
   */
  deviceSafety: DeviceSafeVO
  /**
   * @description
   *   标签
   */
  label: string
  /**
   * @description
   *   今日重点列表
   */
  matterImportantVOS: Array<SafeOverviewMatterImportantVO>
  /**
   * @description
   *   事项级别
   */
  matterLevel: string
  /**
   * @description
   *   风险升级、降级状态：0-不变；1-升级；2-降级；3-新增；4-销项
   * @format int32
   */
  matterLevelStatus: number
  /**
   * @description
   *   昨日球机在线数量
   * @format int32
   */
  yesterdayCameraOnlineCount: number
}

export interface Item {
  /**
   * @description
   *   归类项变量名
   */
  key: string
  /**
   * @description
   *   归类项值（中文）
   */
  value: string
  /**
   * @description
   *   归类项id（可能没有）
   */
  valueId: string
}

export interface JSONObject {
  [key: string]: any
}

export interface KeyData {
  /**
   * @description
   *   展示数据变量名
   */
  key: string
  keyName: string
  /**
   * @description
   *   大数据指标编码
   */
  kpiCode: string
  /**
   * @description
   *   大数据指标名称
   */
  kpiName: string
  /**
   * @description
   *   单位
   */
  unit: string
  /**
   * @description
   *   展示数据值
   */
  value: string
}

/**
 * @description
 *   基础指标类
 */
export interface KeyEquipmentHomePageVO {
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   未整改数
   */
  noDealNumber: string
  /**
   * @description
   *   单位
   */
  unit: string
}

export interface KeyPointsDTO {
  /**
   * @description
   *   业务类型
   */
  businessType: string
  /**
   * @description
   *   类别：1：关注，2：已读，3：已纠偏，4：已督办
   * @format int32
   */
  kind: number
  /**
   * @description
   *   事项类别编码
   */
  matterCategoryCode: string
  /**
   * @description
   *   事项描述
   */
  matterDescription: string
  /**
   * @description
   *   事项详情信息
   */
  matterDetail: string
  /**
   * @description
   *   程度（红、橙、黄、蓝）
   */
  matterLevel: string
  /**
   * @description
   *   事项进度编码
   */
  matterStateCode: string
  /**
   * @description
   *   事项时间
   * @format date-time
   */
  matterTime: string
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   负责人id
   */
  principalUid: string
  /**
   * @description
   *   标题
   */
  title: string
}

export interface KeyPointsVO {
  companyInfoId: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体名称
   */
  cpmoCopTxt: string
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /** @format int32 */
  deleteFlag: number
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /** @format int64 */
  id: number
  /**
   * @description
   *   经度
   */
  latitude: string
  /**
   * @description
   *   纬度
   */
  longitude: string
  /**
   * @description
   *   zdfx-重大风险;jdfx-较大风险;ybfx-一般风险;dfx-较低风险
   */
  matterLevel: string
  /**
   * @description
   *   施工阶段:初始化，进行中，已完成
   */
  matterStateCode: string
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   负责人姓名
   */
  principalName: string
  /**
   * @description
   *   施工地址
   */
  proAddress: string
  /**
   * @description
   *   工程类型
   */
  proTypeName: string
  /**
   * @description
   *   作业负责人-手机号码
   */
  projectManagerPhone: string
  /**
   * @description
   *   作业负责人
   */
  projectManagerRealName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  tenantId: string
  /**
   * @description
   *   重点事项-标题
   */
  title: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
  /**
   * @description
   *   结束时间
   */
  workEndTime: string
  /**
   * @description
   *   等级 1:一级 2:二级 3:三级 4:四级
   */
  workGrade: string
  /**
   * @description
   *   作业时间
   * @format date-time
   */
  workStartTime: string
  /**
   * @description
   *   状态1、进行中 2、已完成 3、阶段完成
   */
  workState: string
  /**
   * @description
   *   作业类型
   */
  workTypeName: string
}

export interface KpiAssessmentLineVO {
  /**
   * @description
   *   考核线
   */
  assessmentLine: string
  /**
   * @description
   *   衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   衡量指标名称
   */
  firstKpiName: string
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   大数据指标编码
   */
  kpiCode: string
  /**
   * @description
   *   大数据指标名称
   */
  kpiName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   发布状态：0已发布，1下架，2建设中
   * @format int32
   */
  publishStatus: number
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
}

export interface KpiAssessmentQueryDto {
  /**
   * @description
   *   一级指标编码
   */
  firstKpiCode: string
}

/**
 * @description
 *   公司指标
 */
export interface KpiCompanyVO {
  /**
   * @description
   *   公司具体指标集合 - list
   */
  baseKpiCompanyVO: Array<BaseKpiCompanyVO>
  /**
   * @description
   *   公司具体指标集合 -map
   */
  baseKpiMap: {
    /**
        @description
          公司具体指标集合 -map  */
    [propertyName: string]: BaseKpiCompanyVO
  }
  /**
   * @description
   *   公司编码
   */
  compCode: string
  /**
   * @description
   *   公司名称
   */
  compName: string
}

export interface KpiConfig {
  /**
   * @description
   *   波动范围(变化范围)
   */
  changeRange: string
  /**
   * @description
   *   波动范围(变化范围)-左符号
   */
  changeRangeF1: string
  /**
   * @description
   *   波动范围(变化范围)-右值
   */
  changeRangeV1: string
  /**
   * @description
   *   公司编码
   */
  compCode: string
  /**
   * @description
   *   公司名称
   */
  compCodeTxt: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   是否被删除(0:正常,1:删除)
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   时间粒度
   */
  granName: string
  /**
   * @description
   *   时间粒度编码
   */
  granType: string
  /**
   * @description
   *   主键 - 自增序列
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标等级
   */
  kpiLevel: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标范围
   */
  kpiRange: string
  /**
   * @description
   *   指标范围-左符号
   */
  kpiRangeF1: string
  /**
   * @description
   *   指标范围-右符号
   */
  kpiRangeF2: string
  /**
   * @description
   *   指标范围-左值
   */
  kpiRangeV1: string
  /**
   * @description
   *   指标范围-右值
   */
  kpiRangeV2: string
  /**
   * @description
   *   指标用途
   */
  kpiUse: string
  /**
   * @description
   *   指标值类型
   */
  kpiValueType: string
  /**
   * @description
   *   管理实体编码
   */
  orgCode: string
  /**
   * @description
   *   管理实体名称
   */
  orgName: string
  /**
   * @description
   *   上(父)级指标编码
   */
  parentKpiCode: string
  /**
   * @description
   *   上(父)级指标名称
   */
  parentKpiName: string
  /**
   * @description
   *   RDFA租户ID
   */
  rdfaTenantId: string
  /**
   * @description
   *   安全心指标名称
   */
  shKpiName: string
  /**
   * @description
   *   存储表名
   */
  storageTableName: string
  /**
   * @description
   *   所属行业
   */
  trade: string
  /**
   * @description
   *   单位
   */
  unit: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   修改时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
  /**
   * @description
   *   大区编码
   */
  xaReig: string
  /**
   * @description
   *   大区名称
   */
  xaReigTxt: string
}

export interface KpiConfigQuery {
  kpiConfig: KpiConfig
  pageBase: PageBase
}

export interface KpiContent {
  compCode: string
  compCodeTxt: string
  cpmoCop: string
  cpmoCopTxt: string
  ruleCalcTime: string
  ruleKpiCode: string
  ruleKpiName: string
  ruleKpiType: string
  ruleKpiUnit: string
  ruleKpiUpdateTime: string
  ruleKpiValue: string
  type__8003: string
  type__8019: string
  type__8022: string
  type__8024: string
  type__8101: string
  type__8103: string
  type__8114: string
  type__8401: string
  xaDept: string
  xaDeptTxt: string
  xaReig: string
  xaReigTxt: string
}

export interface KpiContinueLowerParam {
  /** @format int32 */
  continueLowerDays: number
  kpiCode: string
  /**
   * @description
   *   组织范围
   */
  orgIds: Array<string>
  /**
   * @description
   *   时间范围字段
   */
  periodColumn: string
}

export interface KpiData {
  /**
   * @description
   *   公司编码
   */
  compCode: string
  /**
   * @description
   *   公司名称
   */
  compCodeTxt: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   是否被删除(0:正常,1:删除)
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   主键 - 自增序列
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   最新指标值
   */
  kpiValueNew: string
  /**
   * @description
   *   上期指标值
   */
  kpiValueOld: string
  /**
   * @description
   *   是否异常(0-正常，1-指标范围异常)
   */
  normalFlag: string
  /**
   * @description
   *   管理实体编码
   */
  orgCode: string
  /**
   * @description
   *   管理实体名称
   */
  orgName: string
  /**
   * @description
   *   推送结束时间
   * @format date-time
   */
  pushEndTime: string
  /**
   * @description
   *   推送开始时间
   * @format date-time
   */
  pushStartTime: string
  /**
   * @description
   *   推送时间
   * @format date-time
   */
  pushTime: string
  /**
   * @description
   *   RDFA租户ID
   */
  rdfaTenantId: string
  /**
   * @description
   *   安全心指标名称
   */
  shKpiName: string
  shKpiNameKpiCodeList: Array<string>
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   修改时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
  /**
   * @description
   *   大区编码
   */
  xaReig: string
  /**
   * @description
   *   大区名称
   */
  xaReigTxt: string
}

export interface KpiDataCredibilityQueryDto {
  /**
   * @description
   *   一级指标编码
   */
  firstKpiCode: string
}

export interface KpiDataQuery {
  kpiData: KpiData
  pageBase: PageBase
}

export interface KpiDiagnosis {
  displayColor: string
  kpiName: string
}

export interface KpiDistribution {
  kpiCode: string
  kpiName: string
  /**
   * @description
   *   类型
   */
  type: string
  /**
   * @description
   *   单位
   */
  unit: string
  /**
   * @description
   *   值
   */
  value: string
}

export interface KpiGridTrendData {
  /**
   * @description
   *   网格ID
   */
  gridId: string
  /**
   * @description
   *   网格名称
   */
  gridName: string
  /**
   * @description
   *   单位
   */
  unit: string
  /**
   * @description
   *   值
   */
  value: string
}

export interface KpiGridTrendQueryDto {
  /**
   * @description
   *   一级衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   查询json
   */
  jsonStr: string
  /**
   * @description
   *   查询时间.如果时间单位是天(DAY):格式为yyyy-MM-dd; 如果时间单位是月（MONTH）:格式为yyyy-MM
   */
  queryTime: string
  /**
   * @description
   *   查询指标
   */
  statisticCodes: Array<GridStatisticCode>
  /**
   * @description
   *   时间单位：天（DAY）、月(MONTH)
   */
  timeUnit: string
}

export interface KpiGridTrendVO {
  /**
   * @description
   *   数据
   */
  dataList: Array<KpiGridTrendData>
  /**
   * @description
   *   安全心指标编码
   */
  secondKpiCode: string
  /**
   * @description
   *   安全心指标名称
   */
  secondKpiName: string
  /**
   * @description
   *   展现类型 LINE折线图，BAR柱形图
   */
  type: string
}

/**
 * @description
 *   指标定义
 */
export interface KpiIllustrateVO {
  /**
   * @description
   *   数据源
   */
  dataSource: string
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标规则
   */
  kpiContent: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   场景
   * @format int32
   */
  scene: number
  /**
   * @description
   *   统计周期
   */
  statisticalCycle: string
}

export interface KpiIndicatorDetailsDto {
  firstKpiCode: string
  /**
   * @description
   *   分组类型
   */
  groupBy: string
  jsonStr: string
  /**
   * @description
   *   排序的字段kpiCode
   */
  orderByKpiCode: string
  /**
   * @description
   *   排序类型 ASC-正序(默认) DESC-倒序
   */
  orderType: string
}

export interface KpiIndicatorDetailsVO {
  /**
   * @description
   *   展示数据
   */
  data: Array<KeyData>
  /**
   * @description
   *   归类项
   */
  item: Array<Item>
}

/**
 * @description
 *   指标库
 */
export interface KpiLibraryVO {
  /**
   * @description
   *   条件格式
   */
  filterCondition: string
  /**
   * @description
   *   时间粒度
   */
  granName: string
  /**
   * @description
   *   时间粒度编码
   */
  granType: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   大数据指标编码
   */
  kpiCode: string
  /**
   * @description
   *   安全心指标编码
   */
  kpiCodeSafe: string
  /**
   * @description
   *   数据类型：num：数字；percent：百分比
   */
  kpiFieldType: string
  /**
   * @description
   *   安全心指标名称
   */
  kpiNameSafe: string
  /**
   * @description
   *   级别
   */
  level: string
  /**
   * @description
   *   参考格式
   */
  referenceFormat: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   场景分类编码
   */
  sceneCode: string
  /**
   * @description
   *   场景分类名称
   */
  sceneName: string
}

export interface KpiMatter {
  /**
   * @description
   *   异常指标集合
   */
  abnormalIndicators: Array<KpiDiagnosis>
  displayColor: string
  kpiMatter: string
}

export interface KpiProportionDto {
  /**
   * @description
   *   一级指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   查询json
   */
  jsonStr: string
}

export interface KpiProportionVO {
  dataList: Array<KpiDistribution>
  /**
   * @description
   *   总数
   */
  sumOfAll: string
}

export interface KpiSafeFamilyQueryDTO {
  /**
   * @description
   *   指标kpi编码列表
   */
  kpiCodeList: Array<string>
  /**
   * @description
   *   用户公司id
   */
  orgId: string
}

export interface KpiSafeFamilySelectDTO {
  /**
   * @description
   *   指标kpi编码列表
   */
  kpiName: string
  /**
   * @description
   *   用户公司id
   */
  orgId: string
}

export interface KpiSecondDetailDto {
  firstKpiCode: string
  secondCodes: Array<string>
}

export interface KpiSelectDTO {
  /**
   * @description
   *   用户公司id
   */
  cpmocop: string
  /**
   * @description
   *   行业类型
   */
  industryCategoryCode: string
  /**
   * @description
   *   场景类型
   */
  sceneCode: string
}

export interface KpiTrendData {
  /**
   * @description
   *   时间
   */
  dateTime: string
  /**
   * @description
   *   值
   */
  value: string
}

export interface KpiTrendQueryDto {
  /**
   * @description
   *   结束时间.如果时间单位是天(DAY):格式为yyyy-MM-dd; 如果时间单位是月（MONTH）:格式为yyyy-MM
   */
  endTime: string
  /**
   * @description
   *   一级衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   大数据时间粒度编码
   */
  granType: string
  /**
   * @description
   *   开始时间.如果时间单位是天(DAY):格式为yyyy-MM-dd; 如果时间单位是月（MONTH）:格式为yyyy-MM
   */
  startTime: string
  /**
   * @description
   *   查询指标
   */
  statisticCodes: Array<StatisticCode>
  /**
   * @description
   *   时间单位：天（DAY）、月(MONTH)
   */
  timeUnit: string
  /**
   * @description
   *   时间单位数量,不传默认为1
   * @format int32
   */
  timeUnitNum: number
}

export interface KpiTrendVO {
  /**
   * @description
   *   数据
   */
  dataList: Array<KpiTrendData>
  /**
   * @description
   *   安全心指标编码
   */
  secondKpiCode: string
  /**
   * @description
   *   安全心指标名称
   */
  secondKpiName: string
  /**
   * @description
   *   展现类型 LINE折线图，BAR柱形图
   */
  type: string
  /**
   * @description
   *   单位
   */
  unit: string
}

/**
 * @description
 *   指标查询
 */
export interface KpiValueSearch {
  /**
   * @description
   *   公司编码
   */
  cpmoCop: string
  /**
   * @description
   *   当前用户是否是产品运营角色
   */
  isOperatorRule: boolean
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
}

/**
 * @description
 *   新增
 */
export interface LabelAddDTO {
  /**
   * @description
   *   标签编码
   */
  labelCode: string
  /**
   * @description
   *   标签名称
   */
  labelName: string
}

export interface LabelBindOrgAddDTO {
  /**
   * @description
   *   标签编码
   */
  labelCode: string
  /**
   * @description
   *   标签名称
   */
  labelName: string
  /**
   * @description
   *   公司/部门表ID
   * @format int64
   */
  orgCompanyMapId: number
}

export interface LabelBindOrgDTO {
  /**
   * @description
   *   所选择的标签列表
   */
  labelList: Array<LabelAddDTO>
  /**
   * @description
   *   公司/部门表ID
   * @format int64
   */
  orgCompanyMapId: number
}

export interface LabelInfoQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
}

/**
 * @description
 *   查询详情返回
 */
export interface LabelInfoVO {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   标签管理主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   标签编码
   */
  labelCode: string
  /**
   * @description
   *   标签名称
   */
  labelName: string
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

/**
 * @description
 *   更新
 */
export interface LabelUpdateDTO {
  /**
   * @description
   *   标签管理主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   标签编码
   */
  labelCode: string
  /**
   * @description
   *   标签名称
   */
  labelName: string
}

/**
 * @description
 *   泄露监测出参对象
 */
export interface LeakDetectionListVO {
  /**
   * @description
   *   告警设备指标主键id(主表，设备指标)
   */
  alarmId: string
  /**
   * @description
   *   告警名称
   */
  alarmName: string
  /**
   * @description
   *   告警时间
   * @format date-time
   */
  alarmTime: string
  /**
   * @description
   *   报警线
   */
  alterLevel: string
  /**
   * @description
   *   海康相机编号(多个，隔开)
   */
  cameraIndexCode: string
  /**
   * @description
   *   区域负责人itcode
   */
  chargePersonItcode: string
  /**
   * @description
   *   区域负责人姓名
   */
  chargePersonName: string
  /**
   * @description
   *   区域负责人电话
   */
  chargePersonPhone: string
  /**
   * @description
   *   公司编码
   */
  companyCode: string
  /**
   * @description
   *   公司名称
   */
  companyName: string
  /**
   * @description
   *   浓度值
   */
  concentration: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   巡检设备种类(laser,ppb)
   */
  deviceKinds: string
  /**
   * @description
   *   巡检设备种类文本描述
   */
  deviceKindsTxt: string
  /**
   * @description
   *   巡检设备：car 巡检车；drone 无人机
   */
  deviceType: string
  /**
   * @description
   *   处置中时间
   * @format date-time
   */
  dispatchWorkTime: string
  /**
   * @description
   *   巡检距离
   */
  distance: string
  /**
   * @description
   *   预警地址
   */
  earlyWarnAddress: string
  /**
   * @description
   *   阈值
   */
  earlyWarnValue: string
  /**
   * @description
   *   首次告警时间
   * @format date-time
   */
  firstAlarmTime: string
  /**
   * @description
   *   处置状态: 0待处置 1处置中 2已完成
   * @format int32
   */
  handleStatus: number
  /**
   * @description
   *   处置状态描述
   */
  handleStatusName: string
  /**
   * @description
   *   记录id
   */
  id: string
  /**
   * @description
   *   事件纬度
   * @format double
   */
  latitude: number
  /**
   * @description
   *   级别：1 高、2 中、3 低  [默认高]
   * @format int32
   */
  level: number
  /**
   * @description
   *   事件经度
   * @format double
   */
  longitude: number
  /**
   * @description
   *   是否恢复正常(是/否)
   */
  normal: string
  /**
   * @description
   *   报警点描述
   */
  positionRemark: string
  /**
   * @description
   *   问题原因描述
   */
  reason: string
  /**
   * @description
   *   解除时间
   * @format date-time
   */
  releaseTime: string
  /**
   * @description
   *   任务地址
   */
  taskAddress: string
  /**
   * @description
   *   任务编号（唯一标识）
   */
  taskCode: string
  /**
   * @description
   *   任务名称
   */
  taskName: string
  /**
   * @description
   *   气体浓度单位
   */
  unit: string
  /**
   * @description
   *   报警规则(阈值) / 告警原因
   */
  value: string
}

/**
 * @description
 *   风险地图-泄漏检测
 */
export interface LeakDetectionPlanVO {
  /**
   * @description
   *   已完成公里数
   */
  finishedLength: number
  /**
   * @description
   *   计划公里数
   */
  planLength: number
  /**
   * @description
   *   巡检卫士计划完成率
   */
  planRate: number
}

export interface ListAccountInfoRecordVO {
  /**
   * @description
   *   参与者账号id
   */
  accountId: string
  /**
   * @description
   *   邮箱
   */
  email: string
  /**
   * @description
   *   登录名
   */
  loginName: string
  /**
   * @description
   *   手机号
   */
  mobile: string
  /**
   * @description
   *   昵称
   */
  nickname: string
  status: string
  /** @format int32 */
  type: number
}

export interface ListAccountInfoVO {
  /** @format int32 */
  current: number
  /** @format int32 */
  pages: number
  records: Array<ListAccountInfoRecordVO>
  /** @format int32 */
  size: number
  /** @format int32 */
  total: number
}

export interface ListOrgInfoVO {
  /**
   * @description
   *   是否是兄弟节点
   */
  brotherLeaf: boolean
  /**
   * @description
   *   是否可选
   */
  checkEnable: boolean
  /**
   * @description
   *   所有子组织id
   */
  childOrgIds: string
  /**
   * @description
   *   所有子组织名称
   */
  childOrgNames: string
  code: string
  funcType: string
  /**
   * @description
   *   组织id
   */
  id: string
  /**
   * @description
   *   全路径id 组织ID结构
   */
  idPath: string
  /**
   * @description
   *   是否叶子节点
   */
  leaf: boolean
  /**
   * @description
   *   组织名称
   */
  name: string
  /**
   * @description
   *   全路径名称 组织名称结构
   */
  namePath: string
  /**
   * @description
   *   是否为不可修改组织  0 不可以修改 1 可以修改
   * @format int32
   */
  noModifiedOrg: number
  /**
   * @description
   *   规划数
   * @format int32
   */
  planNum: number
  /**
   * @description
   *   员工数量
   * @format int32
   */
  staffCount: number
  /** @format int32 */
  status: number
  tenantId: string
  topOrgId: string
  /** @format int32 */
  type: number
}

export interface ListRoleAuthVO {
  /**
   * @description
   *   应用编码
   */
  appId: string
  /**
   * @description
   *   页面资源权限集合
   */
  authPageVos: Array<PageAuthVO>
}

export interface ListStaffInfoRecordVO {
  /**
   * @description
   *   参与者id
   */
  accountId: string
  /**
   * @description
   *   enn_user 新奥员工
   */
  dataSource: string
  deptType: string
  /**
   * @description
   *   工号
   */
  empNo: string
  /**
   * @description
   *   员工状态 (3：正式；0：离职；2：退休 1:试用期；5：待离职)
   */
  empStatus: string
  /**
   * @description
   *   是否为新奥员工(true:是新奥员工,false:非新奥员工)
   */
  enuStaffFlag: boolean
  id: string
  /**
   * @description
   *   手机号
   */
  mobile: string
  /**
   * @description
   *   昵称
   */
  nickName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织id全路径
   */
  orgIdPath: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   组织名称全路径
   */
  orgNamePath: string
}

export interface ListStaffInfoVO {
  /** @format int32 */
  current: number
  /** @format int32 */
  pages: number
  records: Array<ListStaffInfoRecordVO>
  /** @format int32 */
  size: number
  /** @format int32 */
  total: number
}

export interface ListUserGroupInfoVO {
  /** @format int32 */
  current: number
  /** @format int32 */
  pages: number
  records: Array<UserGroupInfoVO>
  /** @format int32 */
  size: number
  /** @format int32 */
  total: number
}

export interface LoginParams {
  /**
   * @description
   *   租户应用ID
   */
  appId: string
  /**
   * @description
   *   密码
   */
  password: string
  /**
   * @description
   *   是否保持登录
   */
  rememberMe: boolean
  /**
   * @description
   *   租户id
   */
  tenantId: string
  /**
   * @description
   *   登录方式
   */
  type: string
  /**
   * @description
   *   登录名
   */
  userName: string
}

/**
 * @description
 *   管理人员证件详情
 */
export interface ManageCertificateDetailVO {
  /**
   * @description
   *   临期证件个数
   * @format int32
   */
  aboutToExpiredRiskCount: number
  /**
   * @description
   *   临期证件数据列表
   */
  aboutToExpiredRisks: Array<CertificateInfo>
  /**
   * @description
   *   销项个数
   * @format int32
   */
  cancelRiskCount: number
  /**
   * @description
   *   销项数据列表
   */
  cancelRisks: Array<CancelCertificateInfo>
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   日期
   */
  date: string
  /**
   * @description
   *   超期证件个数
   * @format int32
   */
  expiredRiskCount: number
  /**
   * @description
   *   超期证件数据列表
   */
  expiredRisks: Array<CertificateInfo>
  /**
   * @description
   *   卡片说明
   */
  indexSummary: string
  /**
   * @description
   *   卡片说明(分享)
   */
  indexSummaryShare: string
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   新增临期个数
   * @format int32
   */
  newAddAboutToExpiredCount: number
  /**
   * @description
   *   新增超期个数
   * @format int32
   */
  newAddExpiredCount: number
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   统计数据
   */
  staData: Array<StaData>
  /**
   * @description
   *   统计年份
   */
  staYear: string
  /**
   * @description
   *   处置建议
   */
  suggestion: string
}

export interface MatterChangeHolderDTO {
  /**
   * @description
   *   改派留言
   */
  changeHolderContent: string
  /**
   * @description
   *   事项id
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   整改人工号
   */
  rectifyUserNo: string
  /**
   * @description
   *   示险隐患id
   */
  troubleId: string
}

export interface MatterDeleteDTO {
  /**
   * @description
   *   年度规划id
   */
  businessId: string
}

export interface MatterImportantDTO {
  /**
   * @description
   *   地址json串
   */
  address: string
  /**
   * @description
   *   扩展字段
   */
  businessExp: string
  /**
   * @description
   *   业务id
   */
  businessId: string
  /**
   * @description
   *   业务状态code
   */
  businessStateCode: string
  /**
   * @description
   *   业务状态名称
   */
  businessStateName: string
  /**
   * @description
   *   业务类型
   */
  businessType: string
  /**
   * @description
   *   卡片概述
   */
  cardSummary: string
  companyInfoId: string
  /**
   * @description
   *   已完成数量
   * @format int32
   */
  completedNum: number
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体名称
   */
  cpmoCopTxt: string
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /** @format int32 */
  deleteFlag: number
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   应急（突发事件）gpt概述
   */
  emergencyGptSummary: string
  /**
   * @description
   *   应急（突发事件）进展
   */
  emergencyProcess: string
  /**
   * @description
   *   今日事项排序
   * @format int32
   */
  eventSort: number
  /**
   * @description
   *   是否关注 0：未关注，1：已关注
   * @format int32
   */
  focusStatus: number
  /**
   * @description
   *   整改人姓名
   */
  holderName: string
  /**
   * @description
   *   整改人手机号
   */
  holderPhone: string
  /**
   * @description
   *   整改人id
   */
  holderUid: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   首页概述
   */
  indexSummary: string
  /**
   * @description
   *   是否今日top3标识： 1-是 0-否
   * @format int32
   */
  isTodayEvent: number
  /**
   * @description
   *   事项类型：业务风险类、事故事件类、指标类
   */
  itemClassification: string
  /**
   * @description
   *   事项进度编码
   */
  kpiCategoryCode: string
  /**
   * @description
   *   事项进度名称
   */
  kpiCategoryName: string
  /**
   * @description
   *   责任人姓名
   */
  liableName: string
  /**
   * @description
   *   责任人手机号
   */
  liablePhone: string
  /**
   * @description
   *   责任人id
   */
  liableUid: string
  /**
   * @description
   *   事项类别编码
   */
  matterCategoryCode: string
  /**
   * @description
   *   事项类别名称
   */
  matterCategoryName: string
  /**
   * @description
   *   事项描述
   */
  matterDescription: string
  /**
   * @description
   *   事项详情信息
   */
  matterDetail: string
  /**
   * @description
   *   事项处置历史
   */
  matterHistory: string
  /**
   * @description
   *   程度（红、橙、黄、蓝）
   */
  matterLevel: string
  /**
   * @description
   *   事项进度信息
   */
  matterStateCode: string
  /**
   * @description
   *   状态名称
   */
  matterStateName: string
  /**
   * @description
   *   状态时间
   * @format date-time
   */
  matterStateTime: string
  /**
   * @description
   *   事项时间
   * @format date-time
   */
  matterTime: string
  /**
   * @description
   *   指标事项最近一次刷新时间
   * @format date-time
   */
  matterUpdateTime: string
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   点位信息
   */
  pointInformation: string
  /**
   * @description
   *   业务负责人姓名
   */
  principalName: string
  /**
   * @description
   *   业务负责人手机号
   */
  principalPhone: string
  /**
   * @description
   *   业务负责人id
   */
  principalUid: string
  /**
   * @description
   *   进展展示标识 1-推送安全示险平台 2-智能运营中心
   */
  progressDisplay: string
  /**
   * @description
   *   是否推送示险平台推送一号位
   */
  pushMatterToTroublePlatformFlag: boolean
  /**
   * @description
   *   推送时间
   * @format date-time
   */
  pushTime: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   是否已读 0：未读，1：已读
   * @format int32
   */
  readStatus: number
  /**
   * @description
   *   入户安检结束文案
   */
  rhajCompletedDesc: string
  /**
   * @description
   *   入户安检结束标题
   */
  rhajCompletedTitle: string
  /**
   * @description
   *   风险作战
   */
  riskCombat: string
  /**
   * @description
   *   规则执行次数
   */
  riskCount: string
  /**
   * @description
   *   安全风险智能地图触发的处置进展描述
   */
  robotDesc: string
  /**
   * @description
   *   智伴文案
   */
  robotSummary: string
  /**
   * @description
   *   角色展示：1:一号位可看，2:召集人可看
   * @format int32
   */
  roleDisplay: number
  /**
   * @description
   *   规则动作id
   */
  ruleActionIds: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   是否已经发送icome 0-未发送 1-已发送
   * @format int32
   */
  sendIcome: number
  /**
   * @description
   *   建议，gpt或人工方式
   */
  solution: string
  /**
   * @description
   *   是否督办 0：未督办，1：已督办
   * @format int32
   */
  superviseStatus: number
  tenantId: string
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   安全示险Id
   */
  troubleId: string
  /**
   * @description
   *   安全示险进度信息
   */
  troubleLogs: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

export interface MatterImportantFocusIndexQueryDTO {
  /**
   * @description
   *   查询类型：1：已关注，2：已读，3：已纠偏，4：已督办，5：全部,首页列表不用传
   * @format int32
   */
  kindType: number
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   用户8位工号
   */
  userId: string
}

export interface MatterImportantFocusNewQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   查询类型：1：已关注，2：进行中，3：已完成，4：全部
   * @format int32
   */
  kindType: number
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   用户8位工号
   */
  userId: string
}

export interface MatterImportantFocusQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   查询类型：1：已关注，2：已读，3：已纠偏，4：已督办，5：全部，6：已完成
   * @format int32
   */
  kindType: number
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   用户8位工号
   */
  userId: string
}

export interface MatterImportantFocusQueryInfoDTO {
  /**
   * @description
   *   事项进度编码
   */
  kpiCategoryCode: string
  /**
   * @description
   *   事项时间:年月日即可 yyyy-mm-dd
   */
  matterTime: string
  /**
   * @description
   *   组织编码
   */
  orgCode: string
}

export interface MatterImportantFocusRiskRobotNewQueryDTO {
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   角色类型:DIRECTOR-一号位，MANAGER-理正
   */
  roleType: string
}

export interface MatterImportantFocusRiskRobotQueryDTO {
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   角色类型
   */
  roleType: string
}

export interface MatterImportantFocusRiskTodayQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   角色类型:DIRECTOR-一号位，MANAGER-理正
   */
  roleType: string
}

export interface MatterImportantFocusRobotVO {
  /**
   * @description
   *   时间最长的标题
   */
  longTimeTitle: string
  /**
   * @description
   *   撒点
   */
  pointInformation: string
  /**
   * @description
   *   后续进入文案
   */
  robotAgainInfo: string
  /**
   * @description
   *   首次进入文案
   */
  robotFirstInfo: string
  /**
   * @description
   *   今日重点关注数量
   * @format int32
   */
  todayFocusCount: number
  /**
   * @description
   *   今日重点高风险数量
   * @format int32
   */
  todayHighRiskCount: number
  /**
   * @description
   *   当前登录人名称
   */
  userName: string
  /**
   * @description
   *   昨日已完成数量
   * @format int32
   */
  yesterdayCompletedCount: number
}

export interface MatterImportantFocusSevenDayDTO {
  /**
   * @description
   *   风险级别
   */
  matterLevel: string
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   角色类型:DIRECTOR-一号位，MANAGER-理正
   */
  roleType: string
}

export interface MatterImportantFocusStateVO {
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   事项进度编码
   */
  matterStateCode: string
  /**
   * @description
   *   事项进度名称
   */
  matterStateName: string
}

export interface MatterImportantFocusTodayQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   人员八位工号
   */
  userId: string
}

export interface MatterImportantFocusUrgingVO {
  companyInfoId: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体名称
   */
  cpmoCopTxt: string
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /** @format int32 */
  deleteFlag: number
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /** @format int64 */
  id: number
  /**
   * @description
   *   事项id
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
  /**
   * @description
   *   催办留言
   */
  urgingContent: string
  /**
   * @description
   *   催办回复
   */
  urgingDesc: string
  /**
   * @description
   *   催办类型 1：系统生成 2：点击
   * @format int32
   */
  urgingType: number
  /**
   * @description
   *   催办人域账号
   */
  urgingUserItCode: string
  /**
   * @description
   *   催办人姓名
   */
  urgingUserName: string
  /**
   * @description
   *   催办人工号
   */
  urgingUserNo: string
  /**
   * @description
   *   催办人手机号
   */
  urgingUserPhone: string
  /**
   * @description
   *   被催办人域账号
   */
  urgingedUserItCode: string
}

export interface MatterImportantFocusVO {
  /**
   * @description
   *   地址信息
   */
  address: string
  /**
   * @description
   *   业务扩展字段
   */
  businessExp: string
  /**
   * @description
   *   业务id
   */
  businessId: string
  /**
   * @description
   *   业务状态code
   */
  businessStateCode: string
  /**
   * @description
   *   业务状态名称
   */
  businessStateName: string
  /**
   * @description
   *   业务类型
   */
  businessType: string
  /**
   * @description
   *   卡片概述
   */
  cardSummary: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   数据采集来源：物联
   */
  dataCollectType: string
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源List
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   应急（突发事件）gpt概述
   */
  emergencyGptSummary: string
  /**
   * @description
   *   应急（突发事件）进展
   */
  emergencyProcess: string
  /**
   * @description
   *   评估指标算法
   */
  evalAlgorithm: string
  /**
   * @description
   *   评估项名称
   */
  evalName: string
  /**
   * @description
   *   评估项标准
   */
  evalStandard: string
  /**
   * @description
   *   今日事项排序
   * @format int32
   */
  eventSort: number
  /**
   * @description
   *   关注人姓名
   */
  focusReadName: string
  /**
   * @description
   *   关注人ID
   */
  focusReadUid: string
  /**
   * @description
   *   整改人姓名
   */
  holderName: string
  /**
   * @description
   *   整改人手机号
   */
  holderPhone: string
  /**
   * @description
   *   整改人id
   */
  holderUid: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   首页概述
   */
  indexSummary: string
  /**
   * @description
   *   是否纠偏：1已纠偏，0未纠偏
   * @format int32
   */
  isCheck: number
  /**
   * @description
   *   是否关注：1已关注，0未关注
   * @format int32
   */
  isFocus: number
  /**
   * @description
   *   是否已读：1已读，0未读
   * @format int32
   */
  isRead: number
  /**
   * @description
   *   是否已处理：1已处理，0未处理
   * @format int32
   */
  isSolve: number
  /**
   * @description
   *   是否督办：1已督办，0未督办
   * @format int32
   */
  isSupervise: number
  /**
   * @description
   *   是否今日top3标识： 1-是 0-否
   * @format int32
   */
  isTodayEvent: number
  /**
   * @description
   *   事项类型：业务风险类、事故事件类、指标类
   */
  itemClassification: string
  /**
   * @description
   *   类别：1：关注，2：已读，3：已纠偏，4：已督办
   * @format int32
   */
  kind: number
  /**
   * @description
   *   事项进度编码
   */
  kpiCategoryCode: string
  /**
   * @description
   *   事项进度名称
   */
  kpiCategoryName: string
  /**
   * @description
   *   责任人姓名
   */
  liableName: string
  /**
   * @description
   *   责任人手机号
   */
  liablePhone: string
  /**
   * @description
   *   责任人id
   */
  liableUid: string
  /**
   * @description
   *   事项类别编码
   */
  matterCategoryCode: string
  /**
   * @description
   *   事项类别名称
   */
  matterCategoryName: string
  /**
   * @description
   *   事项描述
   */
  matterDescription: string
  /**
   * @description
   *   事项详情信息
   */
  matterDetail: string
  /**
   * @description
   *   事项处置历史
   */
  matterHistory: string
  /**
   * @description
   *   程度（红、橙、黄、蓝）
   */
  matterLevel: string
  /**
   * @description
   *   事项进度编码
   */
  matterStateCode: string
  /**
   * @description
   *   事项进度名称
   */
  matterStateName: string
  /**
   * @description
   *   指标事项出现在重点关注的时间
   * @format date-time
   */
  matterStateTime: string
  /**
   * @description
   *   状态时间转换
   */
  matterStateTimeConvert: string
  /**
   * @description
   *   事项出现距今时差的时间戳
   * @format int64
   */
  matterStateTimeStamp: number
  /**
   * @description
   *   事项时间
   * @format date-time
   */
  matterTime: string
  /**
   * @description
   *   指标事项最近一次刷新时间
   * @format date-time
   */
  matterUpdateTime: string
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   Icome开放平台ID(群的id)
   */
  platformId: string
  /**
   * @description
   *   点位信息
   */
  pointInformation: string
  /**
   * @description
   *   业务负责人姓名
   */
  principalName: string
  /**
   * @description
   *   业务负责人手机号
   */
  principalPhone: string
  /**
   * @description
   *   业务负责人id
   */
  principalUid: string
  /**
   * @description
   *   进展展示标识 1-安全示险 2-智能运营中心
   */
  progressDisplay: string
  /**
   * @description
   *   项目名称
   */
  projectName: string
  /**
   * @description
   *   三老问题出现次数
   * @format int32
   */
  questionNum: number
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   解决时间
   */
  resolveTime: string
  /**
   * @description
   *   风险作战
   */
  riskCombat: string
  /**
   * @description
   *   规则执行次数
   * @format int32
   */
  riskCount: number
  /**
   * @description
   *   风险态势
   */
  riskTrend: string
  /**
   * @description
   *   智伴文案
   */
  robotSummary: string
  /**
   * @description
   *   规则动作id
   */
  ruleActionIds: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   是否推送icome：1已推送，0未推送
   * @format int32
   */
  sendIcome: number
  /**
   * @description
   *   建议，gpt或人工方式
   */
  solution: string
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   安全示险Id
   */
  troubleId: string
  /**
   * @description
   *   安全示险进度信息
   */
  troubleLogs: string
  /**
   * @description
   *   首页处置信息list
   */
  troubleRecordList: Array<TroubleRecordInfoVO>
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

/**
 * @description
 *   重点事项分页参数
 */
export interface MatterImportantPageQuery {
  /**
   * @description
   *   重点事项列表类型：已阅-READING、关注-FOCUS、督办纠偏-SUPERVISE,全部不传
   */
  matterImportantStatus: string
  /**
   * @description
   *   页码不能为空
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   每页记录数
   * @format int32
   */
  pageSize: number
}

export interface MatterImportantQuestionAddDTO {
  /**
   * @description
   *   业务id
   */
  businessId: string
  /**
   * @description
   *   业务类型
   */
  businessType: string
  /**
   * @description
   *   事项进度编码
   */
  kpiCategoryCode: string
  /**
   * @description
   *   事项进度名称
   */
  kpiCategoryName: string
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
}

export interface MatterImportantQuestionQueryDTO {
  /**
   * @description
   *   业务id
   */
  businessId: string
  /**
   * @description
   *   业务类型
   */
  businessType: string
  /**
   * @description
   *   事项进度编码
   */
  kpiCategoryCode: string
  /**
   * @description
   *   组织编码
   */
  orgCode: string
}

/**
 * @description
 *   重点关注事项操作记录参数
 */
export interface MatterImportantUpdateOperateDTO {
  /**
   * @description
   *   重点关注事项操作类型：关注-1、已读-2、检查-3、督办-4、立即处理-5
   * @format int32
   */
  matterFocusOperate: number
  /**
   * @description
   *   重点关注事项主键id
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   重点关注事项详情信息，督办时必传
   */
  matterImportant: MatterImportantDTO
}

/**
 * @description
 *   重点关注事项更新建议参数
 */
export interface MatterImportantUpdateSolutionDTO {
  data: BodyData
  /** @format int64 */
  eventId: number
  eventName: string
  eventType: string
  objectId: string
  tenantId: string
}

/**
 * @description
 *   重点事项
 */
export interface MatterImportantVO {
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   事项类别编码
   */
  matterCategoryCode: string
  /**
   * @description
   *   事项类别名称
   */
  matterCategoryName: string
  /**
   * @description
   *   事项描述
   */
  matterDescription: string
  /**
   * @description
   *   事项详情信息
   */
  matterDetail: string
  /**
   * @description
   *   程度（红、橙、黄、蓝）
   */
  matterLevel: string
  /**
   * @description
   *   事项进度信息
   */
  matterProgress: string
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   推送时间
   * @format date-time
   */
  pushTime: string
  /**
   * @description
   *   建议，gpt或人工方式
   */
  solution: string
  /**
   * @description
   *   标题
   */
  title: string
}

export interface MatterOccuredFocusEventDTO {
  /**
   * @description
   *   组织id
   */
  orgCode: string
}

export interface MatterSelectDTO {
  /**
   * @description
   *   业务id
   */
  businessId: string
  /**
   * @description
   *   业务类型
   */
  businessType: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   角色类型:PROJECT-MANGER-项目经理
   */
  roleType: string
  /**
   * @description
   *   员工8位工号
   */
  userId: string
}

export interface MatterTroubleRecordRectifyVO {
  /** @format int64 */
  id: number
  principalName: string
  /** @format date-time */
  rectificationEndTime: string
  rectificationMethod: string
  submitDate: string
}

export interface MatterTroubleRecordUpdateDTO {
  /**
   * @description
   *   整改责任人
   */
  holder: string
  /**
   * @description
   *   整改责任人员工编号
   */
  holderCode: string
  /**
   * @description
   *   整改责任人手机号
   */
  holderPhone: string
  /**
   * @description
   *   整改期限
   * @format date-time
   */
  rectificationEndTime: string
  /**
   * @description
   *   整改措施
   */
  rectificationMethod: string
  /**
   * @description
   *   隐患id
   */
  riskCode: string
  /**
   * @description
   *   token
   */
  token: string
}

export interface MatterUpdateByTroubleDTO {
  /**
   * @description
   *   安全示险平台id
   */
  id: string
  /**
   * @description
   *   状态值
   * @format int32
   */
  status: number
  /**
   * @description
   *   状态描述
   */
  statusDesc: string
  /**
   * @description
   *   token
   */
  token: string
  /**
   * @description
   *   流转信息（全量list）
   */
  troubleLogs: Array<TroubleLog>
}

export interface MatterUrgingDTO {
  /**
   * @description
   *   事项id
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   催办内容
   */
  urgingContent: string
  /**
   * @description
   *   被催办人工号
   */
  urgingedUserNo: string
}

export interface MemberQuery {
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   名字(支持模糊查询)
   */
  name: string
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

/**
 * @description
 *   我的-信息
 */
export interface MineInfo {
  /**
   * @description
   *   头像
   */
  headPortrait: string
  /**
   * @description
   *   是否管理员
   * @format int32
   */
  isAdministrator: number
  level: string
  /** @format int32 */
  orderNumber: number
  /** @format int32 */
  residualScores: number
  /** @format int32 */
  scores: number
  /**
   * @description
   *   是否安全达人
   * @format int32
   */
  securityPeople: number
  /**
   * @description
   *   用户基本信息
   */
  user: SysUser
}

/**
 * @description
 *   白名单
 */
export interface NameList {
  /**
   * @description
   *   白名单list
   */
  nameList: Array<string>
}

/**
 * @description
 *   风险地图-管网基本信息
 */
export interface NetworkBaseInfoVO {
  /**
   * @description
   *   设备情况
   */
  deviceInfo: NetworkDeviceInfoVO
  /**
   * @description
   *   管段情况
   */
  pipeInfo: NetworkPipeInfoVO
}

/**
 * @description
 *   风险地图-隐患子公司统计
 */
export interface NetworkDangerCompanyVO {
  /**
   * @description
   *   子公司编码(沒有)
   */
  companyCode: string
  /**
   * @description
   *   子公司名称
   */
  companyName: string
  /**
   * @description
   *   未整改数量
   * @format int32
   */
  count: number
}

/**
 * @description
 *   风险地图-隐患列表信息对象
 */
export interface NetworkDangerListVO {
  /**
   * @description
   *   地址
   */
  dangerAddress: string
  /**
   * @description
   *   隐患名称
   */
  dangerName: string
  /**
   * @description
   *   类型名称
   */
  dangerTypeName: string
  /**
   * @description
   *   整改人电话
   */
  improveUseMobile: string
  /**
   * @description
   *   整改人名称
   */
  improveUserName: string
  /**
   * @description
   *   等级名称
   */
  levelName: string
  /**
   * @description
   *   计划整改时间
   * @format date-time
   */
  planDate: string
  /**
   * @description
   *   上报时间
   * @format date-time
   */
  reportdate: string
  /**
   * @description
   *   状态名称
   */
  statusName: string
  /**
   * @description
   *   超期天数
   * @format int32
   */
  timeoutDays: number
}

/**
 * @description
 *   风险地图-管网-隐患统计
 */
export interface NetworkDangerStatisticVO {
  /**
   * @description
   *   对比昨日数 大于0增加，小于0降低
   * @format int32
   */
  comparedCount: number
  /**
   * @description
   *   完成数
   * @format int32
   */
  finishedCount: number
  /**
   * @description
   *   完成率(已乘100)
   */
  finishedRate: number
  /**
   * @description
   *   重大隐患
   * @format int32
   */
  highLeveCount: number
  /**
   * @description
   *   等级分布（新的）
   */
  levelList: Array<NetworkLevelVO>
  /**
   * @description
   *   老的等级分布
   */
  oldLevelList: Array<NetworkLevelVO>
  /**
   * @description
   *   超时未完成数
   * @format int32
   */
  timeoutCount: number
  /**
   * @description
   *   隐患总数
   * @format int32
   */
  totalCount: number
  /**
   * @description
   *   未整改数
   * @format int32
   */
  unFinishedCount: number
}

/**
 * @description
 *   风险地图-隐患类型统计信息
 */
export interface NetworkDangerTypeStatisticVO {
  /**
   * @description
   *   隐患总数
   * @format int32
   */
  totalCount: number
  /**
   * @description
   *   分类列表
   */
  typeList: Array<NetworkDangerTypeVO>
}

/**
 * @description
 *   风险地图-隐患类型对象
 */
export interface NetworkDangerTypeVO {
  /**
   * @description
   *   类型数量
   * @format int32
   */
  count: number
  /**
   * @description
   *   类型
   */
  type: string
  /**
   * @description
   *   类型名称
   */
  typeName: string
  /**
   * @description
   *   占比
   */
  typeRate: number
}

/**
 * @description
 *   风险地图-管网设备信息
 */
export interface NetworkDeviceInfoVO {
  /**
   * @description
   *   设备总数
   * @format int32
   */
  totalCount: number
  /**
   * @description
   *   设备类型列表
   */
  typeList: Array<NetworkDeviceTypeVO>
}

/**
 * @description
 *   风险地图-管网设备携带离线等信息
 */
export interface NetworkDeviceInfoWithStatusVO {
  /**
   * @description
   *   离线设备数
   * @format int32
   */
  offLineCount: number
  /**
   * @description
   *   在线设备数
   * @format int32
   */
  onLineCount: number
  /**
   * @description
   *   设备总数
   * @format int32
   */
  totalCount: number
  /**
   * @description
   *   设备类型列表
   */
  typeList: Array<NetworkDeviceTypeVO>
}

/**
 * @description
 *   风险地图-管网设备列表信息对象
 */
export interface NetworkDeviceListVO {
  /**
   * @description
   *   设备地址
   */
  deviceAddress: string
  /**
   * @description
   *   设备编码
   */
  deviceCode: string
  /**
   * @description
   *   设备名称
   */
  deviceName: string
  /**
   * @description
   *   设备类型
   */
  deviceType: string
  /**
   * @description
   *   设备离线时间
   * @format date-time
   */
  offLineTime: string
}

/**
 * @description
 *   风险地图-管网设备信息
 */
export interface NetworkDeviceTypeVO {
  /**
   * @description
   *   设备类型数量
   * @format int32
   */
  count: number
  /**
   * @description
   *   设备类型名称
   */
  deviceTypeName: string
}

/**
 * @description
 *   风险地图-管网巡视
 */
export interface NetworkInspectionVO {
  /**
   * @description
   *   高压长度，单位公里
   */
  highLength: number
  /**
   * @description
   *   巡视率（保留整数？）
   */
  inspectionRate: number
  /**
   * @description
   *   中压长度，单位公里
   */
  middleLength: number
}

/**
 * @description
 *   风险地图-等级统计
 */
export interface NetworkLevelVO {
  /**
   * @description
   *   等级数量
   * @format int32
   */
  count: number
  /**
   * @description
   *   等级
   * @format int32
   */
  level: number
  /**
   * @description
   *   等级名称
   */
  levelName: string
  /**
   * @description
   *   分类列表情况(这期不需要)
   */
  typeList: Array<NetworkDangerTypeVO>
}

/**
 * @description
 *   风险地图-管网管段信息
 */
export interface NetworkPipeInfoVO {
  /**
   * @description
   *   管段总长度
   */
  totalLength: number
  /**
   * @description
   *   管网管段列表
   */
  typeList: Array<NetworkPipeTypeVO>
}

/**
 * @description
 *   风险地图-管网管段类型信息
 */
export interface NetworkPipeTypeVO {
  /**
   * @description
   *   管段长度
   */
  length: number
  /**
   * @description
   *   管段类型名称
   */
  pipeTypeName: string
}

export interface OrgCompanyInfoVO {
  /**
   * @description
   *   系统层级角色列表
   */
  baseRoleList: Array<BaseRoleVO>
  /**
   * @description
   *   实体公司代码
   */
  compCode: string
  /**
   * @description
   *   实体公司名称
   */
  compName: string
  /**
   * @description
   *   实体公司or部门， 实体公司COMP 部门DEPT
   */
  compOrDept: string
  /**
   * @description
   *   公司行业类别编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   公司行业类别名称
   */
  industryCategoryName: string
  /**
   * @description
   *   标签集合
   */
  labelInfoList: Array<LabelInfoVO>
  /**
   * @description
   *   参与者组织基本信息
   */
  orgInfo: OrgInfoVO
  /**
   * @description
   *   参与者角色信息
   */
  role: RoleVO
}

export interface OrgCompanySaveDTO {
  /**
   * @description
   *   系统层级角色列表
   */
  baseRoleList: Array<BaseRoleSaveDTO>
  /**
   * @description
   *   实体公司代码
   */
  compCode: string
  /**
   * @description
   *   实体公司名称
   */
  compName: string
  /**
   * @description
   *   实体公司or部门， 实体公司COMP 部门DEPT
   */
  compOrDept: string
  /**
   * @description
   *   公司行业类别编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   公司行业类别名称
   */
  industryCategoryName: string
  /**
   * @description
   *   标签集合
   */
  labelList: Array<LabelAddDTO>
  /**
   * @description
   *   参与者组织code
   */
  orgCode: string
  /**
   * @description
   *   参与者组织id
   */
  orgId: string
  /**
   * @description
   *   参与者组织id路径
   */
  orgIdPath: string
  /**
   * @description
   *   参与者组织名称
   */
  orgName: string
  /**
   * @description
   *   角色编码
   */
  roleCode: string
  /**
   * @description
   *   角色名称
   */
  roleName: string
}

export interface OrgCompanyVO {
  /**
   * @description
   *   详细地址信息
   */
  address: string
  /**
   * @description
   *   公司代码
   */
  compCode: string
  /**
   * @description
   *   公司名称
   */
  compName: string
  /**
   * @description
   *   公司行业类别编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   公司行业类别名称
   */
  industryCategoryName: string
  /**
   * @description
   *   纬度
   */
  lat: string
  /**
   * @description
   *   经度
   */
  lng: string
  /**
   * @description
   *   公司组织id
   */
  orgId: string
  /**
   * @description
   *   公司组织名称
   */
  orgName: string
  /**
   * @description
   *   组织类型
   */
  orgType: string
  /**
   * @description
   *   上级组织id
   */
  parentOrgId: string
}

export interface OrgFunction {
  /**
   * @description
   *   组织职能类型 admin-行政组织
   */
  funcType: string
  /**
   * @description
   *   组织职能名称
   */
  name: string
  /**
   * @description
   *   上级组织id
   */
  parentId: string
  /**
   * @description
   *   上级组织名称
   */
  parentName: string
  /**
   * @description
   *   状态(1:启用,0:禁用)
   * @format int32
   */
  status: number
}

export interface OrgInfoVO {
  /**
   * @description
   *   组织编码
   */
  code: string
  companyId: string
  /**
   * @description
   *   主键id
   */
  id: string
  managerId: string
  /**
   * @description
   *   负责人
   */
  managerName: string
  /**
   * @description
   *   组织名称
   */
  name: string
  /**
   * @description
   *   组织职能
   */
  orgFunctionList: Array<OrgFunction>
  /**
   * @description
   *   上级组织id
   */
  parentId: string
  /**
   * @description
   *   上级组织名称
   */
  parentName: string
  /**
   * @description
   *   简称
   */
  shortName: string
  /**
   * @description
   *   状态(1:启用,0:禁用)
   * @format int32
   */
  status: number
  tenantId: string
  /**
   * @description
   *   组织类型(0-公司 1-部门)
   * @format int32
   */
  type: number
}

export interface OrgKpiAddDTO {
  /**
   * @description
   *   考核线
   */
  assessmentLine: string
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
  /**
   * @description
   *   衡量指标名称
   */
  measurableName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   新增人员list
   */
  userAddList: Array<OrgUserDTO>
}

export interface OrgKpiAddInfoDTO {
  /**
   * @description
   *   考核线
   */
  assessmentLine: string
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
  /**
   * @description
   *   衡量指标名称
   */
  measurableName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   发布状态：0已发布，1下架，2建设中
   * @format int32
   */
  publishStatus: number
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
}

export interface OrgKpiDeleteDTO {
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
}

export interface OrgKpiOffShelfDTO {
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
}

export interface OrgKpiPublishDTO {
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
}

export interface OrgKpiQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   衡量指标名称
   */
  measurableName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   发布状态：0已发布，1下架，2建设中
   * @format int32
   */
  publishStatus: number
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
}

export interface OrgKpiUpdateDTO {
  /**
   * @description
   *   考核线
   */
  assessmentLine: string
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
  /**
   * @description
   *   衡量指标名称
   */
  measurableName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   编辑后新的人员list
   */
  userNewList: Array<OrgUserDTO>
  /**
   * @description
   *   编辑前旧的人员list
   */
  userOldList: Array<OrgUserDTO>
}

export interface OrgKpiUpdateInfoDTO {
  /**
   * @description
   *   考核线
   */
  assessmentLine: string
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
  /**
   * @description
   *   衡量指标名称
   */
  measurableName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   发布状态：0已发布，1下架，2建设中
   * @format int32
   */
  publishStatus: number
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
}

export interface OrgKpiVO {
  /**
   * @description
   *   考核线
   */
  assessmentLine: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
  /**
   * @description
   *   衡量指标名称
   */
  measurableName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   发布状态：0已发布，1下架，2建设中
   * @format int32
   */
  publishStatus: number
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

/**
 * @description
 *   组织场景信息
 */
export interface OrgSceneInfoVO {
  /**
   * @description
   *    用户itcode
   */
  leaderUserCode: string
  /**
   * @description
   *   负责人电话
   */
  leaderUserMobile: string
  /**
   * @description
   *   负责人姓名
   */
  leaderUserName: string
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
}

export interface OrgSearchDTO {
  /**
   * @description
   *   行业类别编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   是否需要查询是否为公司
   */
  needCompFlag: boolean
  /**
   * @description
   *   是否需要查询规划数
   */
  needPlanNum: boolean
  /**
   * @description
   *   组织编码搜索
   */
  orgCode: string
  /**
   * @description
   *   顶级组织id，会在此组织下所有自组织进行搜索，不传默认当前登录选中公司组织
   */
  orgId: string
  /**
   * @description
   *   组织名称模糊搜索
   */
  orgName: string
  /**
   * @description
   *   页码
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页数
   * @format int32
   */
  pageSize: number
}

export interface OrgUserDTO {
  /**
   * @description
   *   部门id
   */
  deptNo: string
  /**
   * @description
   *   人员id
   */
  userId: string
  /**
   * @description
   *   人员名称
   */
  userName: string
}

export interface OrgUserInfoQueryDTO {
  /**
   * @description
   *   部门编号
   */
  deptNo: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   PC后台指标主键id
   * @format int64
   */
  orgKpiId: number
  /**
   * @description
   *   人员id
   */
  userId: string
}

export interface OrgUserRelateAddDTO {
  /**
   * @description
   *   部门名称
   */
  deptName: string
  /**
   * @description
   *   部门编号
   */
  deptNo: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   PC后台指标主键id
   * @format int64
   */
  orgKpiId: number
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   人员id
   */
  userId: string
  /**
   * @description
   *   人员名称
   */
  userName: string
}

export interface OrgUserRelateQueryDTO {
  /**
   * @description
   *   部门编号
   */
  deptNo: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   PC后台指标主键id
   * @format int64
   */
  orgKpiId: number
}

export interface OrgUserRelateVO {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   部门名称
   */
  deptName: string
  /**
   * @description
   *   部门编号
   */
  deptNo: string
  /**
   * @description
   *   指标主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   PC后台指标主键id
   * @format int64
   */
  orgKpiId: number
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
  /**
   * @description
   *   人员id
   */
  userId: string
  /**
   * @description
   *   人员名称
   */
  userName: string
}

export interface OrgsGptDTO {
  /**
   * @description
   *   组织id
   */
  orgId: string
}

export interface OverViewModulSta {
  /**
   * @description
   *   低风险
   */
  date: string
  /**
   * @description
   *   中风险
   * @format int32
   */
  generalRisk: number
  /**
   * @description
   *   卡片说明
   */
  indexSummary: string
  /**
   * @description
   *   较高风险
   * @format int32
   */
  largeRisk: number
  /**
   * @description
   *   低风险
   * @format int32
   */
  lowerRisk: number
  /**
   * @description
   *   高风险
   * @format int32
   */
  majorRisk: number
  /**
   * @description
   *   项目部编码
   */
  orgCode: string
  /**
   * @description
   *   项目部名称
   */
  orgName: string
  /**
   * @description
   *   总数
   * @format int32
   */
  totalRisk: number
}

export interface PMapDateTypeUpdateDto {
  physicalMapDangerWorkHistory: PhysicalMapDangerWorkHistory
  physicalMapDataTypeEnum: PMapDateTypeUpdateDtoPhysicalMapDataTypeEnum
  projectId: string
}

export interface PageAuthVO {
  appId: string
  authId: string
  /** @format int32 */
  childResNum: number
  /**
   * @description
   *   子级页面资源
   */
  children: Array<PageAuthVO>
  createBy: string
  /**
   * @description
   *   资源权限id
   */
  id: string
  /**
   * @description
   *   父级id
   */
  pid: string
  /**
   * @description
   *   功能包编码集合
   */
  productIds: Array<string>
  productNames: Array<string>
  resDesc: string
  /**
   * @description
   *   资源编码
   */
  resId: string
  /** @format int32 */
  resLabel: number
  /**
   * @description
   *   资源名称
   */
  resName: string
  /**
   * @description
   *   页面类型,1001:菜单,1002:按钮,1003:页面
   */
  resType: string
  /**
   * @description
   *   扩展信息
   */
  rsrv1: string
  /** @format int32 */
  sort: number
  /**
   * @description
   *   url
   */
  url: string
}

export interface PageBase {
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

/**
 * @description
 *   风险地图-隐患列表分页查询入参对象
 */
export interface PageQueryDTO {
  /**
   * @description
   *   页码
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量
   * @format int32
   */
  pageSize: number
}

export interface PersonComplianceItemVO {
  /**
   * @description
   *   明细数据
   */
  detail: string
  /**
   * @description
   *   标签
   */
  label: string
  /**
   * @description
   *   人员合规类型
   */
  matterCategoryCode: string
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   风险升级、降级状态：0-不变；1-升级；2-降级；3-新增；4-销项
   * @format int32
   */
  matterLevelStatus: number
  /**
   * @description
   *   风险项数量
   * @format int32
   */
  riskCount: number
  /**
   * @description
   *   标题
   */
  title: string
}

export interface PersonComplianceVO {
  items: Array<PersonComplianceItemVO>
  /** @format int32 */
  riskLow: number
  /** @format int32 */
  riskMiddle: number
  /** @format int32 */
  riskTop: number
}

export interface PersonalFamilyBindDTO {
  /**
   * @description
   *   所选择的标签列表
   */
  sortList: Array<FamilyAddDTO>
}

export interface PersonalIndexQueryDTO {
  /**
   * @description
   *   用户id
   */
  userId: string
}

export interface PersonalInsertDTO {
  /**
   * @description
   *   是否允许取消标记：0默认推荐不许删除，1自己订阅可以删除
   * @format int32
   */
  defaultSelectFlag: number
  /**
   * @description
   *   衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   衡量指标名称
   */
  firstKpiName: string
  /**
   * @description
   *   指标更新消息订阅标记:0已订阅，1未订阅
   * @format int32
   */
  kpiMsgFlag: number
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   发布状态：0已发布，1下架，2建设中
   * @format int32
   */
  publishStatus: number
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   订阅人员id（userId）
   */
  subscriberId: string
}

export interface PersonalKeywordQueryDTO {
  /**
   * @description
   *   关键字
   */
  keyword: string
  /**
   * @description
   *   用户id
   */
  userId: string
}

export interface PersonalKpiAddDTO {
  /**
   * @description
   *   是否允许取消标记
   * @format int32
   */
  defaultSelectFlag: number
  /**
   * @description
   *   衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   衡量指标名称
   */
  firstKpiName: string
  /**
   * @description
   *   指标更新消息订阅标记
   * @format int32
   */
  kpiMsgFlag: number
  /**
   * @description
   *   排序号
   * @format int32
   */
  kpiSort: number
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   发布状态：0已发布，1下架，2建设中
   * @format int32
   */
  publishStatus: number
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   订阅人员id（userId）
   */
  subscriberId: string
  /**
   * @description
   *   跳转链接
   */
  targetUrl: string
}

export interface PersonalKpiBindDTO {
  /**
   * @description
   *   新增指标list
   */
  addList: Array<PersonalInsertDTO>
  /**
   * @description
   *   删除指标主键id的list
   */
  deleteIdList: Array<number>
  /**
   * @description
   *   指标编码和顺序的对应关系list
   */
  relateList: Array<IndexRelateDTO>
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
}

export interface PersonalKpiMessageDTO {
  /**
   * @description
   *   指标更新消息订阅标记：0已订阅消息，1未订阅消息
   * @format int32
   */
  kpiMsgFlag: number
  /**
   * @description
   *   发布状态：0已发布，1下架，2建设中
   * @format int32
   */
  publishStatus: number
}

export interface PersonalKpiQueryListDTO {
  /**
   * @description
   *   衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
}

export interface PersonalKpiSelectDTO {
  /**
   * @description
   *   衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   订阅人员id（userId）
   */
  subscriberId: string
}

export interface PersonalKpiSelectMaxDTO {
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   订阅人员id（userId）
   */
  subscriberId: string
}

export interface PersonalKpiSortQueryDTO {
  /**
   * @description
   *   组织ID
   */
  orgId: string
  /**
   * @description
   *   用户ID
   */
  userId: string
}

export interface PersonalKpiUpdateDTO {
  /**
   * @description
   *   是否允许取消标记
   * @format int32
   */
  defaultSelectFlag: number
  /**
   * @description
   *   衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   衡量指标名称
   */
  firstKpiName: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标更新消息订阅标记
   * @format int32
   */
  kpiMsgFlag: number
  /**
   * @description
   *   排序号
   * @format int32
   */
  kpiSort: number
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   发布状态：0已发布，1下架，2建设中
   * @format int32
   */
  publishStatus: number
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   订阅人员id（userId）
   */
  subscriberId: string
  /**
   * @description
   *   跳转链接
   */
  targetUrl: string
}

export interface PersonalKpiVO {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   是否允许取消标记：0不允许，1允许
   * @format int32
   */
  defaultSelectFlag: number
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   衡量指标名称
   */
  firstKpiName: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标更新消息订阅标记:0订阅，1未订阅
   * @format int32
   */
  kpiMsgFlag: number
  /**
   * @description
   *   排序号
   * @format int32
   */
  kpiSort: number
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   发布状态：0已发布，1下架，2建设中
   * @format int32
   */
  publishStatus: number
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   订阅人员id（userId）
   */
  subscriberId: string
  /**
   * @description
   *   跳转链接
   */
  targetUrl: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

export interface PersonalPriorityBindDTO {
  /**
   * @description
   *   所选择的标签列表
   */
  sortList: Array<PriorityAddDTO>
}

export interface PersonalSafetyAppBindDTO {
  /**
   * @description
   *   订阅应用列表
   */
  addList: Array<SafetyAppilcationAddDTO>
}

export interface PersonalSafetyAppQueryDTO {
  /**
   * @description
   *   用户id
   */
  userId: string
}

export interface PersonalSetMessageDTO {
  /**
   * @description
   *   衡量指标编码
   */
  firstKpiCode: string
  /**
   * @description
   *   订阅标记：0订阅消息提醒，1取消消息提醒
   * @format int32
   */
  kpiMsgFlag: number
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   跳转链接
   */
  targetUrl: string
}

export interface PersonalSingelBindDTO {
  /**
   * @description
   *   图标id
   */
  iconId: string
}

export interface PhysicalMapDangerWorkHistory {
  /**
   * @description
   *   摄像头信息（暂存json）
   */
  cameras: string
  createId: string
  /** @format date-time */
  createTime: string
  /**
   * @description
   *   数据类型
   */
  dataType: string
  /** @format int64 */
  id: number
  orgCode: string
  orgName: string
  /**
   * @description
   *   作业地点
   */
  proAddress: string
  /**
   * @description
   *   项目ID
   */
  projectId: string
  /**
   * @description
   *   负责人手机号
   */
  projectManagerPhone: string
  /**
   * @description
   *   负责人姓名
   */
  projectManagerRealName: string
  /**
   * @description
   *   负责人工号
   */
  projectManagerUserId: string
  /**
   * @description
   *   负责人username
   */
  projectManagerUsername: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   作业级别
   */
  workGrad: string
  /**
   * @description
   *   作业监管人（中文）
   */
  workGuardian: string
  /**
   * @description
   *   作业监管人id（itcode）
   */
  workGuardianId: string
  /**
   * @description
   *   作业时间
   */
  workStartTime: string
  /**
   * @description
   *   作业状态 1-进行中 2-已完成 3-阶段完成
   */
  workState: string
  /**
   * @description
   *   作业状态详情 json
   */
  workStatusDetail: string
  /**
   * @description
   *   作业类型code
   */
  workTypeCode: string
  /**
   * @description
   *   作业类型名称
   */
  workTypeName: string
}

export interface PhysicalMapProjectTypeVO {
  /**
   * @description
   *   项目类型（编码）
   */
  physicalType: string
  /**
   * @description
   *   项目类型Label
   */
  physicalTypeLabel: string
}

export interface PhysicalMapQueryDto {
  /**
   * @description
   *   组织ID，不传默认为当前登陆人组织
   */
  orgCode: string
  /**
   * @description
   *   项目名称
   */
  projectName: string
  /**
   * @description
   *   项目类型（编码）
   */
  projectType: string
}

export interface PhysicalMapRecordVO {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   数据类型：1-普通项目 2-危险作业
   */
  dataType: string
  /**
   * @description
   *   id
   * @format int64
   */
  id: number
  /**
   * @description
   *   纬度
   */
  lat: string
  /**
   * @description
   *   经度
   */
  lng: string
  /**
   * @description
   *   orgCode
   */
  orgCode: string
  /**
   * @description
   *   orgNmae
   */
  orgName: string
  /**
   * @description
   *   危险作业信息
   */
  physicalMapDangerWorkHistory: PhysicalMapDangerWorkHistory
  /**
   * @description
   *   负责人姓名
   */
  principalName: string
  /**
   * @description
   *   负责人id
   */
  principalUid: string
  /**
   * @description
   *   项目地址
   */
  projectAddress: string
  /**
   * @description
   *   项目id
   */
  projectId: string
  /**
   * @description
   *   项目名称
   */
  projectName: string
  /**
   * @description
   *   项目阶段：SGZB-施工准备；JSJD-技术交底；SGZ-施工中
   */
  projectPhase: string
  /**
   * @description
   *   项目阶段Label
   */
  projectPhaseLabel: string
  /**
   * @description
   *   项目类型（编码）
   */
  projectType: string
  /**
   * @description
   *   项目类型Label
   */
  projectTypeLabel: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

/**
 * @description
 *   管网场景出参
 */
export interface PipeNetworkVO {
  /**
   * @description
   *   告警列表
   */
  alarmList: Array<Alarm>
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   坐标信息
   */
  positions: Array<JSONObject>
  /**
   * @description
   *   风险作战
   */
  riskCombat: string
}

/**
 * @description
 *   点位
 */
export interface PointPosition {
  /**
   * @description
   *   是否已存在样版
   */
  checkTemplate: boolean
  companyInfoId: string
  createBy: string
  createByName: string
  /** @format date-time */
  createTime: string
  /** @format int32 */
  deleteFlag: number
  /** @format int64 */
  id: number
  /**
   * @description
   *   点位坐标
   */
  latitudeLongitude: string
  /**
   * @description
   *   是否被计划关联，1-已关联，0-未关联
   * @format int32
   */
  planRelation: number
  /**
   * @description
   *   点位编码
   */
  pointPositionCode: string
  /**
   * @description
   *   排查点名称
   */
  pointPositionName: string
  /**
   * @description
   *   所在位置
   */
  position: string
  safetyOfficer: string
  /**
   * @description
   *   安全员
   */
  safetyOfficerList: Array<SafetyOfficer>
  safetyOfficerName: string
  /**
   * @description
   *   班组是否删除
   */
  teamDel: string
  /**
   * @description
   *   班组id
   */
  teamId: string
  teamLeader: string
  /**
   * @description
   *   班组长
   */
  teamLeaderList: Array<TeamLeader>
  teamLeaderName: string
  /**
   * @description
   *   组员
   */
  teamMemberList: Array<TeamMember>
  teamMembers: string
  teamMembersName: string
  /**
   * @description
   *   班组名称
   */
  teamName: string
  tenantId: string
  updateBy: string
  updateByName: string
  /** @format date-time */
  updateTime: string
}

/**
 * @description
 *   新增点位
 */
export interface PointPositionAddDto {
  /**
   * @description
   *   点位坐标
   */
  latitudeLongitude: string
  /**
   * @description
   *   点位编码
   */
  pointPositionCode: string
  /**
   * @description
   *   排查点名称
   */
  pointPositionName: string
  /**
   * @description
   *   所在位置
   */
  position: string
  /**
   * @description
   *   点位责任班组
   */
  teamId: string
}

export interface PointPositionQuery {
  /**
   * @description
   *   查询是否已存在样版
   */
  checkTemplate: boolean
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

/**
 * @description
 *   编辑点位
 */
export interface PointPositionUpdateDto {
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   点位坐标
   */
  latitudeLongitude: string
  /**
   * @description
   *   点位编码
   */
  pointPositionCode: string
  /**
   * @description
   *   排查点名称
   */
  pointPositionName: string
  /**
   * @description
   *   所在位置
   */
  position: string
  /**
   * @description
   *   点位责任班组
   */
  teamId: string
}

/**
 * @description
 *   设备维护-调压设备计划性维保出参对象
 */
export interface PressureDevicePlanVO {
  /**
   * @description
   *   完成总数
   * @format int32
   */
  finishedCount: number
  /**
   * @description
   *   完成率
   */
  finishedRate: number
  /**
   * @description
   *   一级数量
   * @format int32
   */
  level_1: number
  /**
   * @description
   *   二级数量
   * @format int32
   */
  level_2: number
  /**
   * @description
   *   三级数量
   * @format int32
   */
  level_3: number
  /**
   * @description
   *   计划总数
   * @format int32
   */
  totalCount: number
}

/**
 * @description
 *   设备维护-调压器评估差超7天未处置出参对象
 */
export interface PressureDevicePredictionListVO {
  /**
   * @description
   *   运行差天数(近一月运行差天数)
   * @format int32
   */
  badDays: number
  /**
   * @description
   *   设备地址
   */
  deviceAddress: string
  /**
   * @description
   *   设备编码
   */
  deviceCode: string
  /**
   * @description
   *   风险分
   */
  riskScore: number
  /**
   * @description
   *   状态
   */
  statusName: string
  /**
   * @description
   *   风险评估调压器设备总数
   */
  title: string
}

/**
 * @description
 *   设备维护-调压设备预测性维保出参对象
 */
export interface PressureDevicePredictionVO {
  /**
   * @description
   *   评估差
   * @format int32
   */
  badCount: number
  /**
   * @description
   *   超7天未处置
   * @format int32
   */
  timeoutCount: number
  /**
   * @description
   *   风险评估调压器设备总数
   * @format int32
   */
  totalCount: number
}

export interface PriorityAddDTO {
  /**
   * @description
   *   关注事项类型
   */
  dicCode: string
  /**
   * @description
   *   关注事项编码
   */
  itemName: string
  /**
   * @description
   *   关注事项名称
   */
  itemValue: string
  /**
   * @description
   *   排序号
   * @format int32
   */
  sort: number
}

export interface PrioritySortQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   用户ID
   */
  userId: string
}

export interface ProblemDiagnosis {
  displayColor: string
  problemDesc: string
  suggestion: string
}

/**
 * @description
 *   工程球机在线记录
 */
export interface ProjectCameraOnlineDTO {
  /**
   * @description
   *   球机国标id
   */
  cameraCode: string
  /**
   * @description
   *   球机私有id
   */
  cameraId: string
  /**
   * @description
   *   球机名称
   */
  cameraName: string
  /**
   * @description
   *   管理实体编码
   */
  compCode: string
  /**
   * @description
   *   管理实体名称
   */
  compCodeTxt: string
  /**
   * @description
   *   实体公司编码
   */
  cpmoCop: string
  /**
   * @description
   *   实体公司名称
   */
  cpmoCopTxt: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   主键ID
   * @format int64
   */
  id: number
  /**
   * @description
   *   是否在线
   */
  isOnline: boolean
  /**
   * @description
   *   累计在线时长
   * @format int64
   */
  onlineTime: number
  /**
   * @description
   *   累计在线时长描述
   */
  onlineTimeDesc: string
  /**
   * @description
   *   工程id
   */
  proId: string
  /**
   * @description
   *   工程名称
   */
  proName: string
  /**
   * @description
   *   项目部编码
   */
  projectCode: string
  /**
   * @description
   *   项目部名称
   */
  projectCodeTxt: string
  /**
   * @description
   *   统计日期
   * @format date-time
   */
  statDate: string
  /**
   * @description
   *   修改时间
   * @format date-time
   */
  updateTime: string
}

export interface ProjectDangerSuggestionDTO {
  /** @format int32 */
  id: number
  pmeasuresMeasures: string
  weatherEffect: string
  workRiskDetail: string
  workTypeCode: string
  workTypeDetailName: string
  /** @format int32 */
  workTypeId: number
  workTypeName: string
}

export interface ProjectDangerWorkDTO {
  /**
   * @description
   *   偏远标签编码
   */
  backcountryTagCode: string
  /**
   * @description
   *   监控点集合
   */
  cameraCodes: string
  /**
   * @description
   *   法人公司编码
   */
  compCode: string
  /**
   * @description
   *   法人公司名称
   */
  compCodeTxt: string
  /**
   * @description
   *   施工内容
   */
  constructionContent: string
  /**
   * @description
   *   施工组织
   */
  constructionOrg: string
  /**
   * @description
   *   建设单位
   */
  constructionUnit: string
  /**
   * @description
   *   实体公司编码
   */
  cpmoCop: string
  /**
   * @description
   *   实体公司名称
   */
  cpmoCopTxt: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   危大标签编码
   */
  dangerTagCode: string
  /**
   * @description
   *   危险作业数量
   * @format int32
   */
  dangerWorkNum: number
  /**
   * @description
   *   评价列表（工程）
   */
  evaluation: string
  /**
   * @description
   *   球机监控
   */
  guardianCameraDesc: string
  /** @format int64 */
  id: number
  /**
   * @description
   *   作业监管人是否日程冲突
   */
  isSchedulingConflict: boolean
  /**
   * @description
   *   纬度
   */
  latitude: string
  /**
   * @description
   *   经度
   */
  longitude: string
  /**
   * @description
   *   改造标签编码
   */
  makeoverTagCode: string
  /**
   * @description
   *   计划结束时间
   * @format date-time
   */
  planEndTime: string
  /**
   * @description
   *   计划id
   */
  planId: string
  /**
   * @description
   *   计划开始时间
   * @format date-time
   */
  planStartTime: string
  /**
   * @description
   *   计划标签编码
   */
  planTagCode: string
  /**
   * @description
   *   点位级别
   */
  positionLevel: string
  /**
   * @description
   *   工程id
   */
  proId: string
  /**
   * @description
   *   项目部编码
   */
  projectCode: string
  /**
   * @description
   *   项目部名称
   */
  projectCodeTxt: string
  /**
   * @description
   *   工程名
   */
  projectName: string
  saveFlag: boolean
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   智能监管描述
   */
  smartGuardianDesc: string
  /**
   * @description
   *   智能监管描述-md格式
   */
  smartGuardianMd: string
  /**
   * @description
   *   风险处置
   */
  suggestion: ProjectDangerSuggestionDTO
  /**
   * @description
   *   不合格记录（工程）
   */
  unqualified: string
  /**
   * @description
   *   违规记录数量
   * @format int32
   */
  unqualifiedCount: number
  /**
   * @description
   *   修改时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   工单编号
   */
  woCode: string
  /**
   * @description
   *   作业地址
   */
  workAddress: string
  /**
   * @description
   *   作业结束时间
   * @format date-time
   */
  workEndTime: string
  /**
   * @description
   *   作业监管人
   */
  workGuardian: string
  /**
   * @description
   *   作业监管人id
   */
  workGuardianId: string
  /**
   * @description
   *   作业监管人手机号
   */
  workGuardianPhone: string
  /**
   * @description
   *   作业级别
   */
  workLevel: string
  /**
   * @description
   *   作业负责人
   */
  workPrincipal: string
  /**
   * @description
   *   作业负责人itCode
   */
  workPrincipalItCode: string
  /**
   * @description
   *   作业负责人手机号
   */
  workPrincipalPhone: string
  /**
   * @description
   *   作业开始时间
   * @format date-time
   */
  workStartTime: string
  /**
   * @description
   *   作业状态
   */
  workStatus: string
  /**
   * @description
   *   作业状态描述
   */
  workStatusDesc: string
  /**
   * @description
   *   作业时间
   */
  workTime: string
  /**
   * @description
   *   作业类型
   */
  workType: string
  /**
   * @description
   *   作业类型id
   * @format int32
   */
  workTypeId: number
}

export interface ProjectDangerWorkEvaluation {
  evaluationContent: string
  evaluationResult: string
  evaluationTime: string
  evaluationUnqualifiedItem: Array<any>
  evaluationUser: string
  evaluationUserName: string
  /**
   * @description
   *   msgId
   */
  msgId: string
  system: string
  systemName: string
  /**
   * @description
   *   workId
   */
  workId: string
}

/**
 * @description
 *   危险作业不合格记录
 */
export interface ProjectDangerWorkUnqualified {
  /**
   * @description
   *   创建时间
   */
  createTime: string
  /**
   * @description
   *   是否处置；false：未处置，true：已处置
   */
  disposal: boolean
  /**
   * @description
   *   处置照片URL
   */
  disposalPictureUrl: string
  /**
   * @description
   *   处置来源''01''：工作台，''02''：智慧工程
   */
  disposalSource: string
  /**
   * @description
   *   页面系统来源
   */
  disposalSourceName: string
  /**
   * @description
   *   ID
   */
  id: string
  /**
   * @description
   *   msgId
   */
  msgId: string
  /**
   * @description
   *   图片URL
   */
  pictureUrl: string
  /**
   * @description
   *   不合格场景
   */
  problem: string
  /**
   * @description
   *   页面描述
   */
  problemDesc: string
  /**
   * @description
   *   评价
   */
  remark: string
  /**
   * @description
   *   数据来源 '01''：工作台，''02''：AI
   */
  source: string
  /**
   * @description
   *   系统来源
   */
  system: string
  /**
   * @description
   *   workId
   */
  workId: string
}

/**
 * @description
 *   设备风险记录表
 */
export interface ProjectDeviceRiskVO {
  /**
   * @description
   *   地址
   * @example
   *   北京市朝阳区
   */
  address: string
  /**
   * @description
   *   创建时间
   * @format date-time
   * @example
   *   2024-06-14T10:15:30
   */
  createTime: string
  /**
   * @description
   *   风险度
   * @example
   *   5
   */
  dangerLevel: string
  /**
   * @description
   *   设施设备名称
   * @example
   *   设备X
   */
  deviceName: string
  /**
   * @description
   *   经度
   * @example
   *   116.4074
   */
  latitude: string
  /**
   * @description
   *   纬度
   * @example
   *   39.9042
   */
  longitude: string
  /**
   * @description
   *   当前主要存在问题
   * @example
   *   漏油
   */
  mainProblem: string
  /**
   * @description
   *   位置
   * @example
   *   仓库
   */
  position: string
  /**
   * @description
   *   可能的严重事故
   * @example
   *   火灾
   */
  possibleSeriousDanger: string
  /**
   * @description
   *   危险概率
   * @example
   *   高
   */
  riskProbability: string
  /**
   * @description
   *   修改时间
   * @format date-time
   * @example
   *   2024-06-15T12:20:45
   */
  updateTime: string
}

export interface ProjectMatterDetailDangerWorkDTO {
  /**
   * @description
   *   总数
   * @format int32
   */
  allCount: number
  /**
   * @description
   *   全部危险作业列表
   */
  allWorks: Array<ProjectDangerWorkDTO>
  /**
   * @description
   *   已完成数量
   * @format int32
   */
  completeCount: number
  /**
   * @description
   *   已完成危险作业列表
   */
  completedWorks: Array<ProjectDangerWorkDTO>
  /**
   * @description
   *   危大数量
   * @format int32
   */
  dangerCount: number
  /**
   * @description
   *   进行中数量
   * @format int32
   */
  initCount: number
  /**
   * @description
   *   进行中数量
   * @format int32
   */
  ongoingCount: number
  /**
   * @description
   *   未完成危险作业列表
   */
  ongoingWorks: Array<ProjectDangerWorkDTO>
  /**
   * @description
   *   计划外数量
   * @format int32
   */
  outPlatCount: number
}

export interface ProjectMatterImportantFocusRobotVO {
  /**
   * @description
   *   时间最长的标题
   */
  longTimeTitle: string
  /**
   * @description
   *   最高事项等级
   */
  matterLevel: string
  /**
   * @description
   *   撒点
   */
  pointInformation: string
  /**
   * @description
   *   项目部点位
   */
  projectDepartmentPoint: Array<ProjectSysOrg>
  /**
   * @description
   *   后续进入文案
   */
  robotAgainInfo: string
  /**
   * @description
   *   首次进入文案
   */
  robotFirstInfo: string
  /**
   * @description
   *   智伴文案
   */
  robotInfo: string
  /**
   * @description
   *   今日重点关注数量
   * @format int32
   */
  todayFocusCount: number
  /**
   * @description
   *   今日重点关注列表
   */
  todayFocusTitleList: string
  /**
   * @description
   *   今日重点高风险数量
   * @format int32
   */
  todayHighRiskCount: number
  /**
   * @description
   *   当前登录人名称
   */
  userName: string
  /**
   * @description
   *   昨日已完成数量
   * @format int32
   */
  yesterdayCompletedCount: number
}

export interface ProjectScheduleExecRateDetailVo {
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   日期
   */
  date: string
  /**
   * @description
   *   卡片说明
   */
  indexSummary: string
  /**
   * @description
   *   风险辨识
   */
  matterDetail: Array<ProjectScheduleExecRateEntity>
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   项目部编码
   */
  orgCode: string
  /**
   * @description
   *   项目部名称
   */
  orgName: string
  /**
   * @description
   *   统计趋势图
   */
  riskTrend: Array<PtRiskStaEntity>
  /**
   * @description
   *   统计年份
   */
  staYear: string
  /**
   * @description
   *   处置建议
   */
  suggestion: string
}

export interface ProjectScheduleExecRateEntity {
  /**
   * @description
   *   作业等级
   */
  dangerLev: string
  /**
   * @description
   *   作业类型
   */
  operateTypeTxt: string
  /**
   * @description
   *   施工组织编码
   */
  orgCode: string
  /**
   * @description
   *   施工组织
   */
  orgName: string
  /**
   * @description
   *   工程名称
   */
  proName: string
  /**
   * @description
   *   施工组长
   */
  sgdzName: string
  /**
   * @description
   *   施工组长电话
   */
  sgdzPhone: string
  /**
   * @description
   *   作业结束时间
   */
  worketime: string
  /**
   * @description
   *   作业开始时间
   */
  workstime: string
}

export interface ProjectSysOrg {
  acname: string
  companyCode: string
  companyName: string
  /**
   * @description
   *   实体公司编码
   * @example
   *   E789
   */
  cpmoCop: string
  /**
   * @description
   *   实体公司名称
   * @example
   *   实体公司名
   */
  cpmoCopTxt: string
  /** @format date-time */
  createTime: string
  createUser: string
  deleteFlag: boolean
  enable: boolean
  factoryCode: string
  gjhOrgCode: string
  gjhOrgId: string
  /** @format int32 */
  id: number
  latitude: string
  /** @format int32 */
  level: number
  longitude: string
  orgCode: string
  orgName: string
  orgPath: string
  /** @format int32 */
  orgType: number
  parentId: string
  projectCode: string
  /** @format date-time */
  updateTime: string
  updateUser: string
}

export interface PtDangerMsgParamDto {
  /**
   * @description
   *   处置意见
   */
  handleComment: string
  /**
   * @description
   *   处置状态；  1：待处置， 4：处置中，5：已解除
   * @format int32
   */
  handleStatus: number
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  handleTime: string
  /**
   * @description
   *   创建人
   */
  handler: string
  /**
   * @description
   *   创建人姓名
   */
  handlerName: string
  /**
   * @description
   *   业务唯一id
   * @format int64
   */
  msgId: number
  /**
   * @description
   *   项目id
   */
  proId: string
  /**
   * @description
   *   解除时间
   * @format date-time
   */
  resolveTime: string
  /**
   * @description
   *   解除方式； 1：自动， 2：手工
   * @format int32
   */
  resolveWay: number
  /**
   * @description
   *   智能运营中心：smart-operation，安全监管平台：xindny-safety
   */
  system: string
  /**
   * @description
   *   焊口序号
   */
  weldJunctionNum: string
  /**
   * @description
   *   焊机类型；  1：热熔焊机， 2：电熔焊机
   * @format int32
   */
  weldType: number
}

export interface PtRiskStaEntity {
  /** @format int32 */
  id: number
  /** @format int32 */
  nums: number
  orgCoce: string
  staPer: string
  staType: string
  ymonth: string
}

export interface QuotaNoteQueryDTO {
  /**
   * @description
   *   指标编码
   */
  quotaCode: string
}

/**
 * @description
 *   排名摘要
 */
export interface RankDigest {
  /**
   * @description
   *   全组织名次
   */
  allOrgRank: string
  /**
   * @description
   *   全组织排名的总数
   */
  allOrgTotal: string
  /**
   * @description
   *   全组织排名趋势类型
   */
  allOrgTrendType: string
  /**
   * @description
   *   全组织名次变化量
   */
  allOrgTrendValue: string
  /**
   * @description
   *   区域名次
   */
  areaRank: string
  /**
   * @description
   *   参与区域排名的总数
   */
  areaTotal: string
  /**
   * @description
   *   区域名次趋势类型
   */
  areaTrendType: string
  /**
   * @description
   *   区域名次变化量
   */
  areaTrendValue: string
  /**
   * @description
   *   控股名次
   */
  holdingRank: string
  /**
   * @description
   *   参与控股排名的总数
   */
  holdingTotal: string
  /**
   * @description
   *   控股排名趋势类型
   */
  holdingTrendType: string
  /**
   * @description
   *   控股名次变化量
   */
  holdingTrendValue: string
  /**
   * @description
   *   得分
   */
  rankScore: string
  /**
   * @description
   *   得分趋势类型
   */
  rankScoreTrendType: string
  /**
   * @description
   *   得分变化量
   */
  rankScoreTrendValue: string
  /**
   * @description
   *   风险度
   */
  safeLevel: string
}

export interface RdfaResult {
  code: string
  data: Serializable
  message: string
  success: boolean
}

export interface ReceiveRobotMsgDTO {
  admin: boolean
  atUsers: Array<AtUser>
  chatbotCorpId: string
  chatbotUserId: string
  conversationId: string
  conversationTitle: string
  conversationType: string
  /** @format int64 */
  createAt: number
  inAtList: boolean
  msgId: string
  msgtype: string
  senderCorpId: string
  senderId: string
  senderNick: string
  senderStaffId: string
  sessionWebhook: string
  /** @format int64 */
  sessionWebhookExpiredTime: number
  text: Text
}

/**
 * @description
 *   红线列表实体
 */
export interface RedLineList {
  /**
   * @description
   *   检查日期
   */
  checkDate: string
  /**
   * @description
   *   检查人
   */
  checkUserName: string
  /**
   * @description
   *   月份
   */
  dutyMonth: string
  /**
   * @description
   *   红线数量
   */
  redLineCount: string
  /**
   * @description
   *   规定动作
   */
  ruleAction: string
}

export interface RelationshipQueryDTO {
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   公司/部门表ID
   * @format int64
   */
  orgCompanyMapId: number
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
}

export interface ReplyUrgingDTO {
  /**
   * @description
   *   token
   */
  token: string
  /**
   * @description
   *   示险隐患id
   */
  troubleId: string
  /**
   * @description
   *   催办回复
   */
  urgingDesc: string
  /**
   * @description
   *   催办id
   */
  urgingId: string
}

export interface ReportEnterpriseInfoVO {
  /**
   * @description
   *   煤改气用户数
   */
  coalToGasUsers: string
  /**
   * @description
   *   在建泛能项目
   */
  constructionProject: string
  /**
   * @description
   *   部门数量
   */
  deptNum: string
  /**
   * @description
   *   门站
   */
  doorStationNum: string
  /**
   * @description
   *   泛能值班运营人员数量
   */
  dutyOperationNum: string
  /**
   * @description
   *   员工数量
   */
  employNum: string
  /**
   * @description
   *   加气站
   */
  gasStation: string
  /**
   * @description
   *   工商户
   */
  industrialCommercialUsers: string
  /**
   * @description
   *   户内安检维修人员数量
   */
  innerRepairNum: string
  /**
   * @description
   *   低压管网数
   */
  lowPressureNum: string
  /**
   * @description
   *   中压管网数
   */
  middlePressureNum: string
  /**
   * @description
   *   无人值守站
   */
  noPersonStation: string
  /**
   * @description
   *   运营泛能项目
   */
  operateProject: string
  /**
   * @description
   *   巡线维护人员数量
   */
  patrolMaintenanceNum: string
  /**
   * @description
   *   调压箱柜数量
   */
  pressureRegulateNum: string
  /**
   * @description
   *   安全管理部门人数
   */
  safeDeptNum: string
  /**
   * @description
   *   次高压管网数
   */
  secondPressureNum: string
  /**
   * @description
   *   厂站人员数量
   */
  stationEmployNum: string
  /**
   * @description
   *   厂站数
   */
  stationNum: string
  /**
   * @description
   *   储配站
   */
  storageStationNum: string
  /**
   * @description
   *   供气量时间段
   */
  supplyDay: string
  /**
   * @description
   *   供气量
   */
  supplyNum: string
  /**
   * @description
   *   城镇居民用户数
   */
  townUserNum: string
  /**
   * @description
   *   阀门井数量
   */
  valveNum: string
  /**
   * @description
   *   年供气量
   */
  yearSupplyNum: string
}

export interface ReportEnterpriseQueryDTO {
  /**
   * @description
   *   日期(年月日,yyyy-MM-dd)
   */
  date: string
  /**
   * @description
   *   8位组织id
   */
  orgId: string
}

export interface ReportEnterpriseRiskDataVO {
  /**
   * @description
   *   相较于昨日升高的分数
   */
  higherScore: string
  /**
   * @description
   *   报告生成时间
   */
  reportDate: string
  /**
   * @description
   *   企业风险控股平均分
   */
  riskAverageScore: string
  /**
   * @description
   *   风险描述
   */
  riskContinueDesc: string
  /**
   * @description
   *   风险持续时间
   */
  riskContinueTime: string
  /**
   * @description
   *   企业风险分排名
   */
  riskRanking: string
  /**
   * @description
   *   企业当前风险分
   */
  riskScore: string
  /**
   * @description
   *   企业当前风险分等级
   */
  riskScoreLevel: string
  /**
   * @description
   *   企业当前风险分等级编码
   */
  riskScoreLevelCode: string
  /**
   * @description
   *   各场景的控股平均
   */
  sceneAverageScore: {
    /**
        @description
          各场景的控股平均 */
    [propertyName: string]: string
  }
  /**
   * @description
   *   各场景的当前风险分
   */
  sceneRiskScore: {
    /**
        @description
          各场景的当前风险分 */
    [propertyName: string]: string
  }
  /**
   * @description
   *   企业近三十天的风险分数据
   */
  thirtyDayRiskScore: Array<SevenDayRiskScore>
}

export interface ReportEvalSceneRiskQuotaVO {
  /**
   * @description
   *   风险指标集
   */
  riskQuotas: Array<ReportRiskQuota>
  /**
   * @description
   *   场景风险等级编码
   */
  riskRankCode: string
  /**
   * @description
   *   场景风险等级描述
   */
  riskRankDesc: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
}

export interface ReportEvalSceneVO {
  /**
   * @description
   *   场景风险控股平均分
   */
  riskAverageScore: string
  /**
   * @description
   *   风险项明细
   */
  riskDetails: Array<RiskDetail>
  /**
   * @description
   *   场景风险项个数
   * @format int32
   */
  riskNum: number
  /**
   * @description
   *   场景当前风险等级编码
   */
  riskRankCode: string
  /**
   * @description
   *   场景当前风险等级描述
   */
  riskRankDesc: string
  /**
   * @description
   *   场景风险分排名
   */
  riskRanking: string
  /**
   * @description
   *   场景风险得分
   */
  riskScore: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   前七周的风险平均分及排名
   */
  sevenWeekRiskAverageScore: Array<SevenWeekRiskAverageScore>
}

export interface ReportEvalTotalSafetyVO {
  /**
   * @description
   *   企业风险项个数
   */
  riskNum: string
  /**
   * @description
   *   单个风险项描述信息
   */
  singleRiskDesc: Array<SingleRiskDesc>
}

export interface ReportFistPageOverviewVO {
  /**
   * @description
   *   相较于昨日升高的分数
   */
  higherScore: string
  /**
   * @description
   *   企业风险控股平均分
   */
  riskAverageScore: string
  /**
   * @description
   *   风险概述
   */
  riskOverviews: Array<string>
  /**
   * @description
   *   企业风险分排名
   */
  riskRanking: string
  /**
   * @description
   *   企业当前风险分
   */
  riskScore: string
  /**
   * @description
   *   企业当前风险分等级
   */
  riskScoreLevel: string
  /**
   * @description
   *   企业当前风险分等级编码
   */
  riskScoreLevelCode: string
  /**
   * @description
   *   各场景的控股平均
   */
  sceneAverageScore: {
    /**
        @description
          各场景的控股平均 */
    [propertyName: string]: string
  }
  /**
   * @description
   *   各场景的当前风险分
   */
  sceneRiskScore: {
    /**
        @description
          各场景的当前风险分 */
    [propertyName: string]: string
  }
  /**
   * @description
   *   各场景的同类型企业平均分
   */
  sceneSameTypeAverageScore: {
    /**
        @description
          各场景的同类型企业平均分 */
    [propertyName: string]: string
  }
}

export interface ReportQuotaNoteInfoVO {
  /**
   * @description
   *   评估指标算法
   */
  algorithm: string
  /**
   * @description
   *   评估指标名称
   */
  name: string
  /**
   * @description
   *   数据来源
   */
  source: string
  /**
   * @description
   *   评估标准或依据
   */
  standard: string
}

export interface ReportRiskQuota {
  /**
   * @description
   *   偏差情况
   */
  deviation: string
  /**
   * @description
   *   偏差情况编码
   */
  deviationCode: string
  /**
   * @description
   *   指标名称
   */
  quotaName: string
  /**
   * @description
   *   指标分数
   */
  score: string
  /**
   * @description
   *   趋势
   */
  scoreList: Array<ScoreTrend>
  /**
   * @description
   *   分数展示类型
   */
  showType: string
}

export interface ReportSameTypeInfo {
  companyCode: string
  companyName: string
  currentFlag: boolean
}

export interface RequestPersonComplianceParam {
  /**
   * @description
   *   组织编码
   */
  orgCode: string
}

export interface Risk {
  /**
   * @description
   *   发现地点
   */
  address: string
  /**
   * @description
   *   发现时间
   */
  date: string
  /**
   * @description
   *   处置进展
   */
  disposalProgress: string
  /**
   * @description
   *   示险标题
   */
  title: string
}

export interface RiskDetail {
  /**
   * @description
   *   责任人
   */
  dutyPerson: string
  /**
   * @description
   *   更新时间
   */
  gmtModified: string
  /**
   * @description
   *   控股平均
   */
  holdingAverage: string
  /**
   * @description
   *   改善提升排名
   */
  improveRank: string
  /**
   * @description
   *   改善提升得分
   */
  improveScore: string
  /**
   * @description
   *   现状描述
   */
  presentSituationDesc: string
  /**
   * @description
   *   指标编码
   */
  quotaCode: string
  /**
   * @description
   *   指标展示颜色 0:橙色 1:红色
   */
  quotaColorFlag: string
  /**
   * @description
   *   指标偏差数值
   */
  quotaDeviationValue: string
  /**
   * @description
   *   指标数据来源
   */
  quotaSource: string
  /**
   * @description
   *   指标标签
   */
  quotaTag: string
  /**
   * @description
   *   指标名称-偏差文本
   */
  quotaTitle: string
  /**
   * @description
   *   排名
   */
  ranking: string
  /**
   * @description
   *   数值展示类型
   */
  showType: string
  /**
   * @description
   *   处理状态
   * @format int32
   */
  status: number
  /**
   * @description
   *   处理状态描述
   */
  statusDesc: string
  /**
   * @description
   *   整改建议
   */
  suggestions: string
}

/**
 * @description
 *   风险地图-风险动态
 */
export interface RiskDynamicsVO {
  /**
   * @description
   *   第三方施工监管数量
   * @format int32
   */
  constructionCount: number
  /**
   * @description
   *   危险作业数量
   * @format int32
   */
  dangerWorkCount: number
  /**
   * @description
   *   调压器健康评价差设备
   * @format int32
   */
  deviceCount: number
}

/**
 * @description
 *   风险辨识
 */
export interface RiskIdentificationVO {
  /**
   * @description
   *   法人公司指标
   */
  companyKpis: Array<KpiCompanyVO>
  /**
   * @description
   *   控股指标
   */
  deptKpi: {
    /**
        @description
          控股指标 */
    [propertyName: string]: BaseVO
  }
  /**
   * @description
   *   管理实体指标
   */
  orgKpi: KpiCompanyVO
}

export interface RiskPreventReportAddDTO {
  /**
   * @description
   *   应对措施
   */
  counterMeasure: string
  /**
   * @description
   *   结束时间
   * @format date-time
   */
  endTime: string
  /**
   * @description
   *   关注原因
   */
  focusReason: string
  /**
   * @description
   *   地理位置
   */
  location: string
  /**
   * @description
   *   是否重大危险作业:0否，1是
   * @format int32
   */
  majorHazardFlag: number
  /**
   * @description
   *   项目负责人名称
   */
  projectLeaderName: string
  /**
   * @description
   *   项目名称
   */
  projectName: string
  /**
   * @description
   *   风险状态:0不存在,1存在
   * @format int32
   */
  riskStatus: number
  /**
   * @description
   *   开始时间
   * @format date-time
   */
  startTime: string
}

export interface RiskPreventReportListQueryDTO {
  /**
   * @description
   *   关注原因
   */
  focusReason: string
  /**
   * @description
   *   是否重大危险作业:0否，1是
   * @format int32
   */
  majorHazardFlag: number
  /**
   * @description
   *   页码
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页数
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   项目名称
   */
  projectName: string
  /**
   * @description
   *   风险状态:0不存在,1存在
   * @format int32
   */
  riskStatus: number
}

export interface RiskPreventReportMajorHazardFlagChangeDTO {
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   是否重大危险作业:0否，1是
   * @format int32
   */
  majorHazardFlag: number
}

export interface RiskPreventReportRiskStatusChangeDTO {
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   风险状态:0不存在,1存在
   * @format int32
   */
  riskStatus: number
}

export interface RiskPreventReportUpdateDTO {
  /**
   * @description
   *   应对措施
   */
  counterMeasure: string
  /**
   * @description
   *   结束时间
   * @format date-time
   */
  endTime: string
  /**
   * @description
   *   关注原因
   */
  focusReason: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   地理位置
   */
  location: string
  /**
   * @description
   *   是否重大危险作业:0否，1是
   * @format int32
   */
  majorHazardFlag: number
  /**
   * @description
   *   项目负责人名称
   */
  projectLeaderName: string
  /**
   * @description
   *   项目名称
   */
  projectName: string
  /**
   * @description
   *   风险状态:0不存在,1存在
   * @format int32
   */
  riskStatus: number
  /**
   * @description
   *   开始时间
   * @format date-time
   */
  startTime: string
}

export interface RiskPreventReportVO {
  /**
   * @description
   *   应对措施
   */
  counterMeasure: string
  /**
   * @description
   *   结束时间
   * @format date-time
   */
  endTime: string
  /**
   * @description
   *   关注原因
   */
  focusReason: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   地理位置
   */
  location: string
  /**
   * @description
   *   是否重大危险作业:0否，1是
   * @format int32
   */
  majorHazardFlag: number
  /**
   * @description
   *   项目负责人名称
   */
  projectLeaderName: string
  /**
   * @description
   *   项目名称
   */
  projectName: string
  /**
   * @description
   *   风险状态:0不存在,1存在
   * @format int32
   */
  riskStatus: number
  /**
   * @description
   *   开始时间
   * @format date-time
   */
  startTime: string
}

/**
 * @description
 *   场景分类
 */
export interface RiskSceneVO {
  /**
   * @description
   *   子级列表
   */
  childList: Array<RiskSceneVO>
  /**
   * @description
   *   场景分类编码
   */
  sceneCode: string
  /**
   * @description
   *   场景分类名称
   */
  sceneName: string
}

/**
 * @description
 *   示险纠偏留痕记录新增参数
 */
export interface RiskTraceAdd {
  /**
   * @description
   *   法人公司编码
   */
  compCode: string
  /**
   * @description
   *   法人公司
   */
  compCodeTxt: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体
   */
  cpmoCopTxt: string
  /**
   * @description
   *   重点关注表ID
   * @format int64
   */
  importantFocusId: number
  /**
   * @description
   *   是否完结
   */
  isFinish: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   示险记录ID
   * @format int64
   */
  riskId: number
  /**
   * @description
   *   示险标题
   */
  riskTitle: string
  /**
   * @description
   *   留痕附件
   */
  traceAttachment: string
  /**
   * @description
   *   留痕内容
   */
  traceContent: string
  /**
   * @description
   *   留痕类别:机器人/手动纠偏
   */
  traceKind: string
  /**
   * @description
   *   留痕标题
   */
  traceTitle: string
  /**
   * @description
   *   用户id列表
   */
  userIds: string
}

/**
 * @description
 *   示险纠偏留痕详情
 */
export interface RiskTraceDetail {
  /**
   * @description
   *   法人公司编码
   */
  compCode: string
  /**
   * @description
   *   法人公司
   */
  compCodeTxt: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体
   */
  cpmoCopTxt: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人
   */
  createUid: string
  /**
   * @description
   *   删除标记 (0:正常,1:删除）
   */
  deleted: boolean
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   重点关注表ID
   * @format int64
   */
  importantFocusId: number
  /**
   * @description
   *   是否完结
   */
  isFinish: string
  /**
   * @description
   *   RDFA租户ID
   */
  rdfaTenantId: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   示险记录表ID
   * @format int64
   */
  riskId: number
  /**
   * @description
   *   示险标题
   */
  riskTitle: string
  /**
   * @description
   *   留痕附件
   */
  traceAttachment: string
  /**
   * @description
   *   留痕内容
   */
  traceContent: string
  /**
   * @description
   *   留痕类别:机器人/手动纠偏
   */
  traceKind: string
  /**
   * @description
   *   留痕标题
   */
  traceTitle: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人
   */
  updateUid: string
}

/**
 * @description
 *   示险纠偏留痕记录查询参数
 */
export interface RiskTraceQuery {
  /**
   * @description
   *   创建时间排序方式
   */
  createTimeSort: string
  /**
   * @description
   *   示险记录ID
   * @format int64
   */
  riskId: number
}

/**
 * @description
 *   示险纠偏留痕记录更新参数
 */
export interface RiskTraceUpdate {
  /**
   * @description
   *   法人公司编码
   */
  compCode: string
  /**
   * @description
   *   法人公司
   */
  compCodeTxt: string
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体
   */
  cpmoCopTxt: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   重点关注表ID
   * @format int64
   */
  importantFocusId: number
  /**
   * @description
   *   是否完结
   */
  isFinish: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   留痕附件
   */
  traceAttachment: string
  /**
   * @description
   *   留痕内容
   */
  traceContent: string
  /**
   * @description
   *   留痕类别:机器人/手动纠偏
   */
  traceKind: string
  /**
   * @description
   *   留痕标题
   */
  traceTitle: string
}

export interface RoleInfo {
  /**
   * @description
   *   角色编码
   */
  roleCode: string
  /**
   * @description
   *   角色描述
   */
  roleDesc: string
  /**
   * @description
   *   角色id
   */
  roleId: string
  /**
   * @description
   *   角色名称
   */
  roleName: string
}

export interface RoleInfoSaveDTO {
  appId: string
  appName: string
  /** @format int32 */
  classId: number
  createBy: string
  /**
   * @description
   *   角色组id
   */
  groupId: string
  groupName: string
  /**
   * @description
   *   主键id
   */
  id: string
  /** @format int32 */
  isApply: number
  /** @format int32 */
  isSelect: number
  /** @format int32 */
  newType: number
  /**
   * @description
   *   角色id和角色编码等价
   */
  roleCode: string
  roleDesc: string
  /**
   * @description
   *   角色编码
   */
  roleId: string
  /**
   * @description
   *   角色名称
   */
  roleName: string
  roleType: string
  /** @format int32 */
  status: number
  tenantId: string
}

export interface RoleInfoVO {
  appId: string
  appName: string
  /** @format int32 */
  classId: number
  createBy: string
  /**
   * @description
   *   角色组id
   */
  groupId: string
  groupName: string
  /**
   * @description
   *   主键id
   */
  id: string
  /** @format int32 */
  isApply: number
  /** @format int32 */
  isSelect: number
  /** @format int32 */
  newType: number
  /**
   * @description
   *   角色描述
   */
  roleDesc: string
  /**
   * @description
   *   角色编码
   */
  roleId: string
  /**
   * @description
   *   角色名称
   */
  roleName: string
  roleType: string
  /** @format int32 */
  status: number
  tenantId: string
}

export interface RoleListQueryDTO {
  /**
   * @description
   *   页码
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页数
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   角色名称
   */
  roleName: string
}

export interface RoleSaveDTO {
  /**
   * @description
   *   新增的资源权限列表
   */
  addAuthPerm: Array<AuthPerm>
  /**
   * @description
   *   角色编码
   */
  roleCode: string
  /**
   * @description
   *   角色描述
   */
  roleDesc: string
  /**
   * @description
   *   角色名称
   */
  roleName: string
}

export interface RoleUpdateDTO {
  /**
   * @description
   *   编辑后的资源权限列表
   */
  newAuthPerm: Array<AuthPerm>
  /**
   * @description
   *   编辑前的资源权限列表
   */
  oldAuthPerm: Array<AuthPerm>
  /**
   * @description
   *   角色描述
   */
  roleDesc: string
  /**
   * @description
   *   角色id
   */
  roleId: string
  /**
   * @description
   *   角色名称
   */
  roleName: string
}

export interface RoleVO {
  /**
   * @description
   *   是否可删除
   */
  canDelete: boolean
  /**
   * @description
   *   角色编码
   */
  roleCode: string
  /**
   * @description
   *   角色描述
   */
  roleDesc: string
  /**
   * @description
   *   角色id
   */
  roleId: string
  /**
   * @description
   *   角色名称
   */
  roleName: string
  /**
   * @description
   *   是否被选中
   */
  selected: boolean
}

export interface RuHuKpiAddInfoDTO {
  /**
   * @description
   *   描述文案
   */
  infoDesc: string
  /**
   * @description
   *   类别：1：20天，2：30天，3：今天
   * @format int32
   */
  kind: number
  /**
   * @description
   *   重点关注主键id
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   安检率指标编码
   */
  securityCode: string
  /**
   * @description
   *   安检率指标名称
   */
  securityName: string
  /**
   * @description
   *   安检速度指标编码
   */
  securitySpeedCode: string
  /**
   * @description
   *   安检速度指标名称
   */
  securitySpeedName: string
  /**
   * @description
   *   安检速度指标值
   */
  securitySpeedValue: string
  /**
   * @description
   *   安检率指标值
   */
  securityValue: string
}

export interface RuHuKpiQueryDTO {
  /**
   * @description
   *   重点关注主键id
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   组织编码
   */
  orgCode: string
}

export interface RuleActionDTO {
  /**
   * @description
   *   页签名称
   */
  actionName: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   参考数据编码
   */
  referDataCode: string
  /**
   * @description
   *   参考数据名称
   */
  referDataName: string
  /**
   * @description
   *   示险等级
   */
  riskLevel: string
  /**
   * @description
   *   示险建议
   */
  riskSuggest: string
  /**
   * @description
   *   示险标题
   */
  riskTitle: string
  /**
   * @description
   *   规则条件
   */
  ruleCondition: string
  /**
   * @description
   *   示险发布对象集合
   */
  rulePushObjectList: Array<RulePushObjectDTO>
  /**
   * @description
   *   解除示险状态变更编码
   */
  secureStateCode: string
  /**
   * @description
   *   解除示险状态变更名称
   */
  secureStateName: string
  /**
   * @description
   *   解除示险消息通知人id
   */
  secureStatePushUserId: string
  /**
   * @description
   *   解除示险消息通知人名称
   */
  secureStatePushUserName: string
}

export interface RuleActionVO {
  /**
   * @description
   *   页签名称
   */
  actionName: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   参考数据编码
   */
  referDataCode: string
  /**
   * @description
   *   参考数据名称
   */
  referDataName: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   示险等级
   */
  riskLevel: string
  /**
   * @description
   *   示险建议
   */
  riskSuggest: string
  /**
   * @description
   *   示险标题
   */
  riskTitle: string
  /**
   * @description
   *   规则条件
   */
  ruleCondition: string
  /**
   * @description
   *   规则表达式
   */
  ruleExpression: string
  /**
   * @description
   *   示险发布对象集合
   */
  rulePushObjectList: Array<RulePushObjectVO>
  /**
   * @description
   *   解除示险状态变更编码
   */
  secureStateCode: string
  /**
   * @description
   *   解除示险状态变更名称
   */
  secureStateName: string
  /**
   * @description
   *   解除示险消息通知人id
   */
  secureStatePushUserId: string
  /**
   * @description
   *   解除示险消息通知人名称
   */
  secureStatePushUserName: string
  /**
   * @description
   *   执行动作tab（1：推送示险，2：解除示险，3：任务推送，4：消息通知）
   */
  tabType: string
  /**
   * @description
   *   指标趋势名称
   */
  trendName: string
}

export interface RuleAddDTO {
  /**
   * @description
   *   结束时间
   * @format date-time
   */
  endTime: string
  /**
   * @description
   *   行业类别编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   行业类别名称
   */
  industryCategoryName: string
  /**
   * @description
   *   频次类型
   */
  intenvalType: string
  /**
   * @description
   *   频次值
   */
  intenvalValue: string
  /**
   * @description
   *   业务标签编码
   */
  labelCode: string
  /**
   * @description
   *   业务标签名称
   */
  labelName: string
  /**
   * @description
   *   示险动作集合
   */
  ruleActionList: Array<RuleActionDTO>
  /**
   * @description
   *   规则描述
   */
  ruleDesc: string
  /**
   * @description
   *   规则名称
   */
  ruleName: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   开始时间
   * @format date-time
   */
  startTime: string
}

/**
 * @description
 *   条件查询
 */
export interface RuleConditionSearch {
  /**
   * @description
   *   行业编码
   */
  industrySceneCode: string
  /**
   * @description
   *   关键字
   */
  keyword: string
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   页码
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   每页记录数
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   类别
   */
  type: string
}

/**
 * @description
 *   指标库
 */
export interface RuleConditionVO {
  /**
   * @description
   *   指标值
   */
  conditionValue: string
  /**
   * @description
   *   字段名称
   */
  field: string
  /**
   * @description
   *   条件格式
   */
  filterCondition: string
  /**
   * @description
   *   条件名称
   */
  name: string
  /**
   * @description
   *   条件类型（1：按指标 2：按示险问题）
   * @format int32
   */
  type: number
}

export interface RuleListQueryDTO {
  /**
   * @description
   *   创建人
   */
  createName: string
  /**
   * @description
   *   页码
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页数
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   规则描述
   */
  ruleDesc: string
  /**
   * @description
   *   规则名称
   */
  ruleName: string
  /**
   * @description
   *   规则开关（1：打开，0：关闭）
   * @format int32
   */
  ruleStatus: number
  /**
   * @description
   *   场景分类编码
   */
  sceneCode: string
}

export interface RuleListVO {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   结束时间
   * @format date-time
   */
  endTime: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   行业类别编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   行业类别名称
   */
  industryCategoryName: string
  /**
   * @description
   *   频次类型
   */
  intenvalType: string
  /**
   * @description
   *   频次值
   */
  intenvalValue: string
  /**
   * @description
   *   业务标签编码
   */
  labelCode: string
  /**
   * @description
   *   业务标签名称
   */
  labelName: string
  /**
   * @description
   *   规则编码
   */
  ruleCode: string
  /**
   * @description
   *   规则描述
   */
  ruleDesc: string
  /**
   * @description
   *   规则名称
   */
  ruleName: string
  /**
   * @description
   *   规则开关（1：打开，0：关闭）
   * @format int32
   */
  ruleStatus: number
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   来源组织code
   */
  sourceOrgCode: string
  /**
   * @description
   *   来源组织名称
   */
  sourceOrgName: string
  /**
   * @description
   *   开始时间
   * @format date-time
   */
  startTime: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

export interface RulePushObjectDTO {
  /**
   * @description
   *   对象名称
   */
  objectName: string
  /**
   * @description
   *   对象编码
   */
  objectRole: string
  /**
   * @description
   *   对象类型(1：按用户，2：按用户组，3：按角色，4：按组织)
   * @format int32
   */
  objectType: number
}

export interface RulePushObjectVO {
  /**
   * @description
   *   对象名称
   */
  objectName: string
  /**
   * @description
   *   对象编码
   */
  objectRole: string
  /**
   * @description
   *   对象类型(1：按用户，2：按用户组，3：按角色，4：按组织)
   * @format int32
   */
  objectType: number
  /**
   * @description
   *   备注
   */
  remark: string
}

/**
 * @description
 *   场景查询
 */
export interface RuleSceneSearch {
  /**
   * @description
   *   当前用户的行业编码
   */
  industrySceneCode: string
  /**
   * @description
   *   当前用户是否是产品运营角色
   */
  isOperatorRule: boolean
}

export interface RuleStatusChangeDTO {
  /**
   * @description
   *   示险规则id
   * @format int64
   */
  ruleBaseId: number
  /**
   * @description
   *   规则开关（1：打开，0：关闭）
   * @format int32
   */
  ruleStatus: number
}

export interface RuleSubscribeSaveDTO {
  /**
   * @description
   *   新增的推荐订阅组织集合
   */
  addSubscribeOrgList: Array<SubscribeOrgDTO>
  /**
   * @description
   *   删除的推荐订阅组织集合
   */
  deleteSubscribeOrgList: Array<SubscribeOrgDTO>
  /**
   * @description
   *   示险规则id
   * @format int64
   */
  ruleBaseId: number
}

export interface RuleUpdateDTO {
  /**
   * @description
   *   结束时间
   * @format date-time
   */
  endTime: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   行业类别编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   行业类别名称
   */
  industryCategoryName: string
  /**
   * @description
   *   频次类型
   */
  intenvalType: string
  /**
   * @description
   *   频次值
   */
  intenvalValue: string
  /**
   * @description
   *   业务标签编码
   */
  labelCode: string
  /**
   * @description
   *   业务标签名称
   */
  labelName: string
  /**
   * @description
   *   示险动作集合
   */
  ruleActionList: Array<RuleActionDTO>
  /**
   * @description
   *   规则描述
   */
  ruleDesc: string
  /**
   * @description
   *   规则名称
   */
  ruleName: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   开始时间
   * @format date-time
   */
  startTime: string
}

export interface RuleVO {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   结束时间
   * @format date-time
   */
  endTime: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   行业类别编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   行业类别名称
   */
  industryCategoryName: string
  /**
   * @description
   *   频次类型
   */
  intenvalType: string
  /**
   * @description
   *   频次值
   */
  intenvalValue: string
  /**
   * @description
   *   业务标签编码
   */
  labelCode: string
  /**
   * @description
   *   业务标签名称
   */
  labelName: string
  /**
   * @description
   *   示险动作集合
   */
  ruleActionList: Array<RuleActionVO>
  /**
   * @description
   *   规则编码
   */
  ruleCode: string
  /**
   * @description
   *   规则描述
   */
  ruleDesc: string
  /**
   * @description
   *   规则名称
   */
  ruleName: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   开始时间
   * @format date-time
   */
  startTime: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
}

export interface SafeBaseCategoryAddDTO {
  /**
   * @description
   *   业务分类编码（关键事项：GJSX，关键过程：GJGC）
   */
  bizCategoryCode: string
  /**
   * @description
   *   业务分类名称
   */
  bizCategoryName: string
  /**
   * @description
   *   关键事项编码
   */
  mattersCode: string
  /**
   * @description
   *   关键事项名称
   */
  mattersName: string
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
  /**
   * @description
   *   衡量指标名称
   */
  measurableName: string
  /**
   * @description
   *   场景编码(关键事项指标有)
   */
  sceneCode: string
  /**
   * @description
   *   场景名称(关键事项指标有)
   */
  sceneName: string
}

export interface SafeBaseCategoryKeyDTO {
  /**
   * @description
   *   业务分类编码（关键事项：GJSX，关键过程：GJGC）
   */
  bizCategoryCode: string
}

export interface SafeBaseCategoryQueryDTO {
  /**
   * @description
   *   衡量指标名称
   */
  measurableName: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
}

export interface SafeBaseCategorySceneDTO {
  /**
   * @description
   *   业务分类编码（关键事项：GJSX，关键过程：GJGC）
   */
  bizCategoryCode: string
  /**
   * @description
   *   场景编码
   */
  sceneCode: string
}

export interface SafeBaseCategorySelectDTO {
  /**
   * @description
   *   衡量指标编码
   */
  measurableCode: string
}

export interface SafeBaseDataCredibility {
  createName: string
  /** @format date-time */
  createTime: string
  createUid: string
  /**
   * @description
   *   数据计算
   */
  dataCalc: string
  /**
   * @description
   *   数据形式
   */
  dataInputWay: string
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /** @format int32 */
  deleted: number
  /**
   * @description
   *   衡量指标编码（一级）
   */
  firstKpiCode: string
  /**
   * @description
   *   衡量指标名称（一级）
   */
  firstKpiName: string
  /**
   * @description
   *   统计周期
   */
  granName: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   指标分类
   */
  kpiSceneKind: string
  rdfaTenantId: string
  /**
   * @description
   *   备注
   */
  remark: string
  updateName: string
  /** @format date-time */
  updateTime: string
  updateUid: string
}

export interface SafeBasePersonalKpiAddDTO {
  /**
   * @description
   *   有底场景类型：YDCJLX
   */
  dicCode: string
  /**
   * @description
   *   有底场景编码
   */
  itemName: string
  /**
   * @description
   *   有底场景名称
   */
  itemValue: string
  /**
   * @description
   *   排序号
   * @format int32
   */
  sort: number
}

export interface SafeBasePersonalKpiBindDTO {
  /**
   * @description
   *   所选择的标签列表
   */
  sortList: Array<SafeBasePersonalKpiAddDTO>
}

/**
 * @description
 *   个人履职请求
 */
export interface SafeInputReqDto {
  /**
   * @description
   *   组织编码
   */
  cpmoCop: string
  /**
   * @description
   *   是否现有红线
   */
  isCurrentRedLine: boolean
  /**
   * @description
   *   履职者itCode
   */
  userCode: string
}

export interface SafeInputVO {
  /**
   * @description
   *   当前投入
   * @format double
   */
  input: number
  /**
   * @description
   *   年度计划
   * @format double
   */
  plan: number
}

/**
 * @description
 *   示险纠偏记录新增参数
 */
export interface SafeMapRiskAdd {
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体
   */
  cpmoCopTxt: string
  /**
   * @description
   *   数据来源标签
   */
  datasourceTag: string
  /**
   * @description
   *   详情页地址
   */
  detailUrl: string
  /**
   * @description
   *   行业编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   接收角色
   */
  receiverRole: string
  /**
   * @description
   *   参考数据编码
   */
  referDataCode: string
  /**
   * @description
   *   参考数据名称
   */
  referDataName: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   示险内容
   */
  riskContent: string
  /**
   * @description
   *   示险次数
   */
  riskCount: string
  /**
   * @description
   *   示险标题
   */
  riskTitle: string
  /**
   * @description
   *   示险纠偏留痕数据
   */
  riskTraceAddList: Array<RiskTraceAdd>
  /**
   * @description
   *   规则动作id列表
   */
  ruleActionIds: string
  /**
   * @description
   *   规则编码
   */
  ruleCode: string
  /**
   * @description
   *   场景
   */
  scene: string
  /**
   * @description
   *   用户id列表
   */
  userIds: string
}

/**
 * @description
 *   示险纠偏详情
 */
export interface SafeMapRiskDetail {
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体
   */
  cpmoCopTxt: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人
   */
  createUid: string
  /**
   * @description
   *   删除标记 (0:正常,1:删除）
   */
  deleted: boolean
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   RDFA租户ID
   */
  rdfaTenantId: string
  /**
   * @description
   *   接收角色
   */
  receiverRole: string
  referDataCode: string
  referDataName: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   示险内容
   */
  riskContent: string
  /**
   * @description
   *   示险次数
   */
  riskCount: string
  /**
   * @description
   *   示险状态：待处理-PENDING、处理中-SOLVING、已处理-SOLVED、已关闭-CLOSED
   */
  riskStatus: string
  /**
   * @description
   *   示险标题
   */
  riskTitle: string
  /**
   * @description
   *   规则动作id列表
   */
  ruleActionIds: string
  /**
   * @description
   *   规则编码
   */
  ruleCode: string
  /**
   * @description
   *   场景
   */
  scene: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人
   */
  updateUid: string
  /**
   * @description
   *   用户id列表
   */
  userIds: string
}

/**
 * @description
 *   示险纠偏摘要信息
 */
export interface SafeMapRiskDigest {
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   数据来源标签
   */
  datasourceTag: string
  /**
   * @description
   *   详情页地址
   */
  detailUrl: string
  /**
   * @description
   *   是否有人跟踪
   */
  followed: boolean
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   示险状态：待处理-PENDING、处理中-SOLVING、已处理-SOLVED、已关闭-CLOSED
   */
  riskStatus: string
  /**
   * @description
   *   示险标题
   */
  riskTitle: string
  /**
   * @description
   *   规则编码
   */
  ruleCode: string
  /**
   * @description
   *   场景
   */
  scene: string
  /**
   * @description
   *   距离当前时间(使用createTime)
   */
  timeFromCurrent: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
}

/**
 * @description
 *   示险纠偏分页参数
 */
export interface SafeMapRiskPageQuery {
  /**
   * @description
   *   关键字
   */
  keyword: string
  /**
   * @description
   *   页码不能为空
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   每页记录数
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   示险状态：待处理-PENDING、处理中-SOLVING、已处理-SOLVED、已关闭-CLOSED,全部不传
   */
  safeMapRiskRecordStatus: Array<string>
  /**
   * @description
   *   场景
   */
  scene: string
}

/**
 * @description
 *   列表查询参数
 */
export interface SafeMapRiskQuery {
  /**
   * @description
   *   关键字
   */
  keyword: string
  /**
   * @description
   *   示险状态：待处理-PENDING、处理中-SOLVING、已处理-SOLVED、已关闭-CLOSED,全部不传
   */
  safeMapRiskRecordStatus: Array<string>
  /**
   * @description
   *   场景
   */
  scene: string
}

/**
 * @description
 *   统计查询参数
 */
export interface SafeMapRiskStatisticsQuery {
  /**
   * @description
   *   公司编码
   */
  cpmoCop: string
  /**
   * @description
   *   示险id
   * @format int64
   */
  id: number
  /**
   * @description
   *   日期区间，不传则默认为7
   * @format int32
   */
  ruleIntenval: number
}

export interface SafeMapRiskStatisticsVO {
  /**
   * @description
   *   统计时间
   */
  calTime: string
  /**
   * @description
   *   数据类型：num：数字；percent：百分比
   */
  kpiFieldType: string
  /**
   * @description
   *   指标值
   * @format double
   */
  kpiValue: number
}

/**
 * @description
 *   示险纠偏更新参数
 */
export interface SafeMapRiskUpdate {
  /**
   * @description
   *   管理实体编码
   */
  cpmoCop: string
  /**
   * @description
   *   管理实体
   */
  cpmoCopTxt: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   接收角色
   */
  receiverRole: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   示险内容
   */
  riskContent: string
  /**
   * @description
   *   示险次数
   */
  riskCount: string
  /**
   * @description
   *   示险状态：待处理-PENDING、处理中-SOLVING、已处理-SOLVED、已关闭-CLOSED
   */
  riskStatus: string
  /**
   * @description
   *   示险标题
   */
  riskTitle: string
  /**
   * @description
   *   示险纠偏留痕数据
   */
  riskTraceAddList: Array<RiskTraceAdd>
  /**
   * @description
   *   规则动作id列表
   */
  ruleActionIds: string
  /**
   * @description
   *   规则编码
   */
  ruleCode: string
  /**
   * @description
   *   场景
   */
  scene: string
  /**
   * @description
   *   用户id列表
   */
  userIds: string
}

export interface SafeOverviewMatterImportantVO {
  /**
   * @description
   *   标签
   */
  label: string
  /**
   * @description
   *   今日重点事项 id
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   事项级别
   */
  matterLevel: string
  /**
   * @description
   *   风险升级、降级状态：0-不变；1-升级；2-降级；3-新增
   * @format int32
   */
  matterLevelStatus: number
  /**
   * @description
   *   数据值
   */
  matterType: string
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   数据值
   */
  value: string
}

/**
 * @description
 *   年度规划进展统计-月
 */
export interface SafePlanStatisticsOrg {
  /**
   * @description
   *   总数
   * @format int32
   */
  allNum: number
  /**
   * @description
   *   月份
   */
  calTime: string
  /**
   * @description
   *   超期未完成
   * @format int32
   */
  delayUnfinished: number
  /**
   * @description
   *   进行中数量
   * @format int32
   */
  doing: number
  /**
   * @description
   *   已完成数量
   * @format int32
   */
  done: number
  /**
   * @description
   *   已完成百分比
   */
  donePercent: string
  /** @format int64 */
  id: number
  orgId: string
  orgName: string
  /**
   * @description
   *   统计类型
   */
  tittleCode: string
  /**
   * @description
   *   统计类型名称
   */
  tittleName: string
  /**
   * @description
   *   未开始
   * @format int32
   */
  todo: number
}

export interface SafeTroubleDetailVO {
  /**
   * @description
   *   附件url列表, example = "https://,https://"
   */
  attachmentUrls: string
  /**
   * @description
   *   检查人员姓名 , example = "梁浩"
   */
  checkUserName: string
  /**
   * @description
   *   重点隐患ID, example = "359726761536000000"
   */
  id: string
  /**
   * @description
   *   整改截止时间, example = "2022-01-29 00:00:00"
   * @format date-time
   */
  rectifyEndTime: string
  /**
   * @description
   *   上报时间, example = "2022-01-27 11:42:19.0"
   * @format date-time
   */
  reportTime: string
  /**
   * @description
   *   上报人员, example = "LIANGHAOH"
   */
  reporter: string
  /**
   * @description
   *   状态编码, example = "1"
   */
  statusCode: string
  /**
   * @description
   *   重点隐患位置, example = "江苏省徐州市睢宁县徐州世纪天虹纺织有限公司(纺部分厂)"
   */
  troubleLocation: string
  /**
   * @description
   *   重点隐患名称 , example = "临时用电"
   */
  troubleName: string
  /**
   * @description
   *   重点隐患状态, example = "临时用电现场电线摆放较为杂乱，不符合规范"
   */
  troubleState: string
  /**
   * @description
   *   重点隐患类型, example = "管理缺陷"
   */
  troubleType: string
}

export interface SafetyAppSelectDTO {
  /**
   * @description
   *   关键字
   */
  keyword: string
}

export interface SafetyAppilcationAddDTO {
  /**
   * @description
   *   图标id
   */
  iconId: string
  /**
   * @description
   *   个人排序号
   * @format int32
   */
  personalSort: number
}

/**
 * @description
 *   基础指标类
 */
export interface SafetyAssessmentBaselineVO {
  /**
   * @description
   *   控股基线
   */
  holdingBaseline: string
  /**
   * @description
   *   控股基线单位
   */
  holdingBaselineUnit: string
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   省公司基线
   */
  provincialCompanyBaseline: string
  /**
   * @description
   *   省公司基线单位
   */
  provincialCompanyBaselineUnit: string
  /**
   * @description
   *   控股排名
   */
  rank: string
  /**
   * @description
   *   安检考核基准-柱状图
   */
  safetyCompanyBaselineVOList: Array<SafetyCompanyBaselineVO>
  /**
   * @description
   *   总排名
   */
  totalRank: string
  /**
   * @description
   *   单位
   */
  unit: string
  /**
   * @description
   *   年度目标
   */
  yearGoals: string
}

export interface SafetyCheckCompanyVO {
  /**
   * @description
   *   公司code
   */
  companyCode: string
  /**
   * @description
   *   公司名称
   */
  companyName: string
  /**
   * @description
   *   安检基数
   */
  requireCheckNumber: string
  /**
   * @description
   *   实际入户率
   */
  safetyCheckedRate: string
  /**
   * @description
   *   实际入户率单位
   */
  safetyCheckedRateUnit: string
}

/**
 * @description
 *   基础指标类
 */
export interface SafetyCheckTypeVO {
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   单位
   */
  unit: string
}

/**
 * @description
 *   基础指标类
 */
export interface SafetyCheckVO {
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   综合安检概况饼图
   */
  safetyCheckTypeVOList: Array<SafetyCheckTypeVO>
  /**
   * @description
   *   单位
   */
  unit: string
}

export interface SafetyCompanyBaselineListVO {
  /**
   * @description
   *   公司code
   */
  companyCode: string
  /**
   * @description
   *   公司名称
   */
  companyName: string
  /**
   * @description
   *   管理实体内排名
   * @format int32
   */
  orgRank: number
  /**
   * @description
   *   控股排名
   */
  rank: string
  /**
   * @description
   *   安检考核基准-单位
   */
  securityStandardUnit: string
  /**
   * @description
   *   安检考核基准
   */
  securityStandardValue: string
  /**
   * @description
   *   总排名
   */
  totalRank: string
}

/**
 * @description
 *   基础指标类
 */
export interface SafetyCompanyBaselineVO {
  /**
   * @description
   *   公司code
   */
  companyCode: string
  /**
   * @description
   *   公司名称
   */
  companyName: string
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   控股排名
   */
  rank: string
  /**
   * @description
   *   总排名
   */
  totalRank: string
  /**
   * @description
   *   单位
   */
  unit: string
}

/**
 * @description
 *   安全员
 */
export interface SafetyOfficer {
  /**
   * @description
   *   安全员
   */
  id: string
  /**
   * @description
   *   安全员
   */
  name: string
}

export interface SafetyOverviewVO {
  /**
   * @description
   *   今日施工工程
   */
  constructionScheduleVO: ConstructionScheduleVO
  /**
   * @description
   *   今日危险作业
   */
  dangerWorkVO: ConstructionScheduleVO
  /**
   * @description
   *   设备安全
   */
  deviceSafeVO: DeviceSafeVO
  /**
   * @description
   *   物联应用
   */
  iotApplicationVO: IotApplicationVO
  /**
   * @description
   *   风险统计
   */
  overViewModulSta: OverViewModulSta
  /**
   * @description
   *   人员合规
   */
  personComplianceVO: PersonComplianceVO
  /**
   * @description
   *   危险作业执行率
   */
  scheduleExceRateVO: ScheduleExceRateVO
}

export interface SafetyUserInfo {
  /**
   * @description
   *   用户参与者id
   */
  accountId: string
  /**
   * @description
   *   详细地址信息
   */
  address: string
  /**
   * @description
   *   企业编码
   */
  compCode: string
  /**
   * @description
   *   权限
   */
  credit: string
  /**
   * @description
   *   部门名称
   */
  deptName: string
  /**
   * @description
   *   邮箱
   */
  email: string
  /**
   * @description
   *   是否拥有下级组织
   */
  hasBelow: boolean
  /**
   * @description
   *   用户头像
   */
  headPath: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   公司行业类别编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   公司行业类别名称
   */
  industryCategoryName: string
  /**
   * @description
   *   纬度
   */
  lat: string
  /**
   * @description
   *   经度
   */
  lng: string
  /**
   * @description
   *   域账号
   */
  loginName: string
  /**
   * @description
   *   手机号
   */
  mobile: string
  /**
   * @description
   *   公司id
   */
  orgId: string
  /**
   * @description
   *   公司名称
   */
  orgName: string
  /**
   * @description
   *   岗位名称
   */
  postName: string
  /**
   * @description
   *   用户角色列表
   */
  roles: Array<RoleInfo>
  /**
   * @description
   *   性别（1：男，2：女）
   */
  sex: string
  /**
   * @description
   *   班组id
   */
  teamGroupId: string
  /**
   * @description
   *   班组名称
   */
  teamGroupName: string
  /**
   * @description
   *   租户id
   */
  tenantId: string
  /**
   * @description
   *   token
   */
  token: string
  /**
   * @description
   *   用户id（工号）
   */
  userId: string
  /**
   * @description
   *   用户名称
   */
  userName: string
  /**
   * @description
   *   用户sap组织id
   */
  userOrgId: string
}

export interface SameTypeReportQueryDTO {
  /**
   * @description
   *   页码(不是分页列表不需要传递),示例值(1)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递),示例值(1000)
   * @format int32
   */
  pageSize: number
}

export interface SaveRoleAuthDTO {
  /**
   * @description
   *   新增的资源权限列表
   */
  addAuthPerm: Array<AuthPerm>
  /**
   * @description
   *   删除资源权限列表
   */
  delAuthPerm: Array<AuthPerm>
  /**
   * @description
   *   角色基本信息主键id
   */
  id: string
  /**
   * @description
   *   角色所属的tenantId
   */
  tenantId: string
}

export interface SceneCreatDTO {
  /**
   * @description
   *   重点关注事项主键id
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   群主id
   */
  ownerUserId: string
  /**
   * @description
   *   群主姓名
   */
  ownerUserName: string
  /**
   * @description
   *   群名
   */
  title: string
  /**
   * @description
   *   群成员id（不包括群主）
   */
  userIds: string
  /**
   * @description
   *   群成员姓名（不包括群主）
   */
  userNames: string
}

export interface SceneCreateVO {
  chatId: string
  openConversationId: string
}

export interface SceneRiskPushDTO {
  /**
   * @description
   *   组织Id
   */
  orgId: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   场景描述
   */
  sceneRiskDesc: string
  /**
   * @description
   *   五个指标
   */
  sceneRiskKpi: string
  /**
   * @description
   *   加密token
   */
  token: string
}

export interface ScheduleExceRateVO {
  /**
   * @description
   *   标签
   */
  label: string
  /**
   * @description
   *   数据id
   * @format int64
   */
  matterId: number
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   风险升级、降级状态：0-不变；1-升级；2-降级；3-新增
   * @format int32
   */
  matterLevelStatus: number
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   执行率
   * @format double
   */
  value: number
}

export interface ScoreTrend {
  /**
   * @description
   *   分数
   */
  score: number
  /**
   * @description
   *   时间
   */
  time: string
}

export interface SelfAndBrotherOrgSearchDTO {
  /**
   * @description
   *   行业类别编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   是否需要查询是否为公司
   */
  needCompFlag: boolean
  /**
   * @description
   *   组织编码搜索
   */
  orgCode: string
  /**
   * @description
   *   顶级组织id，会在此组织下所有自组织进行搜索，不传默认当前登录选中公司组织
   */
  orgId: string
  /**
   * @description
   *   组织名称模糊搜索
   */
  orgName: string
}

export type Serializable = any

export interface SevenDayRiskScore {
  /**
   * @description
   *   分数
   */
  score: string
  /**
   * @description
   *   是否展示 false:不展示 true:展示
   */
  show: boolean
  /**
   * @description
   *   时间
   */
  time: string
}

export interface SevenWeekRiskAverageScore {
  /**
   * @description
   *   排名
   */
  fank: string
  /**
   * @description
   *   分数
   */
  score: string
  /**
   * @description
   *   周
   */
  tiem: string
}

export interface ShareBaseVO {
  address: string
  categoryId: string
  categoryName: string
  clause: string
  /** @format int32 */
  collection: number
  /** @format int32 */
  comment: number
  content: string
  courseId: string
  courseName: string
  coverMap: string
  /** @format date-time */
  ctime: string
  /** @format int32 */
  del: number
  deptId: string
  deptName: string
  /** @format int32 */
  draft: number
  /** @format date-time */
  expirationTime: string
  file: string
  fileName: string
  fileSize: string
  fileType: string
  id: string
  /** @format date-time */
  implementationTime: string
  industryId: string
  /** @format int32 */
  insertType: number
  /**
   * @description
   *   是否收藏
   * @format int32
   */
  isCollection: number
  /**
   * @description
   *   是否赞过
   * @format int32
   */
  isFocus: number
  /**
   * @description
   *   是否踩过
   * @format int32
   */
  isStep: number
  /** @format date-time */
  issueTime: string
  /** @format int32 */
  jurisdiction: number
  keyword: string
  knowledgePoint: string
  legalProvisions: string
  /** @format int32 */
  likes: number
  orgId: string
  orgName: string
  /**
   * @description
   *   分享人的安全达人编号
   */
  peopleId: string
  picture: string
  query: string
  richText: string
  section: string
  /** @format int32 */
  status: number
  /** @format int32 */
  step: number
  subTypeId: string
  themeId: string
  themeName: string
  title: string
  /** @format int32 */
  type: number
  unscramble: string
  url: string
  userId: string
  userName: string
  /** @format date-time */
  utime: string
  /** @format int32 */
  views: number
}

export interface ShareQueryDTO {
  /**
   * @description
   *   是否查草稿（1：提交的 2：草稿的）
   * @format int32
   */
  draft: number
  /**
   * @description
   *   搜索关键词
   */
  keyword: string
  /**
   * @description
   *   查询页数
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   查询条数
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   分享类型（1:良好实践 2:安全微小课 3:法律法规解读）
   * @format int32
   */
  type: number
}

export interface SingleRiskDesc {
  /**
   * @description
   *   责任人
   */
  dutyPerson: string
  /**
   * @description
   *   更新时间
   */
  gmtModified: string
  /**
   * @description
   *   控股平均
   */
  holdingAverage: string
  /**
   * @description
   *   改善提升排名
   */
  improveRank: string
  /**
   * @description
   *   改善提升得分
   */
  improveScore: string
  /**
   * @description
   *   现状描述
   */
  presentSituationDesc: string
  /**
   * @description
   *   指标编码
   */
  quotaCode: string
  /**
   * @description
   *   指标展示颜色 0:橙色 1:红色
   */
  quotaColorFlag: string
  /**
   * @description
   *   指标偏差数值
   */
  quotaDeviationValue: string
  /**
   * @description
   *   指标数据来源
   */
  quotaSource: string
  /**
   * @description
   *   指标标签
   */
  quotaTag: string
  /**
   * @description
   *   指标名称-偏差文本
   */
  quotaTitle: string
  /**
   * @description
   *   排名
   */
  ranking: string
  /**
   * @description
   *   处理状态
   * @format int32
   */
  status: number
  /**
   * @description
   *   处理状态描述
   */
  statusDesc: string
  /**
   * @description
   *   整改建议
   */
  suggestions: string
}

export interface SmartApplyAnalysis {
  orgId: string
  orgName: string
  /**
   * @description
   *   名次
   */
  rankSort: string
  /**
   * @description
   *   分数
   */
  score: string
  /**
   * @description
   *   月份
   */
  statisticsYm: string
}

/**
 * @description
 *   数智综合应用分析
 */
export interface SmartApplyAnalysisVo {
  /**
   * @description
   *   当月数据
   */
  currentMonth: SmartApplyAnalysis
  /**
   * @description
   *   历史数据
   */
  historyData: Array<SmartApplyAnalysis>
}

/**
 * @description
 *   重点风险评估项接收推送入参
 */
export interface SmartReportKeyRiskMessageReceiveDto {
  /**
   * @description
   *   关键项数据
   */
  dtoList: Array<SmartReportKeyRiskMessageRecordAddDto>
  /**
   * @description
   *   数据更新时间
   */
  reportDate: string
}

/**
 * @description
 *   重点风险评估项新增入参
 */
export interface SmartReportKeyRiskMessageRecordAddDto {
  /**
   * @description
   *   类别code
   */
  categoryCode: string
  /**
   * @description
   *   类别名称
   */
  categoryName: string
  /**
   * @description
   *   责任人
   */
  dutyPerson: string
  /**
   * @description
   *   责任人code
   */
  dutyPersonCode: string
  /**
   * @description
   *   责任人手机号
   */
  dutyPersonPhone: string
  /**
   * @description
   *   评估指标算法
   */
  evalAlgorithm: string
  /**
   * @description
   *   评估项名称
   */
  evalName: string
  /**
   * @description
   *   评估项标准
   */
  evalStandard: string
  /**
   * @description
   *   主键Id
   * @format int64
   */
  id: number
  /**
   * @description
   *   详情项code
   */
  itemCode: string
  /**
   * @description
   *   详情项名称
   */
  itemName: string
  /**
   * @description
   *   组织code
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   点位信息
   */
  pointInformation: string
  /**
   * @description
   *   重复出现次数
   * @format int32
   */
  repeatCount: number
  /**
   * @description
   *   数据更新时间
   */
  reportDate: string
  /**
   * @description
   *   智伴文案
   */
  robotSummary: string
  /**
   * @description
   *   场景code
   */
  sceneCode: string
  /**
   * @description
   *   场景名称
   */
  sceneName: string
  /**
   * @description
   *   示险日期
   */
  showRiskDate: string
  /**
   * @description
   *   智能分析
   */
  smartAnalysis: string
  /**
   * @description
   *   排序
   * @format int32
   */
  sort: number
  /**
   * @description
   *   来源
   */
  source: string
  /**
   * @description
   *   状态:1-异常；2-正常; 3-暂无数据
   * @format int32
   */
  status: number
  /**
   * @description
   *   状态描述:1-异常；2-正常; 3-暂无数据
   */
  statusDesc: string
  /**
   * @description
   *   建议措施
   */
  suggestion: string
  /**
   * @description
   *   首页概述
   */
  summary: string
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   工单号
   */
  workOrderCode: string
}

export interface StaData {
  /**
   * @description
   *   临期数量
   * @format int32
   */
  aboutToExpiredCount: number
  /**
   * @description
   *   日期
   */
  date: string
  /**
   * @description
   *   超期数量
   * @format int32
   */
  expiredCount: number
  /**
   * @description
   *   环比增长率
   * @format double
   */
  growthRate: number
  /** @format int32 */
  jhn: number
  /** @format int32 */
  jhw: number
  /**
   * @description
   *   月份
   */
  month: string
  /**
   * @description
   *   未参保数量
   * @format int32
   */
  notInsuredCount: number
  /**
   * @description
   *   失效数量
   * @format int32
   */
  overDueCount: number
  /**
   * @description
   *   自建出工人数
   * @format int32
   */
  selfBuildTypeCount: number
  /**
   * @description
   *   日期
   */
  staDate: string
  /**
   * @description
   *   分包出工人数
   * @format int32
   */
  subcontractTypeCount: number
  /**
   * @description
   *   未体检数量
   * @format int32
   */
  unPhysicalCount: number
}

export interface StaffInfoVO {
  /**
   * @description
   *   参与者id
   */
  accountId: string
  /**
   * @description
   *   enn_user 新奥员工
   */
  dataSource: string
  /**
   * @description
   *   部门信息
   */
  deptInfos: Array<DeptInfoVO>
  /**
   * @description
   *   邮箱
   */
  email: string
  empCode: string
  /**
   * @description
   *   工号
   */
  empNo: string
  empStatus: string
  empType: string
  entryAge: string
  enuStaffFlag: boolean
  /**
   * @description
   *   用户头像
   */
  headPath: string
  id: string
  /**
   * @description
   *   手机号
   */
  mobile: string
  /**
   * @description
   *   昵称
   */
  nickName: string
  /**
   * @description
   *   全名
   */
  realName: string
  sex: string
  syncFlag: string
  tenantId: string
  /**
   * @description
   *   用户名
   */
  userName: string
  /**
   * @description
   *   工龄
   */
  workAge: string
}

export interface StateConfigurationBindDTO {
  /**
   * @description
   *   展开收起状态，0：展开，1：收起
   * @format int32
   */
  stateFlag: number
}

export interface StateConfigurationVO {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  /**
   * @description
   *   配置表主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  /**
   * @description
   *   展开收起状态 0展开，1收起
   * @format int32
   */
  stateFlag: number
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
  /**
   * @description
   *   用户id
   */
  userId: string
}

export interface StatisticCode {
  /**
   * @description
   *   二级指标编码
   */
  secondKpiCode: string
  /**
   * @description
   *    展现类型 LINE折线图，BAR柱形图
   */
  type: string
  /**
   * @description
   *   单位
   */
  unit: string
}

export interface SubMatterDetailQueryParam {
  /**
   * @description
   *   事项id
   * @format int64
   */
  id: number
  /**
   * @description
   *   角色类型
   */
  roleType: string
}

export interface SubMatterImportantQuestionAddDTO {
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   业务id
   */
  subBusinessId: string
  /**
   * @description
   *   业务类型
   */
  subBusinessType: string
  /**
   * @description
   *   事项进度编码
   */
  subKpiCategoryCode: string
  /**
   * @description
   *   事项进度名称
   */
  subKpiCategoryName: string
}

export interface SubscribeOrgDTO {
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
}

export interface SubscribeOrgVO {
  /**
   * @description
   *   组织编码
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
}

export interface SysDictQuery {
  /**
   * @description
   *   查询条件：字典类型列表,传具体类型可以查对应的字典项，空的list查全量
   */
  sysDictTypeList: Array<string>
}

export interface SysFile {
  code: string
  /** @format date-time */
  createTime: string
  /** @format int32 */
  delFlag: number
  /** @format int64 */
  id: number
  name: string
  orgId: string
  tenantId: string
  /** @format date-time */
  updateTime: string
  url: string
  uuid: string
}

export interface SysFileConfigurationVO {
  ossAuthServiceUrl: string
  ossSignService: string
  ossTenantDefaultBucket: string
  ossTenantDefaultBucketZone: string
  ossTenantId: string
  ossTenantSecret: string
  ossUrl: string
}

export interface SysFileSearchParam {
  code: string
  /** @format date-time */
  createTime: string
  /** @format int32 */
  delFlag: number
  /** @format int64 */
  id: number
  ids: Array<string>
  name: string
  orgId: string
  tenantId: string
  /** @format date-time */
  updateTime: string
  url: string
  uuid: string
}

export interface SysOrgQueryDTO {
  /**
   * @description
   *   实体公司编码id
   */
  cpmoCop: string
  /**
   * @description
   *   是否支持分页
   */
  ifPaged: boolean
  /**
   * @description
   *   页数,默认1
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   页面数据长度,默认10
   * @format int32
   */
  pageSize: number
}

export interface SysTransformSortVO {
  /**
   * @description
   *   重点关注事项:ZDGZSX
   */
  itemResultSort: {
    /**
        @description
          重点关注事项:ZDGZSX */
    [propertyName: string]: Array<SysVO>
  }
}

export interface SysTransformVO {
  /**
   * @description
   *   问题引导类型:WTYDLX,事项类型:SXLX,安全规划项目状态:AQGHXMZT,安全规划优先级:GHYXJ, 里程碑事项状态:LCBSXZT,首页详情中安全规划统计事项状态：GHSXZT,痛点问题类型的字典值从痛点问题列表单独捞取
   */
  itemResult: {
    /**
        @description
          问题引导类型:WTYDLX,事项类型:SXLX,安全规划项目状态:AQGHXMZT,安全规划优先级:GHYXJ, 里程碑事项状态:LCBSXZT,首页详情中安全规划统计事项状态：GHSXZT,痛点问题类型的字典值从痛点问题列表单独捞取 */
    [propertyName: string]: {
      [propertyName: string]: string
    }
  }
}

/**
 * @description
 *   系统用户表
 */
export interface SysUser {
  /**
   * @description
   *   账号状态  1:正常  2：关闭  默认1
   * @format int32
   */
  accountEnable: number
  /**
   * @description
   *   用户头像
   */
  avatar: string
  /**
   * @description
   *   安全地图树 0 没有 1 有
   * @format int32
   */
  chairman: number
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   组织名称
   */
  department: string
  /**
   * @description
   *   部门id
   */
  departmentId: string
  /**
   * @description
   *   所属部门名称
   */
  departmentName: string
  /**
   * @description
   *   用户组织ID
   */
  deptId: string
  /**
   * @description
   *   是否分派员 0:否,1:是
   * @format int32
   */
  dispatcher: number
  /**
   * @description
   *   可查看反馈信息 0 没有 1 有
   * @format int32
   */
  feedbackInfo: number
  /**
   * @description
   *   安全地图核对 0 没有 1 有
   * @format int32
   */
  grouper: number
  /**
   * @description
   *   用户主键
   */
  id: string
  /**
   * @description
   *   用户积分
   * @format int32
   */
  integral: number
  /** @format int32 */
  isDanger: number
  /**
   * @description
   *   是否拥有进入工程权限 0 没有1 有
   * @format int32
   */
  isEngineering: number
  /** @format int32 */
  isPrincipal: number
  /**
   * @description
   *   是否有权进入工程合规风险权限 0没有  1有
   * @format int32
   */
  isProjectRisk: number
  /**
   * @description
   *   是否拥有发布权限0没有1 有
   * @format int32
   */
  isRelease: number
  /**
   * @description
   *   是否有查看安全专家的权限 0：没有/1：有
   * @format int32
   */
  isSecurityExperts: number
  /**
   * @description
   *   是否拥有督办权限 0:否,1:是
   * @format int32
   */
  isSupervise: number
  /**
   * @description
   *   用户的职位名称
   */
  jobName: string
  /**
   * @description
   *   工号
   */
  jobNumber: string
  /**
   * @description
   *   安全地图重点事项code
   * @format int32
   */
  keyIssuesCode: number
  /**
   * @description
   *   安全地图重点事项名称
   */
  keyIssuesName: string
  /**
   * @description
   *   一号位地图确认 0 没有 1 有
   * @format int32
   */
  la: number
  /**
   * @description
   *   登录ID
   */
  loginId: string
  /**
   * @description
   *   登录密码
   */
  loginPwd: string
  /**
   * @description
   *   用户职位
   */
  postCode: string
  /**
   * @description
   *   是否是安全专家 0：否/1：是
   * @format int32
   */
  securityExpertsStatus: number
  /**
   * @description
   *   安全宣言
   */
  securityManifesto: string
  /**
   * @description
   *   数据同步时间
   * @format date-time
   */
  syncTime: string
  /**
   * @description
   *   班组地图编辑 0 没有 1 有
   * @format int32
   */
  team: number
  /**
   * @description
   *   班组ID
   */
  teamGroupId: string
  /**
   * @description
   *   班组名称
   */
  teamGroupName: string
  /**
   * @description
   *   用户累计积分
   * @format int32
   */
  totalIntegral: number
  /**
   * @description
   *   用户邮箱
   */
  userEmail: string
  /**
   * @description
   *   用户的itcode
   */
  userItcode: string
  /**
   * @description
   *   用户姓名
   */
  userName: string
  /**
   * @description
   *   用户电话
   */
  userPhone: string
  /**
   * @description
   *   用户性别  1：男   2：女  3：保密  默认1
   * @format int32
   */
  userSex: number
  /**
   * @description
   *   用户类型 1：PC ;2: APP
   * @format int32
   */
  userType: number
}

export interface SysVO {
  /**
   * @description
   *   字典项名称
   */
  itemName: string
  /**
   * @description
   *   字典名称
   */
  itemValue: string
  /**
   * @description
   *   备注
   */
  remark: string
}

export interface TTSStreamDTO {
  /**
   * @description
   *   音频编码格式，支持PCM/WAV/MP3格式。默认值：WAV
   */
  format: string
  /**
   * @description
   *   语速，取值范围：-500~500，默认值：0。
   * @format int32
   */
  speechRate: number
  /**
   * @description
   *   文本
   */
  text: string
  /**
   * @description
   *   发音人，默认值：xiaoyun
   */
  voice: string
}

/**
 * @description
 *   排查项统计
 */
export interface TaskItemStatistics {
  /**
   * @description
   *   异常数
   * @format int32
   */
  abnormalCount: number
  /**
   * @description
   *   排查项总数
   * @format int32
   */
  itemTotal: number
  /**
   * @description
   *   正常数
   * @format int32
   */
  normalCount: number
}

/**
 * @description
 *   新增班组
 */
export interface TeamAddDto {
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   安全员
   */
  safetyOfficerList: Array<SafetyOfficer>
  /**
   * @description
   *   班组长
   */
  teamLeaderList: Array<TeamLeader>
  /**
   * @description
   *   组员
   */
  teamMemberList: Array<TeamMember>
  /**
   * @description
   *   班组名称
   */
  teamName: string
  /**
   * @description
   *   租户ID
   */
  tenantId: string
}

/**
 * @description
 *   班组长
 */
export interface TeamLeader {
  /**
   * @description
   *   班组长
   */
  id: string
  /**
   * @description
   *   班组长
   */
  name: string
}

/**
 * @description
 *   组员
 */
export interface TeamMember {
  /**
   * @description
   *   组员
   */
  id: string
  /**
   * @description
   *   组员
   */
  name: string
}

export interface TeamQuery {
  /**
   * @description
   *   查询是否已存在样版
   */
  checkTemplate: boolean
  /**
   * @description
   *   公司信息ID
   */
  companyInfoId: string
  /**
   * @description
   *   分页查询偏移量
   * @format int64
   */
  offset: number
  /**
   * @description
   *   页码(不是分页列表不需要传递)
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   单页数量(不是分页列表不需要传递)
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   租户ID
   */
  tenantId: string
  /**
   * @description
   *   符合条件的查询结果总数
   * @format int64
   */
  total: number
}

/**
 * @description
 *   编辑班组
 */
export interface TeamUpdateDto {
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   安全员
   */
  safetyOfficerList: Array<SafetyOfficer>
  /**
   * @description
   *   班组长
   */
  teamLeaderList: Array<TeamLeader>
  /**
   * @description
   *   班组长
   */
  teamMemberList: Array<TeamMember>
  /**
   * @description
   *   班组名称
   */
  teamName: string
}

/**
 * @description
 *   班组
 */
export interface TeamVO {
  /**
   * @description
   *   是否已存在样版
   */
  checkTemplate: boolean
  companyInfoId: string
  createBy: string
  createByName: string
  /** @format date-time */
  createTime: string
  /** @format int32 */
  deleteFlag: number
  /** @format int64 */
  id: number
  /**
   * @description
   *   安全员
   */
  safetyOfficerList: Array<SafetyOfficer>
  /**
   * @description
   *   班组长
   */
  teamLeaderList: Array<TeamLeader>
  /**
   * @description
   *   班组长
   */
  teamMemberList: Array<TeamMember>
  teamName: string
  tenantId: string
  updateBy: string
  updateByName: string
  /** @format date-time */
  updateTime: string
}

export interface TechnicalMeanCompanyVO {
  /**
   * @description
   *   公司code
   */
  companyCode: string
  /**
   * @description
   *   公司名称
   */
  companyName: string
  /**
   * @description
   *   应采取手段户数
   */
  requireTechnicalMeanNumber: string
  /**
   * @description
   *   技术手段完成率
   */
  technicalMeanRate: string
  /**
   * @description
   *   技术手段完成率单位
   */
  technicalMeanRateUnit: string
}

/**
 * @description
 *   基础指标类
 */
export interface TechnicalMeanTypeVO {
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   单位
   */
  unit: string
}

/**
 * @description
 *   基础指标类
 */
export interface TechnicalMeansVO {
  /**
   * @description
   *   指标编码
   */
  kpiCode: string
  /**
   * @description
   *   指标名称
   */
  kpiName: string
  /**
   * @description
   *   指标值
   */
  kpiValue: string
  /**
   * @description
   *   单位
   */
  unit: string
}

export interface Text {
  content: string
}

/**
 * @description
 *   三方施工出参
 */
export interface ThirdBuildVO {
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   坐标信息
   */
  positions: Array<JSONObject>
  /**
   * @description
   *   示险列表
   */
  riskList: Array<Risk>
}

/**
 * @description
 *   三方施工告警詳細信息
 */
export interface ThirdPartConstructionAlarmDetailVO {
  /**
   * @description
   *   评价(未监管的字段)
   */
  appraise: string
  /**
   * @description
   *   接收派发部门名称
   */
  assignDepartment: string
  /**
   * @description
   *    附件
   */
  attachments: string
  /**
   * @description
   *   是否手动处置（0：否，1：是）
   * @format int32
   */
  autoDisposal: number
  /**
   * @description
   *   自动处置结束时间
   * @format date-time
   */
  autoDisposalEndTime: string
  /**
   * @description
   *   自动处置开始时间
   * @format date-time
   */
  autoDisposalStartTime: string
  /**
   * @description
   *   自动处置状态（公用）：1:待处置;2:处置中;3:已处置;4:未配置;5:待检测;6:监测中;7:已解除;8:解除失败
   * @format int32
   */
  autoNode: number
  /**
   * @description
   *   整改前照片
   */
  beforeRectifyPhotos: string
  /**
   * @description
   *    大类名称
   */
  bigType: string
  /**
   * @description
   *   案件编号
   */
  caseCode: string
  /**
   * @description
   *   案件来源
   */
  caseSource: string
  /**
   * @description
   *   案件来源 id
   */
  caseSourceId: string
  /**
   * @description
   *    紧急程度
   * @format int32
   */
  caseUrgency: number
  /**
   * @description
   *   公司编码(未监管的字段)
   */
  ccode: string
  /**
   * @description
   *   行政区划
   */
  community: string
  /**
   * @description
   *   联系地址
   */
  contactAddress: string
  /**
   * @description
   *   联系电话
   */
  contactNumber: string
  /**
   * @description
   *   管控级别(未监管的字段)
   */
  controlLevel: string
  /**
   * @description
   *   创建时间(未监管的字段)
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   办理时间
   * @format date-time
   */
  dealDate: string
  /**
   * @description
   *   办理部门
   */
  dealDepartment: string
  /**
   * @description
   *    办理人
   */
  dealMan: string
  /**
   * @description
   *   办理意见
   */
  dealOpinion: string
  /**
   * @description
   *   主键id(未监管的字段)
   */
  detailId: string
  /**
   * @description
   *   处置中时间(未监管的字段)
   * @format date-time
   */
  dispatchWorkTime: string
  /**
   * @description
   *   企业编码(未监管的字段)
   */
  ecode: string
  /**
   * @description
   *   电子邮箱
   */
  email: string
  /**
   * @description
   *   反馈图片
   */
  feedbackImg: string
  /**
   * @description
   *   反馈人ITCODE（公用）
   */
  feedbackItcode: string
  /**
   * @description
   *   反 馈 截 止 时间
   * @format date-time
   */
  feedbackLimitDate: string
  /**
   * @description
   *   反 馈 限 制 时间数值
   * @format int32
   */
  feedbackLimitTime: number
  /**
   * @description
   *   反馈时间限制单位 0-工作日 1-工作时 2-紧 急工作时
   * @format int32
   */
  feedbackLimitUnit: number
  /**
   * @description
   *   反馈人名字（公用）
   */
  feedbackName: string
  /**
   * @description
   *   反馈人电话（公用）
   */
  feedbackPhone: string
  /**
   * @description
   *   反馈时间（公用）
   * @format date-time
   */
  feedbackTime: string
  /**
   * @description
   *   转单人itcode
   */
  fromUserCode: string
  /**
   * @description
   *   转单人姓名
   */
  fromUserName: string
  /**
   * @description
   *   网格名称
   */
  gridName: string
  /**
   * @description
   *   处 置 限 制 时间数值
   * @format int32
   */
  handleLimitTime: number
  /**
   * @description
   *   处 置 时 间 限制单位 0-工作日 1-工作时 2-紧 急工作时
   * @format int32
   */
  handleLimitUnit: number
  /**
   * @description
   *   处置人姓名（公用）
   */
  handler: string
  /**
   * @description
   *   处置人itcode（公用）
   */
  handlerItcode: string
  /**
   * @description
   *   处置人电话（公用）
   */
  handlerPhone: string
  /**
   * @description
   *   主键id
   * @format int64
   */
  id: number
  /**
   * @description
   *   身份证号
   */
  idNo: string
  /**
   * @description
   *   事件地址
   */
  incidentAddress: string
  /**
   * @description
   *   事件描述
   */
  incidentDesc: string
  /**
   * @description
   *   原事件 ID
   */
  incidentId: string
  /**
   * @description
   *    事件标题
   */
  incidentTitle: string
  /**
   * @description
   *    事件类型 :1投诉，2巡查，3考评，4咨询，5查询，6建议，7感谢，8反馈，9无效，10其他，11智能推送
   */
  incidentType: string
  /**
   * @description
   *   是否交底(未监管的字段)
   */
  jd: string
  /**
   * @description
   *   事件纬度
   * @format double
   */
  latitude: number
  /**
   * @description
   *   网格code
   */
  locCode: string
  /**
   * @description
   *   网格名称
   */
  locName: string
  /**
   * @description
   *   现场照片（多个图片用,分隔）
   */
  localePics: string
  /**
   * @description
   *   事件经度
   * @format double
   */
  longitude: number
  /**
   * @description
   *   管理问题
   */
  manageProblem: string
  /**
   * @description
   *   等级
   */
  matterLevel: string
  /**
   * @description
   *   是否恢复正常(是/否)（公用）
   */
  normal: string
  /**
   * @description
   *   组织code(未监管的字段)
   */
  orgCode: string
  /**
   * @description
   *   是否探明管道值(未监管的字段)
   */
  pipe: string
  /**
   * @description
   *   车牌号(未监管的字段)
   */
  plateNumbe: string
  /**
   * @description
   *    位置照片
   */
  positionPhotos: string
  /**
   * @description
   *   工 单 所 属 项目 id
   * @format int32
   */
  projectId: number
  /**
   * @description
   *   推送时间
   * @format date-time
   */
  pushTime: string
  /**
   * @description
   *   指标名称(未监管的字段)
   */
  quotaName: string
  /**
   * @description
   *   问题原因描述
   */
  reason: string
  /**
   * @description
   *   反映人
   */
  reflectName: string
  /**
   * @description
   *    登记时间
   * @format date-time
   */
  registerTime: string
  /**
   * @description
   *   关联任务地点(未监管的字段)
   */
  relAddress: string
  /**
   * @description
   *   关联任务未完成量(未监管的字段)
   */
  relContinue: string
  /**
   * @description
   *   关联任务已完成量(未监管的字段)
   */
  relDown: string
  /**
   * @description
   *   关联任务是否交底(未监管的字段)
   */
  relIsSign: string
  /**
   * @description
   *   关联任务管控级别(未监管的字段)
   */
  relLevel: string
  /**
   * @description
   *   关联任务名称(未监管的字段)
   */
  relName: string
  /**
   * @description
   *   关联任务编号(未监管的字段)
   */
  relNo: string
  /**
   * @description
   *   关联任务是否探明管道值(未监管的字段)
   */
  relPipename: string
  /**
   * @description
   *   关联任务完成率(未监管的字段)
   */
  relRate: string
  /**
   * @description
   *   关联任务总任务量(未监管的字段)
   */
  relTotal: string
  /**
   * @description
   *   关联任务警示标志(未监管的字段)
   */
  relWarning: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   示险编码(未监管的字段)
   */
  riskCode: string
  /**
   * @description
   *   示险时间(yyyy-MM-dd hh:mm:ss)(未监管的字段)
   * @format date-time
   */
  riskDateTime: string
  /**
   * @description
   *   示险主表id,show_danger主表主键id（公用）
   * @format int64
   */
  riskId: number
  /**
   * @description
   *   示险等级编码(未监管的字段)
   */
  riskLev: string
  /**
   * @description
   *   示险名称(未监管的字段)
   */
  riskName: string
  /**
   * @description
   *   示险原因(未监管的字段)
   */
  riskReason: string
  /**
   * @description
   *    小类名称
   */
  smallType: string
  /**
   * @description
   *   是否纳入三方监管：0 否；1 是
   * @format int32
   */
  state: number
  /**
   * @description
   *   有效超速里程（单位：Km）(未监管的字段)
   * @format double
   */
  superSpeedMileage: number
  /**
   * @description
   *   超速比(未监管的字段)
   */
  superSpeedRatio: string
  /**
   * @description
   *   施工地点(未监管的字段)
   */
  taskAddress: string
  /**
   * @description
   *   施工地点坐标(墨卡托-逗号分隔)(未监管的字段)
   */
  taskAddressGeom: string
  /**
   * @description
   *   任务编号(未监管的字段)
   */
  taskCode: string
  /**
   * @description
   *   任务名称(未监管的字段)
   */
  taskName: string
  /**
   * @description
   *   阀值描述(未监管的字段)
   */
  thresholdDes: string
  /**
   * @description
   *   超时违规内容
   */
  timeoutMsg: string
  /**
   * @description
   *   标题
   */
  title: string
  /**
   * @description
   *   接收人itcode
   */
  toUserCode: string
  /**
   * @description
   *   接收人姓名
   */
  toUserName: string
  /**
   * @description
   *   有效里程（单位：Km）(未监管的字段)
   * @format double
   */
  totalMileage: number
  /**
   * @description
   *   修改时间(未监管的字段)
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   警告标志(未监管的字段)
   */
  warning: string
  /**
   * @description
   *   关单时间
   * @format date-time
   */
  woCloseTime: string
  /**
   * @description
   *   工单编号
   */
  woCode: string
  /**
   * @description
   *   工单创建时间
   * @format date-time
   */
  woCreateTime: string
}

/**
 * @description
 *   三方施工告警（示警）出参对象
 */
export interface ThirdPartConstructionAlarmListVO {
  /**
   * @description
   *   类型对应的事件对象
   */
  showDangerDetails: ThirdPartConstructionAlarmDetailVO
  /**
   * @description
   *   告警类型,疑似发现三方施工-天眼 pn_risk_lk_001 第三方施工未监管 pn_risk_013
   */
  type: string
}

/**
 * @description
 *   风险地图-第三方施工-监管列表出参对象
 */
export interface ThirdPartConstructionListVO {
  /**
   * @description
   *   施工开始时间
   * @format date-time
   */
  beginDate: string
  /**
   * @description
   *   施工地址
   */
  constructionAddress: string
  /**
   * @description
   *   施工编码
   */
  constructionCode: string
  /**
   * @description
   *   施工名称
   */
  constructionName: string
  /**
   * @description
   *   管控级别
   */
  controlLevel: string
  /**
   * @description
   *   施工结束时间
   * @format date-time
   */
  endDate: string
  /**
   * @description
   *   上报人
   */
  reporter: string
  /**
   * @description
   *   上报人电话
   */
  telnumber: string
}

/**
 * @description
 *   风险地图-第三方施工-第三方施工监察信息出参对象
 */
export interface ThirdPartConstructionSupervisionVO {
  /**
   * @description
   *   施工地址
   */
  address: string
  /**
   * @description
   *   今日监管标识 1 已监管； 0 未监管
   * @format int32
   */
  checkFlag: number
  /**
   * @description
   *   network_check表主键id
   * @format int64
   */
  checkId: number
  /**
   * @description
   *   管控级别
   */
  clevel: string
  code: string
  /**
   * @description
   *   施工方联系人
   */
  contacts: string
  /**
   * @description
   *   施工方联系人电话
   */
  contactsPhone: string
  /**
   * @description
   *   上报时间
   */
  createTime: string
  /**
   * @description
   *   上报人电话
   */
  createUserPhone: string
  /**
   * @description
   *   上报人
   */
  createUserid: string
  /**
   * @description
   *   监护人
   */
  evaluateUserName: string
  /**
   * @description
   *   处理组织
   */
  locCode: string
  /**
   * @description
   *   工程名称
   */
  name: string
  /**
   * @description
   *   计划完工时间
   */
  pftime: string
  /**
   * @description
   *   管径
   */
  pipeDiameter: string
  /**
   * @description
   *   管道材质
   */
  pipeMaterial: string
  /**
   * @description
   *   管线类型
   */
  pipeType: string
  /**
   * @description
   *   压力级别
   */
  pressLevel: string
  /**
   * @description
   *   上报来源
   */
  reportSource: string
  /**
   * @description
   *   施工点与管道距离
   */
  sgDistance: string
  /**
   * @description
   *   施工方式
   */
  sgWay: string
  /**
   * @description
   *   开工时间
   */
  startTime: string
  /**
   * @description
   *   日常监管 主键id
   * @format int64
   */
  supervisionId: number
  /**
   * @description
   *   监护时间
   */
  updateTime: string
}

/**
 * @description
 *   风险地图-第三方施工-监管统计出参对象
 */
export interface ThirdPartConstructionVO {
  /**
   * @description
   *   一般施工点数量
   * @format int32
   */
  generalCount: number
  /**
   * @description
   *   重大施工点数量
   * @format int32
   */
  importantCount: number
  /**
   * @description
   *   一级施工数量
   * @format int32
   */
  levelCount_1: number
  /**
   * @description
   *   二级施工数量
   * @format int32
   */
  levelCount_2: number
  /**
   * @description
   *   三级施工数量
   * @format int32
   */
  levelCount_3: number
  /**
   * @description
   *   四级施工数量
   * @format int32
   */
  levelCount_4: number
  /**
   * @description
   *   等级类型： 0 重点施工点几处、一般施工点几处， 1：一级、二级、三级、四级、五级
   * @format int32
   */
  levelType: number
  /**
   * @description
   *   未交底且未见管
   * @format int32
   */
  noDisclosureCount: number
  /**
   * @description
   *   未签订保护协议
   * @format int32
   */
  noProtectionCount: number
  /**
   * @description
   *   三方施工无警示标志数
   * @format int32
   */
  noWarningCount: number
  /**
   * @description
   *   监管总数
   * @format int32
   */
  totalCount: number
  /**
   * @description
   *   昨日未监管数
   * @format int32
   */
  yesterdayCount: number
}

export interface TicketConfig {
  ennOrgId: string
  gptToken: string
  guestOrgId: string
  safePlanOrgMap: string
  swaggerEnable: boolean
  tenantId: string
  troubleToken: string
  urlNotNeedOrgList: string
  urlWhiteList: string
  userListByRuleAction: string
  userListByRuleBase: string
  /** @format int64 */
  userListTime: number
}

/**
 * @description
 *   风险地图-超期未整改等级统计
 */
export interface TimeoutLevelStatisticVO {
  /**
   * @description
   *   新版本的等级分布
   */
  levelList: Array<NetworkLevelVO>
  /**
   * @description
   *   老版本的等级分布
   */
  oldLevelList: Array<NetworkLevelVO>
}

/**
 * @description
 *   待办任务实体
 */
export interface TodoTaskList {
  /**
   * @description
   *   任务Id
   */
  dutyTaskId: string
  /**
   * @description
   *   标题
   */
  dutyTaskName: string
  /**
   * @description
   *   规定动作规则id
   */
  postRuleId: string
  /**
   * @description
   *   承诺日期
   */
  promisePeriod: string
  /**
   * @description
   *   规定动作
   */
  ruleAction: string
}

export interface TroubleLog {
  /**
   * @description
   *   内容
   */
  content: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   流程名称
   */
  flowName: string
  /**
   * @description
   *   log id
   */
  id: string
  /**
   * @description
   *   安全示险平台id
   */
  troubleId: string
}

export interface TroubleRecordInfoVO {
  /**
   * @description
   *   是否确认（1：是，0：否）
   * @format int32
   */
  confirmed: number
  /**
   * @description
   *   工单类型（1：系统触发，2：一号位立即处理）
   * @format int32
   */
  orderType: number
  /**
   * @description
   *   整改人姓名
   */
  recordHolderName: string
  /**
   * @description
   *   整改人手机号
   */
  recordHolderPhone: string
  /**
   * @description
   *   整改人id
   */
  recordHolderUid: string
  /**
   * @description
   *   主键
   * @format int64
   */
  recordId: number
  /**
   * @description
   *   首页描述
   */
  recordIndexDesc: string
  /**
   * @description
   *   重点关注主键
   * @format int64
   */
  recordMatterId: number
  /**
   * @description
   *   负责人姓名
   */
  recordPrincipalName: string
  /**
   * @description
   *   负责人手机号
   */
  recordPrincipalPhone: string
  /**
   * @description
   *   负责人id
   */
  recordPrincipalUid: string
  /**
   * @description
   *   备注
   */
  recordRemark: string
  /**
   * @description
   *   记录创建时间
   * @format date-time
   */
  recordTime: string
  /**
   * @description
   *   安全示险Id
   */
  recordTroubleId: string
  /**
   * @description
   *   安全示险进度信息
   */
  recordTroubleLogs: string
}

/**
 * @description
 *   隐患排查新增示险纠偏参数
 */
export interface TroubleshootRisk {
  /**
   * @description
   *   详情页地址
   */
  detailUrl: string
  /**
   * @description
   *   行业编码
   */
  industryCategoryCode: string
  /**
   * @description
   *   备注
   */
  remark: string
  /**
   * @description
   *   示险标题
   */
  riskTitle: string
  /**
   * @description
   *   场景
   */
  scene: string
  /**
   * @description
   *   用户id列表
   */
  userIds: string
}

export interface Type {
  typeName: string
}

export interface UnPhysicalInfo {
  /**
   * @description
   *   年龄
   * @format int32
   */
  age: number
  /**
   * @description
   *   建档时间
   * @format date-time
   */
  entryTime: string
  /**
   * @description
   *   分包单位名称
   */
  labourEnterpriseName: string
  /**
   * @description
   *   电话
   */
  mobile: string
  /**
   * @description
   *   新增标签：新增
   */
  newAddLabel: string
  /**
   * @description
   *   所属班组
   */
  teamName: string
  /**
   * @description
   *   升级标签：升级
   */
  upLevelLabel: string
  /**
   * @description
   *   姓名
   */
  workerName: string
  /**
   * @description
   *   自建/分包标签：自建、分包
   */
  workerRoleTypeLabel: string
}

export interface UniversalAdsSafetyheartEvaluateKpiDataH {
  calTime: string
  cpmoCop: string
  cpmoCopTxt: string
  granName: string
  granType: string
  kpiCode: string
  kpiName: string
  /** @format double */
  kpiValue: number
  updateDate: string
  /** @format date-time */
  updateTime: string
  xaDept: string
  xaDeptTxt: string
  xaReig: string
  xaReigTxt: string
}

export interface UniversalAdsSafetyheartEvaluateKpiDataHQuery {
  pageBase: PageBase
  universalAdsSafetyheartEvaluateKpiDataH: UniversalAdsSafetyheartEvaluateKpiDataH
}

/**
 * @description
 *   用户配置角色参数
 */
export interface UserAddRoleDto {
  /**
   * @description
   *   参与者ID
   */
  accountId: string
  /**
   * @description
   *   角色ID列表
   */
  roleCodes: Array<string>
}

/**
 * @description
 *   用户查询所在用户组参数
 */
export interface UserBelongGroupQueryParam {
  /**
   * @description
   *   用户ID
   */
  accountId: string
}

export interface UserBriefVO {
  /**
   * @description
   *   参与者id
   */
  accountId: string
  /**
   * @description
   *   enn_user 新奥员工
   */
  dataSource: string
  deptType: string
  /**
   * @description
   *   工号
   */
  empNo: string
  /**
   * @description
   *   员工状态
   */
  empStatus: string
  /**
   * @description
   *   是否为新奥员工(true:是新奥员工,false:非新奥员工)
   */
  enuStaffFlag: boolean
  /**
   * @description
   *   域账号
   */
  itCode: string
  /**
   * @description
   *   手机号
   */
  mobile: string
  /**
   * @description
   *   名称
   */
  nickName: string
  /**
   * @description
   *   组织id
   */
  orgId: string
  /**
   * @description
   *   组织id全路径
   */
  orgIdPath: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   组织名称全路径
   */
  orgNamePath: string
}

/**
 * @description
 *   新增用户组参数
 */
export interface UserGroupAdd {
  /**
   * @description
   *   用户组描述
   */
  groupDesc: string
  /**
   * @description
   *   用户组角色
   */
  roles: Array<RoleInfoSaveDTO>
  /**
   * @description
   *   用户组编码
   */
  userGroupCode: string
  /**
   * @description
   *   用户组名称
   */
  userGroupName: string
}

/**
 * @description
 *   用户组详情
 */
export interface UserGroupDetail {
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人
   */
  createUid: string
  /**
   * @description
   *   数据归属实体编码
   */
  dataOwnerOrgCode: string
  /**
   * @description
   *   删除标记 (0:正常,1:删除）
   */
  deleted: boolean
  /**
   * @description
   *   用户组描述
   */
  groupDesc: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   公司/部门表ID
   * @format int64
   */
  orgCompanyMapId: number
  /**
   * @description
   *   RDFA租户ID
   */
  rdfaTenantId: string
  /**
   * @description
   *   用户组角色
   */
  roleInfoVOS: Array<RoleInfoVO>
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人
   */
  updateUid: string
  /**
   * @description
   *   用户组编码
   */
  userGroupCode: string
  /**
   * @description
   *   用户组ID
   */
  userGroupId: string
  /**
   * @description
   *   用户组名称
   */
  userGroupName: string
  /**
   * @description
   *   用户数量
   * @format int32
   */
  userNums: number
}

/**
 * @description
 *   用户摘要信息
 */
export interface UserGroupDigest {
  /**
   * @description
   *   用户组描述
   */
  groupDesc: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   用户组ID
   */
  userGroupId: string
  /**
   * @description
   *   用户组名称
   */
  userGroupName: string
  /**
   * @description
   *   用户数量
   * @format int32
   */
  userNums: number
}

export interface UserGroupInfoSaveDTO {
  /**
   * @description
   *   用户组描述
   */
  groupDesc: string
  /**
   * @description
   *   用户组id
   */
  groupId: string
  /**
   * @description
   *   用户组名称
   */
  groupName: string
  /**
   * @description
   *   用户组类型
   */
  groupType: string
  /**
   * @description
   *   所属者，即租户id
   */
  owner: string
  /**
   * @description
   *   用户数量
   * @format int32
   */
  userNums: number
}

export interface UserGroupInfoVO {
  /**
   * @description
   *   用户组描述
   */
  groupDesc: string
  /**
   * @description
   *   用户组id
   */
  groupId: string
  /**
   * @description
   *   用户组名称
   */
  groupName: string
  /**
   * @description
   *   用户组类型
   */
  groupType: string
  /**
   * @description
   *   所属者，即租户id
   */
  owner: string
  /**
   * @description
   *   用户数量
   * @format int32
   */
  userNums: number
}

/**
 * @description
 *   用户组分页参数
 */
export interface UserGroupPageQuery {
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  /**
   * @description
   *   用户组名称
   */
  userGroupName: string
}

/**
 * @description
 *   用户组查询参数
 */
export interface UserGroupQuery {
  /**
   * @description
   *   用户组名称
   */
  userGroupName: string
}

/**
 * @description
 *   用户组更新参数
 */
export interface UserGroupUpdate {
  /**
   * @description
   *   用户组描述
   */
  groupDesc: string
  /**
   * @description
   *   主键
   * @format int64
   */
  id: number
  /**
   * @description
   *   用户组角色
   */
  roles: Array<RoleInfoSaveDTO>
  /**
   * @description
   *   用户组编码
   */
  userGroupCode: string
  /**
   * @description
   *   用户组ID
   */
  userGroupId: string
  /**
   * @description
   *   用户组名称
   */
  userGroupName: string
}

/**
 * @description
 *   用户加入用户组参数
 */
export interface UserJoinGroupDto {
  /**
   * @description
   *   参与者ID
   */
  accountId: string
  /**
   * @description
   *   用户组ID列表
   */
  userGroupIds: Array<string>
}

/**
 * @description
 *   用户列表查询条件
 */
export interface UserListQueryParam {
  /**
   * @description
   *   组织树节点ID
   */
  orgId: string
  /**
   * @description
   *   页码
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   每页记录数
   * @format int32
   */
  pageSize: number
  /**
   * @description
   *   查询条件
   */
  queryContent: string
}

/**
 * @description
 *   用户列表查询条件
 */
export interface UserListWithChildQueryParam {
  /**
   * @description
   *   查询条件(工号)
   */
  empNo: string
  /**
   * @description
   *   是否查看更多详情
   */
  ifDetail: boolean
  /**
   * @description
   *   查询条件(手机号)
   */
  mobile: string
  /**
   * @description
   *   查询条件(昵称)
   */
  nickName: string
  /**
   * @description
   *   组织树节点ID
   */
  orgId: string
  /**
   * @description
   *   页码
   * @format int32
   */
  pageNum: number
  /**
   * @description
   *   每页记录数
   * @format int32
   */
  pageSize: number
}

/**
 * @description
 *   用户移除角色参数
 */
export interface UserRemoveRoleDto {
  /**
   * @description
   *   参与者ID
   */
  accountId: string
  /**
   * @description
   *   角色ID
   */
  roleCode: string
}

/**
 * @description
 *   设备维护-阀门计划性维保出参对象
 */
export interface ValveDevicePlanVO {
  /**
   * @description
   *   完成总数
   * @format int32
   */
  finishedCount: number
  /**
   * @description
   *   完成率
   */
  finishedRate: number
  /**
   * @description
   *   一级数量
   * @format int32
   */
  level_1: number
  /**
   * @description
   *   二级数量
   * @format int32
   */
  level_2: number
  /**
   * @description
   *   三级数量
   * @format int32
   */
  level_3: number
  /**
   * @description
   *   计划总数
   * @format int32
   */
  totalCount: number
}

export interface ViolateSummaryVO {
  /**
   * @description
   *   行为top3
   */
  behaviorList: Array<string>
  /**
   * @description
   *   当月
   * @format int32
   */
  month: number
  /**
   * @description
   *   建议
   */
  suggest: string
  /**
   * @description
   *   场景top3
   */
  userList: Array<string>
  /**
   * @description
   *   年度累计
   * @format int32
   */
  year: number
}

/**
 * @description
 *   天气影响出参
 */
export interface WeatherEffectVO {
  /**
   * @description
   *   危险作业各类型数量
   */
  dangerWorkTypeNumVO: DangerWorkTypeNumVO
  /**
   * @description
   *   天气信息
   */
  weatherVO: WeatherVO
}

/**
 * @description
 *   天气信息出参
 */
export interface WeatherVO {
  /**
   * @description
   *   地区名称
   */
  area: string
  /**
   * @description
   *   城市名称
   */
  city: string
  /**
   * @description
   *   通用城市ID
   */
  generalId: string
  /**
   * @description
   *   预测时间间隔（小时）
   * @format int32
   */
  hoursAhead: number
  /**
   * @description
   *   湿度（%）
   * @format int32
   */
  humidity: number
  /**
   * @description
   *   纬度
   * @format double
   */
  lat: number
  /**
   * @description
   *   经度
   * @format double
   */
  lon: number
  /**
   * @description
   *   降水概率（%）
   * @format int32
   */
  pop: number
  /**
   * @description
   *   气压（hPa）
   * @format int32
   */
  pressure: number
  /**
   * @description
   *   省份名称
   */
  province: string
  /**
   * @description
   *   定量降水预报（mm）
   * @format double
   */
  qpf: number
  /**
   * @description
   *   体感温度（℃）
   * @format double
   */
  realFeel: number
  /**
   * @description
   *   降雪量（mm）
   * @format double
   */
  snow: number
  /**
   * @description
   *   实时温度（℃）
   * @format double
   */
  temp: number
  /**
   * @description
   *   预报时间
   * @format date-time
   */
  time: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   紫外线强度
   * @format int32
   */
  uvi: number
  /**
   * @description
   *   天气状况
   */
  weather: string
  /**
   * @description
   *   风向角度
   * @format int32
   */
  windDegrees: number
  /**
   * @description
   *   风向
   */
  windDir: string
  /**
   * @description
   *   风级
   * @format int32
   */
  windLevel: number
  /**
   * @description
   *   风速（km/h）
   * @format double
   */
  windSpeed: number
}

/**
 * @description
 *   管理人员证件详情
 */
export interface WorkerCertificateDetailVO {
  /**
   * @description
   *   临期证件个数
   * @format int32
   */
  aboutToExpiredRiskCount: number
  /**
   * @description
   *   临期证件数据列表
   */
  aboutToExpiredRisks: Array<CertificateInfo>
  /**
   * @description
   *   销项个数
   * @format int32
   */
  cancelRiskCount: number
  /**
   * @description
   *   销项数据列表
   */
  cancelRisks: Array<CancelCertificateInfo>
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   日期
   */
  date: string
  /**
   * @description
   *   超期证件个数
   * @format int32
   */
  expiredRiskCount: number
  /**
   * @description
   *   超期证件数据列表
   */
  expiredRisks: Array<CertificateInfo>
  /**
   * @description
   *   卡片说明
   */
  indexSummary: string
  /**
   * @description
   *   卡片说明(分享)
   */
  indexSummaryShare: string
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   新增临期个数
   * @format int32
   */
  newAddAboutToExpiredCount: number
  /**
   * @description
   *   新增超期个数
   * @format int32
   */
  newAddExpiredCount: number
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   统计数据
   */
  staData: Array<StaData>
  /**
   * @description
   *   统计年份
   */
  staYear: string
  /**
   * @description
   *   处置建议
   */
  suggestion: string
}

export interface WorkerInsuranceDetailVO {
  /**
   * @description
   *   保险临期人员列表
   */
  aboutToExpireList: Array<InsuranceInfo>
  /**
   * @description
   *   新增保险临期人数
   * @format int32
   */
  aboutToExpiredCount: number
  /**
   * @description
   *   销项人数
   * @format int32
   */
  cancelRiskCount: number
  /**
   * @description
   *   已销项人员列表
   */
  cancelRiskList: Array<CancelInsuranceRiskInfo>
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   日期
   */
  date: string
  /**
   * @description
   *   卡片说明
   */
  indexSummary: string
  /**
   * @description
   *   卡片说明(分享)
   */
  indexSummaryShare: string
  /**
   * @description
   *   新增保险超期失效人数
   * @format int32
   */
  insuranceOverDueCount: number
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   新增未参保人数
   * @format int32
   */
  notInsuredCount: number
  /**
   * @description
   *   未参保人员列表
   */
  notInsuredList: Array<InsuranceInfo>
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   保险失效人员列表
   */
  overDueList: Array<InsuranceInfo>
  /**
   * @description
   *   统计数据
   */
  staData: Array<StaData>
  /**
   * @description
   *   统计年份
   */
  staYear: string
  /**
   * @description
   *   处置建议
   */
  suggestion: string
  /**
   * @description
   *   存在风险人数
   * @format int32
   */
  workerRiskCount: number
  /**
   * @description
   *   建档总人数
   * @format int32
   */
  workerTotalCount: number
}

export interface WorkerPhysicalDetailVO {
  /**
   * @description
   *   销项人数
   * @format int32
   */
  cancelRiskCount: number
  /**
   * @description
   *   已销项人员列表
   */
  cancelRiskList: Array<CancelUnPhysicalInfo>
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   日期
   */
  date: string
  /**
   * @description
   *   卡片说明
   */
  indexSummary: string
  /**
   * @description
   *   卡片说明(分享)
   */
  indexSummaryShare: string
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   新增未体检人数
   * @format int32
   */
  newAddUnPhysicalCount: number
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   统计数据
   */
  staData: Array<StaData>
  /**
   * @description
   *   统计年份
   */
  staYear: string
  /**
   * @description
   *   处置建议
   */
  suggestion: string
  /**
   * @description
   *   未体检人数
   * @format int32
   */
  unPhysicalCount: number
  /**
   * @description
   *   未参保人员列表
   */
  unPhysicalInfos: Array<UnPhysicalInfo>
  /**
   * @description
   *   建档总人数
   * @format int32
   */
  workerTotalCount: number
}

export interface WorkerSignDetailVO {
  /**
   * @description
   *   数据来源
   */
  dataSource: string
  /**
   * @description
   *   数据来源
   */
  dataSourceList: Array<string>
  /**
   * @description
   *   日期
   */
  date: string
  /**
   * @description
   *   卡片说明
   */
  indexSummary: string
  /**
   * @description
   *   风险等级
   */
  matterLevel: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   分包总人数
   */
  selfBuildTypeSta: Array<WorkerTypeSta>
  /**
   * @description
   *   自建出工人数
   * @format int32
   */
  selfBuildWorkerCount: number
  /**
   * @description
   *   分包总人数
   * @format int32
   */
  selfBuildWorkerTotalCount: number
  /**
   * @description
   *   出工项目数
   * @format int32
   */
  signDemandCount: number
  /**
   * @description
   *   统计数据
   */
  staData: Array<StaData>
  /**
   * @description
   *   统计周期
   */
  staDate: string
  /**
   * @description
   *   分包总人数
   */
  subcontractTypeSta: Array<WorkerTypeSta>
  /**
   * @description
   *   分包出工人数
   * @format int32
   */
  subcontractWorkerCount: number
  /**
   * @description
   *   自建总人数
   * @format int32
   */
  subcontractWorkerTotalCount: number
  /**
   * @description
   *   建档总人数
   * @format int32
   */
  workerTotalCount: number
}

export interface WorkerTypeSta {
  /**
   * @description
   *   人数
   * @format int32
   */
  signWorkerCount: number
  /**
   * @description
   *   工种
   */
  workerTypeName: string
}

export interface FluxServerSentEventString {
  /** @format int32 */
  prefetch: number
}

export interface HashMapObjectObject {
  [key: string]: any
}

export interface HashMapStringBaseVO {
  [key: string]: BaseVO
}

export interface HashMapStringDangerImproveHomePageVO {
  [key: string]: DangerImproveHomePageVO
}

export interface HashMapStringDangerLevelDetailVO {
  [key: string]: DangerLevelDetailVO
}

export interface HashMapStringDangerTypeDetailVO {
  [key: string]: DangerTypeDetailVO
}

export interface HashMapStringHighRiskItemVO {
  [key: string]: HighRiskItemVO
}

export interface HashMapStringKeyEquipmentHomePageVO {
  [key: string]: KeyEquipmentHomePageVO
}

export interface HashMapStringSafetyCheckTypeVO {
  [key: string]: SafetyCheckTypeVO
}

export interface HashMapStringTechnicalMeanTypeVO {
  [key: string]: TechnicalMeanTypeVO
}

export interface HashMapStringBoolean {
  [key: string]: boolean
}

export interface LinkedHashMapStringListObject {
  [key: string]: List
}

export interface ListObjectListIndoorRescueDetailsListVo {
  list: Array<IndoorRescueDetailsListVo>
}

export interface ListObjectListIndoorRescueTabulationVo {
  list: Array<IndoorRescueTabulationVo>
}

export interface MapStringString {
  [key: string]: string
}

export interface MeasurableKpi {
  calTime: string
  companyInfoId: string
  cpmoCop: string
  cpmoCopTxt: string
  createBy: string
  /**
   * @description
   *   创建人姓名
   */
  createName: string
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  createTime: string
  /**
   * @description
   *   创建人id
   */
  createUid: string
  /** @format int32 */
  deleteFlag: number
  /**
   * @description
   *   删除标志 0-未删除 1-已删除
   * @format int32
   */
  deleted: number
  firstKpiCode: string
  granName: string
  granType: string
  /** @format int64 */
  id: number
  kpiStatus: string
  kpiValue: string
  lastDiffDirect: string
  lastDiffValue: string
  /**
   * @description
   *   组织id
   */
  orgCode: string
  /**
   * @description
   *   组织名称
   */
  orgName: string
  /**
   * @description
   *   租户id
   */
  rdfaTenantId: string
  remark: string
  secondKpiCode: string
  secondKpiName: string
  tenantId: string
  /**
   * @description
   *   更新人id
   */
  updateBy: string
  /**
   * @description
   *   更新人姓名
   */
  updateName: string
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  updateTime: string
  /**
   * @description
   *   更新人id
   */
  updateUid: string
  xaDept: string
  xaDeptTxt: string
  xaReig: string
  xaReigTxt: string
}

export interface PageInfoChatHistoryVO {
  /** @format int64 */
  endRow: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  list: Array<ChatHistoryVO>
  /** @format int32 */
  navigateFirstPage: number
  /** @format int32 */
  navigateLastPage: number
  /** @format int32 */
  navigatePages: number
  navigatepageNums: Array<number>
  /** @format int32 */
  nextPage: number
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  /** @format int32 */
  pages: number
  /** @format int32 */
  prePage: number
  /** @format int32 */
  size: number
  /** @format int64 */
  startRow: number
  /** @format int64 */
  total: number
}

export interface PageInfoKeyPointsVO {
  /** @format int64 */
  endRow: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  list: Array<KeyPointsVO>
  /** @format int32 */
  navigateFirstPage: number
  /** @format int32 */
  navigateLastPage: number
  /** @format int32 */
  navigatePages: number
  navigatepageNums: Array<number>
  /** @format int32 */
  nextPage: number
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  /** @format int32 */
  pages: number
  /** @format int32 */
  prePage: number
  /** @format int32 */
  size: number
  /** @format int64 */
  startRow: number
  /** @format int64 */
  total: number
}

export interface PageInfoKpiLibraryVO {
  /** @format int64 */
  endRow: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  list: Array<KpiLibraryVO>
  /** @format int32 */
  navigateFirstPage: number
  /** @format int32 */
  navigateLastPage: number
  /** @format int32 */
  navigatePages: number
  navigatepageNums: Array<number>
  /** @format int32 */
  nextPage: number
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  /** @format int32 */
  pages: number
  /** @format int32 */
  prePage: number
  /** @format int32 */
  size: number
  /** @format int64 */
  startRow: number
  /** @format int64 */
  total: number
}

export interface PageInfoMatterImportantVO {
  /** @format int64 */
  endRow: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  list: Array<MatterImportantVO>
  /** @format int32 */
  navigateFirstPage: number
  /** @format int32 */
  navigateLastPage: number
  /** @format int32 */
  navigatePages: number
  navigatepageNums: Array<number>
  /** @format int32 */
  nextPage: number
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  /** @format int32 */
  pages: number
  /** @format int32 */
  prePage: number
  /** @format int32 */
  size: number
  /** @format int64 */
  startRow: number
  /** @format int64 */
  total: number
}

export interface PageInfoRoleVO {
  /** @format int64 */
  endRow: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  list: Array<RoleVO>
  /** @format int32 */
  navigateFirstPage: number
  /** @format int32 */
  navigateLastPage: number
  /** @format int32 */
  navigatePages: number
  navigatepageNums: Array<number>
  /** @format int32 */
  nextPage: number
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  /** @format int32 */
  pages: number
  /** @format int32 */
  prePage: number
  /** @format int32 */
  size: number
  /** @format int64 */
  startRow: number
  /** @format int64 */
  total: number
}

export interface PageInfoSafeMapRiskDigest {
  /** @format int64 */
  endRow: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  list: Array<SafeMapRiskDigest>
  /** @format int32 */
  navigateFirstPage: number
  /** @format int32 */
  navigateLastPage: number
  /** @format int32 */
  navigatePages: number
  navigatepageNums: Array<number>
  /** @format int32 */
  nextPage: number
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  /** @format int32 */
  pages: number
  /** @format int32 */
  prePage: number
  /** @format int32 */
  size: number
  /** @format int64 */
  startRow: number
  /** @format int64 */
  total: number
}

export interface PageInfoUserGroupDigest {
  /** @format int64 */
  endRow: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  isFirstPage: boolean
  isLastPage: boolean
  list: Array<UserGroupDigest>
  /** @format int32 */
  navigateFirstPage: number
  /** @format int32 */
  navigateLastPage: number
  /** @format int32 */
  navigatePages: number
  navigatepageNums: Array<number>
  /** @format int32 */
  nextPage: number
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  /** @format int32 */
  pages: number
  /** @format int32 */
  prePage: number
  /** @format int32 */
  size: number
  /** @format int64 */
  startRow: number
  /** @format int64 */
  total: number
}

export interface PagedRdfaResultAccountInfoVO {
  code: string
  data: Array<AccountInfoVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultDataCollectTaskListVO {
  code: string
  data: Array<DataCollectTaskListVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultDistributionOrderListVo {
  code: string
  data: Array<DistributionOrderListVo>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultDpcAssembleTemplateDTO {
  code: string
  data: Array<DpcAssembleTemplateDTO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultDpcCheckPlanVO {
  code: string
  data: Array<DpcCheckPlanVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultDutyAction {
  code: string
  data: Array<DutyAction>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultDutyInfo {
  code: string
  data: Array<DutyInfo>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultGuessVO {
  code: string
  data: Array<GuessVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultHazardLevel {
  code: string
  data: Array<HazardLevel>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultHazardTaskListVO {
  code: string
  data: Array<HazardTaskListVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultImportantFocusBrief {
  code: string
  data: Array<ImportantFocusBrief>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultImportantFocusComment {
  code: string
  data: Array<ImportantFocusComment>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultIndexBasisDataListVo {
  code: string
  data: Array<IndexBasisDataListVo>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultIndexExceptionReportListVo {
  code: string
  data: Array<IndexExceptionReportListVo>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultIndexInfoListVo {
  code: string
  data: Array<IndexInfoListVo>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultIndexMonitorSearchVo {
  code: string
  data: Array<IndexMonitorSearchVo>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultIndexSearchMindVO {
  code: string
  data: Array<IndexSearchMindVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultKpiConfig {
  code: string
  data: Array<KpiConfig>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultKpiData {
  code: string
  data: Array<KpiData>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultKpiGridTrendVO {
  code: string
  data: Array<KpiGridTrendVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultKpiIndicatorDetailsVO {
  code: string
  data: Array<KpiIndicatorDetailsVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultKpiTrendVO {
  code: string
  data: Array<KpiTrendVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultListOrgInfoVO {
  code: string
  data: Array<ListOrgInfoVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultMeasurableKpi {
  code: string
  data: Array<MeasurableKpi>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultNetworkDangerListVO {
  code: string
  data: Array<NetworkDangerListVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultNetworkDeviceListVO {
  code: string
  data: Array<NetworkDeviceListVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultPhysicalMapProjectTypeVO {
  code: string
  data: Array<PhysicalMapProjectTypeVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultPhysicalMapRecordVO {
  code: string
  data: Array<PhysicalMapRecordVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultPointPosition {
  code: string
  data: Array<PointPosition>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultPressureDevicePredictionListVO {
  code: string
  data: Array<PressureDevicePredictionListVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultReportSameTypeInfo {
  code: string
  data: Array<ReportSameTypeInfo>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultRiskPreventReportVO {
  code: string
  data: Array<RiskPreventReportVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultRoleInfoVO {
  code: string
  data: Array<RoleInfoVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultRoleVO {
  code: string
  data: Array<RoleVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultRuleListVO {
  code: string
  data: Array<RuleListVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultShareBaseVO {
  code: string
  data: Array<ShareBaseVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultTeamVO {
  code: string
  data: Array<TeamVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultUniversalAdsSafetyheartEvaluateKpiDataH {
  code: string
  data: Array<UniversalAdsSafetyheartEvaluateKpiDataH>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultUserBriefVO {
  code: string
  data: Array<UserBriefVO>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface PagedRdfaResultUserGroupDigest {
  code: string
  data: Array<UserGroupDigest>
  message: string
  /** @format int32 */
  pageNum: number
  /** @format int32 */
  pageSize: number
  success: boolean
  /** @format int64 */
  totalCount: number
  /** @format int64 */
  totalPages: number
}

export interface RdfaResultArrayListBaseRoleVO {
  code: string
  data: Array<BaseRoleVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListCompanyKpiRank {
  code: string
  data: Array<CompanyKpiRank>
  message: string
  success: boolean
}

export interface RdfaResultArrayListDangerIdentificationListVO {
  code: string
  data: Array<DangerIdentificationListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListDangerImproveDetailListVO {
  code: string
  data: Array<DangerImproveDetailListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListDangerTypeDetailVO {
  code: string
  data: Array<DangerTypeDetailVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListDeptInfoVO {
  code: string
  data: Array<DeptInfoVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListDeviceAlarmListVO {
  code: string
  data: Array<DeviceAlarmListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListDisposalProcessListVO {
  code: string
  data: Array<DisposalProcessListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListDpcAssembleCheckDTO {
  code: string
  data: Array<DpcAssembleCheckDTO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListDpcAssembleDangerDTO {
  code: string
  data: Array<DpcAssembleDangerDTO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListDpcAssembleTemplateDTO {
  code: string
  data: Array<DpcAssembleTemplateDTO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListDpcAssembleWelcomeCheckDTO {
  code: string
  data: Array<DpcAssembleWelcomeCheckDTO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListEmergencyRescueListVO {
  code: string
  data: Array<EmergencyRescueListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListEmergencyRescueProgressListVO {
  code: string
  data: Array<EmergencyRescueProgressListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListHazardDetailVo {
  code: string
  data: Array<HazardDetailVo>
  message: string
  success: boolean
}

export interface RdfaResultArrayListIndexSearchVO {
  code: string
  data: Array<IndexSearchVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListKpiCompanyVO {
  code: string
  data: Array<KpiCompanyVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListKpiIllustrateVO {
  code: string
  data: Array<KpiIllustrateVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListLeakDetectionListVO {
  code: string
  data: Array<LeakDetectionListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListListOrgInfoVO {
  code: string
  data: Array<ListOrgInfoVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListListRoleAuthVO {
  code: string
  data: Array<ListRoleAuthVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListMatterTroubleRecordRectifyVO {
  code: string
  data: Array<MatterTroubleRecordRectifyVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListNetworkDangerCompanyVO {
  code: string
  data: Array<NetworkDangerCompanyVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListNetworkDangerListVO {
  code: string
  data: Array<NetworkDangerListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListNetworkDeviceListVO {
  code: string
  data: Array<NetworkDeviceListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListOrgCompanyVO {
  code: string
  data: Array<OrgCompanyVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListOrgSceneInfoVO {
  code: string
  data: Array<OrgSceneInfoVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListPageAuthVO {
  code: string
  data: Array<PageAuthVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListPressureDevicePredictionListVO {
  code: string
  data: Array<PressureDevicePredictionListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListReportEvalSceneRiskQuotaVO {
  code: string
  data: Array<ReportEvalSceneRiskQuotaVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListReportEvalSceneVO {
  code: string
  data: Array<ReportEvalSceneVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListRiskSceneVO {
  code: string
  data: Array<RiskSceneVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListRiskTraceDetail {
  code: string
  data: Array<RiskTraceDetail>
  message: string
  success: boolean
}

export interface RdfaResultArrayListRoleInfoVO {
  code: string
  data: Array<RoleInfoVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListRoleVO {
  code: string
  data: Array<RoleVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListRuleConditionVO {
  code: string
  data: Array<RuleConditionVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListSafeMapRiskDigest {
  code: string
  data: Array<SafeMapRiskDigest>
  message: string
  success: boolean
}

export interface RdfaResultArrayListSafeMapRiskStatisticsVO {
  code: string
  data: Array<SafeMapRiskStatisticsVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListSafePlanStatisticsOrg {
  code: string
  data: Array<SafePlanStatisticsOrg>
  message: string
  success: boolean
}

export interface RdfaResultArrayListSafetyCheckCompanyVO {
  code: string
  data: Array<SafetyCheckCompanyVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListSafetyCompanyBaselineListVO {
  code: string
  data: Array<SafetyCompanyBaselineListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListStaffInfoVO {
  code: string
  data: Array<StaffInfoVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListSubscribeOrgVO {
  code: string
  data: Array<SubscribeOrgVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListTechnicalMeanCompanyVO {
  code: string
  data: Array<TechnicalMeanCompanyVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListThirdPartConstructionAlarmListVO {
  code: string
  data: Array<ThirdPartConstructionAlarmListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListThirdPartConstructionListVO {
  code: string
  data: Array<ThirdPartConstructionListVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListUserBriefVO {
  code: string
  data: Array<UserBriefVO>
  message: string
  success: boolean
}

export interface RdfaResultArrayListUserGroupDigest {
  code: string
  data: Array<UserGroupDigest>
  message: string
  success: boolean
}

export interface RdfaResultArrayListInt {
  code: string
  data: Array<number>
  message: string
  success: boolean
}

export interface RdfaResultArrayListObject {
  code: string
  data: Array<any>
  message: string
  success: boolean
}

export interface RdfaResultArrayListString {
  code: string
  data: Array<string>
  message: string
  success: boolean
}

export interface RdfaResultAssembleCheckVO {
  code: string
  data: AssembleCheckVO
  message: string
  success: boolean
}

export interface RdfaResultAssembleDangerVO {
  code: string
  data: AssembleDangerVO
  message: string
  success: boolean
}

export interface RdfaResultAssembleEnvironmentVO {
  code: string
  data: AssembleEnvironmentVO
  message: string
  success: boolean
}

export interface RdfaResultAssembleEquipmentVO {
  code: string
  data: AssembleEquipmentVO
  message: string
  success: boolean
}

export interface RdfaResultAssembleInspecteVO {
  code: string
  data: AssembleInspecteVO
  message: string
  success: boolean
}

export interface RdfaResultAssembleOperationVO {
  code: string
  data: AssembleOperationVO
  message: string
  success: boolean
}

export interface RdfaResultAssemblePlanVO {
  code: string
  data: AssemblePlanVO
  message: string
  success: boolean
}

export interface RdfaResultAuthRequestPassResult {
  code: string
  data: AuthRequestPassResult
  message: string
  success: boolean
}

export interface RdfaResultCameraOnlineDetailVO {
  code: string
  data: CameraOnlineDetailVO
  message: string
  success: boolean
}

export interface RdfaResultCategoryKpiSourceVO {
  code: string
  data: CategoryKpiSourceVO
  message: string
  success: boolean
}

export interface RdfaResultCategoryKpiVO {
  code: string
  data: CategoryKpiVO
  message: string
  success: boolean
}

export interface RdfaResultCollectTaskCheckSaveVO {
  code: string
  data: CollectTaskCheckSaveVO
  message: string
  success: boolean
}

export interface RdfaResultCollectTaskDetailListVO {
  code: string
  data: CollectTaskDetailListVO
  message: string
  success: boolean
}

export interface RdfaResultCollectTaskSummaryVO {
  code: string
  data: CollectTaskSummaryVO
  message: string
  success: boolean
}

export interface RdfaResultConstructionScheduleTodayDetailVO {
  code: string
  data: ConstructionScheduleTodayDetailVO
  message: string
  success: boolean
}

export interface RdfaResultDangerImproveDetailVO {
  code: string
  data: DangerImproveDetailVO
  message: string
  success: boolean
}

export interface RdfaResultDangerImproveHomePageVO {
  code: string
  data: DangerImproveHomePageVO
  message: string
  success: boolean
}

export interface RdfaResultDangerWorkDetailsVO {
  code: string
  data: DangerWorkDetailsVO
  message: string
  success: boolean
}

export interface RdfaResultDangerWorkTodayDetailVO {
  code: string
  data: DangerWorkTodayDetailVO
  message: string
  success: boolean
}

export interface RdfaResultDangerWorkTypeNumVO {
  code: string
  data: DangerWorkTypeNumVO
  message: string
  success: boolean
}

export interface RdfaResultDangerWorkVO {
  code: string
  data: DangerWorkVO
  message: string
  success: boolean
}

export interface RdfaResultDeviceSafeDetailVO {
  code: string
  data: DeviceSafeDetailVO
  message: string
  success: boolean
}

export interface RdfaResultDiagnosis {
  code: string
  data: Diagnosis
  message: string
  success: boolean
}

export interface RdfaResultDirectorSubImportantVO {
  code: string
  data: DirectorSubImportantVO
  message: string
  success: boolean
}

export interface RdfaResultDpcAssembleCheckDTO {
  code: string
  data: DpcAssembleCheckDTO
  message: string
  success: boolean
}

export interface RdfaResultDpcAssembleDangerDTO {
  code: string
  data: DpcAssembleDangerDTO
  message: string
  success: boolean
}

export interface RdfaResultDpcAssembleEquipmentDTO {
  code: string
  data: DpcAssembleEquipmentDTO
  message: string
  success: boolean
}

export interface RdfaResultDpcAssembleOperationDTO {
  code: string
  data: DpcAssembleOperationDTO
  message: string
  success: boolean
}

export interface RdfaResultDpcAssembleTemplateDTO {
  code: string
  data: DpcAssembleTemplateDTO
  message: string
  success: boolean
}

export interface RdfaResultDpcAssembleWelcomeCheckDTO {
  code: string
  data: DpcAssembleWelcomeCheckDTO
  message: string
  success: boolean
}

export interface RdfaResultEDataKpiResult {
  code: string
  data: EDataKpiResult
  message: string
  success: boolean
}

export interface RdfaResultEvalReportQueryVO {
  code: string
  data: EvalReportQueryVO
  message: string
  success: boolean
}

export interface RdfaResultFamilyLabelInfoVO {
  code: string
  data: FamilyLabelInfoVO
  message: string
  success: boolean
}

export interface RdfaResultFamilyOrgKpiVO {
  code: string
  data: FamilyOrgKpiVO
  message: string
  success: boolean
}

export interface RdfaResultFeatureWeatherVO {
  code: string
  data: FeatureWeatherVO
  message: string
  success: boolean
}

export interface RdfaResultFirstKpiCodeDetailVO {
  code: string
  data: FirstKpiCodeDetailVO
  message: string
  success: boolean
}

export interface RdfaResultFocusTaskVo {
  code: string
  data: FocusTaskVo
  message: string
  success: boolean
}

export interface RdfaResultGuessVO {
  code: string
  data: GuessVO
  message: string
  success: boolean
}

export interface RdfaResultHashMapObjectObject {
  code: string
  data: {
    [propertyName: string]: any
  }
  message: string
  success: boolean
}

export interface RdfaResultHashMapStringBaseVO {
  code: string
  data: {
    [propertyName: string]: BaseVO
  }
  message: string
  success: boolean
}

export interface RdfaResultHashMapStringDangerImproveHomePageVO {
  code: string
  data: {
    [propertyName: string]: DangerImproveHomePageVO
  }
  message: string
  success: boolean
}

export interface RdfaResultHashMapStringDangerLevelDetailVO {
  code: string
  data: {
    [propertyName: string]: DangerLevelDetailVO
  }
  message: string
  success: boolean
}

export interface RdfaResultHashMapStringDangerTypeDetailVO {
  code: string
  data: {
    [propertyName: string]: DangerTypeDetailVO
  }
  message: string
  success: boolean
}

export interface RdfaResultHashMapStringHighRiskItemVO {
  code: string
  data: {
    [propertyName: string]: HighRiskItemVO
  }
  message: string
  success: boolean
}

export interface RdfaResultHashMapStringKeyEquipmentHomePageVO {
  code: string
  data: {
    [propertyName: string]: KeyEquipmentHomePageVO
  }
  message: string
  success: boolean
}

export interface RdfaResultHashMapStringSafetyCheckTypeVO {
  code: string
  data: {
    [propertyName: string]: SafetyCheckTypeVO
  }
  message: string
  success: boolean
}

export interface RdfaResultHashMapStringTechnicalMeanTypeVO {
  code: string
  data: {
    [propertyName: string]: TechnicalMeanTypeVO
  }
  message: string
  success: boolean
}

export interface RdfaResultHashMapStringBoolean {
  code: string
  data: {
    [propertyName: string]: boolean
  }
  message: string
  success: boolean
}

export interface RdfaResultHashMap {
  code: string
  data: {
    [propertyName: string]: any
  }
  message: string
  success: boolean
}

export interface RdfaResultHazardTaskCheckSaveVO {
  code: string
  data: HazardTaskCheckSaveVO
  message: string
  success: boolean
}

export interface RdfaResultHazardTaskDetailListVO {
  code: string
  data: HazardTaskDetailListVO
  message: string
  success: boolean
}

export interface RdfaResultHazardTaskDetailVO {
  code: string
  data: HazardTaskDetailVO
  message: string
  success: boolean
}

export interface RdfaResultHazardTaskSummaryVO {
  code: string
  data: HazardTaskSummaryVO
  message: string
  success: boolean
}

export interface RdfaResultHazardVo {
  code: string
  data: HazardVo
  message: string
  success: boolean
}

export interface RdfaResultIndexInfoVO {
  code: string
  data: IndexInfoVO
  message: string
  success: boolean
}

export interface RdfaResultIndividualPerformanceDetailVO {
  code: string
  data: IndividualPerformanceDetailVO
  message: string
  success: boolean
}

export interface RdfaResultIndividualPerformanceVO {
  code: string
  data: IndividualPerformanceVO
  message: string
  success: boolean
}

export interface RdfaResultIndoorDangerCountDataVo {
  code: string
  data: IndoorDangerCountDataVo
  message: string
  success: boolean
}

export interface RdfaResultIndoorRescueCountDataVo {
  code: string
  data: IndoorRescueCountDataVo
  message: string
  success: boolean
}

export interface RdfaResultIndoorRescueDetailsListVo {
  code: string
  data: IndoorRescueDetailsListVo
  message: string
  success: boolean
}

export interface RdfaResultJSONArray {
  code: string
  data: Array<any>
  message: string
  success: boolean
}

export interface RdfaResultKpiAssessmentLineVO {
  code: string
  data: KpiAssessmentLineVO
  message: string
  success: boolean
}

export interface RdfaResultKpiConfig {
  code: string
  data: KpiConfig
  message: string
  success: boolean
}

export interface RdfaResultKpiData {
  code: string
  data: KpiData
  message: string
  success: boolean
}

export interface RdfaResultKpiProportionVO {
  code: string
  data: KpiProportionVO
  message: string
  success: boolean
}

export interface RdfaResultLabelInfoVO {
  code: string
  data: LabelInfoVO
  message: string
  success: boolean
}

export interface RdfaResultLeakDetectionPlanVO {
  code: string
  data: LeakDetectionPlanVO
  message: string
  success: boolean
}

export interface RdfaResultLinkedHashMapStringListObject {
  code: string
  data: {
    [propertyName: string]: Array<any>
  }
  message: string
  success: boolean
}

export interface RdfaResultListAccountInfoVO {
  code: string
  data: ListAccountInfoVO
  message: string
  success: boolean
}

export interface RdfaResultListObjectListIndoorRescueDetailsListVo {
  code: string
  data: ListObjectListIndoorRescueDetailsListVo
  message: string
  success: boolean
}

export interface RdfaResultListObjectListIndoorRescueTabulationVo {
  code: string
  data: ListObjectListIndoorRescueTabulationVo
  message: string
  success: boolean
}

export interface RdfaResultListOrgInfoVO {
  code: string
  data: ListOrgInfoVO
  message: string
  success: boolean
}

export interface RdfaResultListStaffInfoVO {
  code: string
  data: ListStaffInfoVO
  message: string
  success: boolean
}

export interface RdfaResultListUserGroupInfoVO {
  code: string
  data: ListUserGroupInfoVO
  message: string
  success: boolean
}

export interface RdfaResultManageCertificateDetailVO {
  code: string
  data: ManageCertificateDetailVO
  message: string
  success: boolean
}

export interface RdfaResultMatterImportantFocusRobotVO {
  code: string
  data: MatterImportantFocusRobotVO
  message: string
  success: boolean
}

export interface RdfaResultMatterImportantFocusStateVO {
  code: string
  data: MatterImportantFocusStateVO
  message: string
  success: boolean
}

export interface RdfaResultMatterImportantFocusUrgingVO {
  code: string
  data: MatterImportantFocusUrgingVO
  message: string
  success: boolean
}

export interface RdfaResultMatterImportantFocusVO {
  code: string
  data: MatterImportantFocusVO
  message: string
  success: boolean
}

export interface RdfaResultMineInfo {
  code: string
  data: MineInfo
  message: string
  success: boolean
}

export interface RdfaResultNameList {
  code: string
  data: NameList
  message: string
  success: boolean
}

export interface RdfaResultNetworkBaseInfoVO {
  code: string
  data: NetworkBaseInfoVO
  message: string
  success: boolean
}

export interface RdfaResultNetworkDangerStatisticVO {
  code: string
  data: NetworkDangerStatisticVO
  message: string
  success: boolean
}

export interface RdfaResultNetworkDangerTypeStatisticVO {
  code: string
  data: NetworkDangerTypeStatisticVO
  message: string
  success: boolean
}

export interface RdfaResultNetworkDeviceInfoWithStatusVO {
  code: string
  data: NetworkDeviceInfoWithStatusVO
  message: string
  success: boolean
}

export interface RdfaResultNetworkInspectionVO {
  code: string
  data: NetworkInspectionVO
  message: string
  success: boolean
}

export interface RdfaResultOrgCompanyInfoVO {
  code: string
  data: OrgCompanyInfoVO
  message: string
  success: boolean
}

export interface RdfaResultOrgInfoVO {
  code: string
  data: OrgInfoVO
  message: string
  success: boolean
}

export interface RdfaResultOrgKpiVO {
  code: string
  data: OrgKpiVO
  message: string
  success: boolean
}

export interface RdfaResultOrgUserRelateVO {
  code: string
  data: OrgUserRelateVO
  message: string
  success: boolean
}

export interface RdfaResultPageInfoChatHistoryVO {
  code: string
  data: PageInfoChatHistoryVO
  message: string
  success: boolean
}

export interface RdfaResultPageInfoKeyPointsVO {
  code: string
  data: PageInfoKeyPointsVO
  message: string
  success: boolean
}

export interface RdfaResultPageInfoKpiLibraryVO {
  code: string
  data: PageInfoKpiLibraryVO
  message: string
  success: boolean
}

export interface RdfaResultPageInfoMatterImportantVO {
  code: string
  data: PageInfoMatterImportantVO
  message: string
  success: boolean
}

export interface RdfaResultPageInfoRoleVO {
  code: string
  data: PageInfoRoleVO
  message: string
  success: boolean
}

export interface RdfaResultPageInfoSafeMapRiskDigest {
  code: string
  data: PageInfoSafeMapRiskDigest
  message: string
  success: boolean
}

export interface RdfaResultPageInfoUserGroupDigest {
  code: string
  data: PageInfoUserGroupDigest
  message: string
  success: boolean
}

export interface RdfaResultPersonalKpiVO {
  code: string
  data: PersonalKpiVO
  message: string
  success: boolean
}

export interface RdfaResultPipeNetworkVO {
  code: string
  data: PipeNetworkVO
  message: string
  success: boolean
}

export interface RdfaResultPressureDevicePlanVO {
  code: string
  data: PressureDevicePlanVO
  message: string
  success: boolean
}

export interface RdfaResultPressureDevicePredictionVO {
  code: string
  data: PressureDevicePredictionVO
  message: string
  success: boolean
}

export interface RdfaResultProjectMatterImportantFocusRobotVO {
  code: string
  data: ProjectMatterImportantFocusRobotVO
  message: string
  success: boolean
}

export interface RdfaResultProjectScheduleExecRateDetailVo {
  code: string
  data: ProjectScheduleExecRateDetailVo
  message: string
  success: boolean
}

export interface RdfaResultRankDigest {
  code: string
  data: RankDigest
  message: string
  success: boolean
}

export interface RdfaResultReportEnterpriseInfoVO {
  code: string
  data: ReportEnterpriseInfoVO
  message: string
  success: boolean
}

export interface RdfaResultReportEnterpriseRiskDataVO {
  code: string
  data: ReportEnterpriseRiskDataVO
  message: string
  success: boolean
}

export interface RdfaResultReportEvalTotalSafetyVO {
  code: string
  data: ReportEvalTotalSafetyVO
  message: string
  success: boolean
}

export interface RdfaResultReportFistPageOverviewVO {
  code: string
  data: ReportFistPageOverviewVO
  message: string
  success: boolean
}

export interface RdfaResultReportQuotaNoteInfoVO {
  code: string
  data: ReportQuotaNoteInfoVO
  message: string
  success: boolean
}

export interface RdfaResultRiskDynamicsVO {
  code: string
  data: RiskDynamicsVO
  message: string
  success: boolean
}

export interface RdfaResultRiskIdentificationVO {
  code: string
  data: RiskIdentificationVO
  message: string
  success: boolean
}

export interface RdfaResultRiskPreventReportVO {
  code: string
  data: RiskPreventReportVO
  message: string
  success: boolean
}

export interface RdfaResultRoleInfoVO {
  code: string
  data: RoleInfoVO
  message: string
  success: boolean
}

export interface RdfaResultRoleVO {
  code: string
  data: RoleVO
  message: string
  success: boolean
}

export interface RdfaResultRuleVO {
  code: string
  data: RuleVO
  message: string
  success: boolean
}

export interface RdfaResultSafeBaseDataCredibility {
  code: string
  data: SafeBaseDataCredibility
  message: string
  success: boolean
}

export interface RdfaResultSafeInputVO {
  code: string
  data: SafeInputVO
  message: string
  success: boolean
}

export interface RdfaResultSafeMapRiskDetail {
  code: string
  data: SafeMapRiskDetail
  message: string
  success: boolean
}

export interface RdfaResultSafeTroubleDetailVO {
  code: string
  data: SafeTroubleDetailVO
  message: string
  success: boolean
}

export interface RdfaResultSafetyAssessmentBaselineVO {
  code: string
  data: SafetyAssessmentBaselineVO
  message: string
  success: boolean
}

export interface RdfaResultSafetyCheckVO {
  code: string
  data: SafetyCheckVO
  message: string
  success: boolean
}

export interface RdfaResultSafetyOverviewVO {
  code: string
  data: SafetyOverviewVO
  message: string
  success: boolean
}

export interface RdfaResultSafetyUserInfo {
  code: string
  data: SafetyUserInfo
  message: string
  success: boolean
}

export interface RdfaResultSceneCreateVO {
  code: string
  data: SceneCreateVO
  message: string
  success: boolean
}

export interface RdfaResultSmartApplyAnalysisVo {
  code: string
  data: SmartApplyAnalysisVo
  message: string
  success: boolean
}

export interface RdfaResultStaffInfoVO {
  code: string
  data: StaffInfoVO
  message: string
  success: boolean
}

export interface RdfaResultStateConfigurationVO {
  code: string
  data: StateConfigurationVO
  message: string
  success: boolean
}

export interface RdfaResultSysFileConfigurationVO {
  code: string
  data: SysFileConfigurationVO
  message: string
  success: boolean
}

export interface RdfaResultSysFile {
  code: string
  data: SysFile
  message: string
  success: boolean
}

export interface RdfaResultSysTransformSortVO {
  code: string
  data: SysTransformSortVO
  message: string
  success: boolean
}

export interface RdfaResultSysTransformVO {
  code: string
  data: SysTransformVO
  message: string
  success: boolean
}

export interface RdfaResultTechnicalMeansVO {
  code: string
  data: TechnicalMeansVO
  message: string
  success: boolean
}

export interface RdfaResultThirdBuildVO {
  code: string
  data: ThirdBuildVO
  message: string
  success: boolean
}

export interface RdfaResultThirdPartConstructionSupervisionVO {
  code: string
  data: ThirdPartConstructionSupervisionVO
  message: string
  success: boolean
}

export interface RdfaResultThirdPartConstructionVO {
  code: string
  data: ThirdPartConstructionVO
  message: string
  success: boolean
}

export interface RdfaResultTimeoutLevelStatisticVO {
  code: string
  data: TimeoutLevelStatisticVO
  message: string
  success: boolean
}

export interface RdfaResultUniversalAdsSafetyheartEvaluateKpiDataH {
  code: string
  data: UniversalAdsSafetyheartEvaluateKpiDataH
  message: string
  success: boolean
}

export interface RdfaResultUserGroupDetail {
  code: string
  data: UserGroupDetail
  message: string
  success: boolean
}

export interface RdfaResultUserGroupInfoVO {
  code: string
  data: UserGroupInfoVO
  message: string
  success: boolean
}

export interface RdfaResultValveDevicePlanVO {
  code: string
  data: ValveDevicePlanVO
  message: string
  success: boolean
}

export interface RdfaResultViolateSummaryVO {
  code: string
  data: ViolateSummaryVO
  message: string
  success: boolean
}

export interface RdfaResultWeatherEffectVO {
  code: string
  data: WeatherEffectVO
  message: string
  success: boolean
}

export interface RdfaResultWeatherVO {
  code: string
  data: WeatherVO
  message: string
  success: boolean
}

export interface RdfaResultWorkerCertificateDetailVO {
  code: string
  data: WorkerCertificateDetailVO
  message: string
  success: boolean
}

export interface RdfaResultWorkerInsuranceDetailVO {
  code: string
  data: WorkerInsuranceDetailVO
  message: string
  success: boolean
}

export interface RdfaResultWorkerPhysicalDetailVO {
  code: string
  data: WorkerPhysicalDetailVO
  message: string
  success: boolean
}

export interface RdfaResultWorkerSignDetailVO {
  code: string
  data: WorkerSignDetailVO
  message: string
  success: boolean
}

export interface RdfaResultBoolean {
  code: string
  data: boolean
  message: string
  success: boolean
}

export interface RdfaResultInt {
  code: string
  /** @format int32 */
  data: number
  message: string
  success: boolean
}

export interface RdfaResultLong {
  code: string
  /** @format int64 */
  data: number
  message: string
  success: boolean
}

export interface RdfaResultObject {
  code: string
  data: any
  message: string
  success: boolean
}

export interface RdfaResultString {
  code: string
  data: string
  message: string
  success: boolean
}

export type ServerSentEventString = any

export interface Alarm {
  /**
   * @description
   *   地址
   */
  address: string
  /**
   * @description
   *   告警原因
   */
  alarmReason: string
  /**
   * @description
   *   告警时间
   */
  alarmTime: string
  /**
   * @description
   *   子公司名称
   */
  companyName: string
  /**
   * @description
   *   处置进展
   */
  disposalProgress: string
  /**
   * @description
   *   处置状态
   */
  disposalStatus: string
  /**
   * @description
   *   物联数据值
   */
  ioT: string
  /**
   * @description
   *   告警名称
   */
  name: string
}

export type List = any
