const { application } = require('express');
const express = require('express');
const router = express.Router();


// router.get('/create', (req, res) => {
//     res.json({
//         content: "create"
//     });
// });

// router.get('/update', (req, res) => {
//     res.json({
//         content: "update"
//     });
// });

// router.get('/delete', (req, res) => {
//     res.json({
//         content: "delete"
//     });
// });
 


const fruitArr = [];   // DB 역할

// Read 전체 데이터 조회 : GET
    router.get('/', (req, res) => {
        res.json({
            data : fruitArr,
        });
    });

// Create 데이터 생성 : POST

    router.post('/', (req, res) => {
        const {fruit} = req.body;
        
        if(fruitArr.includes(fruit)){
            res.status(500).json({
                // 과일이 이미 존재하고 있다.
                message : "과일이 이미 존재 합니다."
            });
        } else {
            // 기존 배열에 과일이 존재하지 않는다.
            fruitArr.push(fruit);
            fruitArr.sort();
            res.status(200).json({
                message : "과일 추가가 완료 되었습니다."
            });
        }
    });



    module.exports = router;