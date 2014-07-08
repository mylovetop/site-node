/**
 * Created by admin on 14-4-21.
 */
//路由

//API 路由
var weiXin = require('./api/weixin');//微信
require('express-namespace');
module.exports = function(app){

    app.namespace('/node',function(){
        //页面
        app.get('/', function(req, res){
            console.log("app.get('/'");
            res.json({title:111});
        });


        //API
        app.use('/api', function(req, res, next){
            res.setHeader('content-type','text/json;charset=UTF-8');
            next();
        });
        app.use('/api/weixin', weiXin);

        app.use(function(req, res, next) {
//        var err = new Error('Not Found');
//        err.status = 404;
//        next(err);
            res.send('404！ 页面没找到！');

        });
    });

};

