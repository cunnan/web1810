//引入mysql模块
const mysql=require('mysql');
//普通连接
//创建连接对象
var connection=mysql.createConnection({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu'
});
//执行连接
connection.connect();
//执行SQL语句
connection.query('SELECT * FROM emp',(err,result)=>{
  if(err) throw err;
  console.log(result);
});
//SQL语句执行完，关闭连接
connection.end();





