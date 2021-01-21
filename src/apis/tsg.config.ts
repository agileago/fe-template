/**
 * each project will use the "requester" function when request remote api
 * so this file would be included into your source file when compile
 * */
import type { Project } from 'ts-gear'
import { prettier } from '../../package.json'

const projects: Project[] = [
  {
    name: 'pet',
    dest: '../apis',
    source: 'http://localhost:3000/api-json',
    keepGeneric: true,
    importRequesterStatement: `import { http } from "../http"`,
    prettierConfig: prettier,
  },
]

export default projects
