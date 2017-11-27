// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import axios from 'axios'

Vue.prototype.$ajax = axios
Vue.prototype.$url = 'http://127.0.0.1:3000'
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

var app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
