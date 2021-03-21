<template>
      <div class="city-list" ref="wrapper">
        <div class="list-hot">
          <h2 class="hot-city">您的城市</h2>
          <ul class="list-my-city">
            <li>{{ this.$store.state.city}}</li>
          </ul>
          <h2 class="hot-city">热门城市</h2>
          <ul class="hot-city-list">
            <li v-for="item in hotCities" :key="item.id" @click="changeAddress(item.name)">{{ item.name }}</li>
          </ul>
          <h2 class="hot-city">字母排序</h2>
          <ul class="hot-letter">
            <li v-for="(value, key, index) in cities" :key="index"  @click="changeLetter(key)">
              {{ key }}
            </li>
          </ul>
          <div
            class="hot-max-list"
            v-for="(value, key, index) in cities"
            :key="index"
          >
            <h2 class="hot-city" :ref="key">{{ key }}</h2>
            <ul class="hot-list-letter">
              <li v-for="item in value" :key="item.id" @click="changeAddress(item.name)">{{ item.name }}</li>
            </ul>
          </div>
        </div>
      </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: "List",
  props:{
    cities:Object,
    hotCities:Array,
    letter:String
  },
  data(){
    return {
      value:''
    }
  },
  watch:{
    letter:function(){
      if(this.letter){
         const element = this.$refs[this.letter.trim()][0];
         this.scroll.scrollToElement(element)
      }
    },
    value:function(){
        if(this.value){
        let element=this.$refs[this.value][0]
        console.log(element)
         this.scroll.scrollToElement(element)
      }
    }
  },
  methods:{
    changeAddress:function(city){
      //使用vuex commit 调用同步方法
      this.$store.commit('changeCity',city)
      //跳转路由
      this.$router.push('/')
    },
    changeLetter:function(msg){
      this.value=msg
    }
  },
  mounted(){
    this.scroll=new Bscroll(this.$refs.wrapper,{click:true})
  }
};
</script>
<style scoped lang="scss">
@import "~style/varible.scss";
  div.city-list{
  position:absolute;
  left: 0;
  right: 0;
  top: 84px;
  bottom:0;
  width: 375px;
  box-sizing: border-box;
  overflow: hidden;
  .hot-city {
    width: 375px;
    height: 36px;
    padding: 12px 30px 12px 15px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 12px;
    font-weight: bold;
    background-color: $bgGray;
  }
  .list-hot {
    background-color: $bgGray;
    .list-my-city {
    height: 40px;
	  box-sizing: border-box;
	  padding:7.5px 30px 7.5px 15px;
      background-color: $bgWhite;
      li {
        display:inline-block;
        width: 25%;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        border: 1px solid $bgColor;
        border-radius:5px;
        text-align: center;
      }
    }
    .hot-city-list {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      background: #ffffff;
      padding-right:30px;
      li {
        width: 33.3%;
        height: 45px;
        box-sizing: border-box;
        background: #ffffff;
        border-right: 1px solid $bgGray;
        border-bottom: 1px solid $bgGray;
        font-size: 14px;
        line-height: 45px;
      }
      li:nth-of-type(3n) {
        border-right: none;
      }
    }
    .hot-letter {
      display: flex;
      flex-wrap: wrap;
      background-color: $bgWhite;
      padding-right:30px;
      li {
        width: 16.6%;
        height: 45px;
        box-sizing: border-box;
        line-height: 45px;
        border-right: 1px solid $bgGray;
        border-bottom: 1px solid $bgGray;
        background-color: $bgWhite;
        text-align: center;
      }
      li:nth-of-type(6n) {
        border-right: none;
      }
    }
  }
  .hot-max-list {
    width: 375px;
    .hot-list-letter {
      width: 100%;
      padding-right:30px;
      display: flex;
      box-sizing: border-box;
      background-color: $bgWhite;
      text-align: center;
      flex-wrap: wrap;
      li {
        width: 25%;
        height: 45px;
        line-height: 45px;
        box-sizing: border-box;
        border-right: 1px solid $bgGray;
        border-bottom: 1px solid $bgGray;
      }
      li:ntn-of-type(4n) {
        border-right: none;
      }
    }
  }
}
</style>
