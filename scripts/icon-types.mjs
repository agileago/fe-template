import * as fs from 'fs/promises'
import * as path from 'path'

const parent = new URL('../src', import.meta.url)
const src = parent.pathname
const iconsDir = path.resolve(src, 'assets/icons')
const iconTypeTarget = path.resolve(src, 'common/components/svg-icon/icon.interface.ts')

// 递归读取svg icon
let allIcons = []
async function readSvgFiles(dir, prefix = []) {
  const files = await fs.readdir(dir, { withFileTypes: true });
  files.sort((a, b) => {
    if (a.isFile()) return -1
    else return 1
  })
  for (const file of files) {
    if (file.isFile()) {
      allIcons.push(prefix.concat(file.name.split('.')[0]).join('-'))
    } else {
      await readSvgFiles(path.resolve(dir, file.name), prefix.concat(file.name))
    }
  }
}
await readSvgFiles(iconsDir)

// 生成类型
allIcons = allIcons.map(k => `'${k}'`)
allIcons.push('string')
await fs.writeFile(iconTypeTarget, `export type IconTypes = ${allIcons.join(' | ')}\n`)
console.log('成功写入类型内容')



