var express = require('express');
var router = express.Router();
const upload = require("../modules/awsUpload");
const imgUpload = require("../modules/imgUpload");
const membershipRouter = require("./membership/index");



router.use("/membership", membershipRouter);

router.get('/',(req,res) =>{
  res.json({
      message: "접속 완료~~!"
  });
});


module.exports = router;
