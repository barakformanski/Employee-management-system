import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Axios from "axios";
export default function Home({ navigation, route }) {
  const { email } = route.params;
  const [test, setTest] = useState(false);
  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://192.168.25.63:5000/",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.data.message);
    });
  }, [test]);

  return (
    <View style={styles.container}>
      <Text>welcome, {email}!</Text>
      <Button title="axios tester" onPress={() => setTest(true)} />
      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
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
