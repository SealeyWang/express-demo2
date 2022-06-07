const express = require("express");
const logger = require("./logger").logger;
const app = express();


app.use((request, response, next) => {
    response.write("1");
    next();
});

app.use((request, response, next) => {
    response.write("2");
    if (true) {
        next('出错了');
    }
    next();
});

app.use((request, response, next) => {
    response.write("3");
    next();
});

// 错误处理函数
app.use((error, request, response, next) =>{
    response.write(error)
    response.end()
    next()
});

app.listen(3000);
console.log("listen 3000");

