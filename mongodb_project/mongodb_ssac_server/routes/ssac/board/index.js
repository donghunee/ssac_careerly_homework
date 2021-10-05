var express = require("express");
var router = express.Router();
const boardController = require("../../../controllers/boardControllers");
const authModule = require("../../../modules/authModule");

// 인증 필
router.post("/", authModule.loggedIn, boardController.createBoard);
router.put("/:id", authModule.loggedIn, boardController.updateBoard);
router.delete("/:id", authModule.loggedIn, boardController.deleteBoard);

router.get("/", boardController.readAllBoard);
router.get("/:id", boardController.readDetailBoard);

module.exports = router;
