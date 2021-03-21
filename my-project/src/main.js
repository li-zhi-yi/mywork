// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入vuex实例化的store
import store from './store/store'
//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入 vue-awesome-swiper css文件
require ('swiper/dist/css/swiper.css')
//引入iconfont图标
import 'style/iconfont.css'
//统一各个手机样式初始化
import 'style/reset.css'
//解决1px边框问题
import 'style/border.css'
//解决部分手机300ms点击延迟的问题
import fastClick from 'fastclick'
//调用fastClick解决问题
fastClick.attach(document.body);

//注册插件 Vue-awesome-swiper
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
//注册插件vue-axios  axios
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

//Vue总线全局传递属性
Vue.prototype.bus=new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 注册store
  store,
  router,
  components: { App},
  template: '<App/>'
})
