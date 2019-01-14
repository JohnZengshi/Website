<template>
    <div class="retailOutlets">
        <div class="top">
            <img src="../../../static/images/retailOutlets/公司动态-bg.png" alt="">
            <div class="content display_flex flex-direction_column align-items_center">
                <span>零售网点</span>
                <span class="line"></span>
            </div>
        </div>
        <div class="selectAdress display_flex align-items_center justify-content_flex-center">
            <div class="left display_flex align-items_center">
                <CityLinkage 
                    @selectChange="selectChange"
                    :hiddenRegion="true"
                    :isAutoSelectNextRank="false"></CityLinkage>
                <el-button @click="checkRetailOutlets">查询</el-button>
            </div>
            <div class="line"></div>
            <div 
                v-if="selectCity.length != 0"
                class="rigth display_flex align-items_center">
                <img src="../../../static/images/retailOutlets/地址-icon.png" alt="">
                <span>{{selectCity.join(",")}} 附近共有{{daynamicList.length}}个零售网点</span>
            </div>
        </div>
        <div class="daynamicList">
            <ul class="display_flex flex-direction_column align-items_center ">
                <li class="display_flex" :key="index" v-for="(item,index) in daynamicList">
                    <!-- <img :src="item.img" alt=""> -->
                    <div class="rigth display_flex flex-direction_column">
                        <span class="title">{{item.title}}</span>
                        <span class="line"></span>
                        <span class="address">地址：{{item.address}}</span>
                        <!-- <span class="connet">联系人：{{item.connet}}</span> -->
                        <span class="phone">电话：{{item.phone}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import CityLinkage from "../../components/cityLinkage";
    import {getRegion,getRetailer} from "../../network/api";
    export default {
        name: "retailOutlets",
        props: {},
        data() {
            return {
                paperScrollTop: 0,
                getRetailerRES_DATA: [],
                cityList:[],
                selectCity:[]
            }
        },
        components:{
            CityLinkage
        },
        computed:{
            daynamicList(){
                let list = this.getRetailerRES_DATA.map((val)=>{
                    return {
                        img: "",
                        title: val.region_name,
                        address: val.address,
                        // connet: "",
                        phone: val.mobile
                    }
                })
                return list
            }
        },
        methods:{
            selectChange(val){
                console.log(val);
                this.selectCity = val;
            },
            checkRetailOutlets(){
                ;(async()=>{
                    let regionId = await this.getRegion(this.selectCity);
                    let region_type;
                    if(this.selectCity.length == 1){
                        region_type = 1
                    }else if(this.selectCity.length == 2) {
                        region_type = 2
                    }else if(this.selectCity.length == 3){
                        region_type = 3
                    }
                    let getRetailerRES = await getRetailer({
                        store_no: this.GlobalData.store_no,
                        region_id: regionId,
                        region_type,
                    });
                    if(getRetailerRES.errCode == 0){
                        this.getRetailerRES_DATA = getRetailerRES.data
                    }
                })()
            },
            getRegion(selectCity) {
                let cityList = this.cityList;
                let cityRegion_id = [];
                return (async () => {
                    for (let index = 0; index < selectCity.length; index++) {
                        const element = selectCity[index];
                        let item = cityList.find((val) => {
                            return val.name == element;
                        });
                        if (item) {
                            cityRegion_id.push(item.id);
                            let getRegionRES = await getRegion({
                                store_no: this.GlobalData.store_no,
                                id: item.id
                            });
                            if (getRegionRES.errCode == 0) {
                                cityList = getRegionRES.data;
                            }
                        }
                    }
                    console.log();
                    return cityRegion_id[cityRegion_id.length - 1];
                })()
            }
        },
        mounted() {
            this.paperScrollTop = this.$parent.paperScrollTop;
            ;(async()=>{
                let getRegionRES = await getRegion({
                   store_no: this.GlobalData.store_no,
                   id: "1"
               });
               if(getRegionRES.errCode == 0){
                    this.cityList = getRegionRES.data
               }
            })()
        }
    }
</script>

<style lang="less" scoped>
    .retailOutlets {
        background-color: #FAFAFC;
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
        .selectAdress{
            width:100%;
            height:100px;
            background:rgba(255,255,255,1);
            margin: 14px 0;
            .left{
                >button{
                    width:212px;
                    height:40px;
                    background:rgba(30,163,255,1);
                    color: #fff;
                }
            }
            .line{
                width:1px;
                height:63px;
                background-color: #979797;
                margin-right: 99px;
                margin-left: 71px;
            }
            .rigth{
                img{
                    margin-right: 16px;
                }
                >span{
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(59,59,59,1);
                    line-height:20px;
                }
            }
        }
        .daynamicList {
            width: 100%;
            background-color: #FFF;
            min-height: 250px;
            ul {
                width: 100%;
                padding-top: 30px;

                li {
                    border-bottom: 1px solid #D8D8D8;
                    margin-bottom: 30px;
                    width: 1192px;
                    >img {
                        width: 330px;
                        height: 200px;
                        margin-bottom: 30px;
                        margin-right: 46px;
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
                            margin-bottom: 15px;
                        }

                        .line{
                            width:794px;
                            height:2px;
                            background-color: #979797;
                            margin-bottom: 27px;
                            opacity: 0.2;
                        }
                        
                        .address,.connet,.phone{
                            font-size:14px;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(59,59,59,1);
                            line-height:20px;
                            margin-bottom: 11px;
                        }
                    }

                    &:last-of-type {
                        margin-bottom: 80px;
                    }
                }
            }
        }
    }
</style>