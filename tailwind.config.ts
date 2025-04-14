import type { Config } from 'tailwindcss'
import rem2px from 'tailwindcss-rem2px-preset'

export default {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    // 解决button背景色为透明色的问题
    preflight: false,
  },
  plugins: [],
  presets: [rem2px],
} satisfies Partial<Config>
