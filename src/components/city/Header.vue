<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont icon-leftarrow header-back"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'CityHeader'
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/varibles.scss";
.header{
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
  font-size: .32rem;
  .header-back{
    position: absolute;
    width: 0.64rem;
    text-align: center;
    font-size: .4rem;
    left: 0;
    top: 0;
    color: #fff;
  }
}
</style>
