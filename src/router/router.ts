import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layout/layout'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('../page/dashboard'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('../page/login/index'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory('/child/'),
})

export default router
