let checkAge = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('年龄不能为空'));
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
        } else {
            if (value < 18) {
                callback(new Error('必须年满18岁'));
            } else {
                callback();
            }
        }
    }, 1000);
};
let validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
    }
};
let validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};
export default{
    checkAge,
    validatePass,
    validatePass2
}