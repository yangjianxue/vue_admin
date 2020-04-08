### 2020/04/03 问题总结
 + axios 挂载时需要用 Vue.prototype.axios = axios;不能用普通的 Vue.use(axios),否则页面报错
 + 验证格式
    + 特殊字符验证：/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/gim
    + 邮箱验证（英文字母、数字、下划线、英文句号、以及中划线组成）： /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    + 密码验证（6-18位英文，数字）：/^[a-zA-Z0-9]{6,18}$/
    + 验证码验证（4位数字）： /^\d{4}$/
 + v-if/v-show引发的问题
    + v-if : 频繁的删除和创建DOM元素
    + v-show : 元素只是被隐藏，所以当登陆的时候的暂时隐藏的 '重复密码' 依然存在页面，会导致验证不通过
      + 解决办法：在验证 '重复密码' 的时候需要加一个判断，判断当前是否是登陆页面，如果是登陆则跳过 该验证

### 2020/04/07 问题总结
 + axios 实例封装 (实例调用的返回结果就是一个 promise ,所以不用再次用 promise 封装)
 + 利用 express 做服务端（结合之前 express 总结）
 + 项目路径介绍：
   +  public : 项目入口的html
   +  serve : 服务器接口相关代码
     +  index.js : 服务器入口文件
     +  router.js : 服务器接口文件
   +  src
     +  assets  静态资源文件
       +  css
       +  font
       +  img
       +  js   
         +  common.js : 公共变量等
         +  utils.js : 公共工具类  
     +  component
       +  common : 项目的公共组件
       +  util : 公共组件  
     +  http ： axios 网络请求的封装
     +  router ： 路由的封装
     +  store ： vuex 状态管理的统一管理
     +  views ：项目的主要视图组件分组
       +  Home
       +  About  
