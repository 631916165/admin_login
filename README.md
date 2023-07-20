<!--
 * @Author: '631916165' '631916165@qq.com'
 * @Date: 2023-07-18 21:22:18
 * @LastEditors: '631916165' '631916165@qq.com'
 * @LastEditTime: 2023-07-20 10:36:03
 * @FilePath: \admin_login\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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


### antd组件   
1.安装：antd==5.7.1   
注意：这里的引入全局样式的css文件名变为import 'antd/dist/reset.css'   


### 登录   
功能如下：
    1.搭建登录页面结构   
    2.登录表单校验   
    3.登录逻辑   
    4.封装处理token、axios的工具函数   
    5.登录访问控制   

构建了git分支：login   
构建了jsconfig,json的文件，方面文件路径   
将css替换为sass==1.63.6，这里的样式文件绝对路径前面要加~符号   
## api
这里为了方便测试和编写登录功能以及后续的一系列功能，使用python的flask框架写了一个粗糙的api来使用，在back_end文件夹的server.python这个文件，然后使用的是mysql数据库，可视化工具是navicat premium15，接口的测试工具为postman

## token
对于token的操作，进行了封装，封装所有的localStorage的操作在utils/Storange.jsx，为了方便后续对token的key的进行变更
