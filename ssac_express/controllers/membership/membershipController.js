const { response } = require("express");
var express = require("express");
const con = require("../../modules/mysql");
var router = express.Router();

const membershipController = {
  readAllMembership: (req, res) => {
    con.query("select * from membership", (err, result) => {
      if (err)
        return res.status(400).json({
          message: "조회 실패",
        });
      res.status(200).json({
        message: "조회성공",
        data: result,
      });
    });
  },
  detailMembership: (req, res) => {
    const { gender } = req.params;
    // const { id, title, img } = req.body;
    const params = [Number(gender)];
    if (Number(gender) >= 2) {
      if (err)
        return res.status(400).json({
          message: "조회 실패",
        });
    } else {
      con.query(
        "select * from membership where gender=?",
        params,
        (err, result) => {
          res.status(200).json({
            message: "조회 성공",
            data: result,
          });
        }
      );
    }
  },
  uploadImage: (req, res) => {
    const file = req.file;
    console.log(file);
    if (file === null) {
      //if(img)
      return res.status(500).json({
        message: "에러가 발생 했습니다.",
      });
    } else {
      res.status(200).json({
        message: "이미지 업로드 완료",
        imgUrl: file.location,
      });
    }
  },
  uploadMembership: (req, res) => {
    const { gender, title, img } = req.body;
    const sql = `insert into membership (gender, title, img) values(?,?,?)`;
    const params = [gender, title, img];

    con.query(sql, params, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "에러가 발생 했습니다.",
        });
      res.status(200).json({
        message: "생성이 완료 되었습니다.",
      });
    });
  },
};

module.exports = membershipController;
