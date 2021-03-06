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
const CompanyDynamicIndex = () => import('../views/companyDynamic/views/index.vue');
const NewsDetail = () => import('../views/companyDynamic/views/newsDetail/index.vue');
Vue.use(Router);

export default new Router({
    // mode: 'history',
    routes: [{
        path: "/",
        name: "首页",
        component: HomePage,
    }, {
        path: "/ServiceChannels",
        name: "渠道服务",
        component: ServiceChannels,
    }, {
        path: "/CompanyDynamic",
        name: "",
        component: CompanyDynamic,
        children:[{
            path: "",
            name: "公司动态",
            component: CompanyDynamicIndex,
        },{
            path: "NewsDetail",
            name: "公司动态",
            component: NewsDetail,
        }]
    }, {
        path: "/JoinInvestment",
        name: "JoinInvestment",
        component: JoinInvestment,
        children: [{
            path: 'Register',
            name: "渠道入驻",
            component: Register
        }, {
            path: 'FillInformation',
            name: "FillInformation",
            component: FillInformation
        }]
    }, {
        path: "/RetailOutlets",
        name: "零售网点",
        component: RetailOutlets,
    }]
})