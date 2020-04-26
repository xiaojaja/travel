export default{
  changeCity(state,city){
      // state公用数据
      state.city=city;
      try{
        localStorage.city=city;
      }catch (e) {
        console.log("can't use localStorage")
      }
  }
}
