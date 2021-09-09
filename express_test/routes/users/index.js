const { response } = require('express');
var express = require('express');
var router = express.Router();

// 빈 배열 생성
const userArr = new Array(); 


// 유저 생성 (create)
router.post('/', (req,res) => {

    const {name, age, love} = req.body;
    
    // 없으면 -1, 있으면 index return
    const userIdx = userArr.findIndex((item, index) => {
        // item = {name: 'summer', age: 28, love: 'kimchi'}
        return item.name === name;
    })
    // 기존 배열에 해당하는 유저 정보가 없는 것
    if (userIdx === -1) {
        
        // userArr.push(req.body);
        userArr.push({
            // 키랑 변수명이 같다면 생략 가능
            // name : name,
            // age : age,
            // love : love

            name,
            age,
            love
        });

        res.status(200).json({
            message : '유저가 성공적으로 생성 되었습니다.'
        });

    } else {
        res.status(409).json({
            message : '중복된 이름이 존재합니다'
        });
    }
    console.log(userArr);
});



// 유저 조회 (read)
router.get('/:name', (req, res) => {

    const {name, age, love} = req.params;

    const userIdx = userArr.findIndex((item) => item.name === name );

    if(userIdx !== -1) {
        // 받고 싶은 결과 값
        const result = userArr[userIdx]; 

        res.status(200).json({
            message : '유저를 찾았습니다',
            data : result
        });
    } else {
        res.status(404).json({
            message : '유저 정보가 없습니다.'
        });
    }
});


// 유저 수정
router.put('/:idx', (req, res) => {
    const { idx } = req.params;
    const { name, age, love } = req.body;

    if(userArr[idx]) {
        // 유저가 있을 경우
        userArr[idx] = { name, age, love }; //{name:name, age:age, love:love}
        res.status(200).json({
            message : '수정 완료',
            data : userArr[idx]
        });
    } else {
        // 유저가 없을 경우
        res.status(400).json({
            message : '유저를 찾지 못했습니다.'
        });
    }
});

// 유저 전체 조회
router.get('/', (req, res) => {
    res.status(200).json({
        data : userArr
    });
})


// 유저 삭제 (delete)
router.delete('/:idx', (req, res) => {
    const { idx } = req.params;
    const { name, age, love } = req.body;

    // 삭제 [배열명].splice([항목 위치], [삭제할 항목 수], [추가할 항목] ㆍㆍㆍ);

    // 0 < idx < userArr.length
    if(idx < 0 || idx >= userArr.length){
        res.status(400).json({
            message : '올바르지 않은 index 값 입니다.'
        });
    }

    if(userArr[idx]){
        userArr.splice(userArr[idx],1);
        res.status(200).json({
            message : '삭제성공',
            data : userArr
        });
    } else {
        res.status(400).json({
            message : '유저를 찾을 수 없습니다.'
        });
    }
});




module.exports = router;
