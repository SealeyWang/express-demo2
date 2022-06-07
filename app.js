const express = require("express");
const logger = require("./logger").logger;
const app = express();


app.use((request, response, next) =>{
    if( request.path=== '/' && request.method === 'GET') {
        response.end('这是根目录')
    }
    next()
});


app.use((request, response, next) =>{
    if( request.path=== '/aaa' && request.method === 'GET') {
        response.end('这是aaa')
    }
    next()
});


app.use(logger);
// 访问根目录
app.use((request, response, next) => {
    console.log(1);
    response.write("hi"); //如果使用  response.send() 则响应结束  下面的hi2 设置的响应不会执行
    next();// 如果不调用next() 则下面的 hi2 不会处理
});


// 处理两次访问目录
app.use((request, response, next) => {
    console.log(2);
    response.write("h2");
    response.end();
});

app.listen(3000);
console.log('listen 3000')

