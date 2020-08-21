import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import main from '@/pages/main'
import blogList from '@/pages/blogList'
import blogContent from '@/pages/blogContent'
import About from '@/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/blogList',
      name: 'blogList',
      component: blogList
    },
    {
      path: '/blogContent',
      name: 'blogContent',
      component: blogContent
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})
