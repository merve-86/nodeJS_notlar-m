"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// const router = express.Router();
const router = require('express').Router()


const todo = require('../controllers/todo.controller')

// LIST TODOS:
// router.get("/", todo.list);



// CREATE TODO:
// router.post("/", todo.create);

// router.get("/:id", todo.read);

// router.put("/:id", todo.update );

// router.delete("/:id", todo.delete );

router.route('/')
.get(todo.list)
.post(todo.create)


router.route("/:id")
.get(todo.read)
.put(todo.update)
.delete(todo.delete)


module.exports = router
