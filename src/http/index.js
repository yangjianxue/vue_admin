import axios from 'axios'

export function http(config){
    const httpAxios = axios.create({
        baseURL:'/api',
        timeout:20000
    })
    //http(config)的返回值就是一个promise
    return httpAxios(config)
}