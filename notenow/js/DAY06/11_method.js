//创建一个人对象
var per={
  name:'tom',
  age:18,
  sex:'男',
  say:function(){
	//this指代当前的对象
    //console.log('我叫kate，性别女，年龄28');
	console.log('我的年龄'+this.age);
  }
};
//调用对象中的方法
per.say();
//var say=function(){   };






