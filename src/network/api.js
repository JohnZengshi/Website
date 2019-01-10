import {
    postRequest,
    getRequest
} from "./requestUtil";
const getNav_top = (params) => { //获取顶部导航菜单
    return postRequest(`/web/nav_top/store_no/`,params)
}
const getTopNews = (params) => { //首页新闻
    return postRequest(`/web/getTopNews/`,params)
}
const getBanner = (params) => { //首页轮播图
    return postRequest(`/web/banner/`,params)
}
const getNav_bottom = (params) => { //底部导航
    return postRequest(`/web/nav_bottom/`,params)
}
const getCompany_dynamic = (params) => { //公司动态
    return postRequest(`/web/company_dynamic/`,params)
}
const getRegion = (params) => { //公司动态
    return postRequest(`/web/getRegion/`,params)
}
const getRetailer = (params) => { //公司动态
    return postRequest(`/web/getRetailer/`,params)
}
const applyStepOne = (params) => { //用户注册
    return postRequest(`/web/applyStepOne/`,params)
}
const sendCode = (params) => { //发送短信
    return postRequest(`/web/sendCode/`,params)
}
const applyStepTwo = (params) => { //发送短信
    return postRequest(`/web/applyStepTwo/`,params)
}
const uploadImg = (params) => { //图片上传
    return postRequest(`/upload/upload`,params)
}
const getStoreInfo = (params) => { //查询商户信息
    return postRequest(`/web/getStoreInfo`,params)
}
export {
    getNav_top,
    getTopNews,
    getBanner,
    getNav_bottom,
    getCompany_dynamic,
    getRegion,
    getRetailer,
    applyStepOne,
    sendCode,
    applyStepTwo,
    uploadImg,
    getStoreInfo
}