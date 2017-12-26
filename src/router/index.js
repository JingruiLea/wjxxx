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
import passage from '@/components/passage'
import user from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editor/:id',
      name: 'editor',
      component: editor,
      props: true
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
    {
      path: '/passage',
      name: 'passage',
      component: passage
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
  ], data: {
    isLogin: false
  }
})
