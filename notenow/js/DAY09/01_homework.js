//1.创建数组，存储若干个员工的姓名，每次运行随机取出1个员工的姓名打印出来
/*var emp=['tom','jerry','scott','david','jones','jacky'];
//随机获取下标值 0~5
//随机下标=向下取整(随机数*数组长度)
//0~1 *6  0.12~5.9
var index=Math.floor(Math.random()*emp.length);
console.log(emp[index]);
*/
//2.创建数组，包含a-z, A-Z, 0-9元素；在数组中随机取4个字符，放到一个新数组中
//A-Z  65~90   a-z  97~122
//如何使用ASCII值找到对应的字符
//console.log(String.fromCharCode(25000))
var arr=[];
//遍历a-z的ASCII值
for(var i=97;i<=122;i++){
  //console.log(String.fromCharCode(i));
  arr.push(String.fromCharCode(i));
}
//遍历A-Z 之间所有的ASCII码
for(var i=65;i<=90;i++){
  arr.push(String.fromCharCode(i));
}
//遍历0-9，加到arr中
for(var i=0;i<=9;i++){
  arr.push(i);
}
//随机取4个字符，放到新数组中
var newArr=[];
for(var i=0;i<4;i++){
  //取随机代码
  var index=Math.floor(Math.random()*arr.length);
  newArr.push(arr[index]);
}
//console.log(newArr);
//3.substring截取字符串
var str='javascript';
//console.log(str.substring(4,7));
//参数中的负数自动转换成了0
console.log(str.substring(-3,-1));


