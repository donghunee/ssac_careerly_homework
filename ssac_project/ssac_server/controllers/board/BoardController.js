var express = require("express");
const con = require("../../modules/mysql");
var router = express.Router();

const boardController = {
  boardAllRead: (req, res) => {
    con.query("select * from board", (err, result) => {
      if (err)
        return res.status(400).json({
          message: "조회 실패했습니다.",
        });
      res.status(200).json({
        message: "조회 성공했습니다.",
        data: result,
      });
    });
  },
  boardIdxRead: (req, res) => {
    const { idx } = req.params;
    const params = [idx];
    const sql = `select * from board where boardIdx = ?`;

    con.query(sql, params, (err, result) => {
      if (result.length !== 0) {
        res.status(200).json({
          message: "조회가 완료되었습니다.",
          data: result,
        });
      } else {
        res.status(400).json({
          message: "조회 실패했습니다.",
        });
      }
    });
  },
  boardSave: (req, res) => {
    const { title, content, boardPw, writer } = req.body;
    const writeTime = new Date();
    console.log(writeTime);
    const params = [title, content, writer, writeTime, boardPw];
    const sql =
      "insert into board (title, content, writer, writeTime, boardPw) values(?,?,?,?,?)";

    con.query(sql, params, (err, result) => {
      console.log(result);
      if (err) {
        console.log(err);
        return res.status(401).json({
          message: "게시물 생성이 안되었습니다.",
        });
      }

      res.status(200).json({
        message: "게시물이 생성 완료되었습니다.",
      });
    });
  },
  boardDelete: (req, res) => {
    const { idx } = req.params;
    const params = [idx];
    const sql = `delete from board where boardIdx = ?`;

    con.query(sql, params, (err, result) => {
      if (err)
        return res.status(500).json({
          message: "에러",
        });
      console.log(result);
      res.status(200).json({
        message: "삭제가 완료되었습니다.",
      });
    });
  },
};

module.exports = boardController;
