<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-leftarrow"></span>
    </div>
    <div class="header-input">
      <div class="iconfont icon-search"></div>
      <div class="text">输入城市/景点/游玩</div>
      </div>
    <div class="header-right">
      <span>城市</span>
      <span class="iconfont icon-xiasanjiaoxing"></span>
    </div>
  </div>
</template>

<script>
export default {
  name:'HomeHeader'

}
</script>

<style lang="scss" scoped>
@import "@/assets/css/varibles.scss";
.header{
  height:.86rem;
  display:flex;
  background-color: $bgColor;
  color:#fff;
  line-height:.86rem;
  .header-left{
    width:.64rem;
    float:left;
    .icon-leftarrow{
      margin-left:.02rem;
      font-size: .36rem;
    }
  }
  .header-right{
    width:1.24rem;
    float:right;
    text-align: center;
  }
  .header-input{
    flex:1;
    height:.64rem;
    line-height:.64rem;
    margin-left:.2rem;
    margin-top:.12rem;
    background:#fff;
    border-radius: .05rem;
    color:rgb(143,142,143);
    text-align: left;
    vertical-align: middle;

    .icon-search{
      font-size:.4rem;
      margin-left:.1rem;
      // margin-top:.2rem;
      display: inline-block;
      vertical-align: middle;

    }
    .text{
      // line-height:.64rem;
      display: inline-block;
      // margin-top:-0.8rem;
      margin-left:.04rem;
      vertical-align: middle;


    }
  }

}
</style>
