/*
var b=2;//全局变量
function fn(){
  //在函数内使用var关键字声明的是局部变量
  var a=1;//局部变量
  console.log(b);
}
fn();
console.log(b);
//未使用var关键字声明的变量是全局变量
function fun(){
  //
  c=3;
}
//执行函数体中的代码
fun();
console.log(c);
*/
var num=2;
function func(){
  num=4;//改变全局变量num的值为4
}
func();
console.log(num);

function myfun(a,b){
  //函数中的参数也是局部变量
  //var a=3,b=4;
  return a+b;
}
myfun(3,4);
console.log(a);
