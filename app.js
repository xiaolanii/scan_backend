
// 引入express
let express = require('express');
// 引入路径处理模块
let path = require('path');
// 引入cors解决跨域
let cors = require('cors');

//引入express-jwt用来解决token的验证问题,express-jwt和jwt都要引入(jwt的加密解密方法在util里面),两者解决的问题不同（jwt用来加密，express-jwt用来验证）。
let expressJWT = require('express-jwt');

//引入路径
let mobileRouter=require('./routes/mobile');



// 实例化
let app = express();
app.listen(8081);
console.log('后端服务已开启,现在监听8081端口...')

app.use('/api/mobile', mobileRouter)


module.exports = app;
