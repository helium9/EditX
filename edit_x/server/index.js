const express = require("express");
const redis=require("ioredis")
const bodyparser=require("body-parser");
const {Server}=require("socket.io");
const io=new Server({
    cors:true,
});
const app=express();


const pub=new redis({
    host:`caching-21605163-abhinavgangil2004-3f49.g.aivencloud.com`,
    username:"default",
    password:"AVNS_Rt8-caE9wFMQlQHS4yA",
    port:28453}

);
const sub=new redis(
    {
        host:`caching-21605163-abhinavgangil2004-3f49.g.aivencloud.com`,
        username:"default",
        password:"AVNS_Rt8-caE9wFMQlQHS4yA",
        port:28453}
);

app.use(bodyparser.json());
var room_for_message="0";// default room for redis
io.on('connection',socket=>{
   
    socket.on("message-sent",async (msg,room,username)=>{
        sub.subscribe(`MESSAGE/${room}`);
        room_for_message=room;
        await pub.publish(`MESSAGE/${room}`,JSON.stringify({"message":msg,"username":username}));  // this is where you can store in the redis database, for more features append the same in the parameter json.  

    })
    socket.on("join-room",(room)=>{
        socket.join(room);
    })

});
// this is the redis code, if you have added some information in pub.publish then it will come her in mes variable after parsing.
sub.on(`message`,async (channel,message)=>{
    const mes=await JSON.parse(message);
    if(channel === `MESSAGE/${room_for_message}`){
        // console.log(room_for_message,"from server");
        io.sockets.in(room_for_message).emit(`message`,mes.message,mes.username);// send whatever more info needed here.
    }
})


app.listen(8000,()=>console.log("HTTP server running"));
io.listen(8001);
