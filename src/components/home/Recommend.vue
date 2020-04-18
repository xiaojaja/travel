<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
        :to="'/detail/'+item.id"
        exact
      >
        <img :src="item.imgUrl" alt class="item-img" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>

    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/varibles.scss";
.recommend-title{
  line-height: .8rem;
  background: #eee;
  margin-top: .2rem;
  text-indent:.2rem;
}
.item{
  overflow: hidden;
  display: flex;
  height: 1.9rem;
  .item-img{
    width:1.7rem;
    height:1.7rem;
    padding:0.1rem;

  }
  .item-info{
    flex:1;
    padding:0.1rem;
    min-width:0;
    .item-title{
      line-height: .4rem;
      font-size:.3rem;
    }
    .item-desc{
      line-height: .4rem;
      color:#ccc;

    }
    .item-btn{
      background-color: #ff9300;
      line-height: .5rem;
      padding:0 .2rem;
      margin-top:.16rem;
      border-radius:.06rem;
      color:#fff;
    }
  }
}

</style>
