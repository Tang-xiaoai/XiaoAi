var http = require('http');
var fs = require('fs');
var template = require('art-template'); //需要加载需要的模板

var headDir = '/Users/tangaihui/workspace/JS_excise';//资源文件前面部分目录

http.createServer().on('request', function (request, response) {
        var url = request.url;

        fs.readFile('./apache_temp.html',function (err,data) {
            if(err){
                console.log('template file error.');
            }else{
                var filePath = headDir+url;
                fs.readdir(filePath,function(err,files){
                    if(err){
                       return response.end('file open error.');
                    }else{
                        var htmlString = template.render(data.toString(),{
                            title: filePath,
                            filrPath:filePath+'/',
                            files:files
                        });
                        response.end(htmlString);
                    }
                })
            }
        });
    }
).listen(8000, function () {
    console.log('apache_cata start ~');
});