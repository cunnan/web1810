//创建web服务器
const express=require('express');
var server=express();
server.listen(3000);
//在路由前，添加中间件，打印“查询了是否存在”
//拦截特定的路由
//拦截请求的URL为 /detail的路由
server.use('/detail',(req,res,next)=>{
  console.log('查看了是否存在');
  next();
});
//新建路由  请求的方法:get，请求的URL:/detail
server.get('/detail',(req,res)=>{
  res.send('这是商品的详情');
});
//在函数外初始化一个变量，设置值为0; 在中间件中实现变量加1，在路由中响应变量。--17:16
var num=0;
server.use('/view',(req,res,next)=>{
  num++;
  next();
});
server.get('/view',(req,res)=>{
  res.send(num.toString());//'1'
});



