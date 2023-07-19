### 技术栈
react、react-dom
ajax：axios
路由：react-router-dom、history
富文本编辑器：react-quill
css预编译器：sass
ui：antd

### 功能
登录
首页
内容管理
    文章列表
    发布文章
    修改文章


### 文件夹结构
src/
    api                          封装接口
    assets                       项目资源文件夹
    commponents                  通用组件
    pages                        页面
    utils                        工具，axios的封装等
    App.js                       根组件
    index.css                    全局样式
    index.js                     项目入口



### 路由的配置
1.安装：react-router-dom==5.2.0
2.创建文件夹及文件：src/pages/
                            Layout/index.jsx
                            Login/index.jsx
3.在App.js里配置路由