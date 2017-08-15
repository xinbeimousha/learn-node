//处理url
//用koa-router处理post请求，因为post请求通常会发送一个表单，或者JSON，它作为request的body发送，但无论是Node.js提供的原始request对象，还是koa提供的request对象，都不提供解析request的body的功能！
//所以，我们又需要引入koa-bodyparser来解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中。
const Koa = require('koa')
const router = require('koa-router')() 
const bodyParser = require('koa-bodyparser')
const app = new Koa()


//log request URL
app.use(async (ctx,next) =>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next()
})

// //add url-router

// router.get('/hello/:name',async (ctx,next) =>{
//     var name = ctx.params.name
//     ctx.response.body = `<h1>hello ,${name}</h1>`
// })

// router.get('/',async (ctx,next) =>{
//     ctx.response.body = '<h1>Index</h1>'
// })
//add router middleware
router.get('/',async (ctx,next) =>{
    ctx.response.body = 
    `
    <form action="/signin" method="post">
        <p>name: <input type="text" name="name" value="koa"></p>
        <p>password: <input type="password" name="password"></p>
        <p><input type="submit" value="submit"></p>
    `
})
router.post('/signin',async (ctx,next) =>{
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || ''
        if(name === 'koa'&&password === "12345"){
            ctx.response.body = `<h1>hello , ${name}</h1>`
        }else{
            ctx.response.body = '<h1>page not found</h1>'
        }
})
app.use(bodyParser())
app.use(router.routes())

app.listen(3000)

console.log('app start at port 3000...')