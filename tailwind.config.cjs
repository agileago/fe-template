const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  corePlugins: {
    // 解决button背景色为透明色的问题
    preflight: false
  },
  plugins: [
    // https://github.com/egoist/tailwindcss-icons
    // 选择图标  https://icones.js.org/
    iconsPlugin({
      collections: getIconCollections(["ant-design"]),
    }),
  ],
  presets: [require('tailwindcss-rem2px-preset')],
}
