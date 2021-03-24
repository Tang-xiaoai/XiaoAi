var http = require('http');
var fs = require('fs');
var template = require('art-template');
// var url = require('url');
var querystring = require('querystring');


var d = new Date();
var today = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

var server = http.createServer();

server.on('request', function (req, res) {
    // var urlObj = url.parse(req.url,true);
    // var pathName = urlObj.pathname;
    // url模块导入，但是url.parse()方法弃用，用new URL(input[,base]);代替
    // URL不用导入url模块，但是需要完整的URL地址
    var myURL = new URL(req.url, 'https://localhost:8000');
    pathName = myURL.pathname;
    if (pathName === '/') {
        fs.readFile('./views/index.html', function (err, data1) {
            //读取index.html
            if (err) {
                res.end('index.html' + '页面读取有误');
            } else {
                fs.readFile('./comments/comment', (err, data2) => {
                    //将comment数据加载到index.html页面，如果失败返回框架页面
                    if (err) {
                        console.log('comments file read wrong.');
                        res.end(data1);
                    } else {
                        //将comment文件的内容解析成JSON格式，通过模板引擎渲染(comments为数组，里面都是JSON对象)
                        var comments = eval('([' + data2.toString() + '])');
                        var htmlStr = template.render(data1.toString(), {
                            comments: comments
                        });
                        res.setHeader('Content-type', 'text/html');
                        res.end(htmlStr);
                    }
                });
            }
        });
    } else if (pathName === '/post') {
        fs.readFile('./views/post.html', function (err, data) {
            if (err) {
                return res.end(pathName + '页面读取有误');
            } else {
                res.end(data);
            }
        });
    } else if (pathName.indexOf('/public/') === 0) {
        //如果请求的url以/public/开头 （即访问public文件资源），则反馈响应文件
        fs.readFile('.' + pathName, function (err, data) {
            if (err) {
                res.end(pathName + '页面读取有误');
            } else {
                res.end(data);
            }
        });
    } else if (pathName.indexOf('/comments') === 0) {
        // 评论提交，请求。
        // 处理：解析。如果是方式是post，启动request的data事件，获取data数据
        // 启动request的end事件停止request的data事件，并且解析获得的数据为json
        // 将json格式数据转换成字符串追加到本地comment文档中并重定向到index.html

        var str = '';
        var json = {};
        req.on('data', function (data,) {
            str += data;
        });
        req.on('end', function () {
            str += '&dateTime='+ today;
            json = querystring.parse(str);

            var newMessage = ',\n'+JSON.stringify(json);
            console.log(typeof(newMessage));

            fs.writeFile('./comments/comment', newMessage, {flag: 'a'}, (err) => {
                if (err) {
                    res.end('评论写入有误');
                } else {
                    //新增评论写入本地文档，重定向至index.html页面，显示最新评论信息
                    //res.statusCode = 302;
                    //res.serHeader = ('Location', '/');
                    res.writeHead(302, {
                        'Location': '/'
                    });
                    res.end();
                }
            })
        })

    } else {
        fs.readFile('./views/404.html', function (err, data) {
            if (err) {
                return res.end(pathName + '404 页面读取有误');
            } else {
                res.end(data);
            }
        });
    }
});

server.listen(8000, function () {
    console.log('start ~');
});