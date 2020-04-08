const express = require('express')


let router = express.Router()

router.get('/login',(req,res) =>{
    // res.json('登陆成功')
    
        // parse application/json
        // const data = req.body
        // console.log(req,data)
        res.send('got a POST request')
})

router.post('/login',(req,res) =>{
    // res.json('登陆成功')
    
        // parse application/json
        const data = req.body
        console.log(data)
        res.json('got a POST request')
})

module.exports = router