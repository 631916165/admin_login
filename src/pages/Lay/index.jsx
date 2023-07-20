/*
 * @Author: '631916165' '631916165@qq.com'
 * @Date: 2023-07-19 11:12:10
 * @LastEditors: '631916165' '631916165@qq.com'
 * @LastEditTime: 2023-07-20 17:17:56
 * @FilePath: \admin_login\src\pages\Layout\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{Component} from "react";
import styles from './index.module.scss';
import {Layout,Menu,Popconfirm,message} from 'antd'
import {HomeOutlined,DiffOutlined,EditOutlined, LogoutOutlined} from '@ant-design/icons'
import {Switch,Route,Link} from 'react-router-dom'
import ArticleList  from 'pages/ArticleList'
import ArticlePublish from 'pages/ArticlePublish'
import Home from 'pages/Home'
import { removeToken } from "utils/Storange";

const {Header,Content,Sider} = Layout;
export default class Lay extends Component {
    render() {
        return (
            <div className={styles.layout}>
                <Layout>
                    <Header className="header">
                        <div className="layout-title">
                            <h2>后台管理系统</h2>
                        </div>
                        <div className="profile">
                            <span>用户名</span>
                            <span>
                                <Popconfirm
                                    title="你确定要退出后台管理系统吗？"
                                    okText="确定"
                                    cancelText="取消"
                                    onConfirm={this.onConfirm}
                                >
                                     <LogoutOutlined />{' '}退出
                                </Popconfirm>
                            </span>
                        </div>
                    </Header>
                    <Layout>
                        <Sider width={200}>
                            <Menu
                                theme="dark"
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                style={{height:'100%',borderRight:0}}
                            >
                                <Menu.Item key="1" icon={<HomeOutlined />}><Link to="/home/data">数据概览</Link></Menu.Item>
                                <Menu.Item key="2" icon={<DiffOutlined />}><Link to="/home/list">内容管理</Link></Menu.Item>
                                <Menu.Item key="3" icon={<EditOutlined />}><Link to="/home/publish">文章发布</Link></Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout style={{padding:'24px'}}>
                            <Content className="site-layout-background">
                                <Switch>
                                    <Route exact path="/home/data" component={Home}></Route>
                                    <Route path="/home/list" component={ArticleList}></Route>
                                    <Route path="/home/publish" component={ArticlePublish}></Route>
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }


    // 退出系统
    onConfirm = () => {
        // 移除token
       removeToken();
        // 跳转到登录页
        this.props.history.push('/login');
        // console.log('成功退出了');
        message.success('退出成功！')
    }
}
