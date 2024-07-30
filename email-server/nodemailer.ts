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

// import nodemailer from 'nodemailer';
// import dns from 'dns';

// // Function to check DNS setup
// function checkDNS(domain: string): Promise<void> {
//     return new Promise((resolve, reject) => {
//         dns.resolveMx(domain, (err, addresses) => {
//             if (err) {
//                 reject(`DNS lookup failed: ${err.message}`);
//             } else if (addresses && addresses.length > 0) {
//                 console.log('MX records found for domain:', addresses);
//                 resolve();
//             } else {
//                 reject('No MX records found for domain.');
//             }
//         });
//     });
// }

// // Email sending function
// async function sendEmail() {
//     try {
//         // Check DNS setup
//         await checkDNS('priyanshudev.tech');
//         console.log('DNS setup is correct.');

//         // Create transporter
//         const transporter = nodemailer.createTransport({
//             host: "13.202.77.97", // Replace with your SMTP server
//             port: 25,
//             secure: false,
//             tls: {
//                 // Do not fail on invalid certs if your server uses self-signed certificates
//                 rejectUnauthorized: false
//             },
//         });

//         // Mail options
//         let mailOptions = {
//             from: '"Sender Name" <sender@example.com>', // sender address
//             to: 'test@priyanshudev.tech', // list of receivers
//             subject: 'DNS Check ✔', // Subject line
//             text: 'This is a test email to check DNS setup.', // plain text body
//             html: '<b>This is a test email to check DNS setup.</b>' // html body
//         };

//         // Send mail
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 return console.log(error);
//             }
//             console.log('Message sent: %s', info.messageId);
//         });
//     } catch (error) {
//         console.error(error);
//     }
// }

// // Call the sendEmail function
// sendEmail();