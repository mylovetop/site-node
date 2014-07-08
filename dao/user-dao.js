/**
 * Created by admin on 14-4-19.
 *
 * 用户名表操作
 *
 */
var connectDB = require(path.resolve('./tools/connect-mysql'));


function userDao(){

};

userDao.prototype.findOneById = function(userId){

    var db = connectDB.connect();
    var sql = 'select * from user_info where id=' + userId + '';
    return db.query(sql);
};

userDao.prototype.findUserInfoById = function(userId){
    var pool = connectDB.connectPool();

    pool.getConnection(function(err, connection){
        var sql = 'select * from user_info where id=' + connection.escape(userId);

        connection.query(sql, function(err, rows, fields) {
            console.log('userDao.prototype.queryUserInfo');
            if (err) throw err;
//      var list = rows;
            callback(rows);
        });

        connection.release();
    })

};



module.exports = userDao;
