/*
var book=[];
//添加元素
book['id']=113;
book['title']='水浒传';
book['price']=223;
book['pubTime']='2001-10-1';
console.log( typeof(book) );
//console.log(book);
//使用for-in遍历
for(var key in book){
  console.log(key+'---'+book[key]);
}

//练习：创建数组，包含元素推荐、热点、娱乐、财经；分别使用for循环和for-in遍历该数组中的元素。
var arr=['推荐','热点','娱乐','财经'];
//使用for循环遍历
//for(var i=0;i<arr.length;i++){
//  console.log(i+'---'+arr[i]);
//}
for(var key in arr){
  console.log(key+'---'+arr[key]);
}
//练习：创建一个函数getIndex，传递2个参数(数组，字符串)，返回字符串的下标，如果找不到该字符串的下标，则返回-1；
function getIndex(arr,str){
  //arr=['奔驰','大众','宝马','奥迪'];
  //str='宝马';
  for(var i=0;i<arr.length;i++){
    //判断数组元素中是否含有str这个值
    if(arr[i]==str){
	  return i;
	}
  }
  //如果以上所有的都没有找到，返回-1
  return -1;
}
var res=getIndex(['奔驰','大众','宝马','奥迪'],'宝马');
console.log(res);
//练习：创建函数getAvg，传递1个参数(数组表示所有的工资)，返回平均工资
function getAvg(salary){
  //获取salary数组的平均值 
  //求和
  for(var i=0,sum=0;i<salary.length;i++){
    sum+=salary[i];
  }
  return sum/salary.length;
}
var res=getAvg([8000,3000,9000,6000]);
console.log(res);

//练习：创建函数getCount，传递2个参数(数组，字符串)，返回字符串在数组元素中出现的次数。
function getCount(arr,str){
  //变量记录str出现的次数
  //循环
  for(var i=0,count=0;i<arr.length;i++){
    //判断每一个元素是否为str
	if(arr[i]==str){
	  count++;
	}
  }
  return count;
}
var res=getCount(['tom','jerry','tom','david'],'aaa');
console.log(res);
*/
//练习：创建函数getMax，传递1个参数(数组)，返回数组中元素的最大值
function getMax(arr){
  //声明一个变量记录最大值
  //假设数组的第1个元素是最大值
  var max=arr[0];
  //使用数组的每一个元素和max比较
  for(var i=1;i<arr.length;i++){
  //如果max小于数组元素，则把数组元素放入到max中
    if(max<arr[i]){
	  max=arr[i];
	}
  }
  return max;
}
var res=getMax([88,72,93,96]);//93
console.log(res);

//72 88 93 96
var a=1;
var b=2; 
//a=2 b=1  
var c=a;//1
a=b;
b=c;
console.log(a);
console.log(b);
//var arr=['a','b'];








