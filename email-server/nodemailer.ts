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

let mailOptionsArray = [
    {
        from: '"Abhijeet Prashad" <abdxk@gmail.com>',
        to: 'abc@priyanshudev.tech',
        subject: 'Reminder for your LA trip.',
        text: 'I am writing this to see how are you my friend. Hope you are doing good.',
        html: '<b>Hello world?</b>'
    },
    {
        from: '"John Doe" <john.doe@example.com>',
        to: 'abc@priyanshudev.tech',
        subject: 'Meeting Reminder',
        text: 'This is a reminder for our meeting scheduled at 3 PM tomorrow.',
        html: '<b>Meeting Reminder</b>'
    },
    {
        from: '"Jane Smith" <jane.smith@example.com>',
        to: 'abc@priyanshudev.tech',
        subject: 'Project Update',
        text: 'The project is on track and we are expecting to complete it by the end of the month.',
        html: '<b>Project Update</b>'
    },
    {
        from: '"Alice Johnson" <alice.johnson@example.com>',
        to: 'abc@priyanshudev.tech',
        subject: 'Invitation to Webinar',
        text: 'You are invited to attend our webinar on the latest trends in technology.',
        html: '<b>Invitation to Webinar</b>'
    },
    {
        from: '"Bob Brown" <bob.brown@example.com>',
        to: 'abc@priyanshudev.tech',
        subject: 'Job Opportunity',
        text: 'We have an exciting job opportunity that matches your profile. Please let us know if you are interested.',
        html: '<b>Job Opportunity</b>'
    }
];

let mailOptions = {
    from: '"Pradeep Hooda" <prdph@gmail.com>', // sender address
    to: 'abc@priyanshudev.tech', // list of receivers
    subject: 'Hello Priyanshu how are you?', // Subject line
    text: 'I am writting this to see how are you my friend. Hope you are doing good.', // plain text body
    html: '<b>Hello world?</b>' // html body
};

mailOptionsArray.forEach((mailOptions) => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
})



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