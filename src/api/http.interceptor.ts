import { Injectable } from 'injection-js'
import { RouterService } from '@/router/router.service'
import { customRequest } from '@/api/http'
import { Hook, VueService } from 'vue3-oop'

customRequest.interceptors.response.use(res => {
  const data = res.data
  if (data?.code !== 1) {
    throw new Error(data?.msg)
  }
  return data?.entity
})

@Injectable()
export class HttpInterceptor extends VueService {
  constructor(private routerService: RouterService) {
    super()
    this.customInterceptor()
  }
  private cleanupFns: (() => void)[] = []

  customInterceptor() {
    const { routerService } = this
    const ereq = customRequest.interceptors.request.use(config => {
      config.data = config.data || {}
      return config
    })
    const eres = customRequest.interceptors.response.use(res => {
      if (res.status === 401) {
        routerService.router.push('/login')
      }
      return res
    })
    this.cleanupFns.push(() => {
      customRequest.interceptors.request.eject(ereq)
      customRequest.interceptors.response.eject(eres)
    })
  }

  @Hook('Unmounted')
  unmount() {
    this.cleanupFns.forEach(k => k())
  }
}
