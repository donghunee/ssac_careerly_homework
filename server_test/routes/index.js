var express = require('express');
var router = express.Router();

const testRouter = require("./test/index");
const postsRouter = require("./posts/index");
const usersRouter = require("./users/index");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   // res.render('index', { title: 'ssac  hi' });
//   res.json({
//     title: "ssac"
//   });

// });


// // GET /ssac
// // res = {ssac : 'love' }
// router.get('/ssac', function(req, res, next) {
//   res.json({
//     ssac : 'love'
//   });
// });

// // GET /test
// // res = {test : 'is_good' }
// router.get('/test', function(req, res, next) {
//   res.json({
//     test : 'is_good'
//   });
// });

// router.get("/", (req, res, next) => {
//   res.json({
//     title : "main javascript"
//   });
// });

// router.use("/", (req, res, next) => {
//   console.log("미들 웨어");
//   next();
// });


router.get("/", (req, res, next) => {
  res.status(404).json({
    error: "page not found!!",
  });
});


router.use("/test", testRouter);

// router.get("/test/main", (req, res, next) => {
//   res.json({
//     title : "test"
//   });
// });


// use는 모든 메소드를 허용
router.use('/posts', postsRouter);

// router.get("/posts/create", (req, res, next) => {
//   res.json({
//     title : "main"
//   });
// });

// router.get("/posts/update", (req, res, next) => {
//   res.json({
//     title : "test main"
//   });
// });

// router.get("/posts/delete", (req, res, next) => {
//   res.json({
//     title : "test main"
//   });
// });

router.use('/users',usersRouter );

module.exports = router;


