import React from "react";
import { useState, useContext } from "react";

import { Button, View, Text, TextInput, ActivityIndicator } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInstyles from "./SignInStyles";
import UserContext from "../../UserContext";

import axios from "axios";

import {
  validateEmail,
  validatePassword,
} from "../../utils/components/validation";
import { Ionicons } from "@expo/vector-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// import { faCheckCircle, faEye } from "@fortawesome/free-solid-svg-icons";
export default function SignIn({ navigation }) {
  const URI = useContext(UserContext);

  const [loader, setLoader] = useState(false);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePass] = useState("");

  const SignInEmployee = () => {
    setLoader(true);
    console.log("check post req");

    axios({
      method: "POST",
      // url: "http://192.168.85.63:5000/signIn",
      url: `${URI}signIn`,
      data: {
        email: email,
        password: password,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setLoader(false);

      console.log("res.data", res.data);
      {
        !res.data
          ? alert("user not fond")
          : res.data.user_type === "admin"
          ? navigation.navigate("ManageEmployees", { user: res.data })
          : navigation.navigate("Home", {
              email: res.data.email,
              password: res.data.password,
            });
      }
    });
  };

  // not finisehd
  const forgetPass = () => {
    console.log("check post req");
    // stages:
    // 1 / enter ur email
    // 2 / send pass to email or to cell
    // 3/ update pass in DB

    axios({
      method: "POST",
      // url: "http://192.168.85.63:5000/forget_pass",
      url: `${URI}forget_pass`,
      data: {
        email: email,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("res.data", res.data);
      {
        !res.data
          ? alert("user not fond")
          : navigation.navigate("Home", {
              email: res.email,
              password: res.password,
            });
      }
    });
  };

  return (
    <View style={SignInstyles.container}>
      {loader ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <>
          {email ? <Text style={SignInstyles.label}>Email</Text> : null}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={SignInstyles.input}
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

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={SignInstyles.input}
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
          <View style={SignInstyles.SignInView}>
            <Text style={SignInstyles.BlueText}>Forget password?</Text>
            <Button
              title="Sign In"
              onPress={() => email && password && SignInEmployee()}
            />
          </View>
          <View style={SignInstyles.SignUpView}>
            <Text style={SignInstyles.RegularText}>Don't have an account?</Text>
            <Text
              style={SignInstyles.BlueText}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
