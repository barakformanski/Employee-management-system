import React from "react";
import { useState } from "react";

import { Button, View, Text, StyleSheet, TextInput } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInstyles from "./SignInStyles";

export default function SignIn({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePass] = useState("");
  return (
    <View style={SignInstyles.container}>
      {email ? <Text style={SignInstyles.label}>Email</Text> : null}
      <TextInput
        style={SignInstyles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder={"email"}
      />
      {email ? <Text style={SignInstyles.label}>Password</Text> : null}
      <TextInput
        style={SignInstyles.input}
        onChangeText={onChangePass}
        value={password}
        placeholder={"password"}
      />
      <View style={SignInstyles.SignInView}>
        <Text style={SignInstyles.BlueText}>Forget password?</Text>
        <Button
          title="Sign In"
          onPress={() =>
            email &&
            password &&
            navigation.navigate("Home", { email: email, password: password })
          }
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
