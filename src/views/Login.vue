<template>


    <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
            <h2>超市管理系统</h2>
            <!--错误方式-->
            <!--<el-image src="src/assets/1.png"></el-image>-->
            <!--<el-image src="require('@/assets/1.png')"></el-image>-->
            <!--正确方式-->
            <el-image :src="require('@/assets/仓库.png')"></el-image>
        </el-col>
        <el-col :span="1"><el-divider direction="vertical"></el-divider></el-col>
        <el-col :span="6">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username" style="width: 380px">
                    <el-input v-model="ruleForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" style="width: 380px">
                    <el-input v-model="ruleForm.password" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code" style="width: 380px">
                    <el-input v-model="ruleForm.code" style="width: 172px;float: left"></el-input>
                    <el-image src=""></el-image>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" icon="el-icon-thumb">登录</el-button>
                    <el-button @click="resetForm('ruleForm')" icon="el-icon-refresh">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    code: '',
                    token:''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                    code: [
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                        { min: 5, max: 5, message: '长度为 5 个字符', trigger: 'blur' }
                    ],
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/url',this.ruleForm).then(res=>{
                            
                        })
                    } else {
                        console.log('登录失败');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .el-row{
        background-color: #fafafa;
        height: 100vh;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
    }
    .el-divider{
        height: 200px;
    }
</style>