//引入上一级目录下的mysql连接池对象
const pool=require('../pool.js');
const express=require('express');
//创建空路由器
var router=express.Router();
//添加路由
//1.ajaxDemo
router.get("/ajaxDemo",(req,res)=>{
	res.send("这是我的第一个ajax");
});
//2.登录接口
router.get('/login',(req,res)=>{
	//获取用户名称和密码
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	if(!$uname){
	 res.send('用户名为空');
	 return;
	}
	if(!$upwd){
	 res.send('密码为空');
	 return;
	}
	var sql="select * from xz_user "+ 
		"where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(result.length>0){
			res.send("登录成功");
		}else{
			res.send("用户名密码错误");
		}
	});
});
//3.post登录接口
router.post('/postlogin',(req,res)=>{
	//获取用户名和密码
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	var sql="select * from xz_user "+ 
		"where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(result.length>0){
			res.send("登录成功");
		}else{
			res.send("用户名密码错误");
		}
	});
});
//查询用户表数据接口 userlist
router.get('/userlist',(req,res)=>{
	var sql="select * from xz_user";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//导出路由器
module.exports=router;