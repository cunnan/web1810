//匿名函数：没有名称的函数
//把创建的函数的地址保存到变量fn中
var fn=function(n){
  console.log(n);
};
//fn成为了匿名函数名称
fn(2);
//计算1~100之间的和
var getSum=function(n){
  for(var i=1,sum=0;i<=n;i++){
    sum+=i;
  }
  return sum;
}
var res=getSum(100);
console.log(res);


