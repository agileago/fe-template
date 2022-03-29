import type { App, Directive } from 'vue'

const dirs = import.meta.globEager('./**/*.directive.ts')

export function setupDirective(app: App) {
  Reflect.ownKeys(dirs).forEach(k => {
    const module = dirs[k as string]
    if (!module?.default) return
    const dir = module.default as Directive & { name: string }
    app.directive(dir.name, dir)
  })
}
