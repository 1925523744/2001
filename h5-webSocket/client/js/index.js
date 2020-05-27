import gTagName from '../model/gettags.js'
import gStyle from '../model/getstyle.js'
import * as  gConnect from '../model/connect.js'
gTagName()
gStyle()

const addName = gTagName('.addname')
const cancelbtn = gTagName('.cancel')
const confirmbtn = gTagName('.confirm')
const user = gTagName('.nicheng')
const send = gTagName('.send')
const content = gTagName('.content')
const con = gTagName('.con')

function closeNameBox(){
    addName.style.display = 'none' 
}
cancelbtn.onclick = closeNameBox

confirmbtn.onclick = function(){
    window.username = user.value
    gConnect.client.onopen = function(){
        client.send(`${window.username}进来了`)
    }
    closeNameBox()
}



// confirmbtn

//连接服务器



//获取服务器的信息，然后展示
gConnect.client.onmessage = function (msg){
    console.log(msg.data)
    const li = document.createElement('LI')
  const p = document.createElement('P')
    p.innerHTML = window.username + '-' + filterDate(Date.now())
    li.innerHTML = msg.data
    li.appendChild(p)
    con.appendChild(li)
    
}

function filterDate(val){
    const date = new Date(val)
    return date.getFullYear() + '年' +(date.getMonth() + 1) +'月'+date.getDate() + '日'
}

//点击发送发送内容
send.onclick = sendSMS

//回车发送内容
document.onkeydown = function(e){
    if(e.keyCode == 13){
        sendSMS()
    }
}

function sendSMS(){
    const val = content.value
    if(val){
        gConnect.client.send(val)
        content.value = ''
    }else{
        alert('请输入内容')
    }
}