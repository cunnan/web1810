/*
console.log(1);
//var a=1； 语法错误
var a=1;
var b={};
//console.log(b);//引用错误
//b();//类型错误，错误的使用了数据类型
var arr=new Array(-1); //范围错误，参数的使用超出了范围
console.log(2);
*/
console.log(1);
//尝试执行代码，可能含有错误
try{
  var arr=new Array(1);
}catch(err){
  //err: 捕获的错误信息
  //console.log(err);
  //处理错误的方案
  var arr=new Array(5);
}
console.log(arr);
console.log(2);














