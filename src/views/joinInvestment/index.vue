<template>
    <div class="joinInvestment">
        <span class="title">{{routerName == 'Register'?"手机号注册":"填写资料"}}</span>
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    export default {
        name: "joinInvestment",
        data(){
            return {
                routerName: "Register"
            }
        },
        watch:{
            $route: function (val) {
                // console.log(val.name)
                this.routerName = val.name;
            },
        },
        
    }
</script>
<style lang="less" scoped>
.joinInvestment{
    // margin: 0px auto 50px;
    padding: 75px 0;
    width: 600px;
    margin: 0 auto;
    .title{
        display: inline-block;
        width: 100%;
        border-bottom: 2px solid rgba(30,163,255,1);
        margin-bottom: 30px;
        align-self: flex-start;
        font-size: 18px;
        font-weight: 600;
        line-height: 50px;
    }
}
</style>