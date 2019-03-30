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
    this.btn.click(function (){
      alert(1);
    })
  }
}
export default Create;