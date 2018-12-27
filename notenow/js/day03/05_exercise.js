//获取输入商品价格和数量
var price=prompt('please input price');
var count=prompt('please input count');
//获取商品的总价
//乘法运算，隐式将字符串转为数值型
var total=price*count;
//判断总价是否满500
if(total>=500){
  total*=0.8;
}
//console.log(total);
//付款
//当前余额
var money=600;
if(money>=total){
  console.log('pay success');
}else{
  console.log('money is not enough');
}






