import Vue from 'vue'
import Router from 'vue-router'
import editor from '@/components/editor'
import display from '@/components/display'
import index from '@/components/index'
import fill from '@/components/fill'
import loginAndRegister from '@/components/loginAndRegister'
import create from '@/components/create'
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
      path: '/fill',
      name: 'fill',
      component: fill
    },
    {
      path: '/login',
      name: 'login',
      component: loginAndRegister
    },
    {
      path: '/create',
      name: 'create',
      component: create
    },
  ], data: {
    isLogin: false
  }
})
