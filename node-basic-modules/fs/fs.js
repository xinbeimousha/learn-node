'use strict'
//fs是文件系统模块，复制读写文件
var fs = require('fs')
//读取文件,异步方法

fs.readFile('sample.txt','utf-8',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
//读取文件，同步方法
// try{
//     var data = fs.readFileSync('sample.txt','utf-8')
//     console.log(data)
// } catch(err){
//     console.log(err)
// }

//写入文件，异步方法
// fs.writeFile('output.txt','我爱你',function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('ok')
//     }
// })
//写入文件,同步方法

fs.writeFileSync('output.txt','我恨你')

//获取文件详细信息

fs.stat('sample.txt',function(err,stat){
    if(err){
        console.log(err)
    }else{
        //是否是文件
        console.log('isFile: ' + stat.isFile())
        //是否是文件夹
        console.log('isDirecotry: ' + stat.isDirectory())

        if(stat.isFile()){
            console.log('size: ' + stat.size)
            console.log('birth time: ' + stat.birthtime)
            console.log('modifed time: ' + stat.mtime)
        }
    }
})

