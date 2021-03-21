<template>
    <div> 
        <home-header></home-header>
        <home-swiper :swiperLists="swiperList"></home-swiper>
        <home-icons :iconLists="iconList"></home-icons>
        <home-recommend :recommondLists="recommendList"></home-recommend>
        <home-weekend :weekendLists="weekendList"></home-weekend>
    </div>
</template>
<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeRecommend from './components/Recommend'
    import HomeWeekend from './components/Weekend'
    import axios from 'axios'
    export default {
        name:'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data(){
            return {
                swiperList:[],
                iconList:[],
                recommendList:[],
                weekendList:[],
                lastCity:''
            }
        },
        methods:{
            getHomeInfor:function(){
                axios.get('/api/index.json?city='+this.$store.state.city)
                .then(this.getHomeInforSuccess)
            },
            getHomeInforSuccess:function(res){
                //res.ret为false失败
                if(!res.data.ret){
                    return ;
                }
                //请求成功
                var {data}=res.data
                this.swiperList=data.swiperList;
                this.iconList=data.iconList;
                this.recommendList=data.recommendList;
                this.weekendList=data.weekendList;
            }
        },
        mounted(){
            this.lastCity=
            this.getHomeInfor()
        },
        activated(){
            if(this.lastCity!==this.$store.state.city){
                this.lastCity=this.$store.state.city;
                this.getHomeInfor()
            }
        }
    }
</script>
