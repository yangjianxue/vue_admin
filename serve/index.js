let express = require('express')
let router = require('./router.js')
const bodyParser = require('body-parser')

let app = express()


// 配置body-parse
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))     
// parse application/json
app.use(bodyParser.json())

// 封装路由
app.use(router)

app.listen('3000')