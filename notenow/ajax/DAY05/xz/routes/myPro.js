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
//3.删除用户---get
router.get('/deleteUser',(req,res)=>{
	var $uid=req.query.uid;
	if(!$uid){
		res.send('uid不存在');
		return;
	}
	var sql="delete from xz_user where uid=?";
	pool.query(sql,[$uid],(err,result)=>{
		if(err) throw err;
		res.send("1");//1表示删除成功
	});
});
//用户检索
router.get('/queryuser',(req,res)=>{
	var uid=req.query.uid;
	if(!uid){
	  res.send("uid不存在");
	  return;
	}
	var sql="select * from xz_user where uid=?"
	pool.query(sql,[uid],(err,result)=>{
		if(result.length>0){
			res.send(result[0]);
		}else{
			res.send("0");
		}
	});
});
//修改的接口 post
router.post("/update",(req,res)=>{
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	if(!$email){
		res.send("邮箱不存在");
		return;
	}
	if(!$phone){
		res.send("phone不存在");
		return;
	}
	if(!$user_name){
		res.send("user_name不存在");
		return;
	}
	var sql="update xz_user set uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? where uid=?";
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],(err,result)=>{
		if(err) throw err;
		//res.send("<script>alert('修改成功');location.href='http://127.0.0.1:3000/02_userlist.html'</script>");
		res.send("1");
	});
});
//检验用户名是否存在
router.get("/checkUname",(req,res)=>{
	var $uname=req.query.uname;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	var sql="select * from xz_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");//重名，不能注册
		}else{
			res.send("0");//可以注册
		}
	});
});
//注册接口
router.post("/register",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	if(!$email){
		res.send("邮箱不存在");
		return;
	}
	if(!$phone){
		res.send("phone不存在");
		return;
	}
	if(!$user_name){
		res.send("user_name不存在");
		return;
	}	
	var sql="insert into xz_user values(null,?,?,?,?,null,?,?)";
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name,$gender],(err,result)=>{
		if(err) throw err;
		res.send("1");
	});
});

//导出路由器
module.exports=router;