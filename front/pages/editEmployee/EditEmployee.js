import React, { useEffect } from "react";
import { useState } from "react";

import { Button, View, Text, TextInput } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import EditEmployeeStyles from "./EditEmployeeStyles";
import axios from "axios";
import {
  validatePhone,
  validateName,
  validateAddress,
} from "../../utils/components/validation";
import { Ionicons } from "@expo/vector-icons";

export default function EditEmployee({ navigation, route }) {
  // console.log("route.params:", route.params);
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const { employee } = route.params;
  const [loader, setLoader] = useState(true);

  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [phone, onChangePhone] = useState("");
  const [address, onChangeAddress] = useState("");
  const [roll, onChangeRoll] = useState("");
  const [image, onChangeImage] = useState("");
  const [dataArrived, setDataArrived] = useState(false);
  useEffect(() => {
    console.log("employee", employee);
    employee["first_name"] ? onChangeFirstName(employee["first_name"]) : null;
    employee["last_name"] ? onChangeLastName(employee["last_name"]) : null;
    employee["address"] ? onChangeAddress(employee["address"]) : null;
    employee["roll"] ? onChangeRoll(employee["roll"]) : null;
    employee["phone"] ? onChangePhone(employee["phone"]) : null;
    onChangeImage(
      employee["avatar"]
        ? employee["avatar"]
        : `https://i.pravatar.cc/${randomIntFromInterval(300, 1000)}`
    );
    setDataArrived(true);
    // employee && console.log("firstName", firstName);

    // axios({
    //   method: "GET",
    //   url: "http://192.168.85.63:5000/edit",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res) => {
    //   console.log("res.data", res.data);
    //   {
    //     !res.data ? alert("DB is empty") : setEmployees(res.data);
    //   }
    // });
  }, []);
  useEffect(() => {
    setLoader(false);
  }, [dataArrived]);

  const SetEmployee = () => {
    axios({
      method: "PUT",
      url: "http://192.168.85.63:5000/set_employee",
      data: {
        _id: employee["_id"],
        first_name: firstName,
        last_name: lastName,
        phone: phone,
        address: address,
        roll: roll,
        avatar: image,
      },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("res.data", res.data);
      navigation.navigate("ManageEmployees", { id: employee["_id"] });
    });
  };

  const validation = () => {
    if (
      validateName(firstName) &&
      validateName(lastName) &&
      validateAddress(address) &&
      validateName(roll) &&
      validatePhone(phone)
    ) {
      SetEmployee();
    } else {
      alert("you have to fill he inputs properly first");
    }
  };

  return (
    <View style={EditEmployeeStyles.container}>
      <Text style={EditEmployeeStyles.header}>Personal Details</Text>
      {loader ? (
        <Text>LOADING</Text>
      ) : (
        <>
          {firstName ? (
            <Text style={EditEmployeeStyles.label}>Fisrt Name</Text>
          ) : null}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={EditEmployeeStyles.input}
              onChangeText={onChangeFirstName}
              value={firstName}
              placeholder={"first name"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={
                validateName(firstName) === false ? "transparent" : "green"
              }
            />
          </View>
          {lastName ? (
            <Text style={EditEmployeeStyles.label}>Last Name</Text>
          ) : null}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={EditEmployeeStyles.input}
              onChangeText={onChangeLastName}
              value={lastName}
              placeholder={"last name"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={validateName(lastName) === false ? "transparent" : "green"}
            />
          </View>

          {roll ? <Text style={EditEmployeeStyles.label}>Roll</Text> : null}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={EditEmployeeStyles.input}
              onChangeText={onChangeRoll}
              value={roll}
              placeholder={"roll"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={
                !roll || validateName(roll) === false ? "transparent" : "green"
              }
            />
          </View>

          {phone ? <Text style={EditEmployeeStyles.label}>Phone</Text> : null}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={EditEmployeeStyles.input}
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

          {address ? (
            <Text style={EditEmployeeStyles.label}>Address</Text>
          ) : null}

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={EditEmployeeStyles.input}
              onChangeText={onChangeAddress}
              value={address}
              placeholder={"Address"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={
                !address || validateAddress(address) === false
                  ? "transparent"
                  : "green"
              }
            />
          </View>
          {image ? (
            <Text style={EditEmployeeStyles.label}>
              switch to numbers between 300-1000
            </Text>
          ) : null}

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              style={EditEmployeeStyles.input}
              onChangeText={onChangeImage}
              value={image}
              placeholder={"url only"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={!image === false ? "transparent" : "green"}
            />
          </View>

          <Button title="SAVE CHANGES" onPress={() => validation()} />
        </>
      )}
    </View>
  );
}
