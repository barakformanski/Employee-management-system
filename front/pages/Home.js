import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
export default function Home({ navigation, route }) {
  const { email } = route.params;
  const [employee, setEmployee] = useState("you have to sign in first");
  const [test, setTest] = useState(false);
  useEffect(() => {
    console.log("get check");
    axios({
      method: "GET",
      url: "http://192.168.85.63:5000/",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("res:", res);
      setEmployee(res.data[0].email);
      console.log("res.data", res.data[0].email);
    });
  }, [test]);

  return (
    <View style={styles.container}>
      {/* <Text>welcome, {email}!</Text> */}
      <Text>welcome, {employee}!</Text>

      <Button
        title="axios tester"
        onPress={
          () => setTest(!test)
          // {
          // SignUp();
          // }
        }
      />
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
