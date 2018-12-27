//引入fs模块 
const fs=require('fs');
//查看文件的状态
/*
//异步方法，不会阻止后续代码执行
fs.stat('07_url.js',(err,stats)=>{
  //err 如果有错误信息，存储到err
  //stats 文件的具体状态信息
  //如果有错误，抛出；不会继续执行后边的代码
  if(err) throw err;
  //查看文件是目录形式，还是文件形式
  //查看是否为目录
  console.log(stats.isDirectory());
  //查看是否为文件
  console.log(stats.isFile());
});

//使用同步
//同步方法：会阻止后续代码的执行
var res=fs.statSync('07_url.js');
console.log(res.isDirectory());
*/
//创建目录
/*
fs.mkdir('mydir',(err)=>{
  if(err) throw err;
  console.log('目录创建成功');
});
//同步方法
var res=fs.mkdirSync('mydir2');
console.log(res);
console.log(123);
//删除目录
fs.rmdir('mydir',(err)=>{
  if(err) throw err;
  console.log('删除成功');
});

fs.rmdirSync('mydir2');
//读取目录
fs.readdir('05',(err,files)=>{
  if(err) throw err;
  //files如果没有错误，读取的文件
  console.log(files);
});

var files=fs.readdirSync('05');
console.log(files);

//练习：创建目录hello，读取03_2下所有的文件。删除目录hello
fs.mkdir('hello',(err)=>{
  if(err) throw err;
});
fs.readdir('03_2',(err,files)=>{
  if(err) throw err;
  console.log(files);
});
fs.rmdir('hello',(err)=>{
  if(err) throw err;
});
*/
//创建文件
fs.writeFile('data.txt','world',(err)=>{
  if(err) throw err;
});


