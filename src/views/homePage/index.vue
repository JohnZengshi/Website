<template>
    <div class="HomePage">
        <div class="banner_content_01">
            <div class="RESEARCH">
                <RESEARCH></RESEARCH>
            </div>
            <div class="content display_flex flex-direction_column align-items_center">
                <div class="banner">
                    <swiper class="swiperConent" :options="swiperOption" ref="mySwiper">
                        <swiper-slide
                            :key="index"
                            v-for="(item,index) in bannerList">
                            <img :src="item.img_url" alt="">
                        </swiper-slide>
                        <div class="swiper-pagination"  slot="pagination"></div>
                    </swiper>
                </div>
                <div class="content_01">
                    <div class="content display_flex justify-content_flex-center">
                        <div class="left display_flex flex-direction_column">
                            <div 
                                :class="{active:content_01_titleActive}"
                                class="display_flex flex-direction_column">
                                <span>快速</span>
                                <span>微妙识别解锁只需0.3秒</span>
                            </div>
                            <span>指纹锁采用微妙指纹识别芯片，指纹识别速度仅需0.3秒，芯片所具有的自主学习功能，不同角度的指纹输入都能够自动修正并识别</span>
                            <ul class="display_flex align-items_center justify-content_flex-justify justify-content_flex-center">
                                <li class="display_flex flex-direction_column align-items_center pointer">
                                    <img 
                                        :class="{active:content_01_listActive}"
                                        src="../../../static/images/homePage/chip-icon.png" alt="">
                                    <span
                                        :class="{active:content_01_listActive}"
                                        >微秒指纹识别芯片</span>
                                </li>
                                <li class="line"></li>
                                <li class="display_flex flex-direction_column align-items_center pointer">
                                    <img 
                                        :class="{active:content_01_listActive}"
                                        src="../../../static/images/homePage/FingerprintIdentification-icon.png" alt="">
                                    <span
                                        :class="{active:content_01_listActive}"
                                        >指纹识别</span>
                                </li>
                                <li class="line"></li>
                                <li class="display_flex flex-direction_column align-items_center pointer">
                                    <img 
                                        :class="{active:content_01_listActive}"
                                        src="../../../static/images/homePage/SpeedFast-icon.png" alt="">
                                    <span
                                        :class="{active:content_01_listActive}"
                                        >指纹识别速度0.3秒</span>
                                </li>
                            </ul>
                        </div>
                        <div class="rigth">
                            <img src="../../../static/images/homePage/BlackDoorLock.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="countNum">
            <ul class="display_flex justify-content_flex-center">
                <li class="display_flex flex-direction_column align-items_center justify-content_flex-center pointer">
                    <img src="../../../static/images/homePage/50-icon.png" alt="">
                    <span class="num">
                        <NumberGrow ref="NumberGrow_01" :startVal="0" :endVal="50" :duration="4000" :autoplay="false"></NumberGrow>
                    </span>
                    <span>全球安防50强第29名</span>
                </li>
                <li class="display_flex flex-direction_column align-items_center justify-content_flex-center pointer">
                    <img src="../../../static/images/homePage/10-icon.png" alt="">
                    <span class="num">
                        <NumberGrow ref="NumberGrow_02" :startVal="0" :endVal="10" :duration="4000" :autoplay="false"></NumberGrow>
                    </span>
                    <span>中国安防最具影响力十大品牌</span>
                </li>
                <li class="display_flex flex-direction_column align-items_center justify-content_flex-center pointer">
                    <img src="../../../static/images/homePage/100-icon.png" alt="">
                    <span class="num">
                        <NumberGrow ref="NumberGrow_03" :startVal="0" :endVal="100" :duration="4000" :autoplay="false"></NumberGrow>
                    </span>
                    <span>100家诚信品牌安防供货商</span>
                </li>
                <li class="display_flex flex-direction_column align-items_center justify-content_flex-center pointer">
                    <img src="../../../static/images/homePage/300-icon.png" alt="">
                    <span class="num">
                        <NumberGrow ref="NumberGrow_04" :startVal="0" :endVal="300" :duration="4000" :autoplay="false"></NumberGrow>
                    </span>
                    <span>300多项荣誉奖项</span>
                </li>
                <li class="display_flex flex-direction_column align-items_center justify-content_flex-center pointer">
                    <img src="../../../static/images/homePage/500-icon.png" alt="">
                    <span class="num">
                        <NumberGrow ref="NumberGrow_05" :startVal="0" :endVal="500" :duration="4000" :autoplay="false"></NumberGrow>
                    </span>
                    <span>500余项知识产权</span>
                </li>
            </ul>
        </div>
        <div class="content_02 display_flex justify-content_flex-center">
            <div class="left">
                <img src="../../../static/images/homePage/GoldenDoorLock.png" alt="">
            </div>
            <div class="rigth display_flex flex-direction_column align-items_center">
                <span class="title">开启智能新生活</span>
                <span class="line"></span>
                <ul>
                    <li  class="display_flex flex-direction_column align-items_center pointer">
                        <shockwave>
                            <img slot="shockwaveSlot" src="../../../static/images/homePage/PasswordOpen-icon.png" alt="">
                        </shockwave>
                        <span>密码开启</span>
                    </li>   
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <shockwave>
                            <img slot="shockwaveSlot" src="../../../static/images/homePage/appLock-icon.png" alt="">
                        </shockwave>
                        <span>APP开锁</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <shockwave>
                            <img slot="shockwaveSlot" src="../../../static/images/homePage/PasswordProtection-icon.png" alt="">
                        </shockwave>
                        <span>密码保护</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <shockwave>
                            <img slot="shockwaveSlot" src="../../../static/images/homePage/LowPressureAlarm-icon.png" alt="">
                        </shockwave>
                        <span>低压报警</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <shockwave>
                            <img slot="shockwaveSlot" src="../../../static/images/homePage/ClassCLock-icon.png" alt="">
                        </shockwave>
                        <span>C级锁芯</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <shockwave>
                            <img slot="shockwaveSlot" src="../../../static/images/homePage/FingerprintOpen-icon.png" alt="">
                        </shockwave>
                        <span>指纹开启</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <shockwave>
                            <img slot="shockwaveSlot" src="../../../static/images/homePage/CreditCardLock-icon.png" alt="">
                        </shockwave>
                        <span>刷卡开锁</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <shockwave>
                            <img slot="shockwaveSlot" src="../../../static/images/homePage/keyToOpen-icon.png" alt="">
                        </shockwave>
                        <span>钥匙开启</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <shockwave>
                            <img slot="shockwaveSlot" src="../../../static/images/homePage/SuperLockBody-icon.png" alt="">
                        </shockwave>
                        <span>超强锁体</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <shockwave>
                            <img slot="shockwaveSlot" src="../../../static/images/homePage/LiquidCrystalDisplay-icon.png" alt="">
                        </shockwave>
                        <span>液晶显示屏</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="content_03">
            <ul 
                :class="{active:content_03_listActive}"
                class="display_flex align-items_center justify-content_flex-center">
                <li class="display_flex flex-direction_column align-items_center pointer">
                    <div class="top">
                        <img src="../../../static/images/homePage/comprehensive-bg.png.png" alt="">
                        <span>全方位防范，安全有保障</span>
                    </div>
                    <span>FPC半导体活体自学习指纹识别，越用越灵敏，杜绝假指纹</span>
                    <span class="line"></span>
                    <span>虚位密码，不怕偷窥</span>
                    <span class="line"></span>
                    <span>双重验证安全开锁模式（指纹/密码/刷卡，任意两种组合开门）</span>
                    <span class="line"></span>
                    <span>尝试解锁时系统锁定、本地报警、信息推送至APP、手机短信</span>
                    <span class="line"></span>
                    <span>防撬锁本地报警、信息推送至APP、手机短信</span>
                    <span class="line"></span>
                    <span>胁迫开锁密码和指纹，隐蔽报警，信息推送至APP，同时给设定号码拨打电话</span>
                    <span class="line"></span>
                    <span>自动锁定时长灵活定义，防尾随</span>
                    <span class="line"></span>
                    <span>室内把手防猫眼开锁设计</span>
                    <span>………</span>
                </li>
                <li class="display_flex flex-direction_column align-items_center pointer">
                    <div class="top">
                        <img src="../../../static/images/homePage/EasyManagement-icon.png" alt="">
                        <span>轻松管理，操作方便</span>
                    </div>
                    <span>APP管理，轻松掌握</span>
                    <span class="line"></span>
                    <span>指纹验证、开门一步到位</span>
                    <span class="line"></span>
                    <span>室内把手上提反锁，下压开门</span>
                    <span class="line"></span>
                    <span>支持各种NFC卡写入绑定，如身份证、公交卡、门禁卡等</span>
                    <span class="line"></span>
                    <span>电子门铃</span>
                    <span class="line"></span>
                    <span>语音留言、备忘提醒，给她惊喜、表达温情（网关播放）</span>
                    <span class="line"></span>
                    <span>家人到家，实时提醒</span>
                    <span class="line"></span>
                    <span>远程授权临时密码，可轻松应对临时到访</span>
                    <span>………</span>
                </li>
                <li class="display_flex flex-direction_column align-items_center pointer">
                    <div class="top">
                        <img src="../../../static/images/homePage/PracticalFunction-bg.png" alt="">
                        <span>实用功能，出类拔萃</span>
                    </div>
                    <span>超低功耗，12个月长续航</span>
                    <span class="line"></span>
                    <span>低电提醒，USB应急供电</span>
                    <span class="line"></span>
                    <span>面板特殊处理不留指纹</span>
                    <span class="line"></span>
                    <span>C级锁芯，国家标准</span>
                    <span>………</span>
                </li>
            </ul>
            <img 
                :style="{transform : 'translateY(' + content_03_img_top + 'px)'}"
                src="../../../static/images/homePage/content_03_back.png" alt="">
        </div>
        <div class="content_04">
            <img src="../../../static/images/homePage/content_04_back.png" alt="">
            <div class="content display_flex flex-direction_column align-items_center">
                <span class="title">应用场景</span>
                <span class="line"></span>
                <ul class="display_flex">
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <div class="top">
                            <img 
                                :class="{active:content_04_top_imgActive}"
                                src="../../../static/images/homePage/亲友来访-bg.png" alt="">
                            <div class="display_flex flex-direction_column align-items_center justify-content_flex-center">
                                <span>亲友来访</span>
                                <span>远程开门</span>
                            </div>
                        </div>
                        <span class="num">01</span>
                        <span>亲友来访，无需苦等</span>
                        <span>主人不在，一样迎接</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <div class="top display_flex flex-direction_column align-items_center justify-content_flex-center">
                            <img 
                                :class="{active:content_04_top_imgActive}"
                                src="../../../static/images/homePage/关爱家人-bg.png" alt="">
                            <div class="display_flex flex-direction_column align-items_center justify-content_flex-center">
                                <span>关爱家人</span>
                                <span>实时推送</span>
                            </div>
                        </div>
                        <span class="num">02</span>
                        <span>语音留言，给她惊喜</span>
                        <span>家人到家，自然提醒</span>
                        <span>备忘提醒，实时关爱</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <div class="top display_flex flex-direction_column align-items_center justify-content_flex-center">
                            <img 
                                :class="{active:content_04_top_imgActive}"
                                src="../../../static/images/homePage/多种警示-bg.png" alt="">
                            <div class="display_flex flex-direction_column align-items_center justify-content_flex-center">
                                <span>多种警示</span>
                                <span>立即提醒</span>
                            </div>
                        </div>
                        <span class="num">03</span>
                        <span>多种报警，实时推送</span>
                        <span>按需分类，及时处理</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <div class="top display_flex flex-direction_column align-items_center justify-content_flex-center">
                            <img 
                                :class="{active:content_04_top_imgActive}"
                                src="../../../static/images/homePage/紧急救护-bg.png" alt="">
                            <div class="display_flex flex-direction_column align-items_center justify-content_flex-center">
                                <span>紧急救护</span>
                                <span>分秒必争</span>
                            </div>
                        </div>
                        <span class="num">04</span>
                        <span>突发情况，及时开门</span>
                        <span>声明通道，随时畅通</span>
                    </li>
                    <li class="display_flex flex-direction_column align-items_center pointer">
                        <div class="top display_flex flex-direction_column align-items_center justify-content_flex-center">
                            <img 
                                :class="{active:content_04_top_imgActive}"
                                src="../../../static/images/homePage/预设险警-bg.png" alt="">
                            <div class="display_flex flex-direction_column align-items_center justify-content_flex-center">
                                <span>预设险警</span>
                                <span>确保安全</span>
                            </div>
                        </div>
                        <span class="num">05</span>
                        <span>遭遇劫持，专用密码</span>
                        <span>开门报警，同时推送</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="newsContent display_flex flex-direction_column align-items_center">
            <span class="title">新闻中心</span>
            <span class="line"></span>
            <ul>
                <li 
                    class="display_flex flex-direction_column align-items_center"
                    :key="index"
                    v-for="(item,index) in newsList">
                    <img :src="item.img" alt="">
                    <span class="title">{{item.title}}</span>
                    <span class="line"></span>
                    <span class="time">{{item.time}}</span>
                    <span class="content unilineText">{{item.content}}</span>
                    <el-button class="btn" @click="toDetail(item.id)">详情</el-button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import NumberGrow from "../../components/numberGrow";
import RESEARCH from "../../components/RESEARCH";
import shockwave from "../../components/shockwave";
import {getTopNews,getBanner} from "../../network/api";
export default {
    name: "HomePage",
    props:{},
    data(){
        return {
            paperScrollTop: 0,
            swiperOption: {
                autoplay: true,
                grabCursor : true,
                effect : 'fade',
                pagination: {
                    el: '.swiper-pagination',
                },
            },
            content_01_titleActive: false,
            content_01_listActive: false,
            content_03_listActive: false,
            getTopNewsRES_DATA: [],
            bannerList: [],
            content_03_img_top: 0,
            content_04_top_imgActive: false,
            numberGrowIng: false,
        }
    },
    components:{
        NumberGrow,
        RESEARCH,
        shockwave
    },
    computed: {
        newsList() {
            let list = this.getTopNewsRES_DATA.map((val) => {
                return {
                    img: val.cover_img,
                    title: val.title,
                    time: `${val.update_time} 公司动态`,
                    content: val.summary,
                    url: val.url,
                    id:val.id
                }
            })
            return list
        },
    },
    watch:{
        paperScrollTop: function (val) {
            if (val >= 200) {
                this.content_01_listActive = true;
                if (val >= 1500) {
                    this.content_03_img_top = -(val / 10);
                    if (val >= 1800) {
                        this.content_03_listActive = true;
                        if (val >= 2600) {
                            this.content_04_top_imgActive = true;
                            if (val >= 3000) {
                                // this.content_03_img_top = 0;

                            }
                        }

                    }
                }
            }

            if (val >= 600 && val <= 1400) {
                if (this.numberGrowIng) return;
                this.numberGrowIng = true;
                this.$refs['NumberGrow_01'].start();
                this.$refs['NumberGrow_02'].start();
                this.$refs['NumberGrow_03'].start();
                this.$refs['NumberGrow_04'].start();
                this.$refs['NumberGrow_05'].start();
            }
        },
    },
    methods:{
        toDetail(id){
            // window.open(url);
            this.$router.push({path:"/CompanyDynamic/NewsDetail",query:{newsId:id}})
        }
    },
    mounted(){
        this.paperScrollTop = this.$parent.paperScrollTop;
        setTimeout(()=>{
            this.content_01_titleActive = true;
        },1000);

        ;(async()=>{
            let getTopNewsRES = await getTopNews({store_no:this.GlobalData.store_no});
            let getBannerRES = await getBanner({store_no:this.GlobalData.store_no});
            this.bannerList = getBannerRES.data;
            this.getTopNewsRES_DATA = getTopNewsRES.data;

        })()
    }
}
</script>

<style lang="less" scoped>
.HomePage{
    .banner_content_01 {
        position: relative;
        height: 1280px;
        overflow: hidden;
        >.RESEARCH {
            position: absolute;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
        }

        >.content {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 3;
            width: 100%;
            height: 100%;
            .banner {
                .swiperConent {
                    margin: 0 auto;
                    width: 1252px;
                    height: 480px;
                    overflow: hidden;
                }

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .content_01 {
                height: 800px;
                position: relative;

                >.content {
                    width: 100%;
                    height: 100%;

                    >.left {
                        width: 640px;
                        margin-top: 164px;
                        margin-right: 119px;

                        >div {
                            >span {
                                font-size: 60px;
                                font-family: PingFangSC-Semibold;
                                font-weight: 600;
                                color: rgba(77, 61, 51, 1);
                                line-height: 84px;
                            }

                            opacity: 0;
                            transform: translateY(10px);
                            transition: all 0.5s;

                            &.active {
                                opacity: 1;
                                transform: translateY(0)
                            }
                        }

                        >span {
                            margin-top: 29px;
                            font-size: 18px;
                            font-family: PingFangSC-Regular;
                            font-weight: 400;
                            color: rgba(77, 61, 51, 1);
                        }

                        >ul {
                            margin-top: 77px;

                            li {
                                >img {
                                    width: 78px;
                                    height: 78px;
                                    transform: scale(2);
                                    opacity: 0;
                                    transition: all 0.5s;

                                    &.active {
                                        transform: scale(1);
                                        opacity: 1;
                                    }

                                    &:hover {
                                        transform: scale(1.2)
                                    }
                                }

                                >span {
                                    margin-top: 7px;
                                    font-size: 14px;
                                    font-family: PingFangSC-Regular;
                                    font-weight: 400;
                                    color: rgba(51, 51, 51, 1);
                                    transition: all 0.5s;
                                    opacity: 0;

                                    &.active {
                                        opacity: 1;
                                    }
                                }

                                &.line {
                                    width: 1px;
                                    height: 70px;
                                    background: rgba(216, 216, 216, 1);
                                }
                            }
                        }
                    }

                    >.rigth {
                        @keyframes imgMove {
                            0% {
                                transform: translateY(-20px)
                            }

                            50% {
                                transform: translateY(20px)
                            }

                            100% {
                                transform: translateY(-20px)
                            }
                        }

                        animation: imgMove 5s linear infinite;
                        margin-top: 70px;
                    }
                }
            }
        }
    }
    
    .countNum{
        height: 200px;
        background:rgba(30,163,255,1);
        ul{
            li{
                position: relative;
                width:200px;
                height:160px;
                margin-right: 50px;
                >img{
                    transform: translateY(47px);
                    transition: all 0.5s;
                }
                >span{
                    transition: all 0.5s;
                    &:nth-of-type(1){
                        font-size:80px;
                        font-family:Arial-Black;
                        font-weight:900;
                        color:rgba(255,255,255,0.2);
                        line-height:113px;
                    }
                    &:nth-of-type(2){
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        transform: translateY(-27px)
                    }
                }
                &:hover{
                    >img{
                        transform: translateY(25px);
                    }
                    >span {
                        &:nth-of-type(1) {
                            color: rgba(255, 255, 255, 1);
                        }

                        &:nth-of-type(2) {
                            transform: translateY(-20px)
                        }
                    }
                }
            }
        }
    }
    .content_02{
        height: 800px;
        .left{
            @keyframes imgMove {
                0% {
                    transform: translateY(-20px)
                }
                50% {
                    transform: translateY(0px)
                }
                100% {
                    transform: translateY(-20px)
                }
            }
            animation: imgMove 5s linear infinite;
            margin-top: 42px;
        }
        .rigth{
            .title{
                margin-top: 109px;
                font-size:60px;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                color:rgba(77,61,51,1);
            }
            .line{
                margin-top: 27px;
                display: inline-block;
                width:88px;
                height:3px;
                background:rgba(77,61,51,1);
                border-radius:5px;
                opacity:0.3195;
            }
            ul{
                margin-top: 77px;
                width: 625px;
                li{
                    float: left;
                    margin-right: 33px;
                    margin-bottom: 47px;
                    &:nth-of-type(5n){
                        margin-right: 0;
                    }
                    img{
                        width: 97px;
                        height: 97px;
                    }
                    span{
                        font-size:16px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(77,61,51,1);
                    }
                }
            }
        }
    }
    .content_03{
        height: 800px;
        position: relative;
        overflow: hidden;
        >img{
            width: 150%;
            height: 200%;
            position: absolute;
            transition: all 0.5s;
            transform: translateY(0);
            top: 0;
            right: 0;
            z-index: 1;
        }
        >ul{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 2;
            li{
                margin-right: 25px;
                width: 400px;
                height: 600px;
                background-color:rgba(255,255,255,1);
                box-shadow:0px 13px 32px 0px rgba(0,0,0,0.1);
                transition: all 0.5s;
                opacity: 0;
                transform: translateY(10px);
                &:last-of-type{
                    margin-right: 0;
                }
                .top{
                    position: relative;
                    height: 150px;
                    width: 100%;
                    margin-bottom: 34px;
                    overflow: hidden;
                    >img{
                        width: 100%;
                        height: 100%;
                        top: 0;
                        position: absolute;
                        transition: all 0.5s;
                        // &:hover{
                        //     transform: scale(1.1);
                        // }
                    }
                    >span{
                        text-align: center;
                        line-height: 150px;
                        font-size:24px;
                        font-family:PingFangSC-Semibold;
                        font-weight:600;
                        color:rgba(255,255,255,1);
                    }
                }
                >span{
                    margin-bottom: 10px;
                    width: 266px;
                    text-align: center;
                    font-size:13px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    line-height:18px;
                    color:rgba(77,61,51,1);
                    &.line{
                        width:31px;
                        height:2px;
                        background-color: #D5D5D5;
                        display: inline-block;
                    }
                }
            }
            &.active {
                li {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    }
    .content_04{
        height: 800px;
        position: relative;
        img{
            position: absolute;
            top: 0;
            right: 0;
        }
        .content {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            .title{
                margin-top: 55px;
                font-size:36px;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                color:rgba(59,59,59,1);
                line-height:50px;
            }
            .line{
                display: inline-block;
                width:79px;
                height:2px;
                background-color: #1EA3FF;
                margin-top: 15px;
            }
            ul {
                margin-top: 75px;
                li{
                    width: 240px;
                    height: 527px;
                    margin-right: 13px;
                    background:rgba(255,255,255,1);
                    .top{
                        width: 100%;
                        height: 357px;
                        position: relative;
                        overflow: hidden;
                        &:hover{
                            >img{
                                transform: scale(1.1)
                            }
                        }

                        img{
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            transition: all 0.5s;
                            top: 0;
                            left: 0;
                            transform: scale(1.2);
                            // &.active{
                            //     transform:scale(1);
                            // }
                        }
                        >div {
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            left: 0;
                            span {
                                font-size: 26px;
                                font-family: PingFangSC-Semibold;
                                font-weight: 600;
                                color: rgba(255, 255, 255, 1);
                                line-height: 34px;
                                letter-spacing: 1px;
                            }
                        }
                    }
                    .num{
                        font-size:28px;
                        font-family:Impact;
                        color:rgba(30,163,255,1);
                        line-height:34px;
                        margin-top: 28px;
                        margin-bottom: 20px;
                    }
                    >span{
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(77,61,51,1);
                        line-height:20px;
                    }
                }
            }
        }
        
    }
    .newsContent{
        width: 100%;
        height: 800px;
        >.title{
            margin-top: 50px;
            font-size:36px;
            font-family:PingFangSC-Semibold;
            font-weight:600;
            color:rgba(59,59,59,1);
            line-height:50px;
        }
        >.line{
            margin-top: 15px;
            width:79px;
            height:2px;
            background-color: #1EA3FF;
        }
        >ul{
            margin-top: 63px;
            li{
                float: left;
                margin-right: 42px;
                width:390px;
                height:559px;
                background:rgba(255,255,255,1);
                transition: all 0.5s;
                &:hover{
                    box-shadow:0px 18px 22px 0px rgba(59,59,59,0.12);
                }
                &:last-of-type{
                    margin-right: 0;
                }
                >img{
                    width:389px;
                    height:253px;
                    // background-color: #D5D5D5;
                }
                >.title{
                    display: inline-block;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 28px;
                    margin-top: 25px;
                    font-size:18px;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(59,59,59,1);
                    line-height:24px;
                    letter-spacing:1px;
                }
                >.line{
                    margin-top: 25px;
                    width:334px;
                    height:1px;
                    background:rgba(216,216,216,1);
                    opacity:0.5;
                }
                >.time{
                    margin-top: 24px;
                    margin-left: 28px;
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(59,59,59,1);
                    line-height:17px;
                    align-self: flex-start;
                }
                >.content{
                    margin-top: 10px;
                    width:334px;
                    height:66px;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(59,59,59,1);
                    line-height:22px;
                    letter-spacing:1px;
                    -webkit-line-clamp: 3;  
                }
                >.btn{
                    margin-top: 32px;
                    width: 112px;
                    height: 32px;
                    background:rgba(235,235,235,1);
                    border-radius:4px;
                    &:hover{
                        color: #fff;
                        background:rgba(30,163,255,1);
                    }
                }
            }
        }
    }
}
</style>
