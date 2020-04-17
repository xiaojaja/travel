import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/iconfont/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)


Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
