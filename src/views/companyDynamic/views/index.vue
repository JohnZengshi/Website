<template>
    <div>
        <div class="top">
            <img src="../../../../static/images/companyDynamic/公司动态-bg.png" alt="">
            <div class="content display_flex flex-direction_column align-items_center">
                <span>公司动态</span>
                <span class="line"></span>
            </div>
        </div>
        <div class="daynamicList">
            <ul class="display_flex flex-direction_column align-items_center ">
                <router-link 
                    class="display_flex"
                    :key="index"
                    tag="li"
                    :to="{path:'/CompanyDynamic/NewsDetail',query:{newsId:item.id}}"
                    v-for="(item,index) in daynamicList">
                    <img :src="item.img" alt="">
                    <div class="rigth display_flex flex-direction_column">
                        <span class="title">{{item.title}}</span>
                        <span class="time">{{item.time}}</span>
                        <span class="content unilineText">{{item.content}}</span>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>
<script>
import {getCompany_dynamic} from "../../../network/api";
export default {
    data(){
        return {
            getCompany_dynamicRES_DATA:[],
        }
    },
    props: {
    },
    computed:{
        daynamicList() {
            let list = this.getCompany_dynamicRES_DATA.map((val)=>{
                return {
                    img: val.cover_img,
                    title: val.title,
                    time: val.update_time,
                    content: val.summary,
                    id: val.id
                }
            })
            return list
        }
    },
    mounted(){
        ;(async()=>{
            let getCompany_dynamicRES = await getCompany_dynamic({
                store_no: this.GlobalData.store_no
            });
            if(getCompany_dynamicRES.errCode == 0){
                this.getCompany_dynamicRES_DATA = getCompany_dynamicRES.data;
            }
        })()
    }
}
</script>

<style lang="less"scoped>
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

.daynamicList {
    width: 100%;

    ul {
        width: 100%;
        margin-top: 30px;

        li {
            border-bottom: 1px solid #D8D8D8;
            margin-bottom: 30px;

            >img {
                width: 330px;
                height: 200px;
                margin-bottom: 30px;
                margin-right: 24px;
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
                }

                .time {
                    margin-top: 10px;
                    font-size: 12px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(59, 59, 59, 1);
                    line-height: 17px;
                }

                .content {
                    max-width: 898px;
                    -webkit-line-clamp: 5;
                    margin-top: 35px;
                    font-size: 13px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(59, 59, 59, 0.6);
                    line-height: 18px;
                }
            }

            &:last-of-type {
                margin-bottom: 80px;
            }
        }
    }
}

</style>
