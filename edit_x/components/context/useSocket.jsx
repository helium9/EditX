// hooks/useSocket.js
"use-client"
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useSocket = ({url,room}) => {
   
    const [socket, setSocket] = useState(null);
    const [messages,setmessages]=useState([]);// write now storing username and tehre message in a json.
    const onMessageRec=(msg,username)=>{
        const message=msg;// this is where you will recieve messages from server, change it accordingly.
        console.log("message recieved from server", message);
        
        setmessages((prev)=>[...prev,{"message":message,"username":username}]);
      }
    useEffect(() => {
        // connect socket and return cleanup function
        const socketIo = io(url);
        socketIo.on(`message`,onMessageRec);
        setSocket(socketIo);
        

        function cleanup() {
            // disconnect socket
            socketIo.disconnect();
            socketIo.off(`message`,onMessageRec);
        }

        return cleanup;
    }, [url,room]);

    return {socket,messages};
};

export default useSocket;
