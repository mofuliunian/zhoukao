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
                    res.end('1111');
                }else{
                    next();
                }
            } else {
                next()
            }
        }
    }))
})