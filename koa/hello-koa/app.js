//导入koa
const Koa = require('koa')
//创建一个koa对象表示web app 本身
const app = new Koa()
//对于任何请求,app将会调用该异步函数处理
app.use(async (ctx,next) =>{
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>hello koa2</h1>'
})

app.listen(3000)
console.log('app started at port 3000...');