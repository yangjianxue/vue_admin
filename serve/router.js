const express = require('express')


let router = express.Router()

router.get('/login',(req,res) =>{
    // res.json('登陆成功')
    console.log(req.query)
        // parse application/json
        // const data = req.body
        // console.log(req,data)
        res.send('got a get request')
})

// router.post('/students/new',(req,res)=>{
//     Student.save(req.body,(err,data)=>{
//         if(err){
//             res.statusCode('500').send('server error')
//         }
//         res.redirect('/students')
//     })
// })
router.post('/login',(req,res) =>{
    // res.json('登陆成功')
    
        // parse application/json
        const data = req.body
        console.log(data)
        res.json('got a POST request')
})

module.exports = router