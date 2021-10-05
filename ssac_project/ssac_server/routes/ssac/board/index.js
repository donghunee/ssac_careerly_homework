var express = require("express");
var router = express.Router();

const boardController = require("../../../controllers/board/BoardController");

router.get("/", boardController.boardAllRead);

router.get("/:idx", boardController.boardIdxRead);

router.post("/", boardController.boardSave);

router.delete("/:idx", boardController.boardDelete);

module.exports = router;
