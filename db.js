let mysql=require('mysql2');

// 创建连接池，效率更高，不需要每次操作数据库都创建连接
let pool=mysql.createPool({
    host:'10.43.32.182',
    user:'root',
    password:'Hycf@2024',
    database:'demo1',
    port:3306,
    connectionLimit:50,//允许连接数
    multipleStatements : true,  //是否允许执行多条sql语句
})

//封装数据库sql请求操作，返回的是一个包含对象的数组
let Query=( sql , ...params )=>{
    return new Promise(function(resolve,reject){
        //从连接池中拿一条链接
        pool.getConnection(function(err,connection){
            if(err){
                return reject(err);
            }
            connection.query( sql , params , function(error,res){
                // console.log(res);
                connection.release();
                if(error){
                    return  reject(error);
                }
                resolve(res);
            });
        });
    });
};

let sqlTest=function(){
    let sql=`select * from user`;
    return sql;
}

module.exports={
    Query,
    sqlTest
}