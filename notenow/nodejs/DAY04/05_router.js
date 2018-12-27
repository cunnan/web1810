//引入user.js路由器模块
const userRouter=require('./user.js');
//引入product.js路由器模块
const productRouter=require('./product.js');
const express=require('express');
var server=express();
server.listen(3000);
//服务器使用路由器
//把引入的用户路由器挂载到/user
//访问形式 /user/list
server.use('/user',userRouter);
//把引入的产品路由器挂载到/product
//  /product/list
server.use('/product',productRouter);

