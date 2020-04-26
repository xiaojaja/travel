<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" ref="listWrapper" v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                    v-for="item in list"
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li  class="search-item border-bottom" v-show="hasNoData">暂无数据</li>
            </ul>
        </div>
    </div>

</template>

<script>

import BScroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:'',
            list:[],
            timer:null,
        }

    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    methods:{
        handleCityClick(city){
            // 触发store.js中action的changeCity方法
            this.$store.dispatch('changeCity',city)
            // 由于此次修改的数据很简单没有一部操作，故也可以不通过action转发
            // ，可以直接转发到 mutation'
            // this.$store.commit('changeCity',city)

             // 点击城市之后跳转到首页
            this.$router.push('/');
        }
    },
    watch : {
        // 监听输入
        keyword () {
            if(this.timer){
                clearTimeout(this.timer);
            }
            if(!this.keyword){
                this.list=[];
                return;
            }
            this.timer=setTimeout(()=>{
                const result=[];
                for(let i in this.cities){
                    this.cities[i].forEach(value => {
                        if(value.spell.indexOf(this.keyword)>-1 || value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    });
                }
                this.list=result;
            },100)
        }
    },
    mounted () {
        this.scroll=new BScroll(this.$refs.listWrapper)
    },
}
</script>


<style lang="stylus" scoped>
    @import '~@/assets/css/varibles.styl';
    .search
        height .72rem
        background-color $bgColor
        padding 0 .1rem
        .search-input
            box-sizing border-box
            width 100%
            height 0.62rem
            padding 0 .1rem
            line-height 0.62rem
            background-color #fff
            border-radius .06rem
            color #666
            font-size 14px
    .search-content
        overflow hidden
        position absolute
        z-index 1
        top 1.58rem
        right 0
        bottom 0
        left 0
        background-color #eee
        .search-item
            line-height .62rem
            padding-left .2rem
            color #666
            background-color #fff

</style>
