//服务端文件
//1.引入模块(这里的模块是ws,不是Net)
const ws =  require('ws')

    //定义host和port
const host = '10.31.160.54'
const port = 9000

//2.使用ws的server()方法并实例化
const wsServer = new ws.Server({
    //传入host,port
    host,port
})

//4.定义一个值来进行编号，同时限制储存个数
let count = 0

    //数组长度判断限制个数
const clients = []

//3.连接客户端
    //获取客户端进行编号，储存并广播他的数据
wsServer.on('connection',(client)=>{
    //编号,命名
    client.name = count++
    //存入数组
    clients[client.name] = client //第几个叫什么名字
    //获取数据
    client.on('message',(msg)=>{
        //获取编号
        msg.name = client.name
        //输出到终端，可以不要
        console.log(msg.toString())
        //广播
        broadcast(client,msg)
    })
})

function broadcast(client,msg){
    //遍历每一个传入的数据
    for(let key in clients){
        //将每一个数据都发送到客户端
        clients[key].send(msg.toString())
    }
}
