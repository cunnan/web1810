/*
//1.使用while循环打印11~19之间所有的整数
var i=11;
while(i<20){
  //i 11 12...19
  console.log(i);
  i++;
}
//2.使用while循环打印  1~100之间所有的奇数(使用if判断是否为奇数)
var i=1;
while(i<=100){
  //打印所有奇数
  //如果i是奇数，就打印出来
  if(i%2==1){
	console.log(i);
  }
  i++;
}
//3.使用while循环打印 20 22 24 26 28 30
var i=20;
while(i<=30){
  console.log(i);
  i+=2;//每次加2
}
//4.使用while循环计算1~100之间所有的整数和

//循环产生1~100之间所有的整数
//i代表1~100减的整数
//初始化1个变量值为0，用于存储所有的数字相加的和
var sum=0;
var i=1;
while(i<=100){
  //把每次产生的整数加到sum中
  //sum=sum+i;
  sum+=i;
  //表示每次加入一个整数，就打印一次结果
  //console.log(sum);
  i++;
}
//所有的加完，打印1次
console.log(sum);
*/
//5.计算1~100之间所有能被3整除的数字的和。
//找到1~100之间所有的数字
var i=1;
var sum=0;
while(i<=100){
  //能被整除
  if(i%3==0){
    //console.log(i);
	//把所有满足条件的加到一起
	sum+=i;
  }
  i++;
}
console.log(sum);
