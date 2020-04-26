import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes:[
    {
      path:'/',
      name:'Home',
      component:() => import('../views/Home.vue'),
      meta:{
        keepAlive:true
      }
    },
    {
      path:'/city',
      name:'City',
      component:() => import('../views/City.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})




