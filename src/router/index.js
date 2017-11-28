import Vue from 'vue'
import Router from 'vue-router'
import editor from '@/components/editor'
import display from '@/components/display'
import index from '@/components/index'
import fill from '@/components/fill'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editor',
      name: 'editor',
      component: editor
    },
    {
      path: '/display',
      name: 'preview',
      component: display
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/create',
      name: 'create',
      component: editor
    },
    {
      path: '/fill',
      name: 'fill',
      component: fill
    },
  ], data: {
    isLogin: false
  }
})
