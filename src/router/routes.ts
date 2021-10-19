import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layout/default.layout'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('../view/dashboard'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../view/login/index'),
  },
]
