import React from "react";
import { useState, useContext } from "react";

import { Button, View, Text, TextInput, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserContext from "../../UserContext";

import SignUpstyles from "./SignUpStyles";
import axios from "axios";
import {
  validateEmail,
  validatePassword,
  validateName,
} from "../../utils/components/validation";
import { Ionicons } from "@expo/vector-icons";

export default function SignUp({ navigation }) {
  const URI = useContext(UserContext);
  const [loader, setLoader] = useState(false);
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePass] = useState("");
  const [retypePassword, onChangeRetypePassword] = useState("");

  const SignUpEmployee = () => {
    setLoader(true);
    console.log("check post req");

    axios({
      method: "POST",
      // url: "http://192.168.85.63:5000/signUp",
      url: `${URI}signUp`,
      data: {
        fisrt_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        user_type: retypePassword === password ? "employee" : "admin",
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setLoader(false);
      console.log("res.data", res.data);
      {
        !res.data
          ? alert("employee alreadt exist")
          : res.data.user_type === "employee"
          ? navigation.navigate("Home", {
              email: res.data.email,
              password: res.data.password,
            })
          : res.data.user_type === "admin"
          ? navigation.navigate("ManageEmployees", {
              email: res.data.email,
              password: res.data.password,
            })
          : null;
      }
      // navigation.navigate("Home", { email: res.data.email });
    });
  };

  const validation = () => {
    if (
      validateName(firstName) &&
      validateName(lastName) &&
      validateEmail(email) &&
      validatePassword(password) &&
      password === retypePassword
    ) {
      SignUpEmployee();
    } else if (
      validateName(firstName) &&
      validateName(lastName) &&
      validateEmail(email) &&
      validatePassword(password) &&
      `${password}admin` === retypePassword
    ) {
      SignUpEmployee();
    } else {
      alert("you have to fill the inputs properly first");
    }
  };

  return (
    <View style={SignUpstyles.container}>
      {loader ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={SignUpstyles.header}>Personal Details</Text>

          {firstName ? (
            <Text style={SignUpstyles.label}>First Name</Text>
          ) : null}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={SignUpstyles.input}
              onChangeText={onChangeFirstName}
              value={firstName}
              placeholder={"first Name"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={
                validateName(firstName) === false ? "transparent" : "green"
              }
            />
          </View>

          {lastName ? <Text style={SignUpstyles.label}>Last Name</Text> : null}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={SignUpstyles.input}
              onChangeText={onChangeLastName}
              value={lastName}
              placeholder={"last Name"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={validateName(lastName) === false ? "transparent" : "green"}
            />
          </View>

          {email ? <Text style={SignUpstyles.label}>Email</Text> : null}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={SignUpstyles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder={"email"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={validateEmail(email) === false ? "transparent" : "green"}
            />
          </View>

          <Text style={SignUpstyles.header}>Password</Text>

          {password ? <Text style={SignUpstyles.label}>Password</Text> : null}

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={SignUpstyles.input}
              onChangeText={onChangePass}
              value={password}
              placeholder={"password"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={
                validatePassword(password) === false ? "transparent" : "green"
              }
            />
          </View>
          {retypePassword ? (
            <Text style={SignUpstyles.label}>retype Password</Text>
          ) : null}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={SignUpstyles.input}
              onChangeText={onChangeRetypePassword}
              value={retypePassword}
              placeholder={"retype Password"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={
                (retypePassword && password === retypePassword) ||
                `${password}admin` === retypePassword
                  ? "green"
                  : "transparent"
              }
            />
          </View>
          <Button title="Sign Up" onPress={() => validation()} />

          <View style={SignUpstyles.SignUpView}>
            <Text style={SignUpstyles.RegularText}>Have an account?</Text>
            <Text
              style={SignUpstyles.BlueText}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign In
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
