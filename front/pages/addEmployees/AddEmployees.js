import React from "react";
import { useState } from "react";

import { Button, View, Text, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddEmployeesStyles from "./AddEmployeesStyles";
import axios from "axios";
import {
  validateEmail,
  validatePhone,
  validateName,
  validateAddress,
} from "../../utils/components/validation";
import { Ionicons } from "@expo/vector-icons";

export default function AddEmployees({ navigation }) {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [phone, onChangePhone] = useState("");
  const [address, onChangeAddress] = useState("");
  const [roll, onChangeRoll] = useState("");

  const AddEmployee = () => {
    axios({
      method: "POST",
      url: "http://192.168.85.63:5000/add_employee",
      data: {
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        address: address,
        roll: roll,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("res.data", res.data);
      {
        !res.data
          ? alert("employee alreadt exist")
          : navigation.navigate("Home", {
              email: res.data.email,
              password: res.data.password,
            });
      }
      navigation.navigate("ManageEmployees", { phone: res.data.phone });
    });
  };

  const validation = () => {
    if (
      validateName(firstName) &&
      validateName(lastName) &&
      validatePhone(phone) &&
      validateAddress(address) &&
      validateName(roll)
    ) {
      AddEmployee();
    } else {
      alert("you have to fill he inputs properly first");
    }
  };

  return (
    <View style={AddEmployeesStyles.container}>
      <Text style={AddEmployeesStyles.header}>Personal Details</Text>

      {firstName ? (
        <Text style={AddEmployeesStyles.label}>First Name</Text>
      ) : null}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={AddEmployeesStyles.input}
          onChangeText={onChangeFirstName}
          value={firstName}
          placeholder={"firstName"}
        />
        <Ionicons
          name="md-checkmark-circle"
          size={32}
          color={validateName(firstName) === false ? "transparent" : "green"}
        />
      </View>

      {lastName ? (
        <Text style={AddEmployeesStyles.label}>Last Name</Text>
      ) : null}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={AddEmployeesStyles.input}
          onChangeText={onChangeLastName}
          value={lastName}
          placeholder={"lastName"}
        />
        <Ionicons
          name="md-checkmark-circle"
          size={32}
          color={validateName(lastName) === false ? "transparent" : "green"}
        />
      </View>

      {phone ? <Text style={AddEmployeesStyles.label}>Phone</Text> : null}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={AddEmployeesStyles.input}
          onChangeText={onChangePhone}
          value={phone}
          placeholder={"Phone"}
        />
        <Ionicons
          name="md-checkmark-circle"
          size={32}
          color={validatePhone(phone) === false ? "transparent" : "green"}
        />
      </View>

      <Text style={AddEmployeesStyles.header}>Address</Text>

      {address ? <Text style={AddEmployeesStyles.label}>Address</Text> : null}

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={AddEmployeesStyles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder={"Address"}
        />
        <Ionicons
          name="md-checkmark-circle"
          size={32}
          color={validateAddress(address) === false ? "transparent" : "green"}
        />
      </View>

      {roll ? <Text style={AddEmployeesStyles.label}>Roll</Text> : null}

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={AddEmployeesStyles.input}
          onChangeText={onChangeRoll}
          value={roll}
          placeholder={"Roll"}
        />
        <Ionicons
          name="md-checkmark-circle"
          size={32}
          color={validateName(roll) === false ? "transparent" : "green"}
        />
      </View>

      <Button title="Add" onPress={() => validation()} />
    </View>
  );
}
