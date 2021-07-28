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
      <TextInput
        style={SignInstyles.input}
        onChangeText={onChangeEmail}
        value={email}
      />
      <TextInput
        style={SignInstyles.input}
        onChangeText={onChangePass}
        value={password}
      />

      <Button
        title="Sign In"
        onPress={() =>
          email &&
          password &&
          navigation.navigate("Home", { email: email, password: password })
        }
      />
      <Text>don't have an account? please Sign Up first</Text>
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
}
