var express = require("express");
var router = express.Router();

const userControllers = require("../../../controllers/userControllers");

router.post("/signup", userControllers.signUp);
router.post("/signin", userControllers.signIn);

module.exports = router;
