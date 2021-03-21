<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont">&#xe624;</i>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe616;</span>
      <input type="text" placeholder="输入城市/景点/游玩主题" />
    </div>
    <div class="header-right">
      <router-link :to="{ path: 'city' }">
        <i>{{ this.$store.state.city}}</i>
        <i class="iconfont">&#xe6aa;</i>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  // props: {
  //   citys: {
  //     type: String,
  //     require: false,
  //     default: "北京",
  //   },
  // },
  data() {
    return {
      lastAddress:''
    };
  },
  watch:{
    address:function(){

    }
  }
};
</script>
<style scoped lang="scss">
//引入全局scss变量
@import "~style/varible.scss";
div.header {
  width: 375px;
  height: 45px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: $bgColor;
  border-bottom: 1px solid gray;
  color: white;
  .header-left{
    width: 40px;
  }
  div.header-right {
    width: 65px;
    font-size: 14px;
    a {
      color: white;
      text-decoration: none;
    }
    }
  div.header-input {
    flex: 1;
    height: 45px;
    position: relative;
    span {
      font-size: 28px;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-45%);
      z-index: 666;
      color: gray;
    }
    input {
      position: absolute;
      box-sizing: border-box;
      left: 0;
      top: 6.5px;
      border: 1px solid gray;
      font-size: 12px;
      padding-left: 40px;
      color: gray;
      width: 100%;
      height: 32px;
    }
  }
}
</style>
