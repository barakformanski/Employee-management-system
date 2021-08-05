import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import UserContext from "../UserContext";

export default function Home({ navigation, route }) {
  const URI = useContext(UserContext);

  const { userEmail, userName } = route.params;
  const [employee, setEmployee] = useState("you have to sign in first");
  const [test, setTest] = useState(false);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     console.log("email", email);
  //     console.log("route.params", route.params);
  //   }, [route, email, navigation])
  // );

  return (
    <View style={styles.container}>
      {userEmail ? (
        <Text>welcome, {userEmail}!</Text>
      ) : (
        <Text>welcome, {employee}!</Text>
      )}

      <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      <Button
        title="Employees Managment"
        onPress={() => navigation.navigate("ManageEmployees")}
      />
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
