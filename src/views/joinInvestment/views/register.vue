<template>
    <div     
        v-loading="applyStepOneIng"
        class="register display_flex flex-direction_column align-items_center">
        <el-form 
            class="form"
            ref="ruleForm" 
            :model="formData" 
            @submit.native.prevent 
            label-width="80px"
            :rules="formRules">
            <el-form-item label="手机号" prop="phone">
                <el-tooltip class="item" effect="dark" content="注册成功后即可使用手机号登录" placement="right">
                    <el-input v-model="formData.phone"></el-input>
                </el-tooltip>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input v-model="formData.code">
                    <el-button 
                        slot="append" 
                        @click="getCode"
                        :class="{active:!getCodeIng}" 
                        class="btn">{{sendCodeText}}</el-button>
                </el-input>
            </el-form-item>
            <el-form-item label="设置密码" prop="password">
                <el-tooltip class="item" effect="dark" content="5~20位 数字、字母或下划线，区分大小写" placement="right">
                    <el-input type="password" v-model="formData.password"></el-input>
                </el-tooltip>
            </el-form-item>
            <el-form-item label="确认密码" prop="_password">
                <el-input type="password" v-model="formData._password"></el-input>
            </el-form-item>
        </el-form>
        <el-button class="nextBtn" @click="nextStep">下一步</el-button>
    </div>
</template>
<script>
    import {applyStepOne,sendCode} from "../../../network/api";
    import {$message} from "../../../utils/elmApi";
    export default {
        name: "register",
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formData._password !== '') {
                        this.$refs.ruleForm.validateField('_password');
                    }
                    callback();
                }
            };
             var _validatePass = (rule, value, callback) => {
                 if (value === '') {
                     callback(new Error('请再次输入密码'));
                 } else if (value !== this.formData.password) {
                     console.log(value)
                     callback(new Error('两次输入密码不一致!'));
                 } else {
                     callback();
                 }
             };
            return {
                formData: {
                    phone: "",
                    code: "",
                    password: "",
                    _password: ""
                },
                formRules: {
                    phone: [{
                        required: true,
                        message: "请输入手机号",
                        trigger: 'blur'
                    }],
                    code: [{
                        required: true,
                        message: "请输入验证码",
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    _password: [{
                        required: true,
                        validator: _validatePass,
                        trigger: 'blur'
                    }]

                },
                time: 60,
                getCodeIng: false,
                applyStepOneIng: false,
            }
        },
        computed:{
            sendCodeText() {
                if(this.getCodeIng){
                    return `重新获取(${this.time})s`
                }else{
                    return "获取验证码"
                }
                
            },
            getCodeParams() {
                return {
                    store_no: this.GlobalData.store_no,
                    phone: this.formData.phone,
                }
            },
            applyStepOneParams(){
                return {
                    store_no: this.GlobalData.store_no,
                    allow: 1,
                    phone: this.formData.phone,
                    code: this.formData.code,
                    password: this.formData.password,
                    repassword: this.formData._password,
                }
            }
        },
        methods:{
            getCode(){
                if (this.formData.phone != '' && !this.getCodeIng) {
                    (async () => {
                        let sendCodeRES = await sendCode(this.getCodeParams)
                        if(sendCodeRES.errCode == 0){
                            this.getCodeIng = true;
                            this.setInterval();
                        }
                        let res =await $message(sendCodeRES.errMsg, 'success');
                    })()
                }
            },
            setInterval() {
                let XX = setInterval(() => {
                    if (this.time == 0) {
                        this.getCodeIng = false;
                        this.time = 60;
                        clearInterval(XX);
                    } else {
                        this.time--;
                    }
                }, 1000);
            },
            nextStep(){
                this.$refs['ruleForm'].validate((res) => {
                    if (res) {
                        ;
                        (async () => {
                            this.applyStepOneIng = true;
                            let applyStepOneRES = await applyStepOne(this.applyStepOneParams)
                            if (applyStepOneRES.errCode == 0 || applyStepOneRES.errCode == 100) {
                                let res = await $message(applyStepOneRES.errMsg,'success')
                                if (res) {
                                    this.applyStepOneIng = false;
                                    this.$router.push({
                                        path: 'FillInformation',
                                        query: {
                                            user_id: applyStepOneRES.data.user_id
                                        }
                                    })
                                }
                            }else{
                                let res =await $message(applyStepOneRES.errMsg,'warning')
                                if(res){
                                    this.applyStepOneIng = false;
                                }
                            }
                            
                        })()
                    }
                });
            }
        },
        mounted(){
        }
    }
</script>

<style lang="less" scoped>
    .register {
        .form {
            .btn {
                width: 112px;
                height: 38px;
                background: rgba(235, 235, 235, 1);
                transition: all 0.2s;
                border-radius: 4px;
                &.active{
                    color: #ffffff;
                    background-color: #1ea3ff;
                }
            }
        }

        .nextBtn {
            margin-top: 32px;
            width: 112px;
            height: 32px;
            background: rgba(30, 163, 255, 1);
            border-radius: 4px;
            color: #ffffff;
        }
    }
</style>