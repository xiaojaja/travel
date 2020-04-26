<template>
    <div class="list">
        <!-- .prevent阻止事件的默认行为 -->
        <div class="item"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        >
        {{item}}
        </div>
    </div>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    data () {
        return {
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated(){
        this.startY=this.$refs['A'][0].offsetTop
    },
    computed:{
        letters () {
            const letters=[];
            for(let i in this.cities){
                letters.push(i)
            }
            return letters;
        }
    },
    methods:{
        handleLetterClick (e) {
            // 字母click跳转至对应城市
             this.$emit('change',e.target.innerHTML);
        },
        // 以下是 滑动 字母相应变化
        handleTouchStart () {
            this.touchStatus=true;
        },
        handleTouchMove (e) {
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                // 函数节流
                // 当两次拖拽小于16ms，其中的代码是不会执行的
                this.timer=setTimeout(()=>{
                    const touchY=e.touches[0].clientY-79;//79 header+search height
                    const index=Math.floor((touchY-this.startY)/20);//20 字母的高度
                    if(index >= 0 && index < this.letters.length)
                    this.$emit('change',this.letters[index])
                },16)
                // const startY=this.$refs['A'][0].offsetTop;

            }
        },
        handleTouchEnd () {
                this.touchStatus=false;
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/css/varibles.styl';
    .list
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width 0.4rem
        .item
            line-height .4rem
            text-align center
            color $bgColor
</style>
