<template>
    <div class="detail">
        <detail-banner :imgs="imgs" :msg="msg"></detail-banner>
        <detail-container></detail-container>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailContainer from './components/container'
export default{
    name:'Detail',
    components:{DetailBanner,DetailContainer},
    data(){
        return {
           msg:'' ,
           imgs:["http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_r_800x800_80237e33.jpg","http://img1.qunarzz.com/sight/p0/1910/28/280368c977a29ccfa3.img.jpg_r_800x800_ed46ce6a.jpg"]
        }
    },
    methods:{
        receiveMsg:function(msg){
            this.msg=msg
            console.log(msg)
        }
    }
}
</script>
<style scoped lang="scss">

</style>

