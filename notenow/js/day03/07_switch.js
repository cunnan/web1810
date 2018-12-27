var status=6;
switch(status){
  case 1: //用status变量和1进行比较
    console.log('待付款');
	break;
  case 2:
	console.log('待发货');
    break;
  case 3:
	console.log('已发货');
    break;
  case 4:
	console.log('已签收');
    break;
  default:  //以上所有的比较都是false
    console.log('非法的状态码');
}
//练习：声明变量来保存星期的值，
//星期日~星期六  0~6
//根据不同的值，打印对应的星期
var day=0;
switch(day){
  case 0:
    console.log('星期日');
    break;
  case 1:
	console.log('星期一');
    break;
  case 2:
	console.log('星期二');
    break;
  case 3:
	console.log('星期三');
    //break;
  case 4: //用day和4进行比较是否相等
	console.log('星期四');
    //break;
  default:
	console.log('错误的星期代码');
}
//非常优秀 100  -> 10     ->10
//优秀  90~99   -> 9~9.9  ->9
//良好  80~89   -> 8~8.9  ->8
//中等  70~79   -> 7~7.9  ->7
//及格  60~69   -> 6~6.9  ->6
//不及格60以下
//分数/10  取整 parseInt  
var score=73;
score=parseInt(score/10);
switch(score){
  case 10:
	console.log('非常优秀');
    break;
  case 9:
	console.log('优秀');
    break;
  case 8:
	console.log('良好');
    break;
  case 7:
	console.log('中等');
    break;
  case 6:
	console.log('及格');
    break;
  default:
	console.log('不及格');
}






