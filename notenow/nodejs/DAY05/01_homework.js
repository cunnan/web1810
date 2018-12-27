//创建web服务器
const express=require('express');
const querystring=require('querystring');
var server=express();
server.listen(3000);
//使用内置中间件托管静态资源
server.use(express.static('public'));
//声明变量
var year,month,date,sex;
//使用中间件拦截/mycheck的请求
server.use('/mycheck',(req,res,next)=>{
  //获取身份证中的出生年月日和性别
  //获取post请求的数据
  req.on('data',(buf)=>{
    var str=buf.toString();
	//将查询字符串解析为对象
	var obj=querystring.parse(str);
	//获取年月日 性别
    //130110199505061120
    var id=obj.sid;
	year=id.substr(6,4);
	month=id.substr(10,2);
	date=id.substr(12,2);
	sex=id.substr(-2,1);
	next();
  });
})
//路由
server.post('/mycheck',(req,res)=>{
  res.send(`${year}年${month}月${date}日 性别${sex%2==1?'男':'女'}`);
});







