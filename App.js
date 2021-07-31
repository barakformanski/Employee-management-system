const express = require("express"); //Line 1
const app = express(); //Line 2
const PORT = process.env.PORT || 5000; //Line 3
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connectToDB = require("./connectToDB");
const http = require("http");
const server = http.createServer(app);
const Employee = require("./models");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

connectToDB().then(() => {
  server.listen(PORT, () => {
    console.log(
      "app is listening on port:",
      PORT,
      "   and connected to Mongo DB"
    );
  });
});

// GET ALL EMPLOYEES
app.get("/", async (req, res) => {
  const employees = await Employee.find();

  try {
    console.log("employees:", employees);
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET EMPLOYEE FROM SIGN IN
app.post(`/signIn`, async (req, res) => {
  console.log("check post req", req.body);
  const employee = await Employee.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log("EMPLOYEE TO SIGNIN:", employee);

  try {
    // await employee.save();
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post(`/signUp`, async (req, res) => {
  console.log("checkPOst");
  const employees = await Employee.find();
  console.log(
    "checkPOST:",
    employees.map((emp) => emp.email === req.body.email)
  );

  const employee = new Employee(req.body);

  try {
    // await employee.save();
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});
