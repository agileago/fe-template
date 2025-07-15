import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/module/demo/icon/icon.view'),
  },
  {
    path: '/figma',
    component: () => import('@/module/demo/figma/figma.view'),
  },
]
