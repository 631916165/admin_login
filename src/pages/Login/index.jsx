import React,{Component} from "react";
import { Card} from 'antd';
import './index.css'

export default class Login extends Component {
    render() {
        return(
            <div className="login">
                <Card className="login-container"> 
                <div className="title-login">
                    <h2>后台管理系统</h2>
                </div>
                </Card>
            </div>
        )
    }
}