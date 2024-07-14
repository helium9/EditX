"use client";
import React,{useState,useEffect} from 'react'
import { io } from "socket.io-client";
import { useRouter } from 'next/navigation'
import useSocket from '../../../components/context/useSocket';
import Chat from '../../../components/chat'


const page = () => {

    
    
     
  return (
    <div>
        <Chat room="12"/>
      
    </div>
  )
}

export default page
