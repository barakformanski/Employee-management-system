import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const Stack = createStackNavigator();
const ThemeContext = React.createContext("light");

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        // screenOptions={{ title: " anable if we want same title to all screens" }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Employee-management-system" }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: "Welcome!! please Sign in" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Sign Up" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
