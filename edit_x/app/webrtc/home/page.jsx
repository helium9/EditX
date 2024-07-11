"use client";
import React,{useState,useEffect} from 'react'
import { io } from "socket.io-client";
import { useRouter } from 'next/navigation'
import useSocket from '../../../components/context/useSocket';
// import {useSocket} from "../../../components/context/socketprovider"

// import { useSocket } from '../../provider2'

const page = () => {
    // const {socket}=useSocket();
    // const {socket}=useState();
    
    // const [socket,setsocket]=useState(null);
    // const {sendMessage,messages}=useSocket();
    
    const [message,setMessage]=useState('');
    const {socket,messages}=useSocket("http://localhost:8001");
    const sendMessage=(msg)=>{
      console.log("clicked")
        socket.emit("message-sent",msg);
        console.log(messages, "lop");
    }
   
    
    
     
  return (
    <div>
        <input onChange={(e)=>{setMessage(e.target.value)}}placeholder='messaage..'></input>
        <button onClick={e=>sendMessage(message)}>send</button>


        <div>
          {messages.map((e)=>{
            return <li>{e}</li>
          })}
        </div>
      
    </div>
  )
}

export default page
