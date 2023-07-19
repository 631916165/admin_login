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