 const Index = require('../models/index');
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
 }
 module.exports = IndexControllers;