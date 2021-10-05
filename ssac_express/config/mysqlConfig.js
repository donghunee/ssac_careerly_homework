const mysqlConfig = {
    host : "localhost",
    port : 3306,
    user : "root",
    password : '99212788',
    database : "test",  // 스키마 이름
    connectionLimit : 10,    // pool에 연결할 개수 설정
};

module.exports = mysqlConfig;