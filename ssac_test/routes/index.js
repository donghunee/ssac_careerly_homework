var express = require('express');
var router = express.Router();

const devicesRouter = require("./devices/index");


router.use("/devices", devicesRouter);

module.exports = router;
