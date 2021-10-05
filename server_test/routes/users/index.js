const express = require('express');
const router = express.Router();

    router.get('/', (req, res) => {
    res.json({
        username : "lee"
    });
    });

    router.post('/', (req, res) => {

        console.log(req.body);

        // const username = req.body.username;
        // const age = req.body.age;
        // const address = req.body.address;
        // const sns = req.body.sns;

        // 비구조화 할당 (=구조분해할당)
        const {username, age, address, sns} = req.body;


    res.json({
        content : "유저 생성 완료",
        profile : `내 이름은 ${username}이고, 나이는 ${age}이고, 사는 곳은 ${address}이고, sns는 ${sns}주로 사용해`
    });
    });

    router.delete('/:username/:sns', (req, res) => {

    const { username, sns } = req.params;
    console.log(username);
    console.log(sns); 

    res.json ({
        content : "유저 삭제 완료"
    });
    });


module.exports = router;