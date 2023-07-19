import axios from 'axios'

// 创建axios实例
const instance = axios.create({
    baseURL:'http://127.0.0.1:5000/api',
    timeout:5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (error) {
        return Promise.reject(error)
    }
)
export default instance;