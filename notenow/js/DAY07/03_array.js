//使用对象字面量
/*
//var emp=['tom','jerry',20,true,undefined,null];
//console.log(emp);
//使用内置构造函数
//var car=new Array('大众','奥迪','宝马');
var car=new Array(3);
//往数组中添加元素————使用下标
car[0]='大众';
car[1]='奥迪';
car[2]='宝马';
console.log(car);

var classes=new Array(5);
classes[0]='语文';
classes[1]='英语';
classes[2]='数学';
classes[3]='历史';
classes[4]='政治';
classes[5]='地理';
console.log(classes);
*/
var emp=new Array('tom','jerry','david','scott','jones','jacky');
//在最后添加一个元素
emp[emp.length]='andy';
emp[emp.length]='richard';
emp[emp.length]='aaa';
console.log(emp);
//查看数组中元素的个数
console.log(emp.length);







