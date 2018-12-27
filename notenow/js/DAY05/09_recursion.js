//递归,在函数内部调用自身
var i=0;
function say(){
  i++;//1,2,3
  alert('many years ago!');
  //当i为3的时候，结束函数执行
  if(i==3){
    return;
  }
  say();
}
say();