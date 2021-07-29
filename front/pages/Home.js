import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
export default function Home({ navigation, route }) {
  const { email } = route.params;
  const [test, setTest] = useState(false);
  useEffect(() => {
    axios
      .get("http://10.0.2.2:3000")
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert("Finally called");
      });
    setTest(false);
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
