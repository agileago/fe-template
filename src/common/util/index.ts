import { getCurrentInstance } from 'vue'

export function getCurrentApp() {
  return getCurrentInstance()?.appContext.app
}
