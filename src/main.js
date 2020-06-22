import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import './package/assets/index.scss'
import P from './package/index'
Vue.use(P.VuePlugins)

new Vue ({
  render: h => h(App),
  router
}).$mount('#app')