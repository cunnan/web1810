//引入express第三方模块
const express=require('express');
//创建web服务器
var server=express();
server.listen(3000);

//接收浏览器的请求
//根据请求的URL、请求的方法，来作出响应
//————路由 
//请求的URL：/login，请求的方法：get
/*
server.get('/login',(req,res)=>{
  //res响应的对象
  //req请求的对象
  //响应文本
  res.send('这是登录的页面');
});
*/
//练习：创建路由
//请求方法:get  请求URL: /index    这是首页
//请求方法:post 请求URL: /login    这是登录
//请求方法:get  请求URL: /detail   这是详情
server.get('/index',(req,res)=>{
  //res.send('这是首页');
  //响应一个文件,必须使用绝对路径
  res.sendFile(__dirname+'/index.html');
});
server.post('/login',(req,res)=>{
  res.send('这是登录');
});
server.get('/detail',(req,res)=>{
  res.send(500);//数字表示响应的为状态码
  //只允许使用一次send
  //res.send('戴尔电脑');
});
//请求方法：get，请求url：/  
server.get('/',(req,res)=>{
  //重定向(跳转)到/index
  res.redirect('/index');
});




