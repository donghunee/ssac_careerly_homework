var express = require("express");
var router = express.Router();

const authController = require("../../controllers/auth/AuthController");

router.get("/", authController.allUser);

router.post("/signup", authController.signupUesrs);

router.post("/signin", authController.signinUsers);

/* GET home page. */
router.get("/ssac", (req, res) => {
  res.json({
    message: "접 속 완 료 !",
  });
});

module.exports = router;
