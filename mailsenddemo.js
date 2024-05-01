const nodemailer = require('nodemailer');


const gmailTransporter = nodemailer.createTransport({
     service: 'Gmail',
      auth: {
 user: 'harshithaguntaka1009@gmail.com', //gmail id
 pass: 'uiph amnf sbih wiva' // app password
 }
});


const mailOptions = {
 from: 'harshithaguntaka1009@gmail.com',
 to: 'kosanamgayathri04@gmail.com',
 subject: 'SDP PROJECT TEST MAIL',
 html: '<font color=red>You got the test mail succesfully</font>'
};


gmailTransporter.sendMail(mailOptions, function(error, info) {
 if (error) {
 console.error('Error sending email through Gmail:', error.message);
 } else {
      console.log('Email Sent Successfully');
 }
});