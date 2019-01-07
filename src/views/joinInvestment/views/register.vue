<template>
    <div class="register display_flex flex-direction_column align-items_center">
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
                    <el-button slot="append" class="btn">获取验证码</el-button>
                </el-input>
            </el-form-item>
            <el-form-item label="设置密码" prop="parssword">
                <el-tooltip class="item" effect="dark" content="5~20位 数字、字母或下划线，区分大小写" placement="right">
                    <el-input type="password" v-model="formData.parssword"></el-input>
                </el-tooltip>
            </el-form-item>
            <el-form-item label="确认密码" prop="_parssword">
                <el-input type="password" v-model="formData._parssword"></el-input>
            </el-form-item>
        </el-form>
        <el-button class="nextBtn" @click="nextStep">下一步</el-button>
    </div>
</template>
<script>
    export default {
        
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formData._parssword !== '') {
                        this.$refs.ruleForm.validateField('_parssword');
                    }
                    callback();
                }
            };
             var _validatePass = (rule, value, callback) => {
                 if (value === '') {
                     callback(new Error('请再次输入密码'));
                 } else if (value !== this.formData.parssword) {
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
                    parssword: "",
                    _parssword: ""
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
                    parssword: [{
                        required: true,
                        validator: validatePass,
                        trigger: 'blur'
                    }],
                    _parssword: [{
                        required: true,
                        validator: _validatePass,
                        trigger: 'blur'
                    }]

                }
            }
        },
        methods:{
            nextStep(){
                this.$refs['ruleForm'].validate((res) => {
                    if (res) {
                        this.$router.push({
                            path: 'FillInformation'
                        })
                    }
                });
            }
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
                border-radius: 4px;
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