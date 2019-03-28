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
   * 
   */
  getData(options){
    const safeRequest = new SafeRequest("books/index");

    return safeRequest.fetch({});
  }
}
module.exports = Index;