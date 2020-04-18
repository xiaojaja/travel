<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props:{
    swiperList:Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }

    }

  },
  computed: {
    isShow() {
      return this.swiperList.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper ::v-deep .swiper-pagination-bullet-active {
  background-color:#fff;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 30.4%;
  background-color: #eee;

  .swiper-img {
    width: 100%;


  }
}
</style>
