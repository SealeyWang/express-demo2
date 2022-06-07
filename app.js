const express = require("express");
const logger = require("./logger").logger;
const app = express();


app.use((request, response, next) => {
    console.log(1);
    next();
});

app.use((request, response, next) => {
    console.log(2);

    if (true) {
        next("出错了");
    } else {
        next();
    }
});

app.use((request, response, next) => {
    console.log(3);

    next();
});

// 错误处理函数
app.use((error, request, response, next) => {
   error +='错误处理1'
    next(error) // 要把错误传给下一个 错误处理函数

});


// 错误处理函数
app.use((error, request, response, next) => {
    error +='错误处理2'

    if (response.headersSent) {
        return next(error);
    }
    response.status(500);
    response.send(error);
});


app.listen(3000, () => {
    console.log("listen 3000");
});

