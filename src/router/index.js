import Vue from "vue";
import Router from "vue-router";
// 路由懒加载
const HomePage = () => import('../views/homePage/index');
const ServiceChannels = () => import('../views/ServiceChannels/index.vue');
const CompanyDynamic = () => import('../views/companyDynamic/index.vue');
const JoinInvestment = () => import('../views/joinInvestment/index.vue');
const Register = () => import('../views/joinInvestment/views/register.vue');
const FillInformation = () => import('../views/joinInvestment/views/fillInformation.vue');
const RetailOutlets = () => import('../views/retailOutlets/index.vue');
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: "/",
        name: "HomePage",
        component: HomePage,
        props: {
            newsletterPopup: false
        }
    }, {
        path: "/ServiceChannels",
        name: "ServiceChannels",
        component: ServiceChannels,
    }, {
        path: "/CompanyDynamic",
        name: "CompanyDynamic",
        component: CompanyDynamic,
    }, {
        path: "/JoinInvestment",
        name: "JoinInvestment",
        component: JoinInvestment,
        children: [{
            path: 'Register',
            name: "Register",
            component: Register
        },{
            path: 'FillInformation',
            name: "FillInformation",
            component: FillInformation
        }]
    },{
        path: "/RetailOutlets",
        name: "RetailOutlets",
        component: RetailOutlets,
    }]
})