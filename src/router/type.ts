import type { RouteRecordRaw } from 'vue-router'

// 路由模块
export interface RouteModule extends Array<RouteRecordRaw> {
  /* 父路由名称 */
  parent?: string
}
