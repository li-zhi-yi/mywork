<template>
  <div class="search-city">
    <div class="city-search">
      <input
        type="text"
        placeholder="請輸入你要去的地方"
        class="search"
        v-model="inputValue"
      />
    </div>
    <div class="search-content" ref="search" v-show="!hasNoData">
      <ul class="city-search-value">
        <li v-for="item in this.arr" :key="item.id"  v-show="!hasNoData" @click="changeAddress(item)">
          {{ item }}
        </li>
        <li v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
export default {
  name: "Search",
  props: {
    list: Object,
  },
  data() {
    return {
      // 搜索词
      inputValue: "",
      //搜索的结果
      arr: [],
      //函数节流
      timer: null,
    };
  },
  computed: {
    hasNoData: function () {
      return !this.arr.length;
    },
  },
  methods:{
      changeAddress:function(msg){
          //更改选择地点
          this.$store.commit('changeCity',msg)
          //跳转路由
          this.$router.push('/')
      }
  },
  watch: {
    inputValue: function () {
      //函数节流
      if (this.timer) {
        clearTimeout(this.timer);
      }
      //如果inputValue不存在
      if (!this.inputValue) {
        return (this.arr = []);
      }
      this.timer = setTimeout(() => {
        for (let i in this.list) {
          this.list[i].forEach((item, index) => {
            var me = this;
            // console.log(item.name)
            if (
              item.name.indexOf(this.inputValue) > -1 ||
              item.spell.indexOf(this.inputValue) > -1
            ) {
              me.arr.push(item.name);
              console.log(me.arr);
            }
          });
        }
      }, 200);
    },
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
};
</script>
<style lang="scss" scoped>
@import "~style/varible.scss";
.search-city {
    position: fixed;
    top:44px;
    z-index: 666;
  .city-search {
    width: 375px;
    background-color: $bgColor;
    height: 40px;
    box-sizing: border-box;
    padding: 5px 5px;
    display: flex;
    .search {
      flex: 1;
      height: 30px;
    }
  }
  .city-search-value {
    position: absolute;
    background-color: $bgGray;
    height: 9999px;
    left: 0;
    right: 0;
    bottom: 0;
    top:84px;
    padding: 0 30px 0 15px;
    li {
      border: 1px solid $bgWhite;
      box-sizing: border-box;
      line-height: 27px;
      font-size: 14px;
      height: 27px;
      margin-top: 10px;
    }
  }
}
</style>
