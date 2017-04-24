/**
 * Created by karonl on 2017/4/24.
 */
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const session = require('koa-session');
const convert = require('koa-convert');
const cross = require('koa-cors');
const render = require('koa-ejs');
const path = require('path');
const co = require('co');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa');
//apollo test schema
const testSchema = require('./graphql/schema.js');

//koa Router start
const main = new Router(); 
main.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' })); // graphql调试器
// http://localhost:1081/graphiql
main.post('/graphql', graphqlKoa((ctx) => { // graphql入口
  return { schema: testSchema, context: { ctx: ctx }, debug: true};
})); 
//koa Router end

//koa Middleware start
const koa = new Koa();
koa.use(logger());
koa.use(bodyParser());
koa.use(convert(cross({origin: '*'}))); // 完全开放域
koa.use(main.routes()); // 路由应用中间件
koa.use(serve(__dirname + '/static')); // 静态资源备选
//koa Middleware end

console.log("koa@2.2.0 listen 1081")
koa.listen(1081);