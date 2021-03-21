import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/city',
      name:'City',
      component:()=>import('@/pages/city/City.vue')
    },
    {
      // 接受动态路由
      path:'/detail/:id',
      name:'Detail',
      component:()=>import ('@/pages/detail/Detail.vue')
    }
  ]
})
