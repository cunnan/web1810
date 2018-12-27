//产生一个不断加1的无限循环  1~...
/*
var i=1;
while(true){
  //当i为11的时候，结束循环
  if(i==11){
    //结束循环
	//可以结束任何形式的循环
	break;
  }
  console.log(i);
  i++;
}
*/
//练习：使用无线循环形式来计算1~10所有数字相乘的结果。
var i=1;
//初始化变量为1，用于存储数字的乘积
var sum=1;
while(true){
  if(i==11){
    break;
  }
  //console.log(i);
  //计算所有i相乘的结果
  sum*=i;
  i++;
}
console.log(sum);
