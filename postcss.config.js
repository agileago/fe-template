export default {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {},
  },
  // 开启rem
  // 'postcss-pxtransform': {
  //   platform: 'h5',
  //   designWidth: 375,
  //   deviceRatio: {
  //     375: 2,
  //   },
  // },
}

// 开启rem请将以下js代码拷贝到入口 html
// <script>
//   !(function (n) {
//   function f() {
//     var e = n.document.documentElement,
//       w = e.getBoundingClientRect().width,
//       x = (20 * w) / 375
//     e.style.fontSize = x >= 40 ? '40px' : x <= 20 ? '20px' : x + 'px'
//   }
//   n.addEventListener('resize', f)
//   f()
//   function transform(w) {
//   return w / 20 + 'rem'
// }
//   window.pxTransform = transform
// })(window)
// </script>
