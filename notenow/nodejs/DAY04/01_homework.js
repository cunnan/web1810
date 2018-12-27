//引入express
const express=require('express');
//创建web服务器
var server=express();
//监听端口3000
server.listen(3000);
//创建路由
server.get('/index',(req,res)=>{
  res.send('这是首页');
});
server.get('/login',(req,res)=>{
  res.sendFile(__dirname+'/login.html');
});
server.post('/register',(req,res)=>{
  res.send('注册成功');
});
server.get('/',(req,res)=>{
  res.redirect('/index');
});

