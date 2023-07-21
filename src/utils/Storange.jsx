/*
 * @Author: '631916165' '631916165@qq.com'
 * @Date: 2023-07-20 10:22:14
 * @LastEditors: '631916165' '631916165@qq.com'
 * @LastEditTime: 2023-07-20 17:35:18
 * @FilePath: \admin_login\src\utils\Storange.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 用于封装所有的localStorage的操作

const TOKEN_KEY = 'token-geek-pc-hz21';

//保存token
export const setToken = (token) => localStorage.setItem(TOKEN_KEY,token)

//获取token
export const getToken = (token) => localStorage.getItem(TOKEN_KEY,token)


// 移除token
export const removeToken = () => localStorage.removeItem(TOKEN_KEY)

// 判断有无token
export const hasToken = () => !!getToken()
