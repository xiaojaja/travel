let defaultCity='北京';
try{
  if(localStorage.city){
    defaultCity=localStorage.city
  }
}catch (e) {
  console.log("can't use localStorage")
}
export default{
    //存放全局公用的数据
    city: defaultCity
}
