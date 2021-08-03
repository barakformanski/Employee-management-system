import React, { useEffect } from "react";
import { useState } from "react";

import {
  Button,
  View,
  Text,
  TextInput,
  FlatList,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Modal,
  alert,
} from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
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
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[AddEmployeesStyles.item, backgroundColor]}
  >
    <Text style={[AddEmployeesStyles.title, textColor]}>{item.first_name}</Text>
  </TouchableOpacity>
);

export default function AddEmployees({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [flatList, setFlatList] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item._id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item._id === selectedId ? "white" : "black";
    return (
      // <Item title={item.first_name} />
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item._id);
          onChangeFirstName(item.first_name);
          onChangeLastName(item.last_name);
          onChangePhone(item.phone);
          onChangeAddress(item.address);
          onChangeRoll(item.roll);

          setFlatList(false);
        }}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  const [employees, setEmployees] = useState([]);

  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [phone, onChangePhone] = useState("");
  const [address, onChangeAddress] = useState("");
  const [roll, onChangeRoll] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      axios({
        method: "GET",
        url: "http://192.168.85.63:5000/",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log("res.data", res.data);
        {
          !res.data ? alert("DB is empty") : setEmployees(res.data);
        }
      });
    }, [])
  );

  useEffect(() => {
    !firstName && setFlatList(true);
  }, [firstName]);

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
          ? setModalVisible(true)
          : (console.log("why not updat?"),
            navigation.navigate("ManageEmployees", { phone: res.data.phone }));
      }
    });
  };
  const EditEmployeeByName = () => {
    console.log("EDIT RUN");
    axios({
      method: "PUT",
      url: "http://192.168.85.63:5000/edit_by_name",
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
      <ScrollView>
        {firstName ? (
          <Text style={AddEmployeesStyles.label}>First Name</Text>
        ) : null}
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={() => setFlatList(true)}
          >
            <TextInput
              style={AddEmployeesStyles.input}
              onChangeText={onChangeFirstName}
              value={firstName}
              placeholder={"firstName"}
            />
            <Ionicons
              name="md-checkmark-circle"
              size={32}
              color={
                validateName(firstName) === false ? "transparent" : "green"
              }
            />
          </View>

          {firstName && flatList ? (
            <SafeAreaView
              style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}
            >
              <FlatList
                data={employees}
                renderItem={renderItem}
                keyExtractor={(employee) => employee._id}
                extraData={selectedId}

                // numColumns={3}
              />
            </SafeAreaView>
          ) : null}
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
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={AddEmployeesStyles.centeredView}>
          <View style={AddEmployeesStyles.modalView}>
            <Text style={AddEmployeesStyles.modalText}>
              העובד קיים במערכת, בחר מה ברצונך לעשות
            </Text>
            <Pressable
              style={[
                AddEmployeesStyles.button,
                AddEmployeesStyles.buttonClose,
              ]}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={AddEmployeesStyles.textStyle}>
                סגור ומלא את הפרטים מחדש
              </Text>
            </Pressable>
            <Pressable
              style={[
                AddEmployeesStyles.button,
                AddEmployeesStyles.buttonClose,
              ]}
              onPress={() => {
                EditEmployeeByName();
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={AddEmployeesStyles.textStyle}>
                עדכן את פרטי העובד הנבחר לפרטים שמילאתי
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Button title="Add" onPress={() => validation()} />
    </View>
  );
}
