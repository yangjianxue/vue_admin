// 验证用户名
// let validateUserName = (rule, value, callback) => {
//     if (!value) {
//         return callback(new Error('用户名不能为空'));
//     }
//     setTimeout(() => {
//         if (!Number.isInteger(value)) {
//             callback(new Error('请输入用户名'));
//         } else {
//             if (value < 18) {
//                 callback(new Error('不得少于6字符'));
//             } else {
//                 callback();
//             }
//         }
//     }, 1000);
// };
// 过滤特殊字符(不过滤@.)
let stripscript = (str) =>{
    let reg = /[`~!#$%^&*()_\-+=<>?:"{}|,\/;'\\[\]·~！#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/gim;
    let newStr = str.replace(reg,function($0,$1){
        return ''
    })
    return newStr;
}
// 过滤特殊字符
let stripscriptAll = (str) =>{
    let reg = /[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/gim;
    let newStr = str.replace(reg,function($0,$1){
        return ''
    })
    return newStr;
}
// 验证邮箱格式（英文字母、数字、下划线、英文句号、以及中划线组成）
let regEmail = (value) => {
    let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    // if(!reg.test(value)){
    //     return true  //返回true,说明格式正确,就不需要弹出错误提示
    // }else{
    //     return false
    // }
    //简写
    return !reg.test(value)
};
// 验证密码格式（6-18位英文，数字）
let regPass = (value) => {
    let reg =  /^[a-zA-Z0-9]{6,18}$/;
    // if(!reg.test(value)){
    //     return true;
    // }else{
    //     return false;
    // }
    //简写
    return !reg.test(value)
};
//验证验证码格式（4位数字）
let regCode = (value) =>{
    let reg = /^\d{4}$/;
    // if(!reg.test(value)){
    //     return true;
    // }else{
    //     return false;
    // }
    //简写
    return !reg.test(value)
}
export default{
    // validateUserName,// 验证用户名
    stripscript,//过滤特殊字符(不过滤@.)
    stripscriptAll,//过滤所有特殊字符
    regEmail,// 验证邮箱格式
    regPass,// 验证密码格式
    regCode//验证验证码格式
}