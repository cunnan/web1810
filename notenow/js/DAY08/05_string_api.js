/*
var str='WelCome To China';
//转为大写
console.log(str.toUpperCase());
//转为小写
console.log(str.toLowerCase());
//
var str='你好world';
//获取字符串的长度
//console.log(str.length);
//console.log(str.charAt(0));
console.log(str.charAt(str.length-1));
console.log(str.charAt(0).charCodeAt());

var str='javascript';
//遍历字符串
for(var i=0,count=0;i<str.length;i++){
  //获取每一个字符
  if(str.charAt(i)=='a'){
    count++;
  }
}
console.log(count);
//获取指定字符的下标
var str='javascript';
//console.log(str.indexOf('a',2));
//console.log(str.indexOf('z'));//-1
console.log(str.lastIndexOf('a'));
//练习：声明变量保存字符串，检测该字符串是否为邮箱格式；如果是打印true，不是打印false；(查看是否含有@)
var str='tom@163.com';
//是否含有@，查看@在字符串中的下标
//如果找到了下标，返回0~数字，否则-1
if(str.indexOf('@')>=0){
  console.log(true);
}else{
  console.log(false);
}
//截取字符串
var str='javascript';
//console.log(str.slice(4));//script
//console.log(str.slice(4,7));//scr
console.log(str.slice(-3,-1));
//练习：使用变量存储身份证号，获取其中年月日和性别。打印1997年05月20日 男
var str='110230199705203310'; 
var year=str.slice(6,10);
var month=str.slice(10,12);
var date=str.slice(12,14);
var sex=str.slice(-2,-1);
sex=sex%2==1 ? '男' : '女';
console.log(year+'年'+month+'月'+date+'日 '+sex);
//练习：变量保存邮箱地址，分别截取邮箱的用户名和域名
var str='zhangsan@tedu.cn';
//获取@的下标
var index=str.indexOf('@');
//获取用户名 0~index
var uname=str.slice(0,index);
//获取域名，index+1 ~ 
var domain=str.slice(index+1);
console.log('用户名：'+uname);
console.log('域名：'+domain);
var str='javascript';
//console.log(str.substr(4,3));
//console.log(str.substr(-3,2));
console.log(str.substr(4));
//练习：将一个英文单词首字母转大写，其余转小写
var str='hEllo';
//截取首字母，并转为大写
var first=str.substr(0,1).toUpperCase();
//截取第2个到最后，并转为小写
var last=str.substr(1).toLowerCase();
console.log(first+last);

//数组转字符串
var arr=['a','b','c'];
console.log(arr.join('|'));
//将字符串分隔数组
var str='a|b|c';
console.log(str.split('|'));

//练习：使用split获取邮箱的用户名和域名 
var str='jerry@qq.com';
var arr=str.split('@');
console.log('用户名：'+arr[0]);
console.log('域名：'+arr[1]);
*/
//练习：将一句英文所有单词的首字母转大写，其余字母转小写；     
var str='hOW arE yOu';
//按照空格将字符串分隔成数组
var arr=str.split(' ');
//遍历数组，获取每一个元素(单词)
for(var i=0;i<arr.length;i++){
  //将每一个元素的首字母转大写，其余转小写
  var first=arr[i].substr(0,1).toUpperCase();
  var last=arr[i].substr(1).toLowerCase();
  //把转换后的结果替换之前的元素
  arr[i]=first+last;
}
str=arr.join(' ');
console.log(str);






