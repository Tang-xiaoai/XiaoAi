const net = require('net');

// 用于存储不同的socket连接
var clientObjs = {};

net.createServer((socket) => {
    console.log('client is coming ~');
    socket.write('连接成功。请输入你的ID：');
    var flag = true;
    socket.on('data', (data) => {
        if (flag) {
            //这段代码只执行一次，用于接收用户名
            //缺点，每次都要进行flag判断。如果有个只执行一次就能废弃的功能就好了
            var newID = data.toString().replace(/[\r\n]/g, '');
            boardcast(clientObjs, '欢迎'+newID+'加入群聊～');
            socket.userID = newID;
            clientObjs[newID] = socket;
            flag = false;
            return;
        }
        var mes = `[${(new Date()).toLocaleString()}] ${socket.userID} 说:${data}`;
        //广播，将某一客户端的内容广播到其他客户端
        boardcast(clientObjs, mes);
    });
    socket.on('close', () => {
        var leaveMes = `${socket.userID} 离开群聊～`;
        //当某客户端断开时，从客户端socket列表中删除
        delete clientObjs[socket.userID];
        boardcast(clientObjs, leaveMes);
        //客户端断开服务器提示
        console.log('client is leaving~');
    });
}).listen(2021, 'localhost');

//自定义广播函数
function boardcast(clientObjs, mes) {
    for (var key in clientObjs) {
        clientObjs[key].write(mes);
    }
}