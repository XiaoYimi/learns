// 使用空对象
const VuePlugins = {}

VuePlugins.install = (Vue, options) => {
  console.log('start')
  const plugins = require('@/package/components/index').default

  for (const [k, v] of Object.entries(plugins)) {
    console.log(k, v)
    Vue.component('do' + k, v)
  }
}

export default {
  VuePlugins
}