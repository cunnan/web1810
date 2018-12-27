//两个函数
function getLength(r){
  return 2*3.14*r;
}
function getArea(r){
  return 3.14*Math.pow(r,2);
}
module.exports.getLength=getLength;
module.exports.getArea=getArea;
/*
module.exports.getLength=function(){

}
module.exports={
  getLength:function(){
  
  },
  getArea:function(){
  
  }
}
*/
//console.log(module.exports===exports)

