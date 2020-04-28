import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
Vue.use(Vuex)


export default new Vuex.Store({
  //存放全局公用的数据
  state:  state ,
  mutations: mutations
  ,
  // actions: {
  //   changeCity (ctx,city){
  //     // ctx 上下文
  //     // 触发mutation中的changeCity方法
  //     // console.log(city)
  //     ctx.commit('changeCity',city)
  //   }
  // }
})
