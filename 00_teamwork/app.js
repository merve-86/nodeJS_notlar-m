"use strict";

const express = require("express");
const app = express();

const router = express.Router()
app.use(router);

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Running port: http://127.0.0.1:" + PORT);
});

/*------------------------------------------------*

app.get("/", (req, res, next) => {
  res.send({
    method: req.method,
    url: req.url,
  });
  next()
});

/*------------------------------------------------*

app.get("/sum", (req, res) => {
  const { num1, num2 } = req.query;
  const sum = parseInt(num1) + parseInt(num2);
  res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
});

/*------------------------------------------------*

router.get(/\/abc|\/acd/, (req, res) => {
  res.send("<h1>path matched</h1");
});

/*------------------------------------------------*

router.get(/\/a\d{1}c{2}|\/a\d{1}c{3}/, (req, res) => {
    res.send("path matched");
})
 
/*------------------------------------------------*

router.get(/.*Hello$/, (req, res) => {
res.send('<h1>Route Fourth</h1>')})


/*------------------------------------------------*

router.get(/^\/Hello$/, (req, res) => {
  res.send("<h1>Route Fourth</h1>");
});

/*------------------------------------------------*
const students = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Steve",
  },
];

router.get("/students", (req, res) => {
  res.json(students);
});

router.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find((student) => student.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
});

router.get("/", (req, res) => {
  res.send("Welcome to the student API!");
});

/*------------------------------------------------*

// Middleware function
app.use((req, res, next) => {
console.log("Middleware function is triggered!");
next(); // Pass control to the next middleware or route handler
});

// Route handler for the root URL ('/')
app.get("/", (req, res) => {
res.send("Hello!");
});

/*------------------------------------------------*

app.use((req, res, next) => {
  throw new Error("Something went wrong!");
});
// Özel hata orta yazılımı
const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    error: {
      message: err.message,
    },
  });
};
app.use(errorHandler);


/*------------------------------------------------*/
