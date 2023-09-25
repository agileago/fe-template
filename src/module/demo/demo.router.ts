import type { RouteModule } from '@/router/type'

const routes: RouteModule = [
  {
    path: '/demo/icon',
    component: () => import('./icon/icon.view'),
  },
]

routes.parent = 'main'

export default routes
