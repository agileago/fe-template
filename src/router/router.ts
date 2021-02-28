import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../auth/login/login.vue'),
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
