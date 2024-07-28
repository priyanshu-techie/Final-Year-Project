import nodemailer from 'nodemailer'


// this is used to send request to the server by being in the local machine
const transporter = nodemailer.createTransport({
    host:"localhost",
    port:25,
    secure:false,
    tls: {
        // Do not fail on invalid certs if your server uses self-signed certificates
        rejectUnauthorized: false
    },
})

let mailOptions = {
    from: '"Sender Name" <sender@example.com>', // sender address
    to: 'recipient@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
});