<template>
    <div class="home-love">
        <div class="love-header">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            <span>猜你喜欢</span>
        </div>
         <router-link tag="div" 
          class="love-group" v-for="(item,index) in this.recommondLists" :key="index"
         :to="/detail/+index">
              <!-- <div class="love-group" v-for="(item,index) in this.recommondLists" :key="index"> -->
            <div class="love-left">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="love-right">
                <p class="title">{{item.title}}</p>
                <div class="xingxing">
                    <p>{{item.desc}}</p>
                </div>
                <div class="love-bottom">
                    查看详情
                </div>
            </div>
        <!-- </div> -->
         </router-link>  
    </div>
</template>
<script>
    export default{
        name:'Recommend',
        props:{
            recommondLists:{
                type:Array,
                require:true
            }
        }
    }
</script>
<style scoped lang="scss">
.home-love{
    border-top:10px solid #F5F5F5;
    padding:0 15px;
    box-sizing: border-box;
    width: 375px;
    .love-header{
        width: 100%;
        height: 47px;
        display: flex;
        align-items:center;
        img{
            width: 15px;
            height: 15px;
        }
        span{
            font-size: 16px;
        }
    }
    .love-group{
        width: 100%;
        height: 100px;
        padding:10px 0;
        display:flex;
        .love-left{
            width: 100px;
            height: 100px;
            margin-right:10px;
            img{
                width: 100px;
                height: 100px;
            }
        }
        .love-right{
            width: 100%;
            height: 100px;
            p.title{
                font-size: 20px;
                font-weight: bold;
            }
            .xingxing{
                width: 100%;
                height: 22px;
                display:inline-block;
                margin-top:7px;
                height:17px;
                img{
                    width: 12px;
                    height: 12px;
                }
            }
            .love-bottom{
                display:inline-block;
                width: 100px;
                height: 23px;
                margin-top:10px;
                text-align:center;
                line-height:23px;
                border-radius:10px;
                color:white;
                background-color:orange;
            }
        }
    }
}
</style>
