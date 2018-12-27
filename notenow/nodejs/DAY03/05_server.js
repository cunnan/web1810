const http=require('http');
//创建web服务器
var server=http.createServer();
//监听3001端口
server.listen(3001);
//接收浏览器的请求
server.on('request',(req,res)=>{
  console.log(req.method);
  console.log(req.url);
});








