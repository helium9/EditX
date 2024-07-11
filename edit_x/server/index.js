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
sub.subscribe("MESSAGES");
io.on('connection',socket=>{
    
    
    // socket.on('join-room',(data)=>{
    //     const {roomId,emailId}=data;
    //     console.log("User",roomId, "Jined room",emailId)
    //     socket.join(roomId);
    //     socket.broadcast.to(roomId).emit("user-joined",{emailId});
    // })
    socket.on("message-sent",async (msg)=>{
        console.log(msg);
        await pub.publish("MESSAGES",msg);
        

    })
});
sub.on('message',(channel,message)=>{
    if(channel === "MESSAGES"){
        io.emit("message",{message});
    }
})
app.listen(8000,()=>console.log("HTTP server running"));
io.listen(8001);