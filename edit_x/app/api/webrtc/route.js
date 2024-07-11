const {Server}= require("socket.io");
const io=new Server();
const ets=new Map();
io.on("connection",(socket)=>{
    console.log("connected");
    socket.io("join-room",(data)=>{
        const {roomId,emailId}=data;
        ets.set(emailId,socket.id);
        socket.join(roomId);
        socket.broadcast.to(roomId).emit("user-joined",{emailId});
    })
});

io.listen(3001);