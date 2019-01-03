import Vue from "vue";
import Router from "vue-router";
// 路由懒加载
const HomePage = () => import('../views/homePage/index');
const ServiceChannels = () => import('../views/ServiceChannels/index.vue');
const CompanyDynamic = () => import('../views/companyDynamic/index.vue');

Vue.use(Router);

export default new Router({
    routes: [{
        path: "/",
        name: "HomePage",
        component: HomePage,
        props: { newsletterPopup: false }
    },{
        path: "/ServiceChannels",
        name: "ServiceChannels",
        component: ServiceChannels,
    },{
        path: "/CompanyDynamic",
        name: "CompanyDynamic",
        component: CompanyDynamic,
    }]
})