var mysql = require('mysql');
var path = require('path');
var config = require(path.resolve('./config/mysql'));
var logger = require(path.resolve('./tools/logger'));


var connectDB = (function(){
    return {
        /**
         * 数据库连接
         * @returns {*}
         */
        connect: function(){
            var connection = mysql.createConnection(config);
            connection.on('error', function(err){
                logger.error('数据库连接错误 connectDB.connect err:' +err);
            });
            return connection;
        },
        /**
         * 连接池
         * @returns {*}
         */
        connectPool: function(){
            var pool  = mysql.createPool(config);
            pool.on('error', function(err) {
                console.log(err.code); // 'ER_BAD_DB_ERROR'
                logger.error('数据库连接错误 connectDB.connectPool err:' +err);
            });
            return pool;
        }
    }
}());

module.exports = connectDB;