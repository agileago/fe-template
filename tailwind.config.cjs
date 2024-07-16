/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,vue}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    // 解决button背景色为透明色的问题
    preflight: false,
  },
  plugins: [
  ],
  presets: [require('tailwindcss-rem2px-preset')],
}
