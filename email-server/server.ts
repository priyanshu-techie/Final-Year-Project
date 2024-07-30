import {SMTPServer} from 'smtp-server';
import { simpleParser } from "mailparser"


const server:SMTPServer = new SMTPServer({
    allowInsecureAuth:true,
    authOptional:true,
    onConnect(session,cb){
        console.log('Connected with ', session.id);
        cb();
    },

    onMailFrom(address,session,cb){
        console.log('Mail from ', address.address, " session id ", session.id );
        cb();
    },

    onRcptTo(address, session, callback) {
        console.log('Recive to ', address.address, " session id ", session.id );
        // if(address.address !== "abc@priyanshudev.tech")
        //     callback(new Error("Invalid Recipient"));
        // else
            callback();
    },

    onData(stream, session, callback) {
        stream.on("data",async(data)=>{
            console.log("On data we are getting this data:");
            const parsed = await simpleParser(data);
            console.log(JSON.stringify(parsed));
        })
        stream.on("end",callback);
    },
})


server.listen(25,()=>{
    console.log('Server is running on port 25');
})

