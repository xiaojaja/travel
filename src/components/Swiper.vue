<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="isShow">
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
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList:[{
      id:'0001',
      imgUrl:'@/../public/img/index/swiper1.jpg'
    },{
      id:'0002',
      imgUrl:'../../public/img/index/swiper2.jpg'
    }]
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
.wrapper >>> .swiper-pagination-bullet-active {
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
