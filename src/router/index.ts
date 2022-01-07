import { Injectable } from 'injection-js'
import { RouterService } from '@/router/router.service'
import { routes } from '@/router/routes'

@Injectable()
export default class RouterStart {
  constructor(private routerService: RouterService) {
    if (routerService.router) {
      window.location.reload()
      return
    }
    routerService.initRoutes(routes)
  }
}
