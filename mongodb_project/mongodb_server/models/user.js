const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"], required: true }, // male, female 으로 값을 한정함
  likes: [String], // 배열 형태로 string값 넣을 수 있음 ex) ["apple", "banana"]
  createdDate: { type: Date, default: new Date() },
});

module.exports = mongoose.model("user", userSchema);
