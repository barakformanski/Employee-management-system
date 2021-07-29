import React from "react";
import { useState } from "react";

import { Button, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpstyles from "./SignUpStyles";

export default function SignUp({ navigation }) {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePass] = useState("");
  const [retypePassword, onChangeRetypePassword] = useState("");
  const [validation, setValidation] = useState(false);
  return (
    <View style={SignUpstyles.container}>
      <Text style={SignUpstyles.header}>Personal Details</Text>
      {firstName ? <Text style={SignUpstyles.label}>First Name</Text> : null}
      <TextInput
        style={SignUpstyles.input}
        onChangeText={onChangeFirstName}
        value={firstName}
        placeholder={"firstName"}
      />
      {lastName ? <Text style={SignUpstyles.label}>Last Name</Text> : null}
      <TextInput
        style={SignUpstyles.input}
        onChangeText={onChangeLastName}
        value={lastName}
        placeholder={"lastName"}
      />
      {email ? <Text style={SignUpstyles.label}>Email</Text> : null}
      <TextInput
        style={SignUpstyles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder={"email"}
      />
      <Text style={SignUpstyles.header}>Password</Text>

      {password ? <Text style={SignUpstyles.label}>Password</Text> : null}
      <TextInput
        style={SignUpstyles.input}
        onChangeText={onChangePass}
        value={password}
        placeholder={"password"}
      />
      {retypePassword ? (
        <Text style={SignUpstyles.label}>retype Password</Text>
      ) : null}
      <TextInput
        style={SignUpstyles.input}
        onChangeText={onChangeRetypePassword}
        value={retypePassword}
        placeholder={"retypePassword"}
      />

      <Button
        title="Sign Up"
        onPress={() =>
          validation &&
          navigation.navigate("Home", { email: email, password: password })
        }
      />

      <View style={SignUpstyles.SignUpView}>
        <Text style={SignUpstyles.RegularText}>Have an account?</Text>
        <Text
          style={SignUpstyles.BlueText}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
}
