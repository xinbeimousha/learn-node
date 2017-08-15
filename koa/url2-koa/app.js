
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const controller = require('./controller')
// log request URL:
// app.use(async (ctx, next) => {
//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     await next();
// });
app.use(bodyParser())
app.use(controller())
app.listen(3000)

console.log('app start at port 3000...')