// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Hello Vue!'
//   }
// })
// console.log('add.js');

class Create{
  constructor(){
    this.btn = $("#js-btn");
  };
  fn(){
    this.btn.click(common.throttle(function (){
      // alert(1);
      console.log(1);
    },10))
  }
}
export default Create;