<template>
    <div id="app">
        <div class="content" ref="wrapper" @scroll="paperScroll(e)">
            <div 
                :class="{topTabChange:topTabChange}"
                class="topTab display_flex justify-content_flex-justify align-items_center">
                <img src="../static/images/zhixiangjia_LOGO.png" title="智享家" alt="">
                <div class="tab display_flex align-items_center">
                    <ul class="display_flex align-items_center">
                        <router-link :class="{clicked:routerName == 'HomePage'}" class="pointer" tag="li" to="/">首页</router-link>
                        <router-link :class="{clicked:routerName == 'ServiceChannels'}" class="pointer" tag="li" to="/ServiceChannels">渠道服务</router-link>
                        <router-link :class="{clicked:routerName == 'CompanyDynamic'}" class="pointer" tag="li" to="/CompanyDynamic">公司动态</router-link>
                        <li class="pointer">联系我们</li>
                    </ul>
                    <el-button type="primary" class="loginBtn">登录</el-button>
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
                            <li class="display_flex flex-direction_column">
                                <span>关于我们</span>
                                <span>公司简介</span>
                                <span>最新动态</span>
                                <span>联系我们</span>
                            </li>
                            <li class="display_flex flex-direction_column">
                                <span>服务中心</span>
                                <span>线下零售门店查询</span>
                                <span>招商加盟</span>
                                <span>常见问题</span>
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
                        <img src="" alt="">
                    </div>
                </div>
                <div class="bottom">
                    Copyright&#1692014-2018 深圳市智享科技有限公司 版权所有 粤ICP备12019339号-2
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll' 
    export default {
        name: 'app',
        data() {
            return {
                routerName: "HomePage",
                paperScrollTop: 0,
                topTabChange: false,
            }
        },
        watch: {
            $route: function (val) {
                // console.log(val.name)
                this.routerName = val.name;
            },
            paperScrollTop: function(val){
                this.$refs[this.routerName].paperScrollTop = val;
                if(val > 0){
                    this.topTabChange = true
                }else{
                    this.topTabChange = false
                }
            }
        },
        computed:{
            scroll(){
                return new Bscroll(this.$refs.wrapper);
            }
        },
        methods:{
            paperScroll(){
                this.paperScrollTop = this.$refs['wrapper'].scrollTop
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="less" scoped>
#app {
    width: 100%;
    height: 100%;
    >.content {
        min-width: 1300px;
        height: 100%;
        overflow-x: hidden;
        // overflow-y: scroll;
        >.topTab {
            width: 100%;
            height: 70px;
            background: rgba(255, 255, 255, 1);
            position: fixed;
            top: 0;
            z-index: 999;
            transition: all 0.5s;
            &.topTabChange{
                box-shadow: 0px 18px 22px 0px rgba(59,59,59,0.12); 
            }
            >img {
                margin-left: 334px;
            }

            >.tab {
                margin-right: 335px;
                height: 100%;

                >ul {
                    height: 100%;

                    li {
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
        >.viewsMain{
            margin-top: 70px;
        }
        >.pageBottom{
            width:1920px;
            height:330px;
            background:rgba(51,51,51,1);
            .top{
                width: 1253px;
                .left{
                    margin-top: 74px;
                    ul{
                        li{
                            float: left;
                            margin-right: 220px;
                            >span{
                                font-size:14px;
                                font-family:PingFangSC-Regular;
                                font-weight:400;
                                color:rgba(255,255,255,0.5);
                                line-height:20px;
                                margin-bottom: 15px;
                                &:nth-of-type(1){
                                    margin-bottom: 30px;
                                    font-size:16px;
                                    font-family:PingFangSC-Semibold;
                                    font-weight:600;
                                    color:rgba(255,255,255,1);
                                    line-height:22px;
                                }
                            }
                            &:nth-of-type(3){
                                >span{
                                    &:nth-of-type(3){
                                        font-size:16px;
                                        font-weight:600;
                                        color:rgba(255,255,255,1);
                                    }
                                }
                            }
                        }
                    }
                }
                .rigth{
                    >img{
                        display: inline-block;
                        margin-top: 84px;
                        width:126px;
                        height:123px;
                    }
                }
            }
            .bottom{
                width: 100%;
                height: 43px;
                border-top: 1px solid #979797;
                line-height: 43px;
                text-align: center;
                font-size:12px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,0.5);
            }
        }
    }

}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter-to,.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

