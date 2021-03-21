<template>
  <div>
    <div class="header">
      <div class="header-top">
        <div class="left">
          <div>
            <p>5.0 分 超级赞</p>
            <span>610927条</span>
            <span>评论</span>
          </div>
          <i class="iconfont">&#xe624;</i>
        </div>
        <div class="right">
          <div>
            <h2>经典简介</h2>
            <span>开放时间</span>
          </div>
          <i class="iconfont">&#xe624;</i>
        </div>
      </div>
      <div class="header-bottom">
          <i class="iconfont">&#xe61b;</i>
        <p>北京市东城区景山前街4号</p>
           <i class="iconfont">&#xe624;</i>
      </div>
    </div>
    <div class="send">
        <h2>去哪儿推荐</h2>
        <ul>
            <li>
                    <div class="left">
                     <p class="title">北京故宫大门票+珍宝馆+资深导游讲解（配无线耳麦）*成人票</p>
                     <p class="data">可订3月23</p>
                     <p class="icon">自营&nbsp;条件退;&nbsp;无需换票</p>
            </div>
            <div class="right">
                <div class="price">￥99</div>
                <div class="read">立即预定</div>
            </div>
            </li>
           <li>
                    <div class="left">
                     <p class="title">北京故宫大门票+珍宝馆+资深导游讲解（配无线耳麦）*成人票</p>
                     <p class="data">可订3月23</p>
                     <p class="icon">自营&nbsp;条件退;&nbsp;无需换票</p>
            </div>
            <div class="right">
                <div class="price">￥99</div>
                <div class="read">立即预定</div>
            </div>
            </li>
             <li>
                    <div class="left">
                     <p class="title">圆明园活动体验票成人票(百年圆梦，马首回家亲子活动)</p>
                     <p class="data">23:00前可订明日</p>
                     <p class="icon">条件退&nbsp;无需换票</p>
            </div>
            <div class="right">
                <div class="price">￥99</div>
                <div class="read">立即预定</div>
            </div>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contanier",
};
</script>
<style lang="scss" scoped>
.header {
  width: 375px;
  height: 99px;
  box-sizing: border-box;
  .header-top {
    display: flex;
    justify-content: center;
    .left,
    .right {
      height: 41px;
      flex: 1;
      display:flex;
      justify-content: center;
      align-items:center;
      div {
          width: 150px;
        p {
          display: inline-block;
          width: 150px;
          height: 22px;
          color: orange;
          line-height: 22px;
          font-size: 18px;
        }
        span {
          font-size: 12px;
          color: gray;
        }
        h2 {
          font-size: 14px;
        }
      }
      i {
        float: right;
        width: 20px;
        height: 20px;
        transform: rotate(180deg);
      }
    }
  }
  .header-bottom{
      width: 355px;
      height: 18px;
      display:flex;
      flex-direction: row;
      line-height:18px;
      padding:10px 10px;
      i{
          width: 20px;
          height: 20px;
      }
      p{
          flex:1;
          height: 18px;
          margin-left:20px;
          font-size: 14px;
      }
      i:last-child{
          transform:rotate(180deg);
      }
  }
     &::after{
          content:'';
          display:block;
          background-color:#F5F5F5;
          width: 100%;
          height: 10px;
      }
}
.send{
    width: 355px;
    height: 427px;
    padding:0 10px;
    h2{
        font-weight: bold;
        font-size: 20px;
        height: 28px;
        line-height:28px;
        text-indent: 2px;
        padding-bottom:5px;
    }
    ul{
        margin:16px 0 10px 0;
        width: 355px;
        height: 342px;
        border-radius:10px;
        background-color:#F8F8F8;
        li{
            height: 114px;
            display:flex;
            padding:16px 0;
            box-sizing: border-box;
            justify-content: center;
            .right{
                width: 76px;
                text-align:center;
                padding-top:20px;
                margin-right:20px;
                .price{
                    height: 20px;
                    color:#FF9415;
                    font-size: 20px;
                }
                .read{
                    height: 26px;
                    margin-top:6px;
                    border-radius:13px;
                    background-color:#FF9415;
                    line-height:26px;
                    color:white;
                }
            }

            .left{
                flex:1;
                .title{
                    font-size: 14px;
                    height: 40px;
                }
                .data{
                    height: 16px;
                    font-size: 12px;
                    color:#49AAD5;
                    line-height:16px;
                }
                .icon{
                    font-size: 12px;
                    height: 14px;
                    line-height:14px;
                    color:#49AAD5;
                }
            }
        }
    }
}
</style>
