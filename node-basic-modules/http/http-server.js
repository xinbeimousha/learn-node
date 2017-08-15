//node 的url模块可以解析request.url的路径，可以过得相应的文件
var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path')

//创建http server 
 var server = http.createServer(function(request,response){
     //获得请求的路径
     var pathname = url.parse(request.url).pathname
     //获得本地文件的路径
     var filepath =path.join(__dirname,pathname)
     //判断文件属性
     fs.stat(filepath,function(err,stats){
         if(!err&&stats.isFile()){
             //没有出错且文件存在
             console.log('200: ' + request.url)
             //发送200响应
             response.writeHead(200)
             //将文件流导向response
             fs.createReadStream(filepath).pipe(response)
         }else if(!err&&stats.isDirectory()){
             //获得指定文件的路径
            var filepathname = path.join(filepath,'/index.html')
            console.log('200: ' + request.url)
            //发送200响应
            response.writeHead(200)
            //将文件流导到response
            fs.createReadStream(filepathname).pipe(response)
         }else{
             //出错了且文件不存在
             console.log('404: ' + request.url)
            //发送404响应
            response.writeHead(404)
            response.end('<h1>404 NOT FOUND</h1>')
         }
     })
 })

 server.listen(8080)

 console.log('Server is running at http://127.0.0.1:8080')