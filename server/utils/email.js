// const nodemailer = require('nodemailer');



// module.exports = class Email {
//   constructor(user, url) {
//     this.to = user.email;
   
//     this.url = url;
   
//   }

//   newTransport() {
     
//       return nodemailer.createTransport({
//         host: process.env.MAIL_HOST,
       
//         auth: {
//           user: process.env.MAIL_USER,
//           pass: process.env.MAIL_PASS,
//         },
//       });
    

// }

//   async send(template, subject) {
//     const text=template;

//     const mailOptions = {
//       from: this.from,
//       to: this.to,
//       subject,
     
//     text
//     };

//     await this.newTransport().sendMail(mailOptions);
//   }

//   async sendWelcome() {
//     await this.send('welcome', 'Welcome to the Natours Family!');
//   }

//   async sendPasswordReset() {
//     await this.send(
//       'passwordReset',
//       'Your password reset token (valid for only 10 minutes)'
//     );
//   }
// };