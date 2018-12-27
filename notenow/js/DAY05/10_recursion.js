//练习：创建函数，传递1个参数，使用递归计算1~任意数字之间的和
//跳出条件？
function getSum(n){
  //如果n为1的时候，返回1
  if(n==1){
    return 1;
  }
  return n+getSum(n-1);
}
var res=getSum(100);
console.log(res);
//练习：创建函数getJC,传递1个参数，返回1~任意数字之间的乘积
function getJC(n){
  //跳出条件
  if(n==1){
    return 1;
  }
  return n*getJC(n-1);
}
var res=getJC(10);
console.log(res);




