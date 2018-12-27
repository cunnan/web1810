/*
function play(){
  console.log('吃火锅了');
  console.log('吃海鲜了');
  console.log('看表演了');
  return '工艺品';
}
//函数的返回结果
//过程中带什么回来？
var res=play();
console.log(res);

function add(num1,num2){
  //表示在过程中执行了打印
  //不代表返回的结果
  //console.log(num1+num2);
  //返回两个数字相加的结果
  return num1+num2;
}
//把函数add的调用结果放到变量中
var res=add(2,3);
console.log(res+'元');
function add(num1,num2,num3){
  //return num1+num2+num3;
  //只需要得到结果，结果显示到哪后期项目中的位置
  //return;//undefined
  console.log(123);
  return '火锅底料';
  console.log('hello world');
}
var res=add(3,5,7);
console.log(res);

function getMax(num1,num2){
  //if(num1>num2){
  //  return num1;
  //}else{
  //  return num2;
  //}
  return num1>num2 ? num1 : num2;
}
var res=getMax(5,7)
console.log(res);
//练习：创建函数getMax，传递3个参数，返回最大值。
function getMax(num1,num2,num3){
  //比较前两个数，产生最大值
  //var max;
  //if(num1>num2){
  ///  max=num1;
  //}else{
  //  max=num2;
  //}
  //使用max和第3个数字比较
  //if(max>num3){
  //  return max;
  //}else{
  //  return num3;
  //}
  var max=num1>num2 ? num1 : num2;
  return max>num3 ? max : num3;
}
var res=getMax(110,29,45);
console.log(res);
//练习：创建函数isRun，传递1个参数(年份)，是闰年返回true，不是闰年返回false。
function isRun(year){
  if(year%4==0 && year%100!=0 || year%400==0){
    return true;
  }
  return false;
}
var res=isRun(2023);
//console.log(res);
//通过isRun来判断一年的天数
if(res){
  console.log(366);
}else{
  console.log(365);
}
*/
//练习：创建函数getStatus，传递1个参数(订单状态码)，返回对应的中文；
function getStatus(code){
  switch(code){
    case 1:
	  return '待付款';//会阻止代码继续往后执行
	  //break;
	case 2:
	  return '待发货';
	  break;
	case 3:
	  return '运输中';
	  break;
	case 4:
	  return '已签收';
	  break;
	case 5:
	  return '已取消';
	  break;
	default:
	  return '无法追踪';
  }
}
var res=getStatus(1);
console.log(res);

//return 2;
//console.log(1);









