//引入上一级目录下的mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//1.用户注册
router.post('/register',(req,res)=>{
  //获取post请求的数据
  var obj=req.body;
  //判断用户名是否为空
  var $uname=obj.uname;
  if(!$uname){
    res.send({code:401,msg:'uname required'});
	//阻止继续往后执行
    return;
  }
  //练习：验证密码、邮箱、手机是否为空
  var $upwd=obj.upwd;
  if(!$upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  var $email=obj.email;
  if(!$email){
    res.send({code:403,msg:'email required'});
	return;
  }
  var $phone=obj.phone;
  if(!$phone){
    res.send({code:404,msg:'phone required'});
	return;
  }
  //执行SQL语句，将注册的数据插入到xz_user数据表中，成功响应 {code:200,msg:'register suc'}
  res.send('注册成功');
});
//导出路由器
module.exports=router;