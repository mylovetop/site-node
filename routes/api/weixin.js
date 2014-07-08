var express = require('express'),
    WeiXin = require('../../controller/weixin/index'),
    router = express.Router();


/* GET weiXin API. */
router.get('/', function(req, res) {
    var wx =  new WeiXin();
    var query = wx.replay();
    query
        .on('error', function(err){

        })
        .on('result', function(result){
            var info = JSON.stringify(result);
            res.json(info);
        });
});

module.exports = router;
