import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layout/default.layout'),
    children: [
      {
        path: '/',
        component: () => import('../view/dashboard'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../view/login/index'),
  },
]
