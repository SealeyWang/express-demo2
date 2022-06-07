const logger =  (request,response, next) => {
    console.log(request.url)
    next()
}
// 导出函数
exports.logger  =logger
