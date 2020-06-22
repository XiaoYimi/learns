import Vue from 'vue'
import VueRouter from 'vue-router'

import page_home from '../examples/index.vue'
import three_demo from '../examples/threejs/demo.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'root', path: '/', component: page_home },

    { name: 'home', path: '/index', component: page_home },
    
    { name: 'three', path: '/three', component: three_demo },
  ]
})

export default router
