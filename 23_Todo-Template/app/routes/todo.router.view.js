"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// const router = express.Router()
const router = require("express").Router();

// Controller:
const todo = require("../controllers/todo.controller.view");

/* ------------------------------------------------------- */

// // LIST TODOS:
// router.get('/', todo.list)

// // CRUD: Create Read Update Delete

// // CREATE TODO:
// router.post('/', todo.create)
// // READ TODO:
// router.get('/:id', todo.read)
// // UPDATE TODO:
// router.put('/:id', todo.update)
// // DELETE TODO:
// router.delete('/:id', todo.delete)

/* ------------------------------------------------------- */

// router.route("/")
// .get(todo.list)
// .post(todo.create);

// router.route("/:id")
// .get(todo.read)
// .put(todo.update)
// .delete(todo.delete);

/* ------------------------------------------------------- */
router.get("/", todo.list);
router.get("/create", todo.create);
router.post("/create", todo.create);

router.get('/:id', todo.read)

router.get('/:id/update', todo.update)
router.post('/:id/update', todo.update)

router.get('/:id/delete', todo.delete)



module.exports = router;