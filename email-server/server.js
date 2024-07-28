"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var smtp_server_1 = require("smtp-server");
var server = new smtp_server_1.SMTPServer({
    allowInsecureAuth: true,
    authOptional: true,
    onConnect: function (session, cb) {
        console.log('Connected with ', session.id);
        cb();
    },
    onMailFrom: function (address, session, cb) {
        console.log('Mail from ', address.address, " session id ", session.id);
        cb();
    },
    onRcptTo: function (address, session, callback) {
        console.log('Recive to ', address.address, " session id ", session.id);
        callback();
    },
    onData: function (stream, session, callback) {
        stream.on("data", function (data) {
            console.log("onData ", data.toString());
        });
        stream.on("end", callback);
    },
});
server.listen(25, function () {
    console.log('Server is running on port 25');
});
