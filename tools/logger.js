/**
 * Created by admin on 14-4-21.
 * 日志
 */

var log4js = require('log4js'), path = require('path');

var logger = (function(){

    var logger;

    /**
     * 初始化
     * @param level 日志等级 ['TRACE','DEBUG','INFO','WARN','ERROR','FATAL']
     * @param categoryName 模块名称
     * @private
     */
    var _init = function(level, categoryName){
        var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate(),
            logFileName = year + '-' + month + '-' + day + '';

        log4js.loadAppender('file');
        log4js.addAppender(log4js.appenders.file(path.resolve('./logs/' + logFileName + '.log')), categoryName);
        logger = log4js.getLogger(categoryName);


        if(typeof level == 'undefined'){
            logger.setLevel('FATAL');
        }else{
            logger.setLevel(level);
        }
    };

    var _error = function(info){
        logger.error(info);
    };

    var _fatal = function(info){
        logger.fatal(info);
    };

    var _warn = function(info){
        logger.warn(info);
    };

    var _info = function(info){
        logger.info(info);
    };

    var _debug = function(info){
        logger.debug(info);
    };

    var _trace = function(info){
        logger.trace(info);
    };



    return {
        init: function(level, categoryName){
            _init(level, categoryName);
        },
        error:function(info){
            _error(info);
        },
        fatal: function(info){
            _fatal(info);
        },
        warn: function(info){
            _warn(info);
        },
        info: function(info){
            _info(info);
        },
        debug: function(info){
            _debug(info);
        },
        trace: function(info){
            _trace(info);
        }

    }
}());


module.exports = logger;