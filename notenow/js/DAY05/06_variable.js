/*
//var a;
console.log(a);
//变量提升
var a=1; 
//a=1;
console.log(a);
function fn(){
  //var b;
  console.log(b);
  var b=2; //b=2;
}
var a=1;
function fn(){
  console.log(1+a);
}
fn(2);

*/
var a=1;
function fn(){
  //var a;//undefined
  //存在变量提升
  var a=a+3;//a=a+3; ->  a=undefined+3
  console.log(a);//NaN
}
fn();
console.log(a);//1






