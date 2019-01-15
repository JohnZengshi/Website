<template>
    <div class="pageBottom display_flex align-items_center flex-direction_column justify-content_flex-justify">
        <div class="top display_flex justify-content_flex-justify">
            <div class="left">
                <ul class="display_flex">
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
                        <span>{{nav_bottomData.hot_line}}</span>
                        <span>地址：</span>
                        <span>{{nav_bottomData.address}}</span>
                    </li>
                </ul>
            </div>
            <div class="rigth">
                <img :src="nav_bottomData.qrcode" alt="">
            </div>
        </div>
        <div class="bottom">
            {{nav_bottomData.copyright}}
        </div>
    </div>
</template>
<script>
import {getNav_bottom} from "../../network/api";
export default {
    data(){
        return {
            nav_bottomData: {},
        }
    },
    mounted() {;
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

<style lang="less"scoped>
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
                    margin-right: 200px;

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

</style>
