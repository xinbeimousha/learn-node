var fs = require('fs')

//打开一个流
var rs = fs.createReadStream('sample.txt','utf-8')
rs.on('data',function(chunk){
    console.log('DATA')
    console.log(chunk)
})
rs.on('end',function(){
    console.log('END')
})
rs.on('error',function(err){
    console.log('ERROR: ' + err)
})

var ws1 = fs.createWriteStream('output1.txt','utf-8')
ws1.write('使用stream写入数据...\n')
ws1.write('end.')
ws1.end()

var ws2 = fs.createWriteStream('output2.txt')
ws2.write(new Buffer('使用stream写入二进制数据..\n','utf-8'))
ws2.write(new Buffer('end.','utf-8'))
ws2.end()

var ws = fs.createWriteStream('copy.txt')

rs.pipe(ws)