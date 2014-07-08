var weiXin = require('wechat'),
    path = require('path'),
    KEY_WEI_XIN_TOKEN = 'zhangjie',//微信token

    UserDao = require(path.resolve('./dao/user-dao')),
    logger = require(path.resolve('./tools/logger'));





function Index(){
    var l = logger;//new logger();
    l.init();
    l.error(33);
    l.fatal('严重');
    l.debug('WxIndexCtrl初始化');
};

Index.prototype.replay = function(){
    var c = connectDB;//new ConnectMysql();
    var db = c.connect();

    var userDao = new UserDao();
    return userDao.findOneById(1, db);


};

module.exports = Index;

