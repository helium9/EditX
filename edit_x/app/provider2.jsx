"use client";
import React, { useMemo } from 'react';
import { io } from 'socket.io-client';
const SocketContext = React.createContext(null);
export const useSocket=()=>{
    return React.useContext(SocketContext);

}
export const SocketProvider = (props) => {
    const socket = useMemo(
        () => io("http://localhost:3005"),[]
    );
     const onMessageRec=(msg)=>{
      console.log("message recieved from server", msg);
    }
    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}
