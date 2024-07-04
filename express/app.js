"use strict";
/*--------------------------------------*/

const express = require("express");
const app = express();

/*--------------------------------------*
app.get('/', (req, res) => {
    //res.end('app çalıştı')
    // const obj = {
    //     error: false,
    //     message: 'welcome'
    // }
    //res.end(JSON.stringify(obj))
    //res.send(obj)
    //res.send([0,1])
    // res.status(404)
    // res.send({
    //   error: false,
    //   message: "sayfa bulunamadı",
    // });
    res.status(404).send({
      error: false,
      message: "sayfa bulunamadı",
    });
})


/*--------------------------------------*/

//app.get('/', (req, res) => {res.end('app.get çalıştı')})
//app.post('/', (req, res) => {res.end('app.post çalıştı')})
//app.all('/', (req, res) => {res.end('app.all çalıştı')})

// app.route('/')
// .get((req, res) => {res.end('app.get çalıştı')})
// .post((req, res) => {res.end('app.post çalıştı')})

// app.get('/', (req,res) => {res.send('burası anasayfa')})
// app.get('/path', (req,res) => {res.send('burası path ')})

// //app.get('/abc(x?)123', (req,res) => {res.send('now in here: /abc(x?)123')})
// app.get(/^\/xyz/, (req,res) => {res.send("now in here: /xyz/");})

/*--------------------------------------*/

// app.get("/user/:userId()", (req, res) => {
//   res.send({
//     path: req.path,
//     userId: req.params.userId,
//     abc: req.query.abc,
//   });
// });



//app.get('/', (req, res) => {res.status(200).send({message:'OK'}) })
console.log(__dirname)
app.get('/package', (req, res) => {res.sendFile(__dirname + '/package.json') })


/*--------------------------------------*/
require("dotenv").config();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
