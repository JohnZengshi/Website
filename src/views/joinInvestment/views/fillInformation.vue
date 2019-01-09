<template>
    <div class="fillInformation" v-loading="submitIng">
        <div class="top">
            <span class="title">商户类型</span>
            <el-radio-group v-model="businessType">
                <el-radio label="1">零售商</el-radio>
                <el-radio label="2">服务商</el-radio>
                <el-radio label="3">渠道商</el-radio>
            </el-radio-group>
        </div>
        <!-- 零售商 -->
        <transition name="slide-fade">
            <el-form 
                v-show="businessType == 1"
                class="form" 
                :model="retailersFormData"
                :rules="retailersFormRules"
                ref="retailersForm"
                label-position="left">
                <el-form-item label="商户名称" label-width="100px" prop="businessName">
                    <el-input v-model="retailersFormData.businessName"></el-input>
                </el-form-item>
                <el-form-item label="联系人姓名" label-width="100px" prop="connetName">
                    <el-input v-model="retailersFormData.connetName"></el-input>
                </el-form-item>
                <el-form-item label="渠道商编号" label-width="100px" prop="businessOrder">
                    <el-input v-model="retailersFormData.businessOrder"></el-input>
                </el-form-item>
                <el-form-item label="已采购样品金额" label-width="130px" prop="sampleAmount">
                    <el-input v-model="retailersFormData.sampleAmount">
                        <template slot="append">元</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="公司法人身份证照片" label-width="180px">
                    <div class="idCard display_flex align-items_center">
                        <div class="front">
                            <el-upload
                                class="avatar-uploader"
                                action="http://www.wanjiaan.com/upload/upload"
                                :show-file-list="false"
                                :on-success="(res)=>retailersFormData.idcard_font_img = res.file"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="retailersFormData.idcard_font_img" :src="retailersFormData.idcard_font_img" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证正面</span>
                        </div>
                        <div class="Reverse">
                            <el-upload
                                class="avatar-uploader"
                                action="http://www.wanjiaan.com/upload/upload"
                                :show-file-list="false"
                                :on-success="(res)=>retailersFormData.idcard_back_img = res.file"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="retailersFormData.idcard_back_img" :src="retailersFormData.idcard_back_img" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证反面</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="签约合同 (带有双方公司名称)" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="http://www.wanjiaan.com/upload/upload"
                        :show-file-list="false"
                        :on-success="(res)=>retailersFormData.signing_contract_img = res.file"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="retailersFormData.signing_contract_img" :src="retailersFormData.signing_contract_img" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="详细地址" label-width="100px">
                    <div>
                        <CityLinkage
                            @selectChange="selectChange"></CityLinkage>
                        <el-input class="detailAdress" v-model="retailersFormData.detailAdress"></el-input>
                    </div>
                </el-form-item>
            </el-form>
        </transition>
        <!-- 服务商 -->
        <transition name="slide-fade">
            <el-form
                v-show="businessType == 2"
                class="form" 
                :model="facilitatorFormData"
                :rules="facilitatorFormRules"
                ref="facilitatorForm"
                label-position="left">
                <el-form-item label="服务商名称" label-width="100px" prop="businessName">
                    <el-input v-model="facilitatorFormData.businessName"></el-input>
                </el-form-item>
                <el-form-item label="联系人姓名" label-width="100px" prop="connetName">
                    <el-input v-model="facilitatorFormData.connetName"></el-input>
                </el-form-item>
                <el-form-item label="缴纳保证金金额" label-width="130px" prop="marginAmount">
                    <el-input v-model="facilitatorFormData.marginAmount">
                        <template slot="append">元</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="公司法人身份证照片" label-width="180px">
                    <div class="idCard display_flex align-items_center">
                        <div class="front">
                            <el-upload
                                class="avatar-uploader"
                                action="http://www.wanjiaan.com/upload/upload"
                                :show-file-list="false"
                                :on-success="(res)=>facilitatorFormData.idcard_font_img = res.file"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="facilitatorFormData.idcard_font_img" :src="facilitatorFormData.idcard_font_img" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证正面</span>
                        </div>
                        <div class="Reverse">
                            <el-upload
                                class="avatar-uploader"
                                action="http://www.wanjiaan.com/upload/upload"
                                :show-file-list="false"
                                :on-success="(res)=>facilitatorFormData.idcard_back_img = res.file"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="facilitatorFormData.idcard_back_img" :src="facilitatorFormData.idcard_back_img" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证反面</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="公司营业执照" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="http://www.wanjiaan.com/upload/upload"
                        :show-file-list="false"
                        :on-success="(res)=>facilitatorFormData.license_img = res.file"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="facilitatorFormData.license_img" :src="facilitatorFormData.license_img" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="签约合同 (带有双方公司名称)" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="http://www.wanjiaan.com/upload/upload"
                        :show-file-list="false"
                        :on-success="(res)=>facilitatorFormData.signing_contract_img = res.file"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="facilitatorFormData.signing_contract_img" :src="facilitatorFormData.signing_contract_img" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="签约合影照片" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="http://www.wanjiaan.com/upload/upload"
                        :show-file-list="false"
                        :on-success="(res)=>facilitatorFormData.group_photo = res.file"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="facilitatorFormData.group_photo" :src="facilitatorFormData.group_photo" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="负责区域" label-width="100px">
                    <div>
                        <CityLinkage 
                            @selectChange="selectChange"
                            :hiddenRegion="true"></CityLinkage>
                    </div>
                </el-form-item>
            </el-form>
        </transition>
        <!-- 渠道商 -->
        <transition name="slide-fade">
            <el-form
                v-show="businessType == 3"
                class="form" 
                :model="distributorsFormData"
                :rules="distributorsFormRules"
                ref="distributorsForm"
                label-position="left">
                <el-form-item label="渠道商名称" label-width="100px" prop="businessName">
                    <el-input v-model="distributorsFormData.businessName"></el-input>
                </el-form-item>
                <el-form-item label="联系人姓名" label-width="100px" prop="connetName">
                    <el-input v-model="distributorsFormData.connetName"></el-input>
                </el-form-item>
                <el-form-item label="缴纳保证金金额" label-width="130px" prop="marginAmount">
                    <el-input v-model="distributorsFormData.marginAmount">
                        <template slot="append">元</template>
                    </el-input>
                </el-form-item>
                <el-form-item label="公司法人身份证照片" label-width="180px">
                    <div class="idCard display_flex align-items_center">
                        <div class="front">
                            <el-upload
                                class="avatar-uploader"
                                action="http://www.wanjiaan.com/upload/upload"
                                :show-file-list="false"
                                :on-success="(res)=>distributorsFormData.idcard_font_img = res.file"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="distributorsFormData.idcard_font_img" :src="distributorsFormData.idcard_font_img" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证正面</span>
                        </div>
                        <div class="Reverse">
                            <el-upload
                                class="avatar-uploader"
                                action="http://www.wanjiaan.com/upload/upload"
                                :show-file-list="false"
                                :on-success="(res)=>distributorsFormData.idcard_back_img = res.file"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="distributorsFormData.idcard_back_img" :src="distributorsFormData.idcard_back_img" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证反面</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="公司营业执照" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="http://www.wanjiaan.com/upload/upload"
                        :show-file-list="false"
                        :on-success="(res)=>distributorsFormData.license_img = res.file"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="distributorsFormData.license_img" :src="distributorsFormData.license_img" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="签约合同 (带有双方公司名称)" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="http://www.wanjiaan.com/upload/upload"
                        :show-file-list="false"
                        :on-success="(res)=>distributorsFormData.signing_contract_img = res.file"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="distributorsFormData.signing_contract_img" :src="distributorsFormData.signing_contract_img" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="签约合影照片" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="http://www.wanjiaan.com/upload/upload"
                        :show-file-list="false"
                        :on-success="(res)=>distributorsFormData.group_photo = res.file"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="distributorsFormData.group_photo" :src="distributorsFormData.group_photo" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="负责区域" label-width="100px">
                    <div>
                        <CityLinkage 
                            @selectChange="selectChange"
                            :hiddenRegion="true"></CityLinkage>
                    </div>
                </el-form-item>
            </el-form>
        </transition>
        <el-button class="submitBtn" @click="submitBtn">提交</el-button>
    </div>
</template>
<script>
    import CityLinkage from "../../../components/cityLinkage";
    import {getRegion,applyStepTwo} from "../../../network/api";
    import {$message} from "../../../utils/elmApi";
    export default {
        name: "fillInformation",
        data(){
            return {
                businessType: "1",
                retailersFormData: { //零售商
                    businessName: "",
                    connetName: "",
                    businessOrder: "",
                    sampleAmount: "",
                    detailAdress: "",
                    idcard_font_img: "",
                    idcard_back_img: "",
                    signing_contract_img: "",
                },
                distributorsFormData: { //渠道商
                    businessName: "",
                    connetName: "",
                    marginAmount: "",
                    idcard_font_img: "",
                    idcard_back_img: "",
                    license_img: "",
                    signing_contract_img: "",
                    group_photo: "",
                },
                facilitatorFormData: { //服务商
                    businessName: "",
                    connetName: "",
                    marginAmount: "",
                    idcard_font_img: "",
                    idcard_back_img: "",
                    license_img: "",
                    signing_contract_img: "",
                    group_photo: "",
                },
                retailersFormRules: {
                    businessName: [{
                        required: true,
                        message: "请输入商户名称",
                        trigger: 'blur'
                    }],
                    connetName: [{
                        required: true,
                        message: "请输入联系人姓名",
                        trigger: 'blur'
                    }],
                    businessOrder: [{
                        required: true,
                        message: "请输入渠道商编号",
                        trigger: 'blur'
                    }],
                    sampleAmount: [{
                        required: true,
                        message: "请输入已采购样品金额",
                        trigger: 'blur',
                    }]
                },
                distributorsFormRules: {
                    businessName: [{
                        required: true,
                        message: "请输入服务商名称",
                        trigger: 'blur'
                    }],
                    connetName: [{
                        required: true,
                        message: "请输入联系人姓名",
                        trigger: 'blur'
                    }],
                    marginAmount: [{
                        required: true,
                        message: "请输入缴纳保证金金额",
                        trigger: 'blur'
                    }],
                },
                facilitatorFormRules: {
                    businessName: [{
                        required: true,
                        message: "请输入渠道商名称",
                        trigger: 'blur'
                    }],
                    connetName: [{
                        required: true,
                        message: "请输入联系人姓名",
                        trigger: 'blur'
                    }],
                    marginAmount: [{
                        required: true,
                        message: "请输入缴纳保证金金额",
                        trigger: 'blur'
                    }],
                },
                user_id: "",
                imageUrl: '',
                cityList: [],
                selectCity:[],
                regionId: "",
                submitIng: false,
            }
        },
        computed:{
            applyStepTwoParams(){
                let regionId = this.regionId;
                let region_name = this.selectCity.join(",");
                if(this.businessType == '1'){ //零售商
                    return {
                        store_no: this.GlobalData.store_no,
                        user_id: this.user_id,
                        type: '3',
                        name: this.retailersFormData.businessName,
                        user_name: this.retailersFormData.connetName,
                        channel_no: this.retailersFormData.businessOrder,
                        sample_amount: this.retailersFormData.sampleAmount,
                        address: this.retailersFormData.detailAdress,
                        region_id: regionId,
                        region_name: region_name,
                        idcard_font_img: this.retailersFormData.idcard_font_img,
                        idcard_back_img: this.retailersFormData.idcard_back_img,
                        signing_contract_img: this.retailersFormData.signing_contract_img,
                    }
                }else if(this.businessType == '2'){ //服务商
                    return {
                        store_no: this.GlobalData.store_no,
                        user_id: this.user_id,
                        type: '4',
                        name: this.facilitatorFormData.businessName,
                        user_name: this.facilitatorFormData.connetName,
                        security_money: this.facilitatorFormData.marginAmount,
                        region_id: regionId,
                        region_name: region_name,
                        idcard_font_img: this.facilitatorFormData.idcard_font_img,
                        idcard_back_img: this.facilitatorFormData.idcard_back_img,
                        license_img: this.facilitatorFormData.license_img,
                        signing_contract_img: this.facilitatorFormData.signing_contract_img,
                        group_photo: this.facilitatorFormData.group_photo,
                    }
                }else if(this.businessType == '3'){ //渠道商
                    return {
                        store_no: this.GlobalData.store_no,
                        user_id: this.user_id,
                        type: '2',
                        name: this.distributorsFormData.businessName,
                        user_name: this.distributorsFormData.connetName,
                        security_money: this.distributorsFormData.marginAmount,
                        region_id: regionId,
                        region_name: region_name,
                        idcard_font_img: this.distributorsFormData.idcard_font_img,
                        idcard_back_img: this.distributorsFormData.idcard_back_img,
                        license_img: this.distributorsFormData.license_img,
                        signing_contract_img: this.distributorsFormData.signing_contract_img,
                        group_photo: this.distributorsFormData.group_photo,
                    }
                }
            }
        },
        components:{
            CityLinkage
        },
        methods: {
            handleAvatarSuccess(res, file) {
                console.log(res)
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                // if (!isJPG) {
                //     this.$message.error('上传头像图片只能是 JPG 格式!');
                // }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isLt2M;
            },
            getRegion(selectCity) { //获取最终区域id
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
            },
            selectChange(val){
                console.log(val)
                this.selectCity = val;
            },
            submitBtn() {
                const submitFrom = () => {;
                    (async () => {
                        this.submitIng = true;
                        this.regionId = await this.getRegion(this.selectCity);
                        let applyStepTwoRES = await applyStepTwo(this.applyStepTwoParams);
                        if (applyStepTwoRES.errCode == 0) {
                            if (await $message(applyStepTwoRES.errMsg, 'success')) {
                                this.submitIng = false;
                                window.location.href = "http://zxjsj.zhidekan.me/"
                            }
                        } else {
                            if (await $message(applyStepTwoRES.errMsg, 'warning')) {
                                this.submitIng = false;
                            }
                        }
                    })()
                }
                if (this.businessType == '1') { //零售商
                    this.$refs['retailersForm'].validate((res) => {
                        if (res) {
                            console.log("表单无误");
                            submitFrom()
                        }
                    });
                } else if (this.businessType == '2') { //服务商
                    this.$refs['facilitatorForm'].validate((res) => {
                        if (res) {
                            console.log("表单无误")
                            submitFrom()
                        }
                    });
                } else if (this.businessType == '3') { //渠道商
                    this.$refs['distributorsForm'].validate((res) => {
                        if (res) {
                            console.log("表单无误")
                            submitFrom()
                        }
                    });
                }
                
            }
        },
        mounted(){
            ;(async()=>{
                let getRegionRES = await getRegion({
                   store_no: this.GlobalData.store_no,
                   id: "1"
               });
               if(getRegionRES.errCode == 0){
                    this.cityList = getRegionRES.data
               }else{
                   $message(getRegionRES.errMsg,'warning')
               }
            })()
            this.user_id = this.$route.query.user_id;
        }
    }
</script>
<style lang="less">
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}


.fillInformation {
    .top{
        margin-bottom: 30px;
        .title{
            margin-right: 35px;
        }
    }
    .form {
        .idCard {
            .front{
                margin-right: 60px;
            }
        }
        .detailAdress{
            margin-top: 20px;
        }
    }
    .submitBtn{
        margin-top: 32px;
        width: 112px;
        height: 32px;
        background: rgba(30, 163, 255, 1);
        border-radius: 4px;
        color: #ffffff;
    }
}

</style>