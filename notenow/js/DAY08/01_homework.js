/*
//1.翻转数组元素
var arr=['a','b','c','d','e'];
//创建新数组
var newArr=[];
//0,1,2,3
for(var i=0;i<arr.length;i++){
  //0  3  4-1-0
  //1  2  4-1-1
  //2  1  4-1-2
  //3  0  4-1-3
  newArr[i]=arr[arr.length-1-i];
}
console.log(newArr);
*/
//2.冒泡排序——从小到大排序
var arr=[78,6,23,9,45];
//外层循环：比较4轮(循环4次)
for(var i=1;i<arr.length;i++){
  //1  4   5
  //2  3   5
  //3  2   5
  //4  1   5
  //内层循环：比较的次数，j代表元素的下标
  for(var j=0;j<arr.length-i;j++){
	//如果当前的元素大于下一个元素
    //交换两个元素的值
	if(arr[j]>arr[j+1]){
	  var tmp=arr[j];
	  arr[j]=arr[j+1];
	  arr[j+1]=tmp;
	}
  }
}
console.log(arr);

