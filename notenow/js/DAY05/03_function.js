//计算任意两个数字相加的和
/*
function add(num1,num2){
  //num1=3,num2=7;
  //计算两个数字相加
  console.log(num1+num2);
}
//调用的时候，会把实参的值赋给形参
add(3,7);
add(8,15);
add(10,20);
//练习：创建函数getSum，传递1个参数，计算1~任意数字之间的和。
function getSum(num){
  //1~num
  for(var i=0,sum=0;i<=num;i++){
    sum+=i;
  }
  console.log(sum);
}
getSum(100);
getSum(50);
getSum(20);

//练习：创建函数getRun，传递2个参数，打印任意两个年份之间的所有闰年个数。
function getRun(start,end){
  //start~end
  //count用于记录闰年个数
  for(var i=start,count=0;i<=end;i++){
    //判断i是否为闰年
	if(i%4==0 && i%100!=0 || i%400==0){
	  count++;
	}
  }
  //打印闰年的个数
  console.log(count);
}
getRun(2000,2100);
getRun(1,200);
*/
function add(num1,num2){
  //出现一个形参，就相当于声明了一个变量
  //形参就是变量 
  //console.log(num1);
  //console.log(num2);
  console.log(num1+num2);
}
add(1,2);
add();
add(18,29,37);








