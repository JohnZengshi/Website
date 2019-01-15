<template>
    <el-scrollbar 
            v-scrollbar="paperScroll" 
            ref="wrapper" 
            style="height: 100%">
        <div class="companyDynamic">
            <transition name="slide-fade">
                <router-view></router-view>
            </transition>
        </div>
        <pageBottom></pageBottom>
    </el-scrollbar>
</template>
<script>
import pageBottom from "../../components/pageBottom";
export default {
    name: "companyDynamic",
    props:{},
    data(){
        return {
            paperScrollTop: 0,
        }
    },
    components:{
        pageBottom
    },
    methods:{
        paperScroll(e) {
            this.paperScrollTop = e.scrollTop;
        },
    },
    mounted(){
        // this.paperScrollTop = this.$parent.paperScrollTop;
    }
}
</script>

<style lang="less" scoped>
.companyDynamic{
    overflow-x: hidden;
}
</style>

