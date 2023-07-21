/*
 * @Author: '631916165' '631916165@qq.com'
 * @Date: 2023-07-20 09:38:55
 * @LastEditors: '631916165' '631916165@qq.com'
 * @LastEditTime: 2023-07-21 10:16:10
 * @FilePath: \admin_login\src\pages\ArticleList\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React,{Component} from "react";
import styles from './index.module.scss';
import { Breadcrumb,Card } from "antd";

export default class ArticleList extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Card title={
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">application center</a>
                        </Breadcrumb.Item>             
                    </Breadcrumb>
                }>
                </Card>
            </div>
        )
    }
} 