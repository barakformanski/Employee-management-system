import React from "react";
import { useState } from "react";

import { Button, View, Text, TextInput } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInstyles from "./SignInStyles";
import axios from "axios";

import {
  validateEmail,
  validatePassword,
  validateName,
} from "../../utils/components/validation";
import { Ionicons } from "@expo/vector-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// import { faCheckCircle, faEye } from "@fortawesome/free-solid-svg-icons";
export default function SignIn({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePass] = useState("");

  const SignInEmployee = () => {
    console.log("check post req");

    axios({
      method: "POST",
      url: "http://192.168.85.63:5000/signIn",
      data: {
        email: email,
        password: password,
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

  // not finisehd
  const forgetPass = () => {
    console.log("check post req");
    // stages:
    // 1 / enter ur email
    // 2 / send pass to email or to cell
    // 3/ update pass in DB

    axios({
      method: "POST",
      url: "http://192.168.85.63:5000/forget_pass",
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

      {password ? <Text style={SignInstyles.label}>Password</Text> : null}
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
          color={validatePassword(password) === false ? "transparent" : "green"}
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
    </View>
  );
}
