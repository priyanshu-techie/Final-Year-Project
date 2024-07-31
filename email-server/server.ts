import {SMTPServer} from 'smtp-server';
import { simpleParser } from "mailparser"
import { connectToDB } from './connection/mongodb';
import EmailModel from './models/email';

connectToDB();

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
        if(address.address !== "dspmu@priyanshudev.tech")
            callback(new Error("Invalid Recipient"));
        else
            callback();
    },

    onData(stream, session, callback) {
        let emailData = '';
        
        stream.on('data', (chunck)=>{
            emailData += chunck.toString();
        });

        stream.on('end', async ()=>{
            try{
                let parsed = await simpleParser(emailData);
                // console.log('Email received. Parsed - ', parsed);
                let email = new EmailModel({
                    from: parsed.from?.text,
                    // @ts-ignore
                    to: parsed.to?.text,
                    subject: parsed.subject,
                    message: parsed.text,
                    status: 'received',
                    type: 'received'
                });
                await email.save();
            }catch(err){
                console.log('Error parsing email', err);
            }
            callback();
        });
    },
})


server.listen(25,()=>{
    console.log('Server is running on port 25');
})

