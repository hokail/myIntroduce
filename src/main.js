// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// eslint-disable-next-line
import $ from 'jquery';

import animate from 'animate.css';
import Vue from 'vue';
import App from './App';
// 全局引入swiper
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

import './css/base.css';
import './css/background.css';

Vue.config.productionTip = false;
Vue.use(animate)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  loading: require('./assets/load/loading.gif'), 
  error: require('./assets/load/error.jpg')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
