/*
 * @Author: '631916165' '631916165@qq.com'
 * @Date: 2023-07-19 19:28:30
 * @LastEditors: '631916165' '631916165@qq.com'
 * @LastEditTime: 2023-07-20 19:43:19
 * @FilePath: \admin_login\src\api\User.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import instance from 'utils/Request'
/**
 * 登录请求，用于用户登录
 * @description: 
 * @param {string} username 用户名
 * @param {string} password 密码
 * @return {*}
 */
export const login = (username,password) => {
    return instance({
        method:'POST',
        url:'/login',
        data:{
            username,
            password,
        },
    })
}

export const getUserProfile = () => {
    return instance({
        method:'GET',
        url:'/user',
    })
}