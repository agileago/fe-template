import type { RouteModule } from '@/router/type'

const routes: RouteModule = [
  {
    path: '',
    component: () => import('./icon/icon.view'),
  },
]

export default routes
