function common (){

}
common.verson = 1.0;
common.throttle = function (fn,wait){
  var timmer;
  return function (...args){

    if(!timmer){
      timmer = setTimeout(()=> timer= null,wait);
      return fn.apply(this,args);
    }
  }
}