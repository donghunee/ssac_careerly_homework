var express = require("express");
var router = express.Router();
const con = require("../../modules/mysql");

const authController = {
  signupUesrs: (req, res) => {
    const { id, name, password } = req.body;
    const params = [id, name, password];
    const idParams = [id];
    const sql = "insert into user (id, name, password) values(?,?,?)";
    const idSql = "select id from user where id=?";

    con.query(idSql, idParams, (err, result) => {
      if (result.length !== 0) {
        res.status(400).json({
          message: "중복된 아이디가 있습니다.",
        });
      } else {
        con.query(sql, params, (err, result) => {
          if (err) {
            console.log(err);
            return res.status(401).json({
              message: "생성 에러 ",
            });
          }

          res.status(200).json({
            message: "아이디가 생성 완료되었습니다.",
            data: result,
          });
        });
      }
    });
  },
  signinUsers: (req, res) => {
    const { id, password } = req.body;
    const params = [id, password];
    const sql = "select id,password from user where id=? and password=?";

    con.query(sql, params, (err, result) => {
      if (result.length !== 0) {
        console.log(result);
        res.status(200).json({
          message: "로그인 성공",
          data: result,
        });
      } else {
        res.status(400).json({
          message: "아이디 또는 비밀번호가 틀렸습니다.",
        });
      }
    });
  },
  allUser: (req, res) => {
    con.query("select * from user", (err, result) => {
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
};

module.exports = authController;
