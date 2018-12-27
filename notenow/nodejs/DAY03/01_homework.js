const fs=require('fs');
/*
//创建目录mydir
fs.mkdirSync('mydir');
//创建文件1.txt,写入1
fs.writeFileSync('1.txt',1);
//创建文件2.txt，写入2
fs.writeFileSync('2.txt',2);

//删除目录mydir
fs.rmdirSync('mydir');
//删除文件
//fs.unlinkSync('1.txt');
//先判断文件是否存在，如果存在执行删除
var res=fs.existsSync('2.txt');
//console.log(res);
if(res){
  fs.unlinkSync('2.txt');
}
*/
//判断文件num.txt是否存在，如果不存在则创建，写入0。
var res=fs.existsSync('num.txt');
if(!res){
  fs.writeFileSync('num.txt',0);
}
//读取文件中的内容
fs.readFile('num.txt',(err,data)=>{
  if(err) throw err;
  //data就是读取的文件中的数据
  //格式是buffer形式
  var num=data.toString();
  num++;
  //把加1后的结果再次写入到num.txt中
  fs.writeFileSync('num.txt',num);
});


