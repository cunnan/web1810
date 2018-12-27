//引入查询字符串和URL模块
const querystring=require('querystring');
const url=require('url');
var str='https://www.tmooc.cn:3000/web/1810.html?sid=10&name=tom';
//将URL解析为对象
var obj=url.parse(str);
//获取查询字符串
var qs=obj.query;
//解析查询字符串为对象
var obj2=querystring.parse(qs);
console.log(obj2.sid, obj2.name);


