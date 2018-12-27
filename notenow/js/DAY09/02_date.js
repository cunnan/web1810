//创建Date对象
/*
var d1=new Date('2018/11/11 10:20:30');
var d2=new Date(2018,10,11,10,20,30);//月份:0~11
//存储Date是当前的系统时间
var d3=new Date();
var d4=new Date(1000*60);
console.log(d4);
//获取具体日期时间信息
var d1=new Date('2018/11/18 10:40:30');
//对象的方法
//获取
console.log(d1.getFullYear());
console.log(d1.getMonth());//0~11
console.log(d1.getDate());
console.log(d1.getHours());
//getMinutes/getSeconds/getMilliseconds
console.log(d1.getDay());//星期日-星期六 0~6 
*/
//练习：创建当前系统时间的Date对象，使用该对象打印 '2018年11月16日 10点55分30秒 星期五 上午'
//数组存储星期的中文形式
var arr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var now=new Date();
console.log(
  now.getFullYear()+'年'+
  (now.getMonth()+1)+'月'+
  now.getDate()+'日 '+
  now.getHours()+'点'+
  now.getMinutes()+'分'+
  now.getSeconds()+'秒 '+
  arr[now.getDay()]+
  (now.getHours()<12 ? '上午' : '下午')
);
//获取距离计算机元年的毫秒数
console.log(now.getTime());






