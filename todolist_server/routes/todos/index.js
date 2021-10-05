var express = require("express");
var router = express.Router();

const con = require("../../modules/mysql");

let todolistArr = [];

// 투두 리스트 생성
// method : POST
// url : /todos
// body : { id : 0, todoContent : '내일 할일'}

// response
// 200
// { message : '생성이 완료 되었습니다', data : [{ id: 0, todoContent: '내일 할일'}, { id: 1, todoContent: '내일 할일'}]}

// 400
// {message : '생성에 실패했습니다.'}

// router.post("/", (req, res) => {
//   const { id, todoContent } = req.body;

//   const todosIdx = todolistArr.findIndex((item) => item.id === id);

//   if (todosIdx === -1) {
//     // 해당 게시물이 존재하지 않는다.
//     todolistArr.push({
//       id,
//       todoContent,
//     });
//     res.status(200).json({
//       message: "생성이 완료 되었습니다.",
//       data: todolistArr,
//     });
//   } else {
//     // 해당 게시물이 존재
//     res.status(400).json({
//       message: "생성에 실패했습니다",
//     });
//   }
// });

router.post("/", (req, res) => {
  const { todoContent } = req.body;
  const sql = `insert into ssac_todolist (todoContent,checked) values(?,?)`;

  const params = [todoContent,0];

  con.query(sql,params, (err, result, fields) => {
    if(err) 
    return res.status(400).json({
      message: "생성 실패"
    });
    res.status(200).json({
      message : "생성 완료",
    });
});
});



// 투두 리스트 전체 조회
// method : GET
// url : /todos

// response
// 200
// {message : '조회가 완료 되었습니다', data : [{ id: 0, todoContent: '내일 할일'}, { id: 1, todoContent: '내일 할일'}]}
// 400
// {message : '조회에 실패 했습니다'}

// router.get("/", (req, res) => {
// //   if (todolistArr.length === 0) {
// //     // 빈 배열
// //     res.status(400).json({
// //       message: "조회에 실패 했습니다.",
// //     });
// //   } else {
// //     // 존재 하는 경우
// //     res.status(200).json({
// //       message: "조회 성공",
// //       data: todolistArr,
// //     });
// //   }
// todolistArr = [];
// res.status(200).json({
//     message : '전채 초기화 완료',
//     data : todolistArr
// });
// });

router.get("/", (req, res)=> {
  //전체 데이터 조회
  con.query("select * from ssac_todolist", (err,result,fields) => {

    if(err) 
    return res.status(400).json({
      message : '조회 실패',
    });
    res.status(200).json({
      message : '조회성공',
      data : result,
    });
  });
});




// 투두 리스트 수정 (id)
// method : PUT
// url : /todos/:id
// body :  { todoContent : "모레할 일"}
// params : {id : 0}

// 200
// {message : '수정 완료', data : [{ id: 0, todoContent: '내일 할일'}, { id: 1, todoContent: '내일 할일'}]}
// 400
// {message : '수정에 실패 했습니다'}

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { todoContent } = req.body;

//   const todoIdx = todolistArr.findIndex((item) => item.id === Number(id));

//   if (todoIdx === -1) {
//     // 정보가 존재하지 않을 경우
//     res.status(400).json({
//       message: "수정에 실패 했습니다.",
//     });
//   } else {
//     // 정보가 존재 할 경우
//     todolistArr[todoIdx] = { id: Number(id), todoContent };
//     res.status(200).json({
//       message: "수정 완료",
//       data: todolistArr,
//     });
//   }
// });

router.put("/:id", (req,res) => {
  const { id } = req.params;
  const { todoContent,checked } = req.body;
  const sql = `update ssac_todolist set todoContent=?, checked=? where id = ?`;
  const params = [todoContent,checked,id];

  con.query(sql, params, (err,result) => {
    if(err) 
    return res.status(400).json({
      message: "삽입 실패"
    });
    res.status(200).json({
      message : "삽입 완료",
    });
  });
});

// 투두 리스트 삭제 (id)
// method : delete
// url : /todos/:id
// params : {id : 0}

// response
// 200
// {message : '삭제가 완료 되었습니다.', data : [{ id: 0, todoContent: '내일 할일'}, { id: 1, todoContent: '내일 할일'}]}
// 400
// {message : '삭제에 실패 했습니다'}

// router.delete("/:id", (req, res) => {
//   const { id } = req.params;

//   const todoIdx = todolistArr.findIndex((item) => item.id === Number(id));

//   if (todoIdx === -1) {
//     // 정보가 존재하지 않는 경우

//     res.status(400).json({
//       message: "삭제에 실패 했습니다.",
//     });
//   } else {
//     // 정보가 존재하는 경우
//     todolistArr.splice(todoIdx, 1);
//     res.status(200).json({
//       message: "삭제가 완료 되었습니다.",
//       data: todolistArr,
//     });
//   }
// });


router.delete("/:id", (req,res) => {
  const { id } = req.params;
  const sql = "delete from ssac_todolist where id = ?";
  const params = [id];

  con.query(sql, params, (err,result) => {
    if(err) 
    return res.status(400).json({
      message: "삭제 실패"
    });
    res.status(200).json({
      message : "삭제 완료",
    });
  });
});


module.exports = router;