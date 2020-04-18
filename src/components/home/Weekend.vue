<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img :src="item.imgUrl" alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        weekendList:Array
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/varibles.scss";
.recommend-title{
  line-height:.8rem;
  background-color: #eee;
  text-indent: .2rem;
}
.item-img-wrapper{
  height:0;
  overflow: hidden;
  padding-bottom:37.4375%;
  .item-img{
    width:100%;
  }
}
.item-info{
  padding : 0.1rem;
  .item-title{
    line-height: .54rem;
    font-size: .32rem;

  }
  .item-desc{
    line-height: .4rem;
    color:#ccc;
  }
}

</style>
