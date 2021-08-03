const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  user_type: String,
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  phone: String,
  address: String,
  roll: String,
  avatar: String,
  img: { data: Buffer, contentType: String },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
