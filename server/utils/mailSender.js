// const nodemailer = require("nodemailer");

// const mailSender = async (email, title, body) => {
//     // console.log("printing variables",process.env);
//     try{
//             let transporter = nodemailer.createTransport({
//                 host:process.env.MAIL_HOST,
//                 auth:{
//                     user: process.env.MAIL_USER,
//                     pass: process.env.MAIL_PASS,
//                 }
//             })

// console.log("transporter",transporter);
//             let info = await transporter.sendMail({
//                 from: 'StudyNotion || CodeHelp - by Babbar',
//                 to:`${email}`,
//                 subject: `${title}`,
//                 html: `${body}`,
//             })

//             console.log("message",info);
//             return info;
//     }
//     catch(error) {
//         console.log(error.message);
//     }
// }

// module.exports = mailSender;

const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.MAIL_HOST,
  port: 587,
  secure: false,

  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const send = async (email,title,body) => {
    const mailoptions = {
        from: {
          name: "koi to history",
          address: process.env.MAIL_USER
        },
        to:`${email}`,
              subject: `${title}`,
                html: `${body}`,
        
      };
  try {
    await transporter.sendMail(mailoptions);
    console.log("sent success");
  } catch (error) {
    console.log("error ayi h", error);
  }
};

module.exports = send;
