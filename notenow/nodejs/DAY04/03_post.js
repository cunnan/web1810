const express=require('express');
const querystring=require('querystring');
var server=express();
server.listen(3000);

//创建路由
server.get('/reg',(req,res)=>{
  //响应文件reg.html 
  res.sendFile(__dirname+'/reg.html');
});
//请求的URL：/myreg，请求的方法: post
server.post('/myreg',(req,res)=>{
  //获取post请求传递的数据
  //以事件的形式获取表单中数据
  //当有数据传输的时候，格式还是buffer数据
  req.on('data',(buf)=>{
	//buffer数据转成字符串后是查询字符串
	var str=buf.toString();
	//使用查询字符串将数据解析为对象
	var obj=querystring.parse(str);
	console.log(obj);
    //获取数据后，响应到浏览器
	res.send('注册成功，用户名'+obj.uname);
  });
  
});





