import { RouteRecordRaw } from '@vue3-oop/vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layout/default.layout'),
    children: [
      {
        path: '/',
        component: () => import('@/module/home/home.view'),
      },
      {
        path: '/count',
        component: () => import('@/module/count/count.view'),
      },
    ],
  },
]
