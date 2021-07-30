require("dotenv").config();

const uri = process.env.MONGO_URI;
const mongoose = require("mongoose");

module.exports = function connectToDB() {
  return mongoose.connect(`${uri}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};
