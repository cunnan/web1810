//遍历数组中的元素
/*
var score=[85,92,75,69,80,73,79];
//1.遍历数组中每个元素的下标
for(var i=0;i<score.length;i++){
  console.log(i+'----'+score[i]);
}
//练习：创建数组，保存所有员工的工资，使用for循环遍历计算平均工资。
var salary=[8000,6000,5500,7300,10000];
for(var i=0,sum=0;i<salary.length;i++){
  //console.log(salary[i]);
  sum+=salary[i];
}
console.log(sum/salary.length);
//
*/
//练习：创建数组，保存4个汽车的品牌名称，把品牌名称为'宝马'改为'BMW';
var car=['奔驰','大众','宝马','奥迪'];
//使用循环遍历每一个元素
for(var i=0;i<car.length;i++){
  //查找元素值是'宝马'
  if(car[i]=='宝马'){
	//修改元素的值为‘BMW’
	car[i]='BMW';
  }
}`
console.log(car);









