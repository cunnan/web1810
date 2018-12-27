//使用变量保存一个数字
var num=10;
//无限循环弹出提示框
while(true){
  //获取用户输入的值
  var num2=prompt('please input a number');
  //如果输入的值大于保存的值
  if(num2>num){
    alert('big');
  }else if(num2<num){
    //如果输入的值小于保存的值
	alert('small');
  }else{
	//否则既不是大，也不是小，说明大小一致
    alert('right');
	//结束循环
	break;
  }
}




