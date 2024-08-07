"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// sendMail(to, subject, message)

const nodemailer = require("nodemailer");

module.exports = function sendMail(to, subject, message) {
  //* GoogleMail (gmail)
  //* Google -> AccountHome -> Security -> Two-Step-Verify -> App-Passwords
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "merveeoncuu86@gmail.com",
      pass: "zjfr rubr zcff myfy",
    },
  });

  // SendMail:
  transporter.sendMail(
    {
      from: "merveeoncuu86@gmail.com",
      // to: 'merveeoncuu86@gmail.com8, // 'abc@def.com, def@ghi.com'
      to: to,
      // subject: 'Hello',
      subject: subject,
      // text: 'Hello There. How are you?',
      text: message,
      // html: '<p> <b> Hello There </b> <br> How are you? </p>',
      html: message,
    },
    function (error, success) {
      success
        ? console.log("SUCCESS:", success)
        : console.log("ERROR: ", error);
    }
  );
};
