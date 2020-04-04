<template>
    <div class="login">
        <div class="loginWrap">
            <ul class="menuTab clearfix">
                <li v-for="(menu) in menuTab" :key="menu.id" @click="handleClick(menu)" :class="{'active':curMenu == menu.name}">{{menu.txt}}</li>
            </ul>
             <el-form  :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="loginForm">
                <el-form-item prop="email" class="item-form">
                    <div>邮箱:</div>
                    <el-input v-model="ruleForm.email" autocomplete="off" placeholder="请输入邮箱"></el-input>
                </el-form-item>

                <el-form-item prop="passwd" class="itemForm">
                    <div>密码</div>
                    <el-input v-model="ruleForm.passwd" placeholder="请输入密码"></el-input>
                </el-form-item>

                <el-form-item prop="passWordAgain" class="itemForm" v-show="curMenu == 'registor'">
                    <div>确认密码</div>
                    <el-input v-model="ruleForm.passWordAgain" placeholder="请再次确认密码"></el-input>
                </el-form-item>

                <el-form-item prop="verifCode">
                    <div>验证码</div>
                    <el-row :gutter="30">
                        <el-col :span="16">
                            <el-input v-model.number="ruleForm.verifCode" placeholder="请输入验证码"></el-input>
                        </el-col>
                        <el-col :span="8">
                            <el-button type="primary" class="codebtn">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="loginBtn" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
                
            </el-form>
        </div>
    </div>
</template>

<script>
    import baseFn from '../assets/js/common.js'
    
    export default {
        name: "Login",
        mounted(){
        },
        data(){
            //验证邮箱
            let validateEMail = (rule, value, callback)=>{
                let newValue = baseFn.stripscript(value)
                this.ruleForm.email = newValue
                if (newValue === '') {
                    callback(new Error('请输入邮箱'));
                } else if(baseFn.regEmail(newValue)) {
                    callback(new Error('邮箱格式有误'));
                }else{
                    callback();
                }
            }
            //验证密码
             let validatePass = (rule, value, callback) => {
                let newValue = baseFn.stripscriptAll(value)
                this.ruleForm.passwd = newValue
                if (newValue === '') {
                    callback(new Error('请输入密码'));
                } else if(baseFn.regPass(newValue)) {
                    callback(new Error('请输入6-18位英文或数字组合'));
                }else{
                    callback();
                }
            };
            //验证验证码
            let validateCode = (rule, value, callback) =>{
                if (value === '') {
                    callback(new Error('请输入验证码'));
                } else if(baseFn.regCode(value)) {
                    callback(new Error('请输入4位正确的验证码'));
                }else{
                    callback()
                }
            } 
            //验证 再次输入密码
            let passWordAgain = (rule, value, callback) =>{
                //如果 重复密码是用 v-show ，那么重复密码需要跳过验证，否则提交无法成功；
                // 但是用 v-if 就不用，就没有这个问题，但是频繁切换会影响性能
                if(this.curMenu == 'login'){
                    callback();
                }
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return{
                menuTab:[
                    {id:0,txt:'登录',name:'login'},
                    {id:1,txt:"注册",name:'registor'}
                ],
                curMenu:'login',
                ruleForm: {
                    email: '',
                    passwd: '',
                    passWordAgain:'',
                    verifCode:''
                },
                rules: {
                    email: [
                        { validator: validateEMail, trigger: 'blur' }
                    ],
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    verifCode:[
                        {validator: validateCode, trigger: 'blur'}
                    ],
                    passWordAgain:[
                        { validator: passWordAgain, trigger: 'blur'}
                    ]
                }
            }
        },  
        methods:{
            //tab切换
            handleClick(tab, event) {
                this.curMenu = tab.name;
                console.log(tab, event);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login{
        width:100%;
        height:100vh;
        background:#1b235f;
        // display:flex;
        color:#fff;
    }
    .loginWrap{
        margin:auto;
        width:400px;
        .menuTab{
            li{
                display:inline-block;
                margin-right:10px;
                width:88px;
                line-height:36px;
                font-size:14px;
                text-align:center;
                cursor:pointer;
            }
            .active{
                background:rgba(0,0,0,.5)
            }
        }
        .loginForm{
            margin-top:15px;
            .itemForm{
                margin-bottom:20px;
                input{
                    width:300px;
                }
                .codebtn{
                    vertical-align:text-bottom;
                }
            }
            .loginBtn{
                width:100%;
                margin-top:10px;
            }
        }
    }
</style>