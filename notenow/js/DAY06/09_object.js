/*
//获取对象的属性值
var emp={
  eid:3,
  ename:'kate',
  sex:0,
  birthday:'1997-2-1',
  salary:8000
};
//遍历对象中的属性
//key表示对象中的每一个属性名
//in 后边的表示要遍历的对象
for(var key in emp){
  console.log(key+'---'+emp[key]);
}

console.log(emp.ename);
console.log(emp['birthday']);
//不能存在的属性，属性值是undefined
console.log(emp.deptId);
*/
//练习：创建一个商品对象，包含编号，标题，价格，是否在售(isOnsale)，商品库存量(stockCount)，使用for-in遍历所有的属性。
var product={
  pid:18,
  title:'戴尔笔记本',
  price:4999,
  isOnsale:1,
  stockCount:88
};
//console.log(product);
for(var key in product){
  console.log(key+'---'+product[key]);
}







