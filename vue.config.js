module.exports = {
    devServer:{
        host:'localhost',
        port:8000,
        https:false,
        open:false,
        proxy:{
            "/api":{
                target:'http://localhost:3000',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    }
}