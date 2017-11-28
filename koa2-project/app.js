const Koa = require('koa');
const app = new Koa();
const json = require('koa-json');
const onerror = require('koa-onerror');
const jwt = require("jsonwebtoken");
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa-cors');
const convert=require('koa-convert');
const formidable = require('formidable');

let DB = require('./Common/Models/DB');
let md5=require('./Common/Models/md5');
let config=require('./Common/config');

DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', function () {
  console.log("数据库成功打开");
});

global.jwt=jwt;
global.config=config;
global.formidable = formidable;
global.md5=md5;

onerror(app);

app.use(convert(cors()));

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));
app.use(require('koa-static')(__dirname + '/Admin/Resource'));

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

let Admin = require('./Admin/index');

Admin(app);

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
