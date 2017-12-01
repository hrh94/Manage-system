# Manage-system
#### 菜鸟版（2017.11.28）

（1）前端：Vue2 + Element UI

（2）后端：Node + Koa2

（3）数据库：MongoDB + Mongoose

（4）功能：登录（其它需要的功能请参照登录功能自行扩展）

#### 项目启动流程：
1. 把项目从GitHub荡下来后，下载MongoDB安装包
   [MongoDB下载地址](https://fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-3.4.10-signed.msi)
2. 安装MongoDB安装包，安装时候直接点击下一步、下一步即可
3. MongoDB安装完成后，新建一个名为DB的文件夹（路径可以自己决定）作为仓库，新建一个runMongo.bat文件（路径可以自己决定）    
   runMongo.bat内容如下：
   
   <img height="150" src="http://119.29.149.113/manage-system/1.jpg">
   
4. 在vue2-project里面调用命令行，输入npm install回车，等待依赖包安装完成；
   在koa2-project里面调用命令行，输入npm install回车，等待依赖包安装完成
5. 依赖安装完成后，双击runMongo.bat文件开启MongoDB服务，弹出窗口打印出如下内容则成功开启： 

   <img width="1000" src="http://119.29.149.113/manage-system/2.jpg">
   
   注意弹出的命令行窗口不要关闭，否则服务也跟着关闭；
   在koa2-project根文件夹调用命令行，输入npm start回车，如果控制台打印如下内容则成功：
   
   <img width="700" src="http://119.29.149.113/manage-system/3.jpg">
   
6. 在浏览器访问 http://localhost:3000/initData/addAdmin ，
   如下则admin信息成功插入数据库：
   
   <img width="700" src="http://119.29.149.113/manage-system/4.jpg">
   
7. 在vue2-project里面调用命令行，输入npm run dev回车，控制台打印如下内容则成功：

   <img width="700" src="http://119.29.149.113/manage-system/4.jpg">
   
8. 在浏览器访问 http://localhost:8080 会出现如下页面：

   <img width="1000" src="http://119.29.149.113/manage-system/5.jpg">
   
   点击登录，访问后台admin信息返回结果，若成功跳转则来到后台页面如下：
   
   <img width="1000" src="http://119.29.149.113/manage-system/6.jpg">
