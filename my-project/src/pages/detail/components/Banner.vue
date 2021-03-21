<template>
<div class="detail-banner">
    <div class="wrapper">
                  <div class="detail-header" @click="handleClick">
                            <router-link  to="/" class="back">
                <i class="iconfont">&#xe624;</i>
            </router-link>
                <img src="//img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_600x330_470f194f.jpg" alt="" class="img">
            <div class="photograph">
                <i class="iconfont">&#xeac4;</i>
                <span class="item-num">25</span>
            </div>
            <p class="desc">圆明园(AAAAA景区)</p>
        </div>
    <div class="banner" v-show="this.show" @click="handleClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in this.imgs" :key="index">
          <img
            class="item-img"
            :src="item"
            alt=""
          />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
    </div>
</div> 
</template>
<script>
export default {
  name: "Banner",
  props:{
      imgs:{
          type:Array
      }
  },
  data() {
    return {
      show: false,
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true,
      },
    };
  },
  methods:{
      handleClick:function(){
          this.show=!this.show
      }
  },
  activated(){
      this.show=false;
  }
};
</script>
 <style lang="scss" scoped>
 @import '~style/varible.scss';
 .banner >>> .swiper-container{
     overflow:inherit;
 }
.detail-banner{
    width: 375px;
    height: 0;
    padding-bottom:54.9%;
    overflow: hidden;
       .detail-header{
        height: 0;
        padding-bottom:55%;
        overflow: hidden;
        position:absolute;
        left: 0;
        top: 0;
        .back{
            position:absolute;
            left:5px;
            top: 5px;
            width: 36px;
            height: 36px;
            border-radius:50%;
            background-color:#0B3E5D;
            line-height:36px;
            text-align:center;
            color:$bgWhite;
            font-weight: bold;
        } 
        .img{
            width: 100%;
        }
        .photograph{
            position:absolute;
            width: 60px;
            height: 20px;
            left: 10px;
            right: 305px;
            bottom: 43px;
            box-sizing: border-box;
            background-color:rgba(0,0,0,0.5);
            text-align: center;
            i{
                width: 20px;
                height: 20px;
                display:inline-block;
                color:white;
            }
           .item-num{
                display: inline-block;
                height: 20px;
                line-height:20px;
                font-size: 12px;
                color:$bgWhite;
            }
        }
        .desc{
            position:absolute;
            height: 20px;
            bottom: 18px;
            left: 10px;
            right: 10px;
            font-size: 18px;
            font-weight: bold;
            color:$bgWhite;
        }
    }
}
.banner {
  position:fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color:black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  .wrapper{
      width: 100%;
      height:0;
      padding-bottom:100%;
      .item-img{
          width: 100%;
      }
      .swiper-pagination{
          width: 100%;
          color:#fff;
          background-color:black;
          bottom:-100px;
      }
  }
}
.container{
    height: 9999px;
    background-color:yellow;
}
</style>

