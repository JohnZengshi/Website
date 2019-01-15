<template>
    <div id="app">
        <el-scrollbar 
            v-scrollbar="paperScroll" 
            ref="wrapper" 
            style="height: 100%">
            <div class="AppContent">
                <div 
                    :class="{topTabChange:topTabChange}"
                    class="topTab display_flex justify-content_flex-justify align-items_center">
                    <img :src="nav_bottomData.logo" title="智享家" alt="">
                    <div class="tab display_flex align-items_center">
                        <ul class="display_flex align-items_center">
                            <template
                                v-for="(item,index) in topTabList">
                                    <router-link
                                        v-if="item.page_type == 0"
                                        :key="index"
                                        class="pointer"
                                        tag="a"
                                        :to="item.url"
                                        :class="{clicked:routerUrlName == item.url}"
                                        >{{item.name}}</router-link>
                                    <a 
                                        v-else-if="item.page_type == 1"
                                        :href="item.url" 
                                        target="_blank" 
                                        rel="noopener noreferrer">{{item.name}}</a>
                            </template>
                        </ul>
                        <a href="http://shop.smarlife.cn/">
                            <el-button type="primary" class="loginBtn">登录</el-button>
                        </a>
                        
                        <span class="line"></span>
                    </div>
                </div>
                <div class="viewsMain">
                    <transition name="slide-fade">
                        <router-view :ref="routerName"></router-view>
                    </transition>
                </div>
                <div class="pageBottom display_flex align-items_center flex-direction_column justify-content_flex-justify">
                    <div class="top display_flex justify-content_flex-justify">
                        <div class="left">
                            <ul>
                                <li 
                                    :key="index"
                                    v-for="(item,index) in nav_bottomData.list"
                                    class="display_flex flex-direction_column">
                                    <span>{{item.name}}</span>
                                    <template
                                        v-for="(i,idx) in item.sub">
                                        <router-link
                                            v-if="i.page_type == 0"
                                            :key="idx"
                                            class="pointer"
                                            tag="a"
                                            :to="i.url"
                                            >{{i.name}}</router-link>
                                        <a 
                                            v-else-if="i.page_type == 1"
                                            :key="idx"
                                            class="pointer" 
                                            :href="i.url"
                                            target="_blank"
                                            >{{i.name}}</a>
                                    </template>
                                    
                                </li>

                                <li class="display_flex flex-direction_column">
                                    <span>服务热线：</span>
                                    <span>400-566-1686</span>
                                    <span>地址：</span>
                                    <span>深圳市南山区南山街道德赛科技大厦2202</span>
                                </li>
                            </ul>
                        </div>
                        <div class="rigth">
                            <img :src="nav_bottomData.qrcode" alt="">
                        </div>
                    </div>
                    <div class="bottom">
                        Copyright&#1692014-2018 深圳市智享科技有限公司 版权所有 粤ICP备12019339号-2
                    </div>
                </div>
            </div>
        </el-scrollbar>            
    </div>
</template>

<script>
    import BetterScroll from './components/betterScroll';
    import {getNav_top,getNav_bottom} from "./network/api";
    export default {
        name: 'app',
        data() {
            return {
                routerName: "HomePage",
                routerUrlName: "/",
                paperScrollTop: 0,
                topTabChange: false,
                nav_bottomData:{},
                getNav_topRES_DATA: [],
            }
        },
        components:{
            BetterScroll
        },
        watch: {
            $route: function (val) {
                this.routerName = val.name;
                this.routerUrlName = val.fullPath;
            },
            paperScrollTop: function(val){
                // console.log(val)
                this.$refs[this.routerName].paperScrollTop = val;
                if(val > 0){
                    this.topTabChange = true
                }else{
                    this.topTabChange = false
                }
            }
        },
        computed:{
            // betterScroll(){
            //     return new Bscroll(this.$refs.wrapper);
            // },
            topTabList(){
                let list = this.getNav_topRES_DATA;
                return list;
            }
        },
        methods:{
            paperScroll(e){
                // this.paperScrollTop = e.target.scrollTop;
                this.paperScrollTop = e.scrollTop;
            }
        },
        mounted(){
           ;
           (async () => {
               let getNav_topRES = await getNav_top({
                   store_no: this.GlobalData.store_no
               });
               if (getNav_topRES.errCode == 0) {
                   this.getNav_topRES_DATA = getNav_topRES.data;
               }
           })()
           ;
           (async () => {
               let getNav_bottomRES = await getNav_bottom({
                   store_no: this.GlobalData.store_no
               })
               if (getNav_bottomRES.errCode == 0) {
                   this.nav_bottomData = getNav_bottomRES.data
               }
           })()
        }
    }
</script>

<style lang="less">
#app {
    width: 100%;
    height: 100%;
    .AppContent {
        min-width: 1300px;
        overflow-x: hidden;
        overflow-y: hidden;
        // min-height: 100%;
        height: 100%;
        position: relative;
        z-index: 2;
        .topTab {
            width: 100%;
            height: 70px;
            background: rgba(255, 255, 255, 1);
            position: fixed;
            top: 0;
            z-index: 2001;
            transition: all 0.5s;

            &.topTabChange {
                box-shadow: 0px 18px 22px 0px rgba(59, 59, 59, 0.12);
            }

            >img {
                width: 118px;
                height: 44px;
                margin-left: 334px;
            }

            >.tab {
                margin-right: 335px;
                height: 100%;

                >ul {
                    height: 100%;

                    a {
                        width: 60px;
                        height: 100%;
                        line-height: 70px;
                        text-align: center;
                        font-size: 14px;
                        font-family: PingFangSC-Semibold;
                        font-weight: 600;
                        color: rgba(145, 145, 145, 1);
                        margin-right: 34px;
                        transition: color 0.5s;

                        &:hover,
                        &.clicked {
                            color: rgba(30, 163, 255, 1);
                            border-bottom: 2px solid rgba(30, 163, 255, 1);
                        }
                    }
                }

                .loginBtn {
                    width: 66px;
                    height: 26px;
                    background: rgba(30, 163, 255, 1);
                    border-radius: 4px;
                }
            }
        }

        .viewsMain {
            // height: 100%;
            // box-sizing: border-box;
            padding-top: 70px;
            // padding-bottom: 330px;
        }

        .pageBottom {
            width: 100%;
            height: 330px;
            background: rgba(51, 51, 51, 1);
            // position: absolute;
            // bottom: 0;
            .top {
                width: 1253px;

                .left {
                    margin-top: 74px;

                    ul {
                        li {
                            float: left;
                            margin-right: 220px;

                            >span {
                                font-size: 14px;
                                font-family: PingFangSC-Regular;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 0.5);
                                line-height: 20px;
                                margin-bottom: 15px;

                                &:nth-of-type(1) {
                                    margin-bottom: 30px;
                                    font-size: 16px;
                                    font-family: PingFangSC-Semibold;
                                    font-weight: 600;
                                    color: rgba(255, 255, 255, 1);
                                    line-height: 22px;
                                }
                            }

                            >a {
                                font-size: 14px;
                                font-family: PingFangSC-Regular;
                                font-weight: 400;
                                color: rgba(255, 255, 255, 0.5);
                                line-height: 20px;
                                margin-bottom: 15px;
                            }

                            &:nth-of-type(3) {
                                >span {
                                    &:nth-of-type(3) {
                                        font-size: 16px;
                                        font-weight: 600;
                                        color: rgba(255, 255, 255, 1);
                                    }
                                }
                            }
                        }
                    }
                }

                .rigth {
                    >img {
                        display: inline-block;
                        margin-top: 84px;
                        width: 126px;
                        height: 123px;
                    }
                }
            }

            .bottom {
                width: 100%;
                height: 43px;
                border-top: 1px solid #979797;
                line-height: 43px;
                text-align: center;
                font-size: 12px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }

}
</style>

