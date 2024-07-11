"use client";

import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';
const SocketContext = React.createContext((msg)=>{ console.log(msg)});
// export const useSocket=()=>{
//     return React.useContext(SocketContext);

// }
export const useSocket=()=>{
    const state=useContext(SocketContext);
    if(!state)throw new error("state is undefined");
    return state;
} 
export const SocketProvider = ({children}) => {
    const [socket,setSocket]=useState();

    const sendmessage =useCallback((msg)=>{
        console.log("Send Message",msg);
        if(socket){
            socket.emit('event-message',{message:msg});
        }
    },[socket]);
    useEffect(()=>{
        console.log("i am here");
        const  _socket =io("http://localhost:8000");
        setSocket(_socket);
        return ()=>{
            _socket.disconnect();
            setSocket(undefined);
        }
    },[])
 
    return (
        <SocketContext.Provider value={{sendmessage}}>
            {children}
        </SocketContext.Provider>
    )
}