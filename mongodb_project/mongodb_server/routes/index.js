var express = require("express");
const { resource } = require("../app");
const user = require("../models/user");
var router = express.Router();

const users = require("../models/user");

// create
router.post("/auth", (req, res) => {
  const { name, age, gender, likes } = req.body;

  const userModel = new users({
    name,
    age,
    gender,
    likes,
  }); // model 초기화

  userModel
    .save()
    .then((savedUser) => {
      console.log(savedUser);
      res.status(200).json({
        message: "생성 성공",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    });
});

// read all
router.get("/auth", async (req, res) => {
  try {
    const result = await users.find();
    res.status(200).json({
      message: "조회 성공",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "조회 실패",
      error: error,
    });
  }
});

//read detail
router.get("/auth/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await users.findOne({ id: id });
    if (!result) return res.status(400).json({ message: "조회 실패" });
    res.status(200).json({
      message: "조회 성공",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "조회 실패",
      error: error,
    });
  }
});

// update
router.put("/auth/:id", async (req, res) => {
  const { id } = req.params;
  const { name, gender, age, likes } = req.body;
  try {
    const result = await users.findByIdAndUpdate(
      id,
      {
        name,
        age,
        gender,
        likes,
      },
      { new: true } // 저장된 후 값을 반환
    );
    res.status(200).json({
      message: "수정 성공",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "수정 실패",
      error: error,
    });
  }
});

// delete
router.delete("/auth/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await users.findByIdAndDelete(id);
    res.status(200).json({
      message: "삭제 성공",
    });
  } catch (error) {
    req.status(500).json({
      message: "삭제 실패",
      error: error,
    });
  }
});

module.exports = router;
