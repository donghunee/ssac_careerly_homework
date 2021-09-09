const { response } = require('express');
var express = require('express');
var router = express.Router();


const commentArr = [];

// 전체 댓글을 조회하는 라우터
router.get("/", (req, res) => {
    res.status(200).json({
        message : "전체 댓글 조회 완료",
        comment : commentArr
    });
});

// 댓글을 추가하는 라우터
router.post('/', (req, res) => {
    const {name, comment} = req.body

    const nameIdx = commentArr.findIndex((item, index) => {
        return item.name === name;
    }
    );

    if(nameIdx === -1) {
        commentArr.push({
            name, comment
        });
        res.status(200).json({
            message : '댓글 추가 완료'
        });   
    } else {
        res.status(400).json({
            message : '댓글이 추가 되지 않습니다.'
        });
    }
});

// 특정댓글 조회
router.get('/:idx', (req,res) => {
    const {idx} = req.params;
    const {name, comment} = req.body;

    const nameIdx = commentArr.findIndex((item) => item.name === name );

    if(nameIdx !== -1) {
        const result = commentArr[nameIdx]; 

        res.status(200).json({
            message : '특정 댓글 조회 완료',
            data : commentArr[idx]
        });
    } else {
        res.status(404).json({
            message : '특정 댓글이 없습니다.'
        });
    }
});

// 특정 댓글 삭제
router.delete('/:idx', (req,res) => {
    const { idx } = req.params;
    const { name, comment } = req.body;

    if(commentArr[idx]){
        commentArr.splice(commentArr[idx],1);
        res.status(200).json({
            message : '특정 댓글 삭제 완료',
            data : commentArr
        });
    } else {
        res.status(400).json({
            message : '유저를 찾을 수 없습니다.'
        });
    }
});

// 특정 댓글 수정
router.put('/:idx', (req, res) => {
    const { idx } = req.params;
    const { name, comment } = req.body;

    if(commentArr[idx]) {
        commentArr[idx] = { name, comment };
        res.status(200).json({
            message : '특정 댓글 수정 완료',
            data : commentArr[idx]
        });
    } else {
        res.status(400).json({
            message : '유저를 찾지 못했습니다.'
        });
    }
});

// 특정 댓글 신고
// router.post/put('/:idx/declare' (req, res) => {
//     res.status(200).json({
//       message : '특정 댓글 신고 완료',
//     });
// });


module.exports = router;