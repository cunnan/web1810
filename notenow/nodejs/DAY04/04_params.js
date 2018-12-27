const express=require('express');
//创建web服务器
var server=express();
server.listen(3000);
//创建路由
//请求方法：get，请求URL：/detail  这是商品详情
//路由传递
//  /detail/5/dell
server.get('/detail/:lid/:pname',(req,res)=>{
  //获取浏览器传递数据
  console.log(req.params);//返回对象
  res.send('这是商品详情');
});
//  /shopping/5000/dell
server.get('/shopping/:price/:pname',(req,res)=>{
  console.log(req.params);
  res.send('这是购物车');
});





