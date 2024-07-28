import {SMTPServer} from 'smtp-server';

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
        callback();
    },

    onData(stream, session, callback) {
        stream.on("data",(data)=>{
            console.log("onData ", data.toString() );
        })
        stream.on("end",callback);
    },
})


server.listen(25,()=>{
    console.log('Server is running on port 25');
})

