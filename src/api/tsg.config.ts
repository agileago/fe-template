import type { Project } from '@vue3-oop/ts-gear'

// 调用的所有api
const projects: Partial<Project>[] = [
  {
    name: 'pet',
    source: 'http://petstore.swagger.io/v2/swagger.json',
  },
]

export default projects
