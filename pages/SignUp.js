import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>already have an account? Sign In</Text>
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
