<template>
    <div class="city-header">
           <div class="left">
               <router-link to="/">
                <i class="iconfont">&#xe624;</i>
               </router-link>
           </div>
           <div class="title">城市选择</div>
           <div class="right"></div>
     </div>
</template>
<script>
export default{
    name:'Header'
}
</script>
<style scoped lang="scss">
 @import '~style/varible.scss';
    .city-header{
        width: 375px;
        height: 44px;
        display: flex;
        align-items:center;
        justify-content: space-between;
        color:white;
        background:$bgColor;
        text-align:center;
        .left,.right{
            width:40px;
            height: 44px;
            line-height:44px;
            a{
                @include a-white;
            }
        }
        .title{
            flex:1;
            font-size:16px ;
            font-weight: bold;
        }
    }
</style>
