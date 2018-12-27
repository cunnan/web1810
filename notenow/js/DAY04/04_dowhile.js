//打印1~10 
/*
var i=1;
do{
  //循环体
  console.log(i);
  i++;
}while(i<=0);//循环条件
*/
//练习：打印50~1所有的偶数
var i=50;
do{
  //如果i和2取余为0，则打印i的值
  if(i%2==0){
    console.log(i); 
  }
  
  i--;
}while(i>=1);
/*
//练习：打印100,95,90,85,80,75,70；
var i=100;
do{
  console.log(i);
  i-=5;//每次减5
}while(i>=70);

//练习：计算1~100之间所有整数的和
var i=1;
var sum=0;
do{
  //把每次循环产生的i值，加到sum中
  sum+=i;
  i++;
}while(i<=100);
console.log(sum);

//练习：计算1~100之间所有能被7整除的数字的和
var i=1;
var sum=0;
do{
  //满足能被7整除的数字,加到sum中
  if(i%7==0){
    sum+=i;
  }
  i++;
}while(i<=100);
console.log(sum);
//练习：计算1~10之间所有数字的乘积
var i=1;
var sum=1;
do{
  //把每次产生的i乘到sum中
  sum*=i;
  i++;
}while(i<=10);
console.log(sum);

//练习：计算10~20之间所有能被3整除的数字的乘积
var i=10;
var sum=1;
do{
  //寻找所有能被3整除的数字
  if(i%3==0){
    sum*=i;
  }
  i++;
}while(i<=20);
console.log(sum);
*/