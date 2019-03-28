 const Index = require('../models/index');
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
 }
 module.exports = IndexControllers;