<template>
    <div class="newsDetail display_flex flex-direction_column align-items_center">
        <span class="title">{{newsDetail.title}}</span>
        <span class="time">{{newsDetail.update_time}}</span>
        <img :src="newsDetail.cover_img" alt="">
        <span class="content">{{newsDetail.summary}}</span>
    </div>
</template>
<script>
    import {
        getNewsInfo
    } from "../../../../network/api.js";
    export default {
        data() {
            return {
                newsDetail:{},
            }
        },
        mounted() {
            let newsId = this.$route.query.newsId;;
            (async () => {
                let getNewsInfoRES = await getNewsInfo({
                    id:newsId
                });
                if(getNewsInfoRES.errCode == 0){
                    this.newsDetail = getNewsInfoRES.data;
                }
            })()
        }
    }
</script>
<style lang="less" scoped>
.newsDetail{
    >.title{
        margin-top: 50px;
        width:742px;
        display: inline-block;
        text-align: center;
        font-size:32px;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(59,59,59,1);
        line-height:45px;
    }
    >.time{
        margin-top: 16px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(59,59,59,1);
        line-height:20px;
    }
    >img{
        margin-top: 40px;
        width:730px;
        height:323px;
    }
    >.content{
        margin-top: 40px;
        margin-bottom: 112px;
        display: inline-block;
        width:730px;
        font-size:13px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(59,59,59,1);
        line-height:24px;
    }
}
</style>
