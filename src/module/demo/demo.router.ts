import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/demo',
    component: () => import('./demo.module'),
    redirect: '/demo/home',
    children: [
      {
        path: '/demo/home',
        component: () => import('./home/home.view'),
      },
      {
        path: '/demo/count',
        component: () => import('./count/count.view'),
      },
    ],
  },
]

export default routes
