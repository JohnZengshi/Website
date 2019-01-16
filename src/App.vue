<template>
    <div id="app">
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
            
        </div>
    </div>
</template>

<script>
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
        height: 100%;
        position: relative;
        z-index: 2;
        .topTab {
            width: 100%;
            // height: 70px;
            background: rgba(255, 255, 255, 1);
            position: fixed;
            top: 0;
            z-index: 2001;
            transition: all 0.5s;

            &.topTabChange {
                box-shadow: 0px 18px 22px 0px rgba(59, 59, 59, 0.12);
            }

            >img {
                // width: 40px;
                height: 50px;
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
            height: 100%;
            padding-top: 70px;
        }

        
    }

}
</style>

