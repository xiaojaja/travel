<template>
<div class="icons">
  <swiper :options="swiperOption" v-if="isShow">
    <swiper-slide v-for="(page,index) in pages" :key="index">
      <router-link
        to="/ticket"
        tag="div"
        class="icon"
        v-for="item in page"
        :key="item.id"
      >
          <div class="icon-img">
            <img :src="item.imgUrl" alt>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
      </router-link>
    </swiper-slide>
  </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeIcons',
  props:{
    iconList:Array
  },
  data(){
    return {
      swiperOption:{
        loop:true,
        autoPlay:false
      }
    }
  },
  computed:{
    pages(){
      const pages=[]
      this.iconList.forEach((item,index)=>{
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    isShow(){
      return this.iconList.length;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/varibles.scss";

.icons{
  width: 100%;
  height: 0;
  overflow: hidden;
  background-color: #eee;
  margin-top:.2rem;
  padding-bottom:50%;
  .icon{
    position:relative;
    overflow: hidden;
    float:left;
    width: 25%;
    height: 0;
    padding-bottom:25%;
    .icon-img{
      position:absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing:border-box;
      padding:0.1rem;
      img{
        display: block;
        height:100%;
        margin:0 auto;
      }
    }
    .icon-desc{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height:0.44rem;
      line-height: .44rem;
      color:$darkTextColor;
      text-align: center;
    }
  }
}

</style>
