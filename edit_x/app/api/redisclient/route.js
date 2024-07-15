import client from "../../../lib/redis";
import { NextResponse } from "next/server";

export async function POST(req, res) {
 try{
  const data= await req.json();
//   console.log(data);
  
  await client.set("content",data.content);
  const val=await client.get("content");


  return NextResponse.json({status:"success"})}
catch(e){
    console.log("error",e);
    return NextResponse.json({status:"failed"})
}

}

export async function GET(req, res) {
    try{
     
     
     const val=await client.get("content");

     return NextResponse.json({status:"successfull",value:val})}
   catch(e){

       return NextResponse.json({status:"failed",value:""})
   }
   
   }


