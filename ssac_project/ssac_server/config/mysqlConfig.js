const mysqlConfig = {
  host: "database-1.c7znyr7wovjx.ap-northeast-2.rds.amazonaws.com",
  port: 3306,
  user: "root",
  password: "tngus2788",
  database: "newschema", // 스키마 이름
  connectionLimit: 10, // pool에 연결할 개수 설정
  dateStrings: "date",
};

module.exports = mysqlConfig;
