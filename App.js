const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");

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

// app.use(multer({ dest: ‘./uploads/’,
//  rename: function (fieldname, filename) {
//    return filename;
//  },
// }));

// MANAGE EMPLOYERS SCREEN
app.put(`/set_employee`, async (req, res) => {
  try {
    console.log("update to this:", req.body);
    const employee = await Employee.findByIdAndUpdate(
      { _id: req.body._id },
      req.body
    );
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
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

// DELETE EMPLOYEE
app.delete(`/:id`, async (req, res) => {
  console.log("req params delete:", req.params);
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    const updatedEmployees = await Employee.find();
    if (!employee) res.status(404).send("No item found");
    res.status(200).send(updatedEmployees);
  } catch (err) {
    res.status(500).send(err);
  }
});

//SIGN IN  GET EMPLOYEE
app.post(`/signIn`, async (req, res) => {
  console.log("check post req", req.body);
  const employee = await Employee.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log("EMPLOYEE TO SIGNIN:", employee);

  try {
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

// FORGET PASSWORD- not finished on client side
app.post(`/forget_pass`, async (req, res) => {
  console.log("check post req", req.body);
  const employee = await Employee.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log("EMPLOYEE TO SIGNIN:", employee);

  try {
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

// SIGNUP A NEW EMPLOYEE
app.post(`/signUp`, async (req, res) => {
  console.log("checkPOst");
  let employee = "";
  let checkEmployee = await Employee.findOne({
    email: req.body.email,
  });

  if (!checkEmployee) {
    employee = new Employee(req.body);
  }

  try {
    if (employee) {
      await employee.save();
      res.send(employee);
    } else {
      res.send("");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// ADD A NEW EMPLOYEE SCREEN
app.post(`/add_employee`, async (req, res) => {
  console.log("checkPOst");
  let employee = "";
  let checkEmployee = await Employee.findOne({
    phone: req.body.phone,
  });

  if (!checkEmployee) {
    employee = new Employee(req.body);
  }

  try {
    if (employee) {
      await employee.save();
      res.send(employee);
    } else {
      res.send();
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

//this si not a perfect way to update because the name is not uniq, we can either to decide on uniq field or to catch all the employees with the same name and give them all to user and  let him choose from that list
app.put(`/edit_by_name`, async (req, res) => {
  try {
    console.log("update to this:", req.body);
    const employee = await Employee.findOneAndUpdate(
      { first_name: req.body.first_name, last_name: req.body.last_name },
      req.body
    );
    res.send(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});
