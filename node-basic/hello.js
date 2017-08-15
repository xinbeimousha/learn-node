'use strict'

function hello (){
    console.log('hello world')
}

function greet(name){
    console.log('hello ' + name)
}

module.exports = {
    hello:hello,
    greet:greet
}