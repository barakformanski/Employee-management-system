import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import AddEmployees from "./pages/addEmployees/AddEmployees";
import ManageEmployees from "./pages/manageEmployees/MangeEmployees";
import EditEmployee from "./pages/editEmployee/EditEmployee";
import { UserProvider } from "./UserContext";

const Stack = createStackNavigator();

const entireScreenWidth = Dimensions.get("window").width;
EStyleSheet.build({
  $rem: entireScreenWidth / 380,
});

EStyleSheet.build();

export default function App() {
  const URI = "https://employees-managment.herokuapp.com/";

  return (
    <NavigationContainer>
      <UserProvider value={URI}>
        <Stack.Navigator
          initialRouteName="Home"
          // screenOptions={{ title: " anable if we want same title to all screens" }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Employee-management-system" }}
            initialParams={{ email: "you have to sign in first" }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: "Sign in",
              headerStyle: {
                backgroundColor: "#f6f7f8",
                height: EStyleSheet.value("$rem") * 300,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "black",
              },
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "Sign Up" }}
          />
          <Stack.Screen
            name="AddEmployees"
            component={AddEmployees}
            options={{ title: "Add Employees" }}
          />
          <Stack.Screen
            name="ManageEmployees"
            component={ManageEmployees}
            options={{ title: "manage Employees" }}
          />
          <Stack.Screen
            name="EditEmployee"
            component={EditEmployee}
            options={{ title: "Edit Employee" }}
          />
        </Stack.Navigator>
      </UserProvider>
    </NavigationContainer>
  );
}
