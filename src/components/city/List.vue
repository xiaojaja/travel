<template>
    <div class="city-list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="btn-list">
                    <div class="btn-wrapper">
                        <div class="button">
                            <!-- {{this.$store.state.city}} -->
                            {{this.currentCity}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="btn-list">
                    <div class="btn-wrapper" v-for="item in hot" :key="item.id">
                        <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area"
            v-for="(item,key) in cities"
            :key="key"
            :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom"
                        v-for="innerItem in item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                    {{innerItem.name}}
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'CityList',
    props:{
        cities:Object,
        hot:Array,
        letter:String
    },
    computed:{
        ...mapState({
            currentCity:'city'
        })
    },
    watch:{
        letter () {
            if(this.letter){
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    },
    methods:{
        handleCityClick(city){
            // 触发store.js中action的changeCity方法
            // this.$store.dispatch('changeCity',city)
            // // 由于此次修改的数据很简单没有一部操作，故也可以不通过action转发
            // // ，可以直接转发到 mutation'
            // this.$store.commit('changeCity',city)
            this.changeCity(city);

            // 点击城市之后跳转到首页
            this.$router.push('/');
        },
        ...mapMutations(['changeCity'])
    },
    // 生命周期函数一般写在最下or最上
    mounted () {
        this.scroll=new BScroll(this.$refs.wrapper)
    },

}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/css/varibles.styl';
    .border-topbottom
        &:before
            border-color #ccc
        &:after
            border-color #ccc
    .border-bottom
        &:before
            border-color #ccc
    .city-list
        position absolute
        top 1.58rem
        left 0
        bottom 0
        right 0
        overflow hidden
        .title
            color #666
            line-height .54rem
            background-color #eee
            padding-left .2rem
            font-size .26rem
        .btn-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .btn-wrapper
                float left
                width 33.33%
                .button
                    padding .1rem 0
                    margin .1rem
                    text-align center
                    border .02rem solid #ccc
                    border-radius  .06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem

</style>
