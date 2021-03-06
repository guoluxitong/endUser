// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import './icons'
import menuContext from '@/components/menuContext'
import subMenu from '@/components/menuContext/subMenu'
import menuContextItem from '@/components/menuContext/menuContextItem'
import store from './store'
import router from './router'
import login from '@/views/login/login'
import VueContextMenu from 'vue-contextmenu'

Vue.use(VueContextMenu)
Vue.use(menuContext)
Vue.use(subMenu)
Vue.use(menuContextItem)
Vue.component('menu-context',menuContext)
Vue.component('sub-menu',subMenu)
Vue.component('menu-context-item',menuContextItem)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$login = login
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
