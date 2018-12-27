//var arr=['推荐','热点','娱乐','财经'];
//1.将数组中的元素转为字符串,数组中元素使用逗号分隔
//console.log(arr.toString());
//2.按照指定的字符分隔数组中的元素
//console.log(arr.join(''));
//3.拼接数组
//var arr2=['汽车','体育'];
//console.log(arr.concat(arr2));
//练习：创建3个数组，分别存储不同的员工姓名，将3个数组拼接成一个新的数组。
/*
var arr1=['tom','jerry'];
var arr2=['david','jones'];
var arr3=['jacky'];
console.log(arr1.concat(arr2,arr3));

var arr=['推荐','热点','娱乐','财经','汽车','体育'];
//截取娱乐，财经
//console.log(arr.slice(2));//截取范围2~最后
//console.log(arr.slice(2,4));
console.log(arr.slice(-3,-1));//倒数第3个
//练习：创建数组，保存a~h，每个元素存储1个字母，截取bc和ef，拼接成一个新数组
var arr=['a','b','c','d','e','f','g','h'];
var arr1=arr.slice(1,3);
var arr2=arr.slice(-4,-2);
console.log(arr1.concat(arr2));
//删除数组中的元素
var arr=['推荐','热点','娱乐','财经','汽车','体育'];
//返回的是删除的元素
//console.log(arr.splice(2));
//console.log(arr.splice(2,3));
//console.log(arr.splice(-3));
//arr.splice(2,2,'新闻','旅游');
console.log(arr.splice(2,0,'新闻'));
console.log(arr);
//练习：创建数组，包含a-h，每个元素存储1个字母；删除d,e；替换f为m，在下标为1的位置插入字母z
var arr=['a','b','c','d','e','f','g','h'];
arr.splice(3,2);
arr.splice(3,1,'m');
arr.splice(1,0,'z');
console.log(arr);
//翻转数组中的元素
var arr=['a','b','c','d'];
console.log(arr.reverse());
*/
//对数组元素排序
var arr=[70,65,101,90,82,205];
//console.log(arr.sort());//默认按照Unicode排序
///对数字进行由大到小/由小到大排序
console.log(arr.sort(function(a,b){
  return b-a;
}));



