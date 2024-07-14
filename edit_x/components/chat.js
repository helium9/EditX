"use client";
import React,{useState,useEffect} from 'react'
import useSocket from './context/useSocket';
import { useAuth, useUser } from "@clerk/nextjs";

const Chat = ({room}) => {

    const [message,setMessage]=useState('');//store a list of messages if you want to add more data you can go to useSocket.js in context folder in components and add more datatypes.
    const {socket,messages}=useSocket({"url":"http://localhost:8001","room":room});
    const { isSignedIn, user } = useUser();//sign in to use chat
    useEffect(() => {
        if(socket){
            console.log("joining room",room);
           if(user){//redundant need to see here
            socket.emit("join-room",room,user?.username);}
            else{
              socket.emit("join-room",room,"anonymous");
            }
        }
    }, [socket])
    const sendMessage=(msg)=>{
        socket.emit("message-sent",msg,room,user.username);
    }

  return (
    <div >
      {user && <><input onChange={(e)=>{setMessage(e.target.value)}}placeholder='messaage..'></input>
        <button onClick={e=>sendMessage(message)}>send</button>
        <div className='h-[50px]'>
          {messages.map((e)=>{
            return <li>{`message from user ${e.username} : ${e.message}`}</li>//implement chat UI here.
          })}
        </div>
        
        </>}
        
    </div>
  )
}

export default Chat
