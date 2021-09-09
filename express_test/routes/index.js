const { response } = require('express');
var express = require('express');
const { use } = require('./posts');
var router = express.Router();

const postsRouter = require("./posts/index");
const usersRouter = require("./users/index");
const commentsRouter = require("./comments/index");

// posts
router.use("/posts", postsRouter);

// users
router.use("/users", usersRouter);

// comments
router.use("/comments", commentsRouter);


module.exports = router;
