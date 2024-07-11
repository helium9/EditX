// hooks/useSocket.js
"use-client"
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useSocket = (url) => {
    const [socket, setSocket] = useState(null);
    const [messages,setmessages]=useState([]);
    const onMessageRec=(msg)=>{
        console.log("message recieved from server", msg);
        const message=msg.message;
        setmessages((prev)=>[...prev,message]);
      }
    useEffect(() => {
        const socketIo = io(url);
        socketIo.on('message',onMessageRec);
        setSocket(socketIo);
        

        function cleanup() {
            socketIo.disconnect();
            socketIo.off('message',onMessageRec);
        }

        return cleanup;
    }, [url]);

    return {socket,messages};
};

export default useSocket;
