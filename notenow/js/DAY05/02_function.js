/*
console.log('hello');
console.log('css');

console.log('hello');
console.log('css');

console.log('hello');
console.log('css');

//使用自定义函数，把这些要在多个地方使用的代码封装到一个函数
function say(){
  //函数体，反复执行的代码
  console.log('hello');
  console.log('nodejs');
}
//函数只是创建未调用，函数体中的代码是无法执行的
say();
say();
say();

function add(){
  console.log(10+20);
}
add();
add();
add();
*/
function getSum(){
  //1~100的和
  for(var i=1,sum=0;i<=100;i++){
    sum+=i;
  }
  console.log(sum);
}
getSum();
getSum();
getSum();






