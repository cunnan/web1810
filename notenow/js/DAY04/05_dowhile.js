//声明变量，存储密码
var upwd='123456';
//循环弹出提示框
do{
  //弹出提示框输入密码
  var num=prompt('input password');
  //判断输入的是否和存储的密码一致
  if(num==upwd){
	alert('login success');
    //结束循环
	break;
  }
}while(true);