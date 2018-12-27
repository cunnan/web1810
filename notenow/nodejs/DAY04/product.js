//引入express
const express=require('express');
//创建空路由器 
var router=express.Router();
//创建路由
//往空路由器中添加路由
router.get('/list',(req,res)=>{
  res.send('这是产品列表');
});
router.get('/delete/:lid',(req,res)=>{
  console.log(req.params);
  res.send('这是产品删除');
});
//导出路由器 
module.exports=router;






