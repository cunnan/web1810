//初始化4个英文字符
var code='mStN';
//无限循环弹出提示框
do{
  var str=prompt('please input code');
  //和code比较不区分大小写
  //把初始化的都转成大写，
  code=code.toUpperCase();
  //把输入的都转成大写
  str=str.toUpperCase();
  if(code==str){
	alert('right');
    break;
  }
}while(true);