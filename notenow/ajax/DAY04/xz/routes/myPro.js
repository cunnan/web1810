//引入上一级目录下的mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//用户登录--post
router.post("/login",(req,res)=>{
	//获取用户名和密码
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send({code:401,msg:'用户名不存在'});
		return;
	}
	if(!$upwd){
		res.send({code:402,msg:'密码不存在'});
		return;
	}
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("登录成功");
		}else{
			res.send("用户名或者密码错误");
		}
	});
});
//查询用户列表--get
router.get("/userlist",(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//导出路由器
module.exports=router;