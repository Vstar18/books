 const Index = require('../models/index');
 const {URLSearchParams} = require("url");
//  const Add = require('../models/add');
 class IndexControllers{
    constructor(){}
    actionIndex(){
      return async(ctx, next) => {
        const index = new Index();
        const result = await index.getData();
        ctx.body = await ctx.render('index',{
          data:result.data
        });
      };
    }
    actionAdd(){
      return async(ctx, next) => {
        ctx.body = await ctx.render('add')
      };
    }
    actionSave(){
      return async(ctx, next) => {
      const index = new Index();
      const params = new URLSearchParams();
      params.append("Books[name]","ceshi");
      params.append("Books[author]","ceshi");
      params.append("Books[year]","2011");
      const result = await index.saveData({
        params:params
      });
      ctx.body = result;
    };
    }
 }
 module.exports = IndexControllers;