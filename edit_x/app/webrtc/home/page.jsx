"use client";
import React,{useState,useEffect,useRef} from 'react'

import client from '../../../lib/redis'
import axios from 'axios'

const time_for_saving=5000;
const time_for_saveMessage_display=1000;
const page = () => {
  const [content,setContent]=useState("");
  const [saver,setsaver]=useState("");
  const contentRef = useRef(content);
  const handleclick=async ()=>{
    const value=await axios.post('/api/redisclient', { "content":contentRef.current });
    // console.log(value);
    if(value.data.status==="success"){
      // console.log("success");
      setsaver("Content saved successfully");
      setTimeout(() => setsaver(""), time_for_saveMessage_display);
      // console.log(saver)
    }
    else{
      setsaver("-----")
      setTimeout(() => setsaver(""), time_for_saveMessage_display);
      console.log("failed");
    }
   
  }
  const getContent=async ()=>{
    const value=await axios.get('/api/redisclient');
    // console.log(value);
    if(value.data.status==="successfull"){
      setContent(value.data.value);
    }
    else{
      console.log("failed");
    }
  }
 useEffect(()=>{
    getContent();
 },[])

 useEffect(() => {
  contentRef.current = content;
}, [content]);

 useEffect(() => {
  const interval = setInterval(() => {
    handleclick();
  }, time_for_saving);

  return () => clearInterval(interval);
}, []);




    
    
     
  return (
    <div>
  
        <div>
          Hello there enter your message
        </div>
        <input className="border-2 border-black w-1/2 h-[200px] " type="message" value={content} onChange={e=>setContent(e.target.value)}></input>
        <button onClick={handleclick}>button</button>
        {saver==='Content saved successfully' && <div className='text-black'>{saver}</div>}
       
        
      
    </div>
  )
}

export default page
