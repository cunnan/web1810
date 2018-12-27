/*
add(3,4);
function add(a,b){
  console.log(a+b);
}
add(5,9);
*/
//先提升函数声明
//再提升变量声明
//如果函数的名称和var声明的变量的名称一致，则变量中的值会覆盖函数。
//var fun=10; //typeof:number
function fun(){//typeof:function
  console.log(1);
}
console.log(typeof(fun));
console.log(fun);



