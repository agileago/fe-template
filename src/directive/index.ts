import type { App, Directive } from 'vue'

const dirs = import.meta.glob('./**/*.directive.ts', {
  eager: true,
  import: 'default',
})

export function setupDirective(app: App) {
  Object.keys(dirs).forEach(k => {
    const module = dirs[k as string]
    const dir = module as Directive & { name: string }
    app.directive(dir.name, dir)
  })
}
