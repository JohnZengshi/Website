import Vue from "vue";
Vue.directive('scrollbar', {
    bind(el, binding) {
        const selectWrap = el.querySelector('.el-scrollbar__wrap')
        selectWrap.addEventListener('scroll', function () {
            binding.value(this)
        })
    }
})