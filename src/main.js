import Vue from 'vue'
import App from './App'
import router from './router/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/index';
Vue.use(ElementUI);

window.evenBus = new Vue();
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box');