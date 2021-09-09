var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
res.json({
    message : '조회 성공~!!'
});
});

// /qqqq/?name=summer&age=28&like=kimchi
router.get('/qqqq', (req, res) => {
    const { name, age, like } = req.query;

    console.log(`like : ${like}, age : ${age}, name : ${name}`);
});


router.get('/:id', (req, res) => {

// const id = req.params.id
const {id} = req.params;

if(id === "0") {
res.status(404).json({
message : '해당 게시물이 존재하지 않습니다.'
});} else {
res.status(200).json({
    message : '게시물 조회 성공'
});
    }
});





module.exports = router;