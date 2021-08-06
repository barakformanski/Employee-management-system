import React, { useEffect } from "react";
import { useState, useContext } from "react";

import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInstyles from "./SignInStyles";
import UserContext from "../../UserContext";
import TermsOfUse from "../../utils/components/TermsOfIse";
import axios from "axios";
import EStyleSheet from "react-native-extended-stylesheet";
import { Entypo } from "@expo/vector-icons";

import {
  validateEmail,
  validatePassword,
} from "../../utils/components/validation";
import { Ionicons } from "@expo/vector-icons";
import { paddingBottom } from "styled-system";
import Header from "../../utils/components/Header";

// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

// import { faCheckCircle, faEye } from "@fortawesome/free-solid-svg-icons";
export default function SignIn({ navigation, route }) {
  const [employeeFromSignUp, setEmployeeFromSignUp] = useState();
  const URI = useContext(UserContext);
  const [userName, setUserName] = useState();

  const [loader, setLoader] = useState(false);
  const [email, onChangeEmail] = useState("");
  const [password, onChangePass] = useState("");

  useEffect(() => {
    setEmployeeFromSignUp(route.params);
    console.log("route.params", route.params);
    setUserName(route.params.employee.first_name);
  }, [route]);

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
          : // : navigation.navigate("SignIn", {
          //     userEmail: res.data.email,
          //     userPassword: res.data.password,
          //   });

          res.data.first_name
          ? setUserName(res.data.email)
          : res.data.last_name
          ? setUserName(res.data.last_name)
          : setUserName(`Hello ${res.data.email},we don't have your name..`);

        console.log("res.data", res.data);
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
    <ScrollView contentContainerStyle={SignInstyles.scrollViewContainer}>
      <Header title="Sign In" image={true} />
      {userName && (
        <View style={{ marginTop: 40 }}>
          {<Text>Welcome Mr {userName}!</Text>}
          <Text>You are not Admin so you can't see employees details</Text>
          <Text>For admin acces (just for the demo...) type:</Text>
          <Text>Email:barakformanski@gmail.com</Text>
          <Text>Password:bf</Text>
          <Text>Or SignUp as admin:</Text>
          <Text>1. Press the SignUp botton below</Text>
          <Text>2. Fill out your details</Text>
          <Text>3. On the RETYPE PASSWORD field ad the letters:</Text>
          <Text>admin</Text>
          <Text>after the password you choose</Text>
          <Text>for example:</Text>
          <Text>password: abc</Text>
          <Text>retypePassword: abcadmin</Text>
          <Text>call me if you need help</Text>
          <Text>Barak 0545665174</Text>
        </View>
      )}
      {!loader ? (
        <View style={SignInstyles.secondContainer}>
          <View style={SignInstyles.inputsContainer}>
            <View style={SignInstyles.inputContainer}>
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
                  color={
                    validateEmail(email) === false ? "transparent" : "green"
                  }
                />
              </View>
            </View>

            <View style={SignInstyles.inputContainer}>
              {password ? (
                <Text style={SignInstyles.label}>Password</Text>
              ) : null}
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
                    validatePassword(password) === false
                      ? "transparent"
                      : "green"
                  }
                />
              </View>
            </View>

            <View style={SignInstyles.forgetPass}>
              <Text
                style={[
                  SignInstyles.BlueText,
                  { textDecorationLine: "underline" },
                ]}
              >
                Forget password?
              </Text>
              <TouchableOpacity
                onPress={() => email && password && SignInEmployee()}
                style={SignInstyles.button}
              >
                <Text style={{ color: "white" }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={SignInstyles.SignInView}>
            <Text style={SignInstyles.RegularText}>Don't have an account?</Text>
            <Text
              style={SignInstyles.BlueText}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Text>
          </View>
          <View>
            <TermsOfUse />
          </View>
        </View>
      ) : (
        <ActivityIndicator size="small" color="#0000ff" />
      )}
    </ScrollView>
  );
}
