## 项目简介

使用方法: <br>
确保数据库文件已导入 <br>
前端文件：使用 <br>
npm install <br>
npm run serve <br>
对于后端文件 https://gitee.com/especiallyad/cnode <br>
npm install <br>
node .\server.js <br>


## 项目名

项目名：猫咪代售商城1.0 <br>
项目实现方式：前端使用Vue2,后端使用Node和Express框架，数据库使用Mysql。<br>

## 注意事项

分辨率：1920 X 1080 <br>
浏览器：谷歌浏览器 <br>
其他浏览器或分辨率暂未优化过，可能不能达到最优效果。<br>

## 主要是用工具版本

Vue：版本2.5.11 <br>
Vue/cli：版本4.5.0 <br>
Vuex：版本3.6.2 <br>
Vue-router：版本3.5.3 <br>
element-ui：版本 2.15.6 <br>
less：版本3.0.4 <br>
axios：版本0.20.0 <br>

## 实现内容

整体页面布局 <br>
路由切换及路由守卫控制 <br>
登录及注册新用户（数据通过axios至node[密码经bcrypt加密]存放于mysql数据库中）<br>
商品页面（数据通过用户登录猫咪代售后台管理系统上架商品至数据库后渲染到页面）<br>


## 实现方式

### Vue/js使用

axios：获取数据，并向服务器发送请求操作数据库，实现新增用户，用户登录，更改用户信息，获取资讯信息及后台管理系统上架的商品信息。 <br>
VueX：存储解析token后获取的用户信息，商品信息，新闻资讯信息 <br>
Vue全局前置路由守卫 <br>
axios拦截器：创建加载动画，发送token至node <br>

### Node/Espress使用

查询操作：查询商品信息，新闻资讯，用户登录信息 <br>
增加操作：注册新用户 <br>
修改信息：修改个人资料信息 <br>


## 优化方案

路由懒加载 <br>
图片懒加载 <br>







