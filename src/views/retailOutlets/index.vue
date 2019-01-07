<template>
    <div class="retailOutlets">
        <div class="top">
            <img src="../../../static/images/retailOutlets/公司动态-bg.png" alt="">
            <div class="content display_flex flex-direction_column align-items_center">
                <span>零售网点</span>
                <span class="line"></span>
            </div>
        </div>
        <div class="selectAdress display_flex align-items_center justify-content_flex-center">
            <div class="left display_flex align-items_center">
                <CityLinkage :hiddenRegion="true"></CityLinkage>
                <el-button>查询</el-button>
            </div>
            <div class="line"></div>
            <div class="rigth display_flex align-items_center">
                <img src="../../../static/images/retailOutlets/地址-icon.png" alt="">
                <span>广东,广州市 附近共有X个零售网点</span>
            </div>
        </div>
        <div class="daynamicList">
            <ul class="display_flex flex-direction_column align-items_center ">
                <li class="display_flex" :key="index" v-for="(item,index) in daynamicList">
                    <img :src="item.img" alt="">
                    <div class="rigth display_flex flex-direction_column">
                        <span class="title">{{item.title}}</span>
                        <span class="line"></span>
                        <span class="address">地址：{{item.address}}</span>
                        <span class="connet">联系人：{{item.connet}}</span>
                        <span class="phone">电话：{{item.phone}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import CityLinkage from "../../components/cityLinkage";
    export default {
        name: "retailOutlets",
        props: {},
        data() {
            return {
                paperScrollTop: 0,
                daynamicList: [{
                    img: "",
                    title: "我是标题我是标题我是标题",
                    address: "深圳市南山区深南大道德赛科技大厦22楼",
                    connet: "李先生",
                    phone: "13838388888",
                }, {
                    img: "",
                    title: "我是标题我是标题我是标题",
                    address: "深圳市南山区深南大道德赛科技大厦22楼",
                    connet: "李先生",
                    phone: "13838388888",
                }]
            }
        },
        components:{
            CityLinkage
        },
        mounted() {
            this.paperScrollTop = this.$parent.paperScrollTop;
        }
    }
</script>

<style lang="less" scoped>
    .retailOutlets {
        .top {
            width: 100%;
            height: 160px;
            position: relative;

            >img {
                width: 100%;
                height: 100%;
                position: absolute;
            }

            >.content {
                width: 100%;
                height: 100%;
                position: absolute;

                >span {
                    margin-top: 52px;
                    font-size: 32px;
                    font-family: PingFangSC-Semibold;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 1);
                    line-height: 45px;
                }

                .line {
                    margin-top: 13px;
                    width: 58px;
                    height: 1px;
                    background-color: #FFFFFF;
                }
            }
        }
        .selectAdress{
            width:100%;
            height:100px;
            background:rgba(255,255,255,1);
            .left{
                >button{
                    width:212px;
                    height:40px;
                    background:rgba(30,163,255,1);
                    color: #fff;
                }
            }
            .line{
                width:1px;
                height:63px;
                background-color: #979797;
                margin-right: 99px;
                margin-left: 71px;
            }
            .rigth{
                img{
                    margin-right: 16px;
                }
                >span{
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(59,59,59,1);
                    line-height:20px;
                }
            }
        }
        .daynamicList {
            width: 100%;

            ul {
                width: 100%;
                margin-top: 30px;

                li {
                    border-bottom: 1px solid #D8D8D8;
                    margin-bottom: 30px;
                    width: 1192px;
                    >img {
                        width: 330px;
                        height: 200px;
                        margin-bottom: 30px;
                        margin-right: 46px;
                        background-color: #cccccc;
                    }

                    >.rigth {
                        .title {
                            margin-top: 3px;
                            font-size: 22px;
                            font-family: PingFangSC-Semibold;
                            font-weight: 600;
                            color: rgba(59, 59, 59, 1);
                            line-height: 30px;
                            margin-bottom: 15px;
                        }

                        .line{
                            width:794px;
                            height:2px;
                            background-color: #979797;
                            margin-bottom: 27px;
                            opacity: 0.2;
                        }
                        
                        .address,.connet,.phone{
                            font-size:14px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(59,59,59,1);
                            line-height:20px;
                            margin-bottom: 11px;
                        }
                    }

                    &:last-of-type {
                        margin-bottom: 80px;
                    }
                }
            }
        }
    }
</style>