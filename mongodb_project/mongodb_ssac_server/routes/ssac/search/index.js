var express = require("express");
const searchController = require("../../../controllers/searchControllers");
var router = express.Router();

router.get("/", searchController.search);

module.exports = router;
