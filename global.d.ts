declare module 'vite-plugin-mockit' {
  interface Ioptions {
    entry: string
    watchFiles: string[]
    watchOptions: any
    ignore: any
    debug: boolean
    disable: boolean
  }
  const mockPlugin: (options?: Ioptions) => any
  export default mockPlugin
}
