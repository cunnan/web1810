//打印5个*
/*
1*1=1
1*2=2 2*2=4
1*3=3 2*3=6 3*3=9
*/
/*
//外层循环：控制循环的行数
//j代表行号
for(var j=1;j<=8;j++){
  //内层循环：控制循环的列数
  //i代表列号
  for(var i=1,str='';i<=8;i++){
    //把每次循环产生的*，加到str中
    str+='*';
  }
  console.log(str);
}
*/
/*
1*1=1
1*2=2 2*2=4
1*3=3 2*3=6 3*3=9
列号*行号
//产生9行，j控制行数
for(var j=1;j<=9;j++){
  //i控制列数 9
  for(var i=1,str='';i<=j;i++){
    str+='*'
  }
  //每一行循环结束，打印一行结果
  console.log(str);
}
*/
//99乘法表
//产生9行
for(var j=1;j<=9;j++){
  //产生列数
  for(var i=1,str='';i<=j;i++){
    str+=i+'*'+j+'='+(i*j)+' ';
  }
  //打印一行的拼接结果
  console.log(str);
}








