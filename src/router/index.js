import Vue from 'vue'
import Router from 'vue-router'
import editor from '@/components/editor'
import display from '@/components/display'
import index from '@/components/index'
import fill from '@/components/fill'
import login from '@/components/login'
import register from '@/components/register'
import create from '@/components/create'
import feedback from '@/components/feedback'
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
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback,
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
