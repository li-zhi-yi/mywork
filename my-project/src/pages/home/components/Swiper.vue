<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiperList">
      <!-- slides -->
      <swiper-slide v-for="(item) in this.swiperLists" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Swiper",
  props:{
    swiperLists:{
      type:Array,
      require:true
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: 5000,
        initialSlide: 1,
        loop: true,
        pagination: ".swiper-pagination",
        onSlideChangeEnd: (swiper) => {
          console.log("onSlideChangeEnd", swiper.realIndex);
        }
      }
    };
  },
  computed:{
    showSwiperList:function(){
      return this.swiperLists.length
    }
  },
  components: { swiper, swiperSlide },
};
</script>
<style lang="scss" scoped >
// 样式穿透
.wrapper >>>  .swiper-pagination-bullet{
  background-color: #ffffff!important;
}

.wrapper {
  overflow:hidden;
  box-sizing: border-box;
  width: 375px;
  height: 0;
  // padding-bottom: 31.2%;
  padding-bottom:118px;
  .swiper-img {
    width: 375px;
  }
}
</style>
