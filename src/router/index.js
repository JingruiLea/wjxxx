import Vue from 'vue'
import Router from 'vue-router'
import editor from '@/components/editor'
import display from '@/components/display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editor',
      name: 'editor',
      component: editor
    },
    {
      path: '/',
      name: 'preview',
      component: display
    }
  ]
})
