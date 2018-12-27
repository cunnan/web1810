const http=require('http');
//创建web服务器，监听端口3000
var server=http.createServer();
server.listen(3000);
//接收浏览器的请求
server.on('request',(req,res)=>{
  //根据请求的URL不同，来做出不同的响应
  var url=req.url;
  switch(url){
    case '/login':
	  res.write('this is login page');
	  break;
	case '/member':
	  res.write('this is member page');
	  break;
	case '/':
	  res.writeHead(302,{
	    Location:'/member'
	  });
	  break;
	default:
	  res.write('404 not found');
  }
  res.end();
});







