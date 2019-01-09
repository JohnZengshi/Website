import Vue from 'vue'
import 'babel-polyfill'
import App from './App'
import global from "./assets/common";
import router from './router/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/index';
import './directive/index';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(ElementUI);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false
Vue.prototype.GlobalData = global;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box');