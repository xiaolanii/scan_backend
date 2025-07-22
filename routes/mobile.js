//后端api文件

// 引入路由
const router=require('express').Router();
//引入封装好的数据库操作
let db=require('../db');

//测试路由
router.get('/test',(req,res)=>{
    db.Query('select * from user').then(data=>{
        console.log(data);
        res.send('测试路由');
    },err=>{
        console.log(err);
    });
})





//导出路由
module.exports=router;