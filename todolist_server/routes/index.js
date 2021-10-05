const { response } = require('express');
var express = require('express');
const con = require('../modules/mysql');
var router = express.Router();

const todosRouter = require("./todos/index");


router.use("/todos", todosRouter);

router.get('/',(req,res) =>{
        res.json({
            message: "접속 완료~~!"
        });
    });

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// const todolistArr = [
//   {
//     id : 1,
//     todoContent = "할 일"
//   },
//   {
//     id : 2,
//     todoContent = "할 일"
//   },
//   {
//     id : 3,
//     todoContent = "할 일"
//   }
// ];




module.exports = router;
