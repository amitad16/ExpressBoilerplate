const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  // service: "Gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAILER_EMAIL, // generated ethereal user
    pass: process.env.MAILER_PASS, // generated ethereal password
  },
});

module.exports = transporter;
