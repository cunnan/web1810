//1.弹出警示框(消息框)
//alert('hello');
//2.弹出提示框(文本框)
//通过变量来存储输入的值 
/*
var s=prompt('please input');
console.log(s);
console.log( typeof(s) );
*/
//练习：弹出两次提示框，分别使用两个变量保存，计算两个变量相加结果，结果使用警示框弹出
var num1=prompt('please input a number');
var num2=prompt('please input a number');
//转换两次输入的值为数值型
num1=parseInt(num1);
num2=parseInt(num2);
alert(num1+num2);






