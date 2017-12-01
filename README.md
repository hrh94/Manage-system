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
   
   [1](http://m.qpic.cn/psb?/V13ehxSE4a0zNA/QFyKy7PQI4uGvuXIU3qSlNb6lK27gEuNW.dsT377bV4!/b/dFsBAAAAAAAA&bo=UAO3AAAAAAARB9Q!&rf=viewer_4)
   
4. 在vue2-project里面调用命令行，输入npm install回车，等待依赖包安装完成；
   在koa2-project里面调用命令行，输入npm install回车，等待依赖包安装完成
5. 依赖安装完成后，双击runMongo.bat文件开启MongoDB服务，弹出窗口打印出如下内容则成功开启： 

   [2](http://a1.qpic.cn/psb?/V13ehxSE4a0zNA/HBWv6rwYHt4bCN*xh1WqfsfHdHtZZKIiz7b7ndVE*PU!/b/dPMAAAAAAAAA&bo=zwN1AgAAAAARAIw!&rf=viewer_4)
   
   注意弹出的命令行窗口不要关闭，否则服务也跟着关闭；
   在koa2-project根文件夹调用命令行，输入npm start回车，如果控制台打印如下内容则成功：
   
   [3](http://a1.qpic.cn/psb?/V13ehxSE4a0zNA/KJvC8xmCkTM9r.T8.EYWDmsfkEVQhz8okAsCdVs.J9A!/b/dPMAAAAAAAAA&bo=8gGHAAAAAAARAEM!&rf=viewer_4)
   
6. 在浏览器访问 http://localhost:3000/initData/addAdmin ，
   如下则admin信息成功插入数据库：
   
   [4](http://m.qpic.cn/psb?/V13ehxSE4a0zNA/ENunfl1qKTo*cmGs5f7yYqvP39AYq0k9c*ShULNliAA!/b/dPMAAAAAAAAA&bo=wQFtAAAAAAARB50!&rf=viewer_4)
   
7. 在vue2-project里面调用命令行，输入npm run dev回车，控制台打印如下内容则成功：

[5](http://a1.qpic.cn/psb?/V13ehxSE4a0zNA/Vx0MrW5d.8bovpNr3xco*0xbjgudQru*gblj1a0gvhM!/b/dPMAAAAAAAAA&bo=nALnAAAAAAARAE4!&rf=viewer_4)
   
8. 在浏览器访问 http://localhost:8080 会出现如下页面：

   [6](http://a1.qpic.cn/psb?/V13ehxSE4a0zNA/6VAKElDfD2x4GjtciDGJJwBONz*tKlxidvvlSwWylyI!/b/dPMAAAAAAAAA&bo=3wSAAgAAAAARAG4!&rf=viewer_4)
   
   点击登录，访问后台admin信息返回结果，若成功跳转则来到后台页面如下：
   
   [7](http://a3.qpic.cn/psb?/V13ehxSE4a0zNA/wDbtx75pvArUNwLuU2k6v6YRZPEcAcLqtXpQQ8F63eA!/b/dPIAAAAAAAAA&bo=egdzAgAAAAARADs!&rf=viewer_4)
