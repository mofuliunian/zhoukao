var gulp = require('gulp');
var webserver = require('gulp-webserver');
var url = require('url');
var fs = require('fs');

gulp.task('webserver',function () {
    gulp.src('.').pipe(webserver({
        port: 8080,
        host: 'localhost',
        middleware: function (req,res,next) {
            var obj = url.parse(req.url);
            res.setHeader('Access-Control-Allow-Origin','*');
            if(req.method === 'GET'){
                if(obj.pathname === "/data"){
                    res.end('[{"list": [{"icon": "icon-shezhi","xm": "换轮胎","ms": "￥359.00起"}, {"icon": "icon-shezhi","xm": "做保养","ms": "精确匹配"}, {"icon": "icon-shezhi","xm": "洗车","ms": "优质服务"}, {"icon": "icon-shezhi","xm": "领红包","ms": "免单天天送"},],"content": [{"icon": "icon-shezhi","nr": "自助小保养","code":"0"}, {"icon": "icon-shezhi","nr": "自助小保养","code":"0"}, {"icon": "icon-shezhi","nr": "自助小保养","code":"0"}, {"icon": "icon-shezhi","nr": "自助小保养","code":"0"}, {"icon": "icon-shezhi","nr": "自助小保养","code":"0"}, {"img": "images/cen.gif","code":"1"}, {"icon": "icon-shezhi","nr": "自助小保养","code":"0"}, {"icon": "icon-shezhi","nr": "自助小保养","code":"0"}, {"icon": "icon-shezhi","nr": "自助小保养","code":"0"}, {"icon": "icon-shezhi","nr": "自助小保养","code":"0"}, {"icon": "icon-shezhi","nr": "自助小保养","code":"0"},], "banner":[{"img": "images/banner.gif"}]}]');
                }else{
                    next();
                }
            } else {
                next()
            }
        }
    }))
})