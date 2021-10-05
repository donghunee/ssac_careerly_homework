var express = require("express");
var router = express.Router();

const ssacRouter = require("./ssac/index");
const ssacboardRouter = require("./ssac/board/index");

router.use("/ssac", ssacRouter);
router.use("/ssac/board", ssacboardRouter);

module.exports = router;
