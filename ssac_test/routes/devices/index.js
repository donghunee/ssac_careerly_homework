const { json } = require('express');
var express = require('express');
var router = express.Router();

const categoriesRouter = require('./categories/index');
router.use('/categories', categoriesRouter);

const devicesArr = new Array(); 


router.get('/', (req, res) => {
    const {name, version, price} = req.body;

    if(devicesArr.length === 0) {
        res.status(401).json({
        message : '기기가 존재하지 않습니다.'
        });
    } else {
            res.status(200).json({
                message : '기기 정보 조회 완료',
                data : devicesArr
        });
    }
});


// 기기 정보 업로드
router.post('/', (req, res) => {
    const { name, version, price} = req.body;

    const nameIdx = devicesArr.findIndex((item,index) => {
        return item.name === name;
    });
    if (nameIdx === -1) {
        devicesArr.push({
            name,
            version,
            price,
        });
        res.status(200).json({
            message : '기기 정보 추가가 완료 되었습니다.'
        });
    } else {
        res.status(400).json({
            message : '중복된 기기가 존재합니다.'
        });
    }
});


// 기기 정보 조회
router.get('/:idx', (req, res) => {
    const { idx } = req.params;
    const {name, version, price} = req.body;

    const nameIdx = devicesArr.findIndex((item) => item.name === name );

    if(idx<0 || idx >= devicesArr.length) return res.status(409).json({message : 'idx 에러'})

    if(devicesArr[idx]) {
        // const result = devicesArr[nameIdx]; 

        res.status(200).json({
            message : '유저를 찾았습니다',
            data : devicesArr[idx]
        });
    } else {
        res.status(404).json({
            message : '유저 정보가 없습니다.'
        });
    }
});


// 기기 정보 수정
router.put('/:idx', (req, res) => {
    const { idx } = req.params;
    const { name, version, price } = req.body;

    if(devicesArr[idx]) {
        devicesArr[idx] = { name, version, price };
        res.status(200).json({
            message : '기기 정보 수정이 완료 되었습니다',
            data : devicesArr[idx]
        });
    } else {
        // 유저가 없을 경우
        res.status(400).json({
            message : '기기 정보가 존재하지 않습니다.'
        });
    }
});


// 기기 정보 삭제
router.delete('/:idx', (req, res) => {
    const { idx } = req.params;
    const { name, version, price } = req.body;

    if(devicesArr[idx]){
        devicesArr.splice(devicesArr[idx],1);
        res.status(200).json({
            message : '기기 삭제가 완료 되었습니다.'
        });
    } else {
        res.status(400).json({
            message : '기기 정보가 존재하지 않습니다.'
        });
    }
});







module.exports = router;
