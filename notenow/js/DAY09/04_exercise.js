//练习：计算当前距离2018年圣诞节还有？天？小时？分？秒
//原理：计算两个Date对象的时间差————相差的毫秒
/*
var now=new Date();
var target=new Date('2018/12/25');
//var d=now.getTime()-target.getTime();
//console.log(Math.abs(d));
//两个对象相减，返回的是两个对象相差毫秒数。
var d=target-now;
//把相差的时间转成秒
d=Math.floor(d/1000);
//获取相差的天数
var day=Math.floor(d/(24*60*60));
//获取天数后，相差的小时
//相差的秒数和一天的秒数取余，得到的结果是不满一天的秒数,把秒数转成小时
var hours=d%(24*60*60);
hours=Math.floor(hours/(60*60));
//相差的分钟
//相差的秒数和一小时的秒数取余，得到的结果是不满一小时，把它转成分钟
var minutes=d%(60*60);
minutes=Math.floor(minutes/60);
//相差的秒钟 : 和60取余
var seconds=d%60;
console.log(
  '距离2018年圣诞节还有'+
  day+'天'+
  hours+'小时'+
  minutes+'分钟'+
  seconds+'秒'
);
*/
//练习：创建对象保存员工的入职时间'2018-11-16'，3年后到期计算到期时间，合同到期前1个月续签合同，假如续签时间是周末，提前到周五。提前一周通知人事准备续签(提醒时间)
var workTime=new Date('2018/11/17');
//复制入职时间的对象作为到期时间
//到期时间，年份在当前的基础之上加3
var target=new Date(workTime);
target.setFullYear(target.getFullYear()+3);
//复制到期时间
var reworkTime=new Date(target);
//提前1个月：在当前的月份基础上减1
reworkTime.setMonth(reworkTime.getMonth()-1);
//判断是否为周末6  0，周六提前一天，周日提前两天
var day=reworkTime.getDay();
if(day==6){
  //设置日期为当前的日期减1
  reworkTime.setDate(reworkTime.getDate()-1);
}else if(day==0){
  reworkTime.setDate(reworkTime.getDate()-2);
}
//提醒时间：复制续签时间
var remind=new Date(reworkTime);
//设置当前日期在原来基础减7
remind.setDate(remind.getDate()-7);
console.log('入职时间：'+workTime.toLocaleDateString());
console.log('到期时间：'+target.toLocaleDateString());
console.log('续签时间：'+reworkTime.toLocaleDateString());
console.log('提醒时间：'+remind.toLocaleDateString());







