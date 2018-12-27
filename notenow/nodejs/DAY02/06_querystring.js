//引入查询字符串模块
const querystring=require('querystring');//对象
/*
var str='lid=5&pname=dell';
//获取查询字符串传递的数据
//将查询字符串解析为对象
var obj=querystring.parse(str);
//console.log(obj.lid,obj.pname);
var obj2={
  name:'tom',
  age:18,
  sex:1
}
//将对象转换成查询字符串
var str2=querystring.stringify(obj2);
console.log(str2);
*/
var str='ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=电脑';
var obj=querystring.parse(str);
console.log(obj.wd);







