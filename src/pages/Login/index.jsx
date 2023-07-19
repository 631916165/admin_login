import React,{Component} from "react";
import { Card, Button, Checkbox, Form, Input } from 'antd';
import './index.scss'
import instance from 'utils/Request'

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
    
    onFinish = async (username,password) => {
        console.log(username,password);
        const res = await instance({
            method:'post',
            url:'/login',
            data:{
                username,
                password
            }
        })
        console.log('res',res);
    }
}