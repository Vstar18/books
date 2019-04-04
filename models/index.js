/**
 * @fileoverview 
 * @author xiaoxingxing
 */

const SafeRequest = require('../utils/SafeRequest.js');
class Index{
  /**
   * @constructor 
   * @param {string} app koa2执行上下文
   */
  constructor(app){}
  /**
   * 获取后台全部数据的方法
   * @param {*} options 配置项
   * @example
   * return new Promise
   * getData(options)
   * 
   */
  getData(options){
    const safeRequest = new SafeRequest("books/index");

    return safeRequest.fetch({});
  }
  /**
   * 把用户传过来的书名全部加入到PHP接口
   * @param {*} options 参数项
   * @example
   * return new Promise
   * saveData(options)
   * 
   */
  saveData(options){
    const safeRequest = new SafeRequest("books/create");

    return safeRequest.fetch({
      method:"post",
      params:options.params
    });
  }
}
module.exports = Index;