import {createClient} from 'redis';
const client= createClient({
    password:"AVNS_Rt8-caE9wFMQlQHS4yA",
    socket:{
        host:`caching-21605163-abhinavgangil2004-3f49.g.aivencloud.com`,
        username:"default",
        
        port:28453
    }}
)
client.on('error',(err)=>{
    // console.log(err);
})
if(!client.isOpen){
    client.connect(); 
}
export default client;