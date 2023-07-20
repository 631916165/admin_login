/*
 * @Author: '631916165' '631916165@qq.com'
 * @Date: 2023-07-19 11:09:26
 * @LastEditors: '631916165' '631916165@qq.com'
<<<<<<< HEAD
 * @LastEditTime: 2023-07-20 17:19:35
=======
 * @LastEditTime: 2023-07-20 16:46:11
>>>>>>> layout
 * @FilePath: \admin_login\src\pages\Login\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{Component,useState} from "react";
import { Card, Button, Checkbox, Form, Input,message } from 'antd';
import './index.scss'
import { login } from "api/User";
import { setToken } from "utils/Storange";

export default class Login extends Component {
    render() {
        return(
            <div className="login">
                <Card className="login-container"> 
                    {/* 标题 */}
                    <div className="title-login">
                        <h2>后台管理系统</h2>
                    </div>
                    {/* 建立表单 */}
                    <Form size="large" validateTrigger={['onChange','onBlur']}
                    onFinish={this.onFinish}>
                        <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: '请输入你的用户名!',
                            },
                        ]}
                        >
                        <Input placeholder="请输入你的用户名"/>
                        </Form.Item>

                        <Form.Item
                        label="密码："
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: '请输入你的密码!',
                            },
                            {
                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/,
                                message:'密码至少要包含大小写字母及数字,且不少于8位'
                            },
                        ]}
                        >
                        <Input.Password placeholder="请输入你的密码"/>
                        </Form.Item>

                        <Form.Item
                        name="remember"
                        valuePropName="checked"
                        rules={[
                            {
                                //自定义校验
                                validator:(rule,value) => 
                                    value
                                    ?Promise.resolve()
                                    :Promise.reject(new Error('请勾选同意后再登录'))
                                ,
                            },
                        ]}>
                        <Checkbox>我已阅读并同意[隐私条款]和[用户协议]</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 9, span: 15 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
    
    onFinish = async ({username,password}) => {
        
        const res = await login(username,password);
        // console.log('res',res);
        if (res.success === true) {
            // 登录成功
            // 1.保存token
            setToken(res.token);
            // console.log(res.token);
            // 2.跳转到管理界面
            this.props.history.push('./home');
            message.success('登录成功！')
            }
        else {
            message.error('用户名或密码不正确！')
        }
    }
}
