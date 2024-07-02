/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { abcRequester as requester, type AxiosRequestConfig } from '../http'
import type {
  RdfaResultString,
  RdfaResultArrayListKpiIllustrateVO,
  RdfaResultArrayListNetworkDangerCompanyVO,
  RdfaResultArrayListNetworkDangerListVO,
  PageQueryDTO,
  PagedRdfaResultNetworkDangerListVO,
  RdfaResultNetworkDangerStatisticVO,
  RdfaResultTimeoutLevelStatisticVO,
  RdfaResultNetworkDangerTypeStatisticVO,
  RdfaResultDangerWorkDetailsVO,
  RdfaResultArrayListDeviceAlarmListVO,
  RdfaResultNetworkDeviceInfoWithStatusVO,
  RdfaResultArrayListNetworkDeviceListVO,
  PagedRdfaResultNetworkDeviceListVO,
  RdfaResultArrayListPressureDevicePredictionListVO,
  PagedRdfaResultPressureDevicePredictionListVO,
  RdfaResultArrayListDisposalProcessListVO,
  RdfaResultArrayListEmergencyRescueListVO,
  RdfaResultArrayListEmergencyRescueProgressListVO,
  RdfaResultArrayListLeakDetectionListVO,
  RdfaResultLeakDetectionPlanVO,
  RdfaResultNetworkBaseInfoVO,
  RdfaResultNetworkInspectionVO,
  RdfaResultPressureDevicePlanVO,
  RdfaResultPressureDevicePredictionVO,
  RdfaResultRiskDynamicsVO,
  RdfaResultThirdPartConstructionVO,
  RdfaResultArrayListThirdPartConstructionAlarmListVO,
  RdfaResultArrayListThirdPartConstructionListVO,
  RdfaResultThirdPartConstructionSupervisionVO,
  RdfaResultValveDevicePlanVO,
  RdfaResultArrayListOrgSceneInfoVO,
  RdfaResultHashMapStringHighRiskItemVO,
  RdfaResultInt,
  RdfaResultIndoorDangerCountDataVo,
  RdfaResultIndoorRescueDetailsListVo,
  RdfaResultListObjectListIndoorRescueDetailsListVo,
  RdfaResultDangerImproveDetailVO,
  RdfaResultHashMapStringDangerLevelDetailVO,
  RdfaResultArrayListDangerImproveDetailListVO,
  RdfaResultHashMapStringDangerTypeDetailVO,
  RdfaResultHashMapStringDangerImproveHomePageVO,
  RdfaResultDangerImproveHomePageVO,
  RdfaResultArrayListDangerIdentificationListVO,
  RdfaResultArrayListDangerTypeDetailVO,
  RdfaResultHashMapStringKeyEquipmentHomePageVO,
  RdfaResultIndoorRescueCountDataVo,
  BaseIndoorQueryDto,
  RdfaResultListObjectListIndoorRescueTabulationVo,
  RdfaResultRiskIdentificationVO,
  RdfaResultArrayListKpiCompanyVO,
  RdfaResultSafetyAssessmentBaselineVO,
  RdfaResultArrayListSafetyCompanyBaselineListVO,
  RdfaResultHashMapStringBaseVO,
  RdfaResultSafetyCheckVO,
  RdfaResultArrayListSafetyCheckCompanyVO,
  RdfaResultHashMapStringSafetyCheckTypeVO,
  RdfaResultTechnicalMeansVO,
  RdfaResultArrayListTechnicalMeanCompanyVO,
  RdfaResultHashMapStringTechnicalMeanTypeVO,
} from './definition'

/** @description response type for apiAbcGetCommonGetSystemTime */
interface ApiAbcGetCommonGetSystemTimeResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultString
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcGetCommonGetSystemTimeResponseSuccess =
  ApiAbcGetCommonGetSystemTimeResponse[200]
/**
 * @description
 *   获取系统时间(精确到毫秒)
 * @tags 公用接口-2688
 * @produces *
 */
export const apiAbcGetCommonGetSystemTime = (config?: AxiosRequestConfig) =>
  requester<ApiAbcGetCommonGetSystemTimeResponseSuccess>(
    '/common/getSystemTime',
    { method: 'get' },
    config,
  )

/** @description response type for apiAbcGetKpiIllustrateQueryAllKpiIllustrate */
interface ApiAbcGetKpiIllustrateQueryAllKpiIllustrateResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListKpiIllustrateVO
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcGetKpiIllustrateQueryAllKpiIllustrateResponseSuccess =
  ApiAbcGetKpiIllustrateQueryAllKpiIllustrateResponse[200]
/**
 * @description
 *   获取所有指标定义
 * @tags 指标定义接口-2688
 * @produces *
 */
export const apiAbcGetKpiIllustrateQueryAllKpiIllustrate = (
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcGetKpiIllustrateQueryAllKpiIllustrateResponseSuccess>(
    '/kpiIllustrate/queryAllKpiIllustrate',
    { method: 'get' },
    config,
  )

type ApiAbcPostNetworkMapGetDangerCompanyListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDangerCompanyList */
interface ApiAbcPostNetworkMapGetDangerCompanyListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListNetworkDangerCompanyVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDangerCompanyListResponseSuccess =
  ApiAbcPostNetworkMapGetDangerCompanyListResponse[200]
/**
 * @description
 *   管网概览-隐患-子公司情况（本年）
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDangerCompanyList = (
  option?: ApiAbcPostNetworkMapGetDangerCompanyListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDangerCompanyListResponseSuccess>(
    '/network-map/getDangerCompanyList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetDangerHighLevelListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDangerHighLevelList */
interface ApiAbcPostNetworkMapGetDangerHighLevelListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListNetworkDangerListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDangerHighLevelListResponseSuccess =
  ApiAbcPostNetworkMapGetDangerHighLevelListResponse[200]
/**
 * @description
 *   管网概览-隐患-重大隐患分页列表
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDangerHighLevelList = (
  option?: ApiAbcPostNetworkMapGetDangerHighLevelListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDangerHighLevelListResponseSuccess>(
    '/network-map/getDangerHighLevelList',
    { method: 'post', query: option },
    config,
  )

/** @description request parameter type for apiAbcPostNetworkMapGetDangerHighLevelPage */
interface ApiAbcPostNetworkMapGetDangerHighLevelPageOption {
  /**
   * @description
   *   orgCode
   */
  query: {
    /**
        @description
          orgCode */
    orgCode: string
  }
}

/** @description request parameter type for apiAbcPostNetworkMapGetDangerHighLevelPage */
interface ApiAbcPostNetworkMapGetDangerHighLevelPageOption {
  /**
   * @description
   *   pageQueryDTO
   */
  body: PageQueryDTO
}

/** @description response type for apiAbcPostNetworkMapGetDangerHighLevelPage */
interface ApiAbcPostNetworkMapGetDangerHighLevelPageResponse {
  /**
   * @description
   *   OK
   */
  200: PagedRdfaResultNetworkDangerListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDangerHighLevelPageResponseSuccess =
  ApiAbcPostNetworkMapGetDangerHighLevelPageResponse[200]
/**
 * @description
 *   管网概览-隐患-重大隐患分页
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDangerHighLevelPage = (
  option: ApiAbcPostNetworkMapGetDangerHighLevelPageOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDangerHighLevelPageResponseSuccess>(
    '/network-map/getDangerHighLevelPage',
    { method: 'post', ...option },
    config,
  )

type ApiAbcPostNetworkMapGetDangerStatisticOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDangerStatistic */
interface ApiAbcPostNetworkMapGetDangerStatisticResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultNetworkDangerStatisticVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDangerStatisticResponseSuccess =
  ApiAbcPostNetworkMapGetDangerStatisticResponse[200]
/**
 * @description
 *   管网概览-隐患-隐患统计（本年）
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDangerStatistic = (
  option?: ApiAbcPostNetworkMapGetDangerStatisticOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDangerStatisticResponseSuccess>(
    '/network-map/getDangerStatistic',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetDangerTimeoutLevelListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDangerTimeoutLevelList */
interface ApiAbcPostNetworkMapGetDangerTimeoutLevelListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultTimeoutLevelStatisticVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDangerTimeoutLevelListResponseSuccess =
  ApiAbcPostNetworkMapGetDangerTimeoutLevelListResponse[200]
/**
 * @description
 *   管网概览-隐患-超期未整改隐患分级情况（本年）
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDangerTimeoutLevelList = (
  option?: ApiAbcPostNetworkMapGetDangerTimeoutLevelListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDangerTimeoutLevelListResponseSuccess>(
    '/network-map/getDangerTimeoutLevelList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetDangerTimeoutListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDangerTimeoutList */
interface ApiAbcPostNetworkMapGetDangerTimeoutListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListNetworkDangerListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDangerTimeoutListResponseSuccess =
  ApiAbcPostNetworkMapGetDangerTimeoutListResponse[200]
/**
 * @description
 *   管网概览-隐患-超期未完成隐患分页列表
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDangerTimeoutList = (
  option?: ApiAbcPostNetworkMapGetDangerTimeoutListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDangerTimeoutListResponseSuccess>(
    '/network-map/getDangerTimeoutList',
    { method: 'post', query: option },
    config,
  )

/** @description request parameter type for apiAbcPostNetworkMapGetDangerTimeoutPage */
interface ApiAbcPostNetworkMapGetDangerTimeoutPageOption {
  /**
   * @description
   *   orgCode
   */
  query: {
    /**
        @description
          orgCode */
    orgCode: string
  }
}

/** @description request parameter type for apiAbcPostNetworkMapGetDangerTimeoutPage */
interface ApiAbcPostNetworkMapGetDangerTimeoutPageOption {
  /**
   * @description
   *   pageQueryDTO
   */
  body: PageQueryDTO
}

/** @description response type for apiAbcPostNetworkMapGetDangerTimeoutPage */
interface ApiAbcPostNetworkMapGetDangerTimeoutPageResponse {
  /**
   * @description
   *   OK
   */
  200: PagedRdfaResultNetworkDangerListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDangerTimeoutPageResponseSuccess =
  ApiAbcPostNetworkMapGetDangerTimeoutPageResponse[200]
/**
 * @description
 *   管网概览-隐患-超期未完成隐患分页
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDangerTimeoutPage = (
  option: ApiAbcPostNetworkMapGetDangerTimeoutPageOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDangerTimeoutPageResponseSuccess>(
    '/network-map/getDangerTimeoutPage',
    { method: 'post', ...option },
    config,
  )

type ApiAbcPostNetworkMapGetDangerTypeStatisticOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDangerTypeStatistic */
interface ApiAbcPostNetworkMapGetDangerTypeStatisticResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultNetworkDangerTypeStatisticVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDangerTypeStatisticResponseSuccess =
  ApiAbcPostNetworkMapGetDangerTypeStatisticResponse[200]
/**
 * @description
 *   管网概览-隐患-超期未整改隐患类型统计情况（本年）
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDangerTypeStatistic = (
  option?: ApiAbcPostNetworkMapGetDangerTypeStatisticOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDangerTypeStatisticResponseSuccess>(
    '/network-map/getDangerTypeStatistic',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetDangerWorkListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDangerWorkList */
interface ApiAbcPostNetworkMapGetDangerWorkListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultDangerWorkDetailsVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDangerWorkListResponseSuccess =
  ApiAbcPostNetworkMapGetDangerWorkListResponse[200]
/**
 * @description
 *   管网概览-危险作业
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDangerWorkList = (
  option?: ApiAbcPostNetworkMapGetDangerWorkListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDangerWorkListResponseSuccess>(
    '/network-map/getDangerWorkList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetDeviceAlarmListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDeviceAlarmList */
interface ApiAbcPostNetworkMapGetDeviceAlarmListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListDeviceAlarmListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDeviceAlarmListResponseSuccess =
  ApiAbcPostNetworkMapGetDeviceAlarmListResponse[200]
/**
 * @description
 *   管网概览-物联设备-告警列表
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDeviceAlarmList = (
  option?: ApiAbcPostNetworkMapGetDeviceAlarmListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDeviceAlarmListResponseSuccess>(
    '/network-map/getDeviceAlarmList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetDeviceInfoeStatisticOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDeviceInfoeStatistic */
interface ApiAbcPostNetworkMapGetDeviceInfoeStatisticResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultNetworkDeviceInfoWithStatusVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDeviceInfoeStatisticResponseSuccess =
  ApiAbcPostNetworkMapGetDeviceInfoeStatisticResponse[200]
/**
 * @description
 *   管网概览-物联设备-统计情况
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDeviceInfoeStatistic = (
  option?: ApiAbcPostNetworkMapGetDeviceInfoeStatisticOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDeviceInfoeStatisticResponseSuccess>(
    '/network-map/getDeviceInfoeStatistic',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetDeviceOffLineListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDeviceOffLineList */
interface ApiAbcPostNetworkMapGetDeviceOffLineListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListNetworkDeviceListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDeviceOffLineListResponseSuccess =
  ApiAbcPostNetworkMapGetDeviceOffLineListResponse[200]
/**
 * @description
 *   管网概览-物联设备-离线设备列表
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDeviceOffLineList = (
  option?: ApiAbcPostNetworkMapGetDeviceOffLineListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDeviceOffLineListResponseSuccess>(
    '/network-map/getDeviceOffLineList',
    { method: 'post', query: option },
    config,
  )

/** @description request parameter type for apiAbcPostNetworkMapGetDeviceOffLinePage */
interface ApiAbcPostNetworkMapGetDeviceOffLinePageOption {
  /**
   * @description
   *   orgCode
   */
  query: {
    /**
        @description
          orgCode */
    orgCode: string
  }
}

/** @description request parameter type for apiAbcPostNetworkMapGetDeviceOffLinePage */
interface ApiAbcPostNetworkMapGetDeviceOffLinePageOption {
  /**
   * @description
   *   pageQueryDTO
   */
  body: PageQueryDTO
}

/** @description response type for apiAbcPostNetworkMapGetDeviceOffLinePage */
interface ApiAbcPostNetworkMapGetDeviceOffLinePageResponse {
  /**
   * @description
   *   OK
   */
  200: PagedRdfaResultNetworkDeviceListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDeviceOffLinePageResponseSuccess =
  ApiAbcPostNetworkMapGetDeviceOffLinePageResponse[200]
/**
 * @description
 *   管网概览-物联设备-离线设备分页
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDeviceOffLinePage = (
  option: ApiAbcPostNetworkMapGetDeviceOffLinePageOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDeviceOffLinePageResponseSuccess>(
    '/network-map/getDeviceOffLinePage',
    { method: 'post', ...option },
    config,
  )

type ApiAbcPostNetworkMapGetDevicePredictionTimeoutListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetDevicePredictionTimeoutList */
interface ApiAbcPostNetworkMapGetDevicePredictionTimeoutListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListPressureDevicePredictionListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDevicePredictionTimeoutListResponseSuccess =
  ApiAbcPostNetworkMapGetDevicePredictionTimeoutListResponse[200]
/**
 * @description
 *   管网概览-设备维护-调压器评估差超7天未处置
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDevicePredictionTimeoutList = (
  option?: ApiAbcPostNetworkMapGetDevicePredictionTimeoutListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDevicePredictionTimeoutListResponseSuccess>(
    '/network-map/getDevicePredictionTimeoutList',
    { method: 'post', query: option },
    config,
  )

/** @description request parameter type for apiAbcPostNetworkMapGetDevicePredictionTimeoutPage */
interface ApiAbcPostNetworkMapGetDevicePredictionTimeoutPageOption {
  /**
   * @description
   *   orgCode
   */
  query: {
    /**
        @description
          orgCode */
    orgCode: string
  }
}

/** @description request parameter type for apiAbcPostNetworkMapGetDevicePredictionTimeoutPage */
interface ApiAbcPostNetworkMapGetDevicePredictionTimeoutPageOption {
  /**
   * @description
   *   pageQueryDTO
   */
  body: PageQueryDTO
}

/** @description response type for apiAbcPostNetworkMapGetDevicePredictionTimeoutPage */
interface ApiAbcPostNetworkMapGetDevicePredictionTimeoutPageResponse {
  /**
   * @description
   *   OK
   */
  200: PagedRdfaResultPressureDevicePredictionListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDevicePredictionTimeoutPageResponseSuccess =
  ApiAbcPostNetworkMapGetDevicePredictionTimeoutPageResponse[200]
/**
 * @description
 *   管网概览-设备维护-调压器评估差超7天未处置(分页)
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDevicePredictionTimeoutPage = (
  option: ApiAbcPostNetworkMapGetDevicePredictionTimeoutPageOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDevicePredictionTimeoutPageResponseSuccess>(
    '/network-map/getDevicePredictionTimeoutPage',
    { method: 'post', ...option },
    config,
  )

type ApiAbcPostNetworkMapGetDisposalProcessListOption = {
  /**
    @description
      id:告警/示险id */
  id: string
  /**
    @description
      orgCode */
  orgCode: string
  /**
    @description
      类型1告警,2示险 */
  type: string
}

/** @description response type for apiAbcPostNetworkMapGetDisposalProcessList */
interface ApiAbcPostNetworkMapGetDisposalProcessListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListDisposalProcessListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetDisposalProcessListResponseSuccess =
  ApiAbcPostNetworkMapGetDisposalProcessListResponse[200]
/**
 * @description
 *   管网概览-处理流程
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetDisposalProcessList = (
  option?: ApiAbcPostNetworkMapGetDisposalProcessListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetDisposalProcessListResponseSuccess>(
    '/network-map/getDisposalProcessList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetEmergencyRescueListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetEmergencyRescueList */
interface ApiAbcPostNetworkMapGetEmergencyRescueListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListEmergencyRescueListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetEmergencyRescueListResponseSuccess =
  ApiAbcPostNetworkMapGetEmergencyRescueListResponse[200]
/**
 * @description
 *   管网概览-应急抢险
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetEmergencyRescueList = (
  option?: ApiAbcPostNetworkMapGetEmergencyRescueListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetEmergencyRescueListResponseSuccess>(
    '/network-map/getEmergencyRescueList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetEmergencyRescueProgressListOption = {
  /**
    @description
      id */
  id: string
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetEmergencyRescueProgressList */
interface ApiAbcPostNetworkMapGetEmergencyRescueProgressListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListEmergencyRescueProgressListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetEmergencyRescueProgressListResponseSuccess =
  ApiAbcPostNetworkMapGetEmergencyRescueProgressListResponse[200]
/**
 * @description
 *   管网概览-应急抢险流程
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetEmergencyRescueProgressList = (
  option?: ApiAbcPostNetworkMapGetEmergencyRescueProgressListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetEmergencyRescueProgressListResponseSuccess>(
    '/network-map/getEmergencyRescueProgressList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetLeakDetectionListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetLeakDetectionList */
interface ApiAbcPostNetworkMapGetLeakDetectionListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListLeakDetectionListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetLeakDetectionListResponseSuccess =
  ApiAbcPostNetworkMapGetLeakDetectionListResponse[200]
/**
 * @description
 *   管网概览-泄露检测-巡检卫士监测超标告警
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetLeakDetectionList = (
  option?: ApiAbcPostNetworkMapGetLeakDetectionListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetLeakDetectionListResponseSuccess>(
    '/network-map/getLeakDetectionList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetLeakDetectionPlanOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetLeakDetectionPlan */
interface ApiAbcPostNetworkMapGetLeakDetectionPlanResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultLeakDetectionPlanVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetLeakDetectionPlanResponseSuccess =
  ApiAbcPostNetworkMapGetLeakDetectionPlanResponse[200]
/**
 * @description
 *   管网概览-泄漏检测
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetLeakDetectionPlan = (
  option?: ApiAbcPostNetworkMapGetLeakDetectionPlanOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetLeakDetectionPlanResponseSuccess>(
    '/network-map/getLeakDetectionPlan',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetNetworkBaseInfoOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetNetworkBaseInfo */
interface ApiAbcPostNetworkMapGetNetworkBaseInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultNetworkBaseInfoVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetNetworkBaseInfoResponseSuccess =
  ApiAbcPostNetworkMapGetNetworkBaseInfoResponse[200]
/**
 * @description
 *   管网概览-基本信息（全量）
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetNetworkBaseInfo = (
  option?: ApiAbcPostNetworkMapGetNetworkBaseInfoOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetNetworkBaseInfoResponseSuccess>(
    '/network-map/getNetworkBaseInfo',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetNetworkInspectionOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetNetworkInspection */
interface ApiAbcPostNetworkMapGetNetworkInspectionResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultNetworkInspectionVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetNetworkInspectionResponseSuccess =
  ApiAbcPostNetworkMapGetNetworkInspectionResponse[200]
/**
 * @description
 *   管网概览-管网巡视
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetNetworkInspection = (
  option?: ApiAbcPostNetworkMapGetNetworkInspectionOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetNetworkInspectionResponseSuccess>(
    '/network-map/getNetworkInspection',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetPressureDevicePlanOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetPressureDevicePlan */
interface ApiAbcPostNetworkMapGetPressureDevicePlanResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultPressureDevicePlanVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetPressureDevicePlanResponseSuccess =
  ApiAbcPostNetworkMapGetPressureDevicePlanResponse[200]
/**
 * @description
 *   管网概览-设备维护-调压设备计划性维保
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetPressureDevicePlan = (
  option?: ApiAbcPostNetworkMapGetPressureDevicePlanOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetPressureDevicePlanResponseSuccess>(
    '/network-map/getPressureDevicePlan',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetPressureDevicePredictionOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetPressureDevicePrediction */
interface ApiAbcPostNetworkMapGetPressureDevicePredictionResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultPressureDevicePredictionVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetPressureDevicePredictionResponseSuccess =
  ApiAbcPostNetworkMapGetPressureDevicePredictionResponse[200]
/**
 * @description
 *   管网概览-设备维护-调压设备预测性维保
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetPressureDevicePrediction = (
  option?: ApiAbcPostNetworkMapGetPressureDevicePredictionOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetPressureDevicePredictionResponseSuccess>(
    '/network-map/getPressureDevicePrediction',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetRiskDynamicsOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetRiskDynamics */
interface ApiAbcPostNetworkMapGetRiskDynamicsResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultRiskDynamicsVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetRiskDynamicsResponseSuccess =
  ApiAbcPostNetworkMapGetRiskDynamicsResponse[200]
/**
 * @description
 *   风险动态
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetRiskDynamics = (
  option?: ApiAbcPostNetworkMapGetRiskDynamicsOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetRiskDynamicsResponseSuccess>(
    '/network-map/getRiskDynamics',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetThirdPartConstructionOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetThirdPartConstruction */
interface ApiAbcPostNetworkMapGetThirdPartConstructionResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultThirdPartConstructionVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetThirdPartConstructionResponseSuccess =
  ApiAbcPostNetworkMapGetThirdPartConstructionResponse[200]
/**
 * @description
 *   管网概览-第三方施工
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetThirdPartConstruction = (
  option?: ApiAbcPostNetworkMapGetThirdPartConstructionOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetThirdPartConstructionResponseSuccess>(
    '/network-map/getThirdPartConstruction',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetThirdPartConstructionAlarmListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetThirdPartConstructionAlarmList */
interface ApiAbcPostNetworkMapGetThirdPartConstructionAlarmListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListThirdPartConstructionAlarmListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetThirdPartConstructionAlarmListResponseSuccess =
  ApiAbcPostNetworkMapGetThirdPartConstructionAlarmListResponse[200]
/**
 * @description
 *   管网概览-第三方施工-告警列表
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetThirdPartConstructionAlarmList = (
  option?: ApiAbcPostNetworkMapGetThirdPartConstructionAlarmListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetThirdPartConstructionAlarmListResponseSuccess>(
    '/network-map/getThirdPartConstructionAlarmList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetThirdPartConstructionListOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetThirdPartConstructionList */
interface ApiAbcPostNetworkMapGetThirdPartConstructionListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListThirdPartConstructionListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetThirdPartConstructionListResponseSuccess =
  ApiAbcPostNetworkMapGetThirdPartConstructionListResponse[200]
/**
 * @description
 *   管网概览-第三方施工-三方施工明未监管细
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetThirdPartConstructionList = (
  option?: ApiAbcPostNetworkMapGetThirdPartConstructionListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetThirdPartConstructionListResponseSuccess>(
    '/network-map/getThirdPartConstructionList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetThirdPartConstructionSupervisionOption = {
  /**
    @description
      id */
  id: string
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetThirdPartConstructionSupervision */
interface ApiAbcPostNetworkMapGetThirdPartConstructionSupervisionResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultThirdPartConstructionSupervisionVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetThirdPartConstructionSupervisionResponseSuccess =
  ApiAbcPostNetworkMapGetThirdPartConstructionSupervisionResponse[200]
/**
 * @description
 *   管网概览--第三方施工-第三方施工监察信息
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetThirdPartConstructionSupervision = (
  option?: ApiAbcPostNetworkMapGetThirdPartConstructionSupervisionOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetThirdPartConstructionSupervisionResponseSuccess>(
    '/network-map/getThirdPartConstructionSupervision',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostNetworkMapGetValveDevicePlanOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostNetworkMapGetValveDevicePlan */
interface ApiAbcPostNetworkMapGetValveDevicePlanResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultValveDevicePlanVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostNetworkMapGetValveDevicePlanResponseSuccess =
  ApiAbcPostNetworkMapGetValveDevicePlanResponse[200]
/**
 * @description
 *   管网概览-设备维护-阀门计划性维保
 * @tags 风险地图-管网概览-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostNetworkMapGetValveDevicePlan = (
  option?: ApiAbcPostNetworkMapGetValveDevicePlanOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostNetworkMapGetValveDevicePlanResponseSuccess>(
    '/network-map/getValveDevicePlan',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostOrgSceneGetListOption = {
  /**
    @description
      orgCode */
  orgCode: string
  /**
    @description
      sceneCode */
  sceneCode: string
}

/** @description response type for apiAbcPostOrgSceneGetList */
interface ApiAbcPostOrgSceneGetListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListOrgSceneInfoVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostOrgSceneGetListResponseSuccess =
  ApiAbcPostOrgSceneGetListResponse[200]
/**
 * @description
 *   根据企业和场景获取列表
 * @tags 企业场景接口-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostOrgSceneGetList = (
  option?: ApiAbcPostOrgSceneGetListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostOrgSceneGetListResponseSuccess>(
    '/org-scene/getList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyHomeIndoorDetailOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyHomeIndoorDetail */
interface ApiAbcPostSafetyHomeIndoorDetailResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultHashMapStringHighRiskItemVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyHomeIndoorDetailResponseSuccess =
  ApiAbcPostSafetyHomeIndoorDetailResponse[200]
/**
 * @description
 *   户内-安全概览
 * @tags 安全全览-一号位-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyHomeIndoorDetail = (
  option?: ApiAbcPostSafetyHomeIndoorDetailOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyHomeIndoorDetailResponseSuccess>(
    '/safety/home/indoor/detail',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyHomeIndoorInfoOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyHomeIndoorInfo */
interface ApiAbcPostSafetyHomeIndoorInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultHashMapStringHighRiskItemVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyHomeIndoorInfoResponseSuccess =
  ApiAbcPostSafetyHomeIndoorInfoResponse[200]
/**
 * @description
 *   户内
 * @tags 安全全览-一号位-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyHomeIndoorInfo = (
  option?: ApiAbcPostSafetyHomeIndoorInfoOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyHomeIndoorInfoResponseSuccess>(
    '/safety/home/indoor/info',
    { method: 'post', query: option },
    config,
  )

type ApiAbcGetSafetyHomeTaskOption = {
  /**
    @description
      deptValue */
  deptValue: string
}

/** @description response type for apiAbcGetSafetyHomeTask */
interface ApiAbcGetSafetyHomeTaskResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultInt
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcGetSafetyHomeTaskResponseSuccess =
  ApiAbcGetSafetyHomeTaskResponse[200]
/**
 * @description
 *   测试任务
 * @tags 安全全览-一号位-2688
 * @produces *
 */
export const apiAbcGetSafetyHomeTask = (
  option?: ApiAbcGetSafetyHomeTaskOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcGetSafetyHomeTaskResponseSuccess>(
    '/safety/home/task',
    { method: 'get', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerConsumeOption = {
  /**
    @description
      companyCode */
  companyCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerConsume */
interface ApiAbcPostSafetyOverviewDangerConsumeResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultString
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerConsumeResponseSuccess =
  ApiAbcPostSafetyOverviewDangerConsumeResponse[200]
/**
 * @description
 *   户内生成隐患未整改时触发接口
 *   户内生成隐患未整改时触发接口
 * @tags 安全全览-户内隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerConsume = (
  option?: ApiAbcPostSafetyOverviewDangerConsumeOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewDangerConsumeResponseSuccess>(
    '/safety/overview/danger/consume',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerCountOption = {
  /**
    @description
      组织编码 */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerCount */
interface ApiAbcPostSafetyOverviewDangerCountResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultIndoorDangerCountDataVo
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerCountResponseSuccess =
  ApiAbcPostSafetyOverviewDangerCountResponse[200]
/**
 * @description
 *   统计隐患整改个数
 *   统计隐患未整改个数
 * @tags 安全全览-户内隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerCount = (
  option?: ApiAbcPostSafetyOverviewDangerCountOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewDangerCountResponseSuccess>(
    '/safety/overview/danger/count',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerInfoOption = {
  /**
    @description
      主键ID */
  eventId: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerInfo */
interface ApiAbcPostSafetyOverviewDangerInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultIndoorRescueDetailsListVo
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerInfoResponseSuccess =
  ApiAbcPostSafetyOverviewDangerInfoResponse[200]
/**
 * @description
 *   查询单条隐患未整改详情数据
 *   查询单条隐患未整改详情数据
 * @tags 安全全览-户内隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerInfo = (
  option?: ApiAbcPostSafetyOverviewDangerInfoOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewDangerInfoResponseSuccess>(
    '/safety/overview/danger/info',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerListOption = {
  /**
    @description
      组织编码 */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerList */
interface ApiAbcPostSafetyOverviewDangerListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultListObjectListIndoorRescueDetailsListVo
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerListResponseSuccess =
  ApiAbcPostSafetyOverviewDangerListResponse[200]
/**
 * @description
 *   查询隐患未整改列表数据
 *   查询隐患未整改列表数据
 * @tags 安全全览-户内隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerList = (
  option?: ApiAbcPostSafetyOverviewDangerListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewDangerListResponseSuccess>(
    '/safety/overview/danger/list',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveInfoOption = {
  /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
  kpiType: string
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerImproveGetDangerImproveInfo */
interface ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultDangerImproveDetailVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveInfoResponseSuccess =
  ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveInfoResponse[200]
/**
 * @description
 *   隐患整改-隐患整改率详情
 * @tags 安全全览-隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerImproveGetDangerImproveInfo = (
  option?: ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveInfoOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveInfoResponseSuccess>(
    '/safety/overview/dangerImprove/getDangerImproveInfo',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveLevelOption = {
  /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
  kpiType: string
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerImproveGetDangerImproveLevel */
interface ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveLevelResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultHashMapStringDangerLevelDetailVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveLevelResponseSuccess =
  ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveLevelResponse[200]
/**
 * @description
 *   隐患整改-隐患整改率详情-隐患级别
 * @tags 安全全览-隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerImproveGetDangerImproveLevel = (
  option?: ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveLevelOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveLevelResponseSuccess>(
    '/safety/overview/dangerImprove/getDangerImproveLevel',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveListOption = {
  /**
    @description
      隐患整改率排序规则 1： 升序0：降序
    @x-example "0" */
  dangerImproveRateSort: string
  /**
    @description
      隐患数量排序规则：1： 升序0：降序
    @x-example "0" */
  dangerNumberSort: string
  /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
  kpiType: string
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerImproveGetDangerImproveList */
interface ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListDangerImproveDetailListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveListResponseSuccess =
  ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveListResponse[200]
/**
 * @description
 *   隐患整改-隐患整改率详情-隐患列表
 * @tags 安全全览-隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerImproveGetDangerImproveList = (
  option?: ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveListResponseSuccess>(
    '/safety/overview/dangerImprove/getDangerImproveList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveTypeOption = {
  /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
  kpiType: string
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerImproveGetDangerImproveType */
interface ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveTypeResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultHashMapStringDangerTypeDetailVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveTypeResponseSuccess =
  ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveTypeResponse[200]
/**
 * @description
 *   隐患整改-隐患整改率详情-隐患类型
 * @tags 安全全览-隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerImproveGetDangerImproveType = (
  option?: ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveTypeOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewDangerImproveGetDangerImproveTypeResponseSuccess>(
    '/safety/overview/dangerImprove/getDangerImproveType',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerImproveGetStatisticalAnalysisOption = {
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerImproveGetStatisticalAnalysis */
interface ApiAbcPostSafetyOverviewDangerImproveGetStatisticalAnalysisResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultHashMapStringDangerImproveHomePageVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerImproveGetStatisticalAnalysisResponseSuccess =
  ApiAbcPostSafetyOverviewDangerImproveGetStatisticalAnalysisResponse[200]
/**
 * @description
 *   隐患整改首页-各指标统计值
 * @tags 安全全览-隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerImproveGetStatisticalAnalysis = (
  option?: ApiAbcPostSafetyOverviewDangerImproveGetStatisticalAnalysisOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewDangerImproveGetStatisticalAnalysisResponseSuccess>(
    '/safety/overview/dangerImprove/getStatisticalAnalysis',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerAnalysisOption = {
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerAnalysis */
interface ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerAnalysisResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultDangerImproveHomePageVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerAnalysisResponseSuccess =
  ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerAnalysisResponse[200]
/**
 * @description
 *   隐患整改首页-三类隐患未整改统计值
 * @tags 安全全览-隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerAnalysis = (
  option?: ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerAnalysisOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerAnalysisResponseSuccess>(
    '/safety/overview/dangerImprove/getThreeTypeDangerAnalysis',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerDetailListOption = {
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerDetailList */
interface ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerDetailListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListDangerIdentificationListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerDetailListResponseSuccess =
  ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerDetailListResponse[200]
/**
 * @description
 *   隐患整改-三类隐患详情-风险辨识
 * @tags 安全全览-隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerDetailList =
  (
    option?: ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerDetailListOption,
    config?: AxiosRequestConfig,
  ) =>
    requester<ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerDetailListResponseSuccess>(
      '/safety/overview/dangerImprove/getThreeTypeDangerDetailList',
      { method: 'post', query: option },
      config,
    )

type ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerSituationOption = {
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerSituation */
interface ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerSituationResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListDangerTypeDetailVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerSituationResponseSuccess =
  ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerSituationResponse[200]
/**
 * @description
 *   隐患整改-三类隐患详情-风险态势
 * @tags 安全全览-隐患整改-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerSituation =
  (
    option?: ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerSituationOption,
    config?: AxiosRequestConfig,
  ) =>
    requester<ApiAbcPostSafetyOverviewDangerImproveGetThreeTypeDangerSituationResponseSuccess>(
      '/safety/overview/dangerImprove/getThreeTypeDangerSituation',
      { method: 'post', query: option },
      config,
    )

type ApiAbcPostSafetyOverviewHomesecurityinspectionGetHomePageOption = {
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewHomesecurityinspectionGetHomePage */
interface ApiAbcPostSafetyOverviewHomesecurityinspectionGetHomePageResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultHashMapStringKeyEquipmentHomePageVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewHomesecurityinspectionGetHomePageResponseSuccess =
  ApiAbcPostSafetyOverviewHomesecurityinspectionGetHomePageResponse[200]
/**
 * @description
 *   重点设备首页
 * @tags 安全全览-重点设备-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewHomesecurityinspectionGetHomePage = (
  option?: ApiAbcPostSafetyOverviewHomesecurityinspectionGetHomePageOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewHomesecurityinspectionGetHomePageResponseSuccess>(
    '/safety/overview/homesecurityinspection/getHomePage',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewRescueCountOption = {
  /**
    @description
      组织编码 */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewRescueCount */
interface ApiAbcPostSafetyOverviewRescueCountResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultIndoorRescueCountDataVo
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewRescueCountResponseSuccess =
  ApiAbcPostSafetyOverviewRescueCountResponse[200]
/**
 * @description
 *   统计抢险处置状态个数
 *   统计抢险处置状态个数
 * @tags 安全全览-户内抢险-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewRescueCount = (
  option?: ApiAbcPostSafetyOverviewRescueCountOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewRescueCountResponseSuccess>(
    '/safety/overview/rescue/count',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewRescueDetailsListOption = BaseIndoorQueryDto

/** @description response type for apiAbcPostSafetyOverviewRescueDetailsList */
interface ApiAbcPostSafetyOverviewRescueDetailsListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultListObjectListIndoorRescueDetailsListVo
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewRescueDetailsListResponseSuccess =
  ApiAbcPostSafetyOverviewRescueDetailsListResponse[200]
/**
 * @description
 *   查询抢险状态待处置和处置中的数据
 *   查询抢险状态待处置和处置中的数据
 * @tags 安全全览-户内抢险-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewRescueDetailsList = (
  option?: ApiAbcPostSafetyOverviewRescueDetailsListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewRescueDetailsListResponseSuccess>(
    '/safety/overview/rescue/details/list',
    { method: 'post', body: option },
    config,
  )

type ApiAbcPostSafetyOverviewRescueInfoOption = {
  /**
    @description
      主键ID */
  eventId: string
}

/** @description response type for apiAbcPostSafetyOverviewRescueInfo */
interface ApiAbcPostSafetyOverviewRescueInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultIndoorRescueDetailsListVo
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewRescueInfoResponseSuccess =
  ApiAbcPostSafetyOverviewRescueInfoResponse[200]
/**
 * @description
 *   查询抢险单条详情
 *   查询抢险单条详情
 * @tags 安全全览-户内抢险-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewRescueInfo = (
  option?: ApiAbcPostSafetyOverviewRescueInfoOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewRescueInfoResponseSuccess>(
    '/safety/overview/rescue/info',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewRescueTabulationListOption = {
  /**
    @description
      组织编码 */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewRescueTabulationList */
interface ApiAbcPostSafetyOverviewRescueTabulationListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultListObjectListIndoorRescueTabulationVo
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewRescueTabulationListResponseSuccess =
  ApiAbcPostSafetyOverviewRescueTabulationListResponse[200]
/**
 * @description
 *   查询抢险列表数据
 *   查询抢险列表数据
 * @tags 安全全览-户内抢险-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewRescueTabulationList = (
  option?: ApiAbcPostSafetyOverviewRescueTabulationListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewRescueTabulationListResponseSuccess>(
    '/safety/overview/rescue/tabulation/list',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskIdentificationOption =
  {
    /**
    @description
      orgCode */
    orgCode: string
  }

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskIdentification */
interface ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskIdentificationResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultRiskIdentificationVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskIdentificationResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskIdentificationResponse[200]
/**
 * @description
 *   长期未安检2年以上-风险辨识
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskIdentification =
  (
    option?: ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskIdentificationOption,
    config?: AxiosRequestConfig,
  ) =>
    requester<ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskIdentificationResponseSuccess>(
      '/safety/overview/safetyCheck/getLongTimeNoCheckRiskIdentification',
      { method: 'post', query: option },
      config,
    )

type ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskSituationOption =
  {
    /**
    @description
      orgCode */
    orgCode: string
  }

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskSituation */
interface ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskSituationResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListKpiCompanyVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskSituationResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskSituationResponse[200]
/**
 * @description
 *   长期未安检2年以上-风险态势-长期未安检量
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskSituation =
  (
    option?: ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskSituationOption,
    config?: AxiosRequestConfig,
  ) =>
    requester<ApiAbcPostSafetyOverviewSafetyCheckGetLongTimeNoCheckRiskSituationResponseSuccess>(
      '/safety/overview/safetyCheck/getLongTimeNoCheckRiskSituation',
      { method: 'post', query: option },
      config,
    )

type ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskIdentificationOption =
  {
    /**
    @description
      orgCode */
    orgCode: string
  }

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskIdentification */
interface ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskIdentificationResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultRiskIdentificationVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskIdentificationResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskIdentificationResponse[200]
/**
 * @description
 *   实际入户安检率偏低详情-风险辨识
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskIdentification =
  (
    option?: ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskIdentificationOption,
    config?: AxiosRequestConfig,
  ) =>
    requester<ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskIdentificationResponseSuccess>(
      '/safety/overview/safetyCheck/getLowSecurityRateRiskIdentification',
      { method: 'post', query: option },
      config,
    )

type ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskSituationOption =
  {
    /**
    @description
      orgCode */
    orgCode: string
  }

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskSituation */
interface ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskSituationResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListKpiCompanyVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskSituationResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskSituationResponse[200]
/**
 * @description
 *   实际入户安检率偏低详情-风险态势-入户率
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskSituation =
  (
    option?: ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskSituationOption,
    config?: AxiosRequestConfig,
  ) =>
    requester<ApiAbcPostSafetyOverviewSafetyCheckGetLowSecurityRateRiskSituationResponseSuccess>(
      '/safety/overview/safetyCheck/getLowSecurityRateRiskSituation',
      { method: 'post', query: option },
      config,
    )

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaseBarChartOption =
  {
    /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
    kpiType: string
    /**
    @description
      组织编号
    @x-example "10000800" */
    orgCode: string
  }

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaseBarChart */
interface ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaseBarChartResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultSafetyAssessmentBaselineVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaseBarChartResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaseBarChartResponse[200]
/**
 * @description
 *   入户安检-安全考核基准详情-柱状图
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaseBarChart =
  (
    option?: ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaseBarChartOption,
    config?: AxiosRequestConfig,
  ) =>
    requester<ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaseBarChartResponseSuccess>(
      '/safety/overview/safetyCheck/getSafetyAssessmentBaseBarChart',
      { method: 'post', query: option },
      config,
    )

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineInfoOption =
  {
    /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
    kpiType: string
    /**
    @description
      组织编号
    @x-example "10000800" */
    orgCode: string
  }

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineInfo */
interface ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultSafetyAssessmentBaselineVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineInfoResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineInfoResponse[200]
/**
 * @description
 *   入户安检-安全考核基准线详情
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineInfo =
  (
    option?: ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineInfoOption,
    config?: AxiosRequestConfig,
  ) =>
    requester<ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineInfoResponseSuccess>(
      '/safety/overview/safetyCheck/getSafetyAssessmentBaselineInfo',
      { method: 'post', query: option },
      config,
    )

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineListOption =
  {
    /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
    kpiType: string
    /**
    @description
      组织编号
    @x-example "10000800" */
    orgCode: string
  }

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineList */
interface ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListSafetyCompanyBaselineListVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineListResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineListResponse[200]
/**
 * @description
 *   入户安检-安全考核基准线详情-列表
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineList =
  (
    option?: ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineListOption,
    config?: AxiosRequestConfig,
  ) =>
    requester<ApiAbcPostSafetyOverviewSafetyCheckGetSafetyAssessmentBaselineListResponseSuccess>(
      '/safety/overview/safetyCheck/getSafetyAssessmentBaselineList',
      { method: 'post', query: option },
      config,
    )

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckHomeInfoOption = {
  /**
    @description
      orgCode */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckHomeInfo */
interface ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckHomeInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultHashMapStringBaseVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckHomeInfoResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckHomeInfoResponse[200]
/**
 * @description
 *   入户安检--安全风险地图安全概览首页
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckHomeInfo = (
  option?: ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckHomeInfoOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckHomeInfoResponseSuccess>(
    '/safety/overview/safetyCheck/getSafetyCheckHomeInfo',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckInfoOption = {
  /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
  kpiType: string
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckInfo */
interface ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultSafetyCheckVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckInfoResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckInfoResponse[200]
/**
 * @description
 *   入户安检-入户安检详情-入户率
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckInfo = (
  option?: ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckInfoOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckInfoResponseSuccess>(
    '/safety/overview/safetyCheck/getSafetyCheckInfo',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckListOption = {
  /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
  kpiType: string
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
  /**
    @description
      1： 升序0：降序
    @x-example "0" */
  safetyCheckRateSort: string
  /**
    @description
      1： 升序0：降序
    @x-example "0" */
  safetyCheckSort: string
}

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckList */
interface ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListSafetyCheckCompanyVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckListResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckListResponse[200]
/**
 * @description
 *   入户安检-入户安检详情-入户安检列表
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckList = (
  option?: ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckListResponseSuccess>(
    '/safety/overview/safetyCheck/getSafetyCheckList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckTypeInfoOption = {
  /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
  kpiType: string
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckTypeInfo */
interface ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckTypeInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultHashMapStringSafetyCheckTypeVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckTypeInfoResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckTypeInfoResponse[200]
/**
 * @description
 *   入户安检-入户安检详情-综合安检情况-饼状图
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckTypeInfo = (
  option?: ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckTypeInfoOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewSafetyCheckGetSafetyCheckTypeInfoResponseSuccess>(
    '/safety/overview/safetyCheck/getSafetyCheckTypeInfo',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanInfoOption = {
  /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
  kpiType: string
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanInfo */
interface ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultTechnicalMeansVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanInfoResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanInfoResponse[200]
/**
 * @description
 *   入户安检-技术完成手段率详情
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanInfo = (
  option?: ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanInfoOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanInfoResponseSuccess>(
    '/safety/overview/safetyCheck/getTechnicalMeanInfo',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanListOption = {
  /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
  kpiType: string
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
  /**
    @description
      1： 升序0：降序
    @x-example "0" */
  safetyCheckRateSort: string
  /**
    @description
      1： 升序0：降序
    @x-example "0" */
  safetyCheckSort: string
}

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanList */
interface ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanListResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultArrayListTechnicalMeanCompanyVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanListResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanListResponse[200]
/**
 * @description
 *   入户安检-技术完成手段详情-技术完成手段列表
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanList = (
  option?: ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanListOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanListResponseSuccess>(
    '/safety/overview/safetyCheck/getTechnicalMeanList',
    { method: 'post', query: option },
    config,
  )

type ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanTypeInfoOption = {
  /**
    @description
      指标类型(0:全部 ;1：农村 2:城市)
    @x-example "0" */
  kpiType: string
  /**
    @description
      组织编号
    @x-example "10000800" */
  orgCode: string
}

/** @description response type for apiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanTypeInfo */
interface ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanTypeInfoResponse {
  /**
   * @description
   *   OK
   */
  200: RdfaResultHashMapStringTechnicalMeanTypeVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

type ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanTypeInfoResponseSuccess =
  ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanTypeInfoResponse[200]
/**
 * @description
 *   入户安检-分类统计-技术完成手段完成情况-饼状图
 * @tags 安全全览-入户安检-2688
 * @produces *
 * @consumes application/json
 */
export const apiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanTypeInfo = (
  option?: ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanTypeInfoOption,
  config?: AxiosRequestConfig,
) =>
  requester<ApiAbcPostSafetyOverviewSafetyCheckGetTechnicalMeanTypeInfoResponseSuccess>(
    '/safety/overview/safetyCheck/getTechnicalMeanTypeInfo',
    { method: 'post', query: option },
    config,
  )
