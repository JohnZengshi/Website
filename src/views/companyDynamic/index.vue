<template>
    <div class="companyDynamic">
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: "companyDynamic",
    props:{},
    data(){
        return {
            paperScrollTop: 0,
        }
    },
    components:{},
    
    mounted(){
        this.paperScrollTop = this.$parent.paperScrollTop;
    }
}
</script>

<style lang="less" scoped>
.companyDynamic{
    
}
</style>

