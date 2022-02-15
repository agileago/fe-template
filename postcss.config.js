module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    {
      postcssPlugin: 'internal:charset-removal',
      AtRule: {
        charset: atRule => {
          if (atRule.name === 'charset') {
            atRule.remove()
          }
        },
      },
    },
  ],
}
