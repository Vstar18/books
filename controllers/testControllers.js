class TestControllers{
  constructor(){}
  actionIndex(){
    return async(ctx, next) => {
      // hahha();
      ctx.body = {
        data:'hahahah----'
      }
    };
  }
}
module.exports = TestControllers;