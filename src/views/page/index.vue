<template>
    <div class="newsDetail display_flex flex-direction_column align-items_center">
        <!-- <span class="title">{{pageData.title}}</span> -->
        <!-- <span class="time">{{pageData.update_time}}</span> -->
        <div class="pageHtml" v-html="pageData.content"></div>
    </div>
</template>
<script>
    import {
        getPageInfo
    } from "../../network/api";
    export default {
        data() {
            return {
                pageData: {},
            }
        },
        watch: {
            $route: function (val) {
                const id = val.query.id;
                this.getPageInfo(id);
            }
        },
        mounted() {
            const id = this.$route.query.id;
            this.getPageInfo(id);
        },
        methods: {
            getPageInfo(id) {
                ;(async () => {
                    let res = await getPageInfo({
                        id
                    });
                    this.pageData = res.data;
                })()
            }
        },
    }
</script>
<style lang="less">
.newsDetail{
        img{
        max-width: 100%
    }
}
</style>

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
    >.pageHtml{
        width: 730px;
        margin-bottom: 112px;
        margin-top: 80px;
    }

}
</style>