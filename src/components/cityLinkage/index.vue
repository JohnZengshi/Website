<template>
    <div class="linkage display_flex align-items_center">
        <div>
            <el-select v-model="sheng" @change="choseProvince" placeholder="省级地区">
                <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id">
                </el-option>
            </el-select>
        </div>
        <div>
            <el-select v-model="shi" @change="choseCity" placeholder="市级地区">
                <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id">
                </el-option>
            </el-select>
        </div>
        <div v-show="!hiddenRegion">
            <el-select v-model="qu" @change="choseBlock" placeholder="区级地区">
                <el-option v-for="item in qu1" :key="item.id" :label="item.value" :value="item.id">
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import cityMap from "../../../static/data/cityMap.json"
    export default {
        props:{
            hiddenRegion:{ //是否隐藏地区
                type:Boolean,
                default:()=>{
                    return false
                }
            },
            initData: { //回填数据
                type: Array,
                default: () => {
                    return []
                }
            },
            isAutoSelectNextRank: { //是否自动选择下一级
                type: Boolean,
                default: () => {
                    return true
                }
            }
        },
        data() {
            return {
                mapJson: '../../../static/data/cityMap.json',
                province: '',
                sheng: '',
                shi: '',
                shi1: [],
                qu: '',
                qu1: [],
                city: '',
                block: '',
                selectList:[]
            }
        },
        watch:{
            initData:function(val){
                this.sheng = val[0];
                this.shi = val[1];
                this.qu = val[2];
            }
        },
        methods: {
            // 加载china地点数据，三级
            getCityData: function () {
                var that = this
                // axios.get(this.mapJson).then(function (response) {
                //     console.log(response)
                //     if (response.status == 200) {
                //         var data = response.data
                //         that.province = []
                //         that.city = []
                //         that.block = []
                //         // 省市区数据分类
                //         for (var item in data) {
                //             if (item.match(/0000$/)) { //省
                //                 that.province.push({
                //                     id: item,
                //                     value: data[item],
                //                     children: []
                //                 })
                //             } else if (item.match(/00$/)) { //市
                //                 that.city.push({
                //                     id: item,
                //                     value: data[item],
                //                     children: []
                //                 })
                //             } else { //区
                //                 that.block.push({
                //                     id: item,
                //                     value: data[item]
                //                 })
                //             }
                //         }
                //         // 分类市级
                //         for (var index in that.province) {
                //             for (var index1 in that.city) {
                //                 if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                //                     that.province[index].children.push(that.city[index1])
                //                 }
                //             }
                //         }
                //         // 分类区级
                //         for (var item1 in that.city) {
                //             for (var item2 in that.block) {
                //                 if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                //                     that.city[item1].children.push(that.block[item2])
                //                 }
                //             }
                //         }
                //     } else {
                //         console.log(response.status)
                //     }
                // }).catch(function (error) {
                //     console.log(typeof + error)
                // })
                var data = cityMap
                that.province = []
                that.city = []
                that.block = []
                // 省市区数据分类
                for (var item in data) {
                    if (item.match(/0000$/)) { //省
                        that.province.push({
                            id: item,
                            value: data[item],
                            children: []
                        })
                    } else if (item.match(/00$/)) { //市
                        that.city.push({
                            id: item,
                            value: data[item],
                            children: []
                        })
                    } else { //区
                        that.block.push({
                            id: item,
                            value: data[item]
                        })
                    }
                }
                // 分类市级
                for (var index in that.province) {
                    for (var index1 in that.city) {
                        if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                            that.province[index].children.push(that.city[index1])
                        }
                    }
                }
                // 分类区级
                for (var item1 in that.city) {
                    for (var item2 in that.block) {
                        if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                            that.city[item1].children.push(that.block[item2])
                        }
                    }
                }
            },
            // 选省
            choseProvince: function (e) {
                for (var index2 in this.province) {
                    if (e === this.province[index2].id) {

                        if (this.isAutoSelectNextRank) { //是否自动选择下一级
                            this.shi = this.province[index2].children[0].value
                            this.qu1 = this.province[index2].children[0].children
                            this.qu = this.province[index2].children[0].children[0].value
                            this.E = this.qu1[0].id

                            this.selectList[1] = this.province[index2].children[0].value;
                            if (!this.hiddenRegion) this.selectList[2] = this.province[index2].children[0].children[0].value;
                        }else{
                            this.shi = "";
                            this.selectList.pop();
                        }
                        this.shi1 = this.province[index2].children
                        this.selectList[0] = this.province[index2].value
                        this.$emit("selectChange",this.selectList);
                    }
                }
            },
            // 选市
            choseCity: function (e) {
                for (var index3 in this.city) {
                    if (e === this.city[index3].id) {
                        if (this.isAutoSelectNextRank) { //是否自动选择下一级
                            this.qu = this.city[index3].children[0].value
                            this.E = this.qu1[0].id
                            // console.log(this.E)

                            if (!this.hiddenRegion) this.selectList[2] = this.city[index3].children[0].value
                        }else{
                            this.qu = "";
                            if (!this.hiddenRegion){
                                this.selectList.pop();
                            }
                        }
                        this.qu1 = this.city[index3].children
                        this.selectList[1] = this.city[index3].value;
                        this.$emit("selectChange",this.selectList);
                    }
                }
            },
            // 选区
            choseBlock: function (e) {
                for(var index4 in this.block) {
                    if (e === this.block[index4].id) {
                        this.selectList[2] = this.block[index4].value
                    }
                }
                this.E = e;
                this.$emit("selectChange",this.selectList);
            },
        },
        created: function () {
            this.getCityData()
        },
        mounted(){
            
        }
    }
</script>

<style lang="less" scoped>
.linkage{
    >div{
        margin-right: 10px;
    }
}
</style>