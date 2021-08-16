import { createRouter, createWebHistory, Router, RouteRecordRaw, RouterHistory } from 'vue-router'

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

let router: Router
let history: RouterHistory

export function create() {
  ;(history = createWebHistory('/c1/')),
    (router = createRouter({
      routes,
      history,
    }))
  return router
}
export function destroy() {
  history.destroy()
}
