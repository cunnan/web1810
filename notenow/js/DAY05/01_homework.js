//打印倒着的99乘法表
//外层循环：控制循环的行数
//i代表行
for(var i=9;i>=1;i--){
  //每一列的初始值是从行号开始
  for(var j=i,str='';j>=1;j--){
	str+=j+'*'+i+'='+(i*j)+' ';
  }
  //每一行循环结束打印这一行
  console.log(str);
}