/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  corePlugins: {
    // 如果遇到button背景色为透明色的问题，请把这个关闭，然后使用ui库带的reset.css
    preflight: true
  },
  plugins: [],
  presets: [require('tailwindcss-rem2px-preset')],
}
