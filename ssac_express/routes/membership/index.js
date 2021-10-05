const { response } = require("express");
var express = require("express");
const con = require("../../modules/mysql");
var router = express.Router();
const upload = require("../../modules/awsUpload");
const imgUpload = require("../../modules/imgUpload");

const membershipController = require("../../controllers/membership/membershipController");

router.post("/images", upload.single("img"), membershipController.uploadImage);

router.post("/", membershipController.uploadMembership);

router.get("/", membershipController.readAllMembership);

router.get("/:gender", membershipController.detailMembership);

module.exports = router;
