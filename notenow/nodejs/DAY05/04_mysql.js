const mysql=require('mysql');
//使用连接池连接mysql
//创建连接池对象
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:20  //设置连接池的数量
});
//执行SQL语句
//取1个连接执行SQL语句
/*
pool.query('SELECT * FROM emp WHERE eid=5',(err,result)=>{
  if(err) throw err;
  console.log(result);
});
//删除编号为5的员工
//返回对象中的affectedRow属性表示是否成功删除，如果大于0有数据删除，否则没有删除任何数据
//使用占位符?, 防止SQL注入
pool.query('DELETE FROM emp WHERE eid=? AND sex=?',[2,0],(err,result)=>{
  if(err) throw err;
  console.log(result);
});
//修改编号为7的员工的姓名为 '张三'，生日为'1980-5-1'
//使用affectedRow判断是否修改成功
pool.query('UPDATE emp SET ename=?,birthday=? WHERE eid=?',['张三','1989-5-1',7],(err,result)=>{
  if(err) throw err;
  console.log(result);
});
//添加一条员工的数据
//null  Peter  1  '1997-2-28'  8000  20
pool.query('INSERT INTO emp VALUES(?,?,?,?,?,?)',[null,'Peter',1,'1997-2-28',8000,20],(err,result)=>{
  if(err) throw err;
  console.log(result);
});
*/
var person={
  salary:6000,
  birthday:'1999-1-1',
  eid:null,
  sex:1,
  ename:'Apache',
  deptId:10
};
//以对象的形式插入数据
pool.query('INSERT INTO emp SET ?',[person],(err,result)=>{
  if(err) throw err;
  console.log(result);
});


