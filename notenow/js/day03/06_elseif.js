/*
var type='少先队员';
if(type=='群众'){
  console.log('这个人是群众');
}else if(type=='团员'){
  console.log('这个人是团员');
}else if(type=='党员'){
  console.log('这个人是党员');
}else{
  console.log('非法的政治面貌');
}
*/
//1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
var status=3;
if(status==1){
  console.log('等待付款');
}else if(status==2){
  console.log('等待发货');
}else if(status==3){
  console.log('运输中');
}else if(status==4){
  console.log('已签收');
}else if(status==5){
  console.log('已取消');
}else{
  console.log('非法的状态码');
}
//根据成绩(0~100)划分为：
//优秀  90~
//良好  80~90以下
//中等  70~80以下
//及格  60~70以下
//不及格60以下
var score=43;
if(score>=90){
  console.log('优秀');
}else if(score>=80){  //socre<90
  console.log('良好');
}else if(score>=70){ //score<80
  console.log('中等');
}else if(score>=60){ //score<70
  console.log('及格');
}else{  //score<60
  console.log('不及格');
}

//练习：银行根据银行卡内的存款分类，
//10以下  普通客户
//10~100以下 白银客户
//100~1000以下  黄金客户
//1000以上  钻石客户
var money=1002;
if(money<10){
  console.log('普通客户');
}else if(money<100){  // money>=10
  console.log('白银客户');
}else if(money<1000){ //money>=100
  console.log('黄金客户');
}else{ //money>=1000
  console.log('钻石客户');
}
