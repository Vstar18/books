
const router = require('koa-simple-router');
const IndexControllers = require('./indexControllers');

const TestControllers = require('./testControllers');
const indexControllers = new IndexControllers();
const testControllers = new TestControllers();
module.exports = (app)=>{
  app.use(router(_ => {
    _.get('/', indexControllers.actionIndex());

    _.get('/test', testControllers.actionIndex());
    _.get('/add', indexControllers.actionAdd());
    _.get('/save', indexControllers.actionSave());
  }))
}