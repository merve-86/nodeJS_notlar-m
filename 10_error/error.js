"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *

app.get("/user/:id", function (req, res) {
  //     throw new Error('Hata oluştu')

  //     res.send({
  //         id: req.params.id,
  //         message:'Hello World'
  //     })
  // })

  try {

    if (isNaN(req.params.id)) {
      throw new Error("ID parametresi sayı olmak zorundadır");
    } else {
      res.status(200).send("ID doğru");
    }

  } catch (error) {
    res.status(400).send({
        error:true,
        message:error.message
    })
  }
});

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

app.get("/user/:id", function (req, res) {

  if (isNaN(req.params.id)) { 
    
    res.errorStatusCode = 400

    throw new Error("ID parametresi sayı olmak zorundadır");

  } else {
    res.send("ID doğru");
  }
});

/* ------------------------------------------------------- */
const errorHandler = (error, req, res, next) => {

  const statusCode = res?.errorStatusCode || 500

    res.status(statusCode).send({
        error: true,
        message: error.message,
    });
};
app.use(errorHandler)

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
