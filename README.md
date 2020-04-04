# vue_admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 2020/04/03 问题总结
 + axios 挂载时需要用 Vue.prototype.axios = axios;不能用普通的 Vue.use(axios)
 + 验证格式
    + 邮箱验证：
    + 密码验证：
    + 验证码验证：
 + v-if/v-show引发的问题
    + 当切换
