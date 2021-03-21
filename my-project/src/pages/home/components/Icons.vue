<template>
  <div class="header-icons">
   <swiper  :options="swiperOption" ref="mySwiper"  v-if="this.iconLists.length>0">
     <swiper-slide v-for="(page ,index) in pages" :key="index">
      <div class="icons-item" v-for=" item in page" :key="item.id">
      <div class="img">
          <img :src="item.imgUrl" alt="">
      </div>
      <p>{{item.desc}}</p>
    </div>
     </swiper-slide>
   </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Icons",
  props:{
    iconLists:{
      type:Array,
      require:true
    }
  },
  data(){
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed:{
    pages:function(){
      //创建一个空数组用来存放页数
      const pages=[];
      //遍历原来数组元素
      this.iconLists.forEach((item,index)=>{
        //创建一个变量 用来存放第几页的内容
        const page=Math.floor(index/8);
        //判断二位数组是否创建 没创建就创建二位数组
        if(!pages[page]){
          pages[page]=[]
        }
        //向空二位数组中添加item
        pages[page].push(item)
      })
      return pages
    }
  },
  components: { swiper, swiperSlide },
};
</script>
<style scoped lang="scss">
@import '~style/varible.scss';
.header-icons >>>.swiper-container{
  height: 0;
  padding-bottom:35.2%;
}
.header-icons {
  width: 375px;
  padding-left: 7px;
  padding-right: 7px;
  // padding-bottom: 35.2%;
  padding-bottom:132px;
  overflow: hidden;
  height: 0;
  box-sizing: border-box;
  flex-wrap: wrap;
  .icons-item {
    float:left;
    width: 89px;
    height: 51px;
    font-size: 12px;
    margin-top:7px;
    margin-bottom: 7px;
    text-align: center;
    div.img {
      display:block;
      margin:0 auto;
      width: 24%;
      height: 30px;
      img {
        width: 28.8px;
        height: auto;
      }
    }
    p {
      font-size: 12px;
      margin-top:5px;
      @include elli;
    }
  }
  li:last-child {
    margin-right: 0;
  }
}
</style>
