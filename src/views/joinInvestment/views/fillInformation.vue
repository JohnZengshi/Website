<template>
    <div class="fillInformation">
        <div class="top">
            <span class="title">商户类型</span>
            <el-radio-group v-model="businessType">
                <el-radio label="1">零售商</el-radio>
                <el-radio label="2">服务商</el-radio>
                <el-radio label="3">渠道商</el-radio>
            </el-radio-group>
        </div>
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
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证正面</span>
                        </div>
                        <div class="Reverse">
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证反面</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="签约合同 (带有双方公司名称)" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="详细地址" label-width="100px">
                    <div>
                        <CityLinkage></CityLinkage>
                        <el-input class="detailAdress" v-model="retailersFormData.detailAdress"></el-input>
                    </div>
                </el-form-item>
            </el-form>
        </transition>
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
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证正面</span>
                        </div>
                        <div class="Reverse">
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证反面</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="公司营业执照" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="签约合同 (带有双方公司名称)" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="签约合影照片" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="负责区域" label-width="100px">
                    <div>
                        <CityLinkage :hiddenRegion="true"></CityLinkage>
                    </div>
                </el-form-item>
            </el-form>
        </transition>
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
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证正面</span>
                        </div>
                        <div class="Reverse">
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                            <span>身份证反面</span>
                        </div>
                    </div>
                </el-form-item>
                <el-form-item label="公司营业执照" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="签约合同 (带有双方公司名称)" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="签约合影照片" label-width="180px">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="负责区域" label-width="100px">
                    <div>
                        <CityLinkage :hiddenRegion="true"></CityLinkage>
                    </div>
                </el-form-item>
            </el-form>
        </transition>
        <el-button class="submitBtn" @click="submitBtn">提交</el-button>
    </div>
</template>
<script>
    import CityLinkage from "../../../components/cityLinkage";
    export default {
        data(){
            return {
                businessType: "1",
                retailersFormData: {
                    businessName: "",
                    connetName: "",
                    businessOrder: "",
                    sampleAmount: "",
                    detailAdress: "",
                },
                distributorsFormData: {
                    businessName: "",
                    connetName: "",
                    marginAmount: "",
                },
                facilitatorFormData: {
                    businessName: "",
                    connetName: "",
                    marginAmount: "",
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
                imageUrl: ''
            }
        },
        components:{
            CityLinkage
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            submitBtn() {
                if (this.businessType == '1') {
                    this.$refs['retailersForm'].validate((res) => {
                        if (res) {
                            console.log("表单无误")
                        }
                    });
                }else if(this.businessType == '2'){
                    this.$refs['facilitatorForm'].validate((res) => {
                        if (res) {
                            console.log("表单无误")
                        }
                    });
                }else if(this.businessType == '3'){
                    this.$refs['distributorsForm'].validate((res) => {
                        if (res) {
                            console.log("表单无误")
                        }
                    });
                }
                
            }
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