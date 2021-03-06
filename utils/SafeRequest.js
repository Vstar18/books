const fetch = require("node-fetch");
const config = require("../config/index");

class SafeRequest {
  constructor(url){
    this.url = url;
    this.baseURL = config.baseURL;
  }
  fetch(options){
    let ydfetch = fetch(this.baseURL + this.url);
    if(options.params){
      ydfetch = fetch(this.baseURL +  this.url,{
        method:options.method,
        body:options.params
      })
    }
    // console.log(ydfetch);
    return new Promise((resolve,reject)=>{
      let result = {
        code:0,
        message:"",
        data:[]
      }
      ydfetch
      .then(res=>{
        return res.json();
      })
      .then((json)=>{
        result.data = json;
        console.log(json,'json'); 
        resolve(result);
      })
      .catch((error)=>{
        result.code = -1;
        result.message = "后端通讯异常";
        reject(result);
      })
    })
  }
}
module.exports = SafeRequest;
