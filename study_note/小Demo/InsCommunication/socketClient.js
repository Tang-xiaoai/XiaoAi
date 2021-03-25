const net = require('net');
const readline = require('readline');

var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// 在项目文件目录下，执行本程序。【前提：socketServer.js已经开启】
// 格式，例如：node socketClient.js localhost 2021
// 获取命令行输入的参数
var hostname = process.argv[2];
var port = process.argv[3];

var conn = net.createConnection(port, hostname, () => {
    console.log('connected!');
    // 标准输入监听'readable'事件，键盘输入先缓存，之后再发出。
    // 改用readline模块，监听line事件。
    // process.stdin.on('readable', () => {
    //     var chunk = process.stdin.read();
    //     if (chunk !== null ) {
    //         conn.write(chunk);
    //     }
    // });

    // 获取键盘输入，读取行。遇到回车或换行就触发line事件，然后写出到服务端
    rl.on('line',(input)=>{
        conn.write(input);
    });
});

// 监听data事件，并输出
conn.on('data', (mess) => {
    console.log(mess.toString());
});

// 意外断开连接，提示信息
conn.on('end', () => {
    console.log('connection break.');
});
