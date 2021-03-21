<template>
    <div class="home-weekend">
        <h2 class="weekend-title">周末去哪</h2>
        <ul class="weekend" v-for="item in this.weekendLists" :key="item.id">
            <li>
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    name:'Weekend',
    props:{
        weekendLists:Array
    }
}
</script>
<style  lang="scss" scoped>
    .home-weekend{
        width: 375px;
        height: 40px;
        .weekend-title{
            height: 40px;
            box-sizing: border-box;
            font-size: 14;
            font-weight: bold;
            line-height:40px;
            padding-left:13px;
        }
        .item-img-wrapper{
            width: 375px;
            height:0;
            overflow: hidden;
            padding-bottom:37.6%;
            .item-img{
                width: 100%;
            }
        }
        .item-info{
            width: 355px;
            height: 45px;
            padding:7px 10px 10px;
            .item-title{
                width: 285px;
                padding-right:70px;
                height: 24px;
                font-size: 14px;
                line-height:24px;
            }
            .item-desc{
                width: 285px;
                padding-right:70px;
                height: 21px;
                font-size: 12px;
                line-height:21px;
                color:#7A7AB3;
            }
        }
    }
</style>
