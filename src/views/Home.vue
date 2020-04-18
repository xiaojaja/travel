<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <HomeIcons :iconList="iconList"></HomeIcons>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import HomeHeader from '@/components/home/Header.vue'
import HomeSwiper from '@/components/home/Swiper.vue'
import HomeIcons from '@/components/home/Icons.vue'
import HomeRecommend from '@/components/home/Recommend.vue'
import HomeWeekend from '@/components/home/Weekend.vue'

import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data(){
    return {
      lastCity:"",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    getHomeInfo(){
      axios.get('/mock/index.json?city=' + this.city)
      .then(this.getHomeInfoSuccess)
    },
    getHomeInfoSuccess(res){
      res = res.data
      if(res.ret && res.data){
        const data=res.data;
        this.iconList = data.iconList
        this.swiperList = data.swiperList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted(){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated(){
    if(this.lastCity!==this.city){
      this.lastCity=this.city;
      this.getHomeInfo()
    }
   }

}
</script>
