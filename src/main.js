// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import axios from 'axios'
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import {delCookie, getCookie, setCookie} from "./util/util"

Vue.use(ElementUI)
Vue.use(MuseUI)

axios.defaults.withCredentials = true
Vue.prototype.axios = axios
Vue.prototype.$url = 'http://127.0.0.1:3000'
Vue.prototype.getCookie = getCookie
Vue.prototype.setCookie = setCookie
Vue.prototype.delCookie = delCookie
window.vue = new Vue({
  el: '#app',
  router,
  data: {},
  template: '<App/>',
  components: {App}
})
