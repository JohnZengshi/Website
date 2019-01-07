import {
    postRequest,
    getRequest
} from "./requestUtil";
const getNav_top = (params) => { //获取顶部导航菜单
    return getRequest(`/index/nav_top/store_no/${params}`)
}
export {
    getNav_top
}