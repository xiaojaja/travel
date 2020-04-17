<template>
  <div class="home">
    <Header/>
    <Homeswiper/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Homeswiper from '@/components/Swiper.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Homeswiper
  }
}
</script>
