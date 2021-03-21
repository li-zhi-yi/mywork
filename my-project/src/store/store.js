import Vue from 'vue';
import Vuex from 'vuex';

//注册
Vue.use(Vuex);

//为了避免用户开启隐身模式或关闭本地存储
let defaultCity = "北京";
try {
  if (true) {
    defaultCity = localStorage.city;
  }
} catch (e) {}


//实例化
const store = new Vuex.Store({
  // 数据
  state: {
    city: localStorage.city || '北京'
  },
  // 类似计算属性computed
  getters: {},
  // 同步方法  需要借助commit
  mutations: {
    changeCity: function (state, city) {
      console.log(city)
      state.city = city
      try {
        localStorage.city = city;
      } catch (e) {}
    }
  },
  //异步步方法 需要借助dispatch
  actions: {
    // changeCity:function(ctx,city){
    //     console.log(city)
    //     ctx.commit('changeCity',city)
    // }
  },
  //模块切割分成很多不同的小模块
  modules: {

  }
})

export default store;
