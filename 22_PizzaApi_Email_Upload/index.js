"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ mkdir logs
    $ nodemon
*/
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Logger:
app.use(require("./src/middlewares/logger"));

// Auhentication:
app.use(require("./src/middlewares/authentication"));

// findSearchSortPage / res.getModelList:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */

const nodemailer = require("nodemailer");

// nodemailer.createTestAccount().then((data) => console.log(data) )

/*
{
  user: 'somjy2zzabif6vyl@ethereal.email',
  pass: 'hExaDWKKeycQECvNV5',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  web: 'https://ethereal.email',
  mxEnabled: false
}
*/

// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: '587',
//   secure: false,
//   auth: {
//     user: 'somjy2zzabif6vyl@ethereal.email',
//     pass: 'hExaDWKKeycQECvNV5'
//   }
// })

// console.log(transporter)

// transporter.sendMail({

//   from: 'somjy2zzabif6vyl@ethereal.email',
//   to: 'merveeoncuu@gmail.com',
//   subject: 'Hello',
//   text: 'Hello There. How are you?',
//   html: '<p> <b> Hello There </b> <br> How are you? </p>',

// }, function (error, success) {

//   success ? console.log('SUCCESS: ', success) : console.log('ERROR: ', error)
// })

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "merveeoncuu@gmail.com",
    pass: "",
  },
});

/* ------------------------------------------------------- */
// Routes:

// routes/index.js:
app.use("/", require("./src/routes/"));

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PIZZA API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
//require("./src/helpers/sync")(); // !!! It clear database.