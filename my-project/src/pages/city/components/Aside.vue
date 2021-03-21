<template>
  <ul class="city-aside">
    <li
      class="city-item"
      v-for="(item, index) in showLiter"
      :key="index"
      @click="changeLetter"
      @touchstart="touchS"
      @touchmove="touchM"
      @touchend="touchE"
      :ref="item"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "Aside",
  props: {
    list: Object,
  },
  computed: {
    showLiter: function () {
      console.log(115551);
      var arr = [];
      for (let i in this.list) {
        arr.push(i);
      }
      return arr;
    },
  },
  data() {
    return {
      // 定义状态
      touchStatus: false,
      //定义初始化startY数据
      startY:0,
      //函数节流
      timer: null,
    };
  },
  upadated(){
  this.startY =this.$refs['A'][0].offsetTop;
  },
  methods: {
    changeLetter: function (e) {
      this.$emit("change",e.target.innerHTML);
    },
    touchS: function (e) {
      this.touchStatus = !this.touchStatus;
    },
    touchM: function (e) {
      if (this.touchStatus) {
        //函数节流
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(()=>{
          const moveY = e.touches[0].clientY-84;
          const index = Math.floor(((moveY - this.startY))/20);
          if (index >= 0 && index <= this.showLiter.length) {
            this.$emit("change", this.showLiter[index]);
          }
        }, 18);
      }
    },
    touchE: function () {
      this.touchStatus = !this.touchStatus;
    },
  },
};
</script>
<style scoped lang="scss">
@import "~style/varible.scss";
.city-aside {
  z-index: 6666;
  width: 30px;
  position: absolute;
  right: 0;
  // background-color:blue;
  bottom: 50px;
  top:0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  .city-item {
    width: 100%;
    line-height: 18px;
    height: 20px;
    font-size: 12px;
    color: $bgColor;
  }
}
</style>

