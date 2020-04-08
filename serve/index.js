let express = require('express')
let router = require('./router.js')
const bodyParser = require('body-parser')

let app = express()
app.use(router)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen('3000')