<template>
    <div class="login-wrap">
        <div class="ms-title">手机专卖商城系统</div>
        <div class="ms-login" v-loading="loading">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="用户名/手机号"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-row>
                        <el-col :span="11">
                            <el-input v-model="ruleForm.code" placeholder="验证码"></el-input>
                        </el-col>
                        <el-col :span="11" :offset="2">
                            <el-button type="info" class="spe-btn" :disabled="disabled" @click="sendMessage('ruleForm')">{{sendm}}</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>
<script>
let LoginJS = require('./Login.js')
module.exports = LoginJS
</script>
<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.ms-title {
    position: absolute;
    top: 50%;
    width: 100%;
    margin-top: -230px;
    text-align: center;
    font-size: 30px;
    color: #fff;
}

.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 300px;
    margin: -150px 0 0 -190px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
}

.login-btn {
    text-align: center;
}

.login-btn button {
    width: 100%;
    height: 40px;
}

.spe-btn{
    width: 100%;
}
</style>
