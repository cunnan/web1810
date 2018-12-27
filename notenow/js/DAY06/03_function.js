//全局污染：把变量和函数都做成局部形式
/*
//轮播图
var num=3;
function play(){
  console.log('hello');
}
play();
//会买专辑
var num=1;
function play(){
  console.log('world');
}
play();
*/
//创建两个作用域
//匿名函数自调用
(function(){
  //轮播图
  var num=3;
  function play(){
    console.log('hello');
  }
  play();
})();
(function(){
  var num=1;
  function play(){
    console.log('world');
  }
  play();
})();









