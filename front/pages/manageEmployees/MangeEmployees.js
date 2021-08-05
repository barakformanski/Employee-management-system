import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather, Ionicons } from "@expo/vector-icons";

import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";
import ManageEmployeesStyles from "./ManageEmployeesStyles";
import UserContext from "../../UserContext";
import { Entypo } from "@expo/vector-icons";
export default function ManageEmployees({ navigation, route }) {
  const URI = useContext(UserContext);

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function avatarLetters(first, last) {
    console.log(first, last);
    if (first && last) {
      return first.charAt(0) + last.charAt(0);
    } else if (first || last) {
      return first.charAt(0) || last.charAt(0);
    } else {
      return "??";
    }
  }
  const [loader, setLoader] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [avatarNum, setAvatarNum] = useState(randomIntFromInterval(300, 1000));
  const [modalVisible, setModalVisible] = useState(false);
  const [editOrDelEmployee, setEditOrDelEmployee] = useState();
  const deleteQuery = (idToDelete) => {
    setLoader(true);
    console.log("id to delete:", idToDelete);
    // axios.delete(`http://192.168.85.63:5000/${idToDelete}`).then((res) => {
    axios.delete(`${URI}${idToDelete}`).then((res) => {
      setLoader(false);
      console.log("resFROMserver DELETE", res.data);
      alert(`employee number
             ${idToDelete}

deleted from DB`);
      setEmployees(res.data);
    });
    setEditOrDelEmployee();
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log("starting");
      setLoader(true);
      axios({
        method: "GET",
        // url: "http://192.168.85.63:5000/",
        // url: "https://employees-managment.herokuapp.com/",
        url: `${URI}`,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        setLoader(false);
        console.log("res.data", res.data);
        {
          !res.data ? alert("DB is empty") : setEmployees(res.data);
        }
      });
    }, [])
  );

  return (
    <View style={ManageEmployeesStyles.container}>
      <View style={ManageEmployeesStyles.ViewButton}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddEmployees")}
          style={ManageEmployeesStyles.button}
        >
          <Text style={{ color: "white" }}>+</Text>
        </TouchableOpacity>
        <Text>Managing Employees</Text>
      </View>
      {loader ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <ScrollView style={{ width: "90%" }}>
          {employees &&
            employees.map((employee, index) => {
              return (
                <Card
                  key={index}
                  containerStyle={{
                    backgroundColor: "white",
                    borderRadius: 10,
                  }}
                >
                  {employee.avatar ? (
                    <View style={ManageEmployeesStyles.avatarRowContainer}>
                      <View style={ManageEmployeesStyles.avatarContainer}>
                        <Avatar
                          onPress={() =>
                            navigation.navigate("EditEmployee", {
                              employee: employee,
                            })
                          }
                          rounded
                          source={{ uri: employee.avatar }}
                          title="MD"
                        />
                        <Text
                          style={{
                            marginRight: EStyleSheet.value("$rem") * 10,
                          }}
                        >{`${employee.first_name} ${employee.last_name} `}</Text>
                      </View>
                      <View>
                        <Entypo
                          name="dots-three-vertical"
                          size={18}
                          color="#8F9BB3"
                          onPress={() => {
                            editOrDelEmployee
                              ? setEditOrDelEmployee()
                              : setEditOrDelEmployee(employee);
                            setModalVisible(true);
                          }}
                        />
                      </View>
                    </View>
                  ) : (
                    <View style={ManageEmployeesStyles.avatarRowContainer}>
                      <View style={ManageEmployeesStyles.avatarContainer}>
                        <Avatar
                          onPress={() => {
                            navigation.navigate("EditEmployee", {
                              employee: employee,
                            });
                            setModalVisible(true);
                          }}
                          rounded
                          title={avatarLetters(
                            employee.first_name || "?",
                            employee.last_name || "?"
                          )}
                        />
                        <Text
                          style={{
                            marginRight: EStyleSheet.value("$rem") * 10,
                          }}
                        >{`${employee.first_name} ${employee.last_name} `}</Text>
                      </View>
                      <View>
                        <Entypo
                          name="dots-three-vertical"
                          size={18}
                          color="#8F9BB3"
                          onPress={() => {
                            editOrDelEmployee
                              ? setEditOrDelEmployee()
                              : setEditOrDelEmployee(employee);
                            setModalVisible(true);
                          }}
                        />
                      </View>
                    </View>
                  )}

                  <View style={ManageEmployeesStyles.cardrows}>
                    <MaterialIcons
                      name="work-outline"
                      size={24}
                      color="black"
                    />
                    <View
                      style={{
                        flexDirection: "column",

                        marginRight: EStyleSheet.value("$rem") * 10,
                      }}
                    >
                      <Text>{`${employee.roll}`}</Text>
                      <Text
                        style={{ fontSize: 10, color: "#8F9BB3" }}
                      >{`Start Date: 2 Feb 2020 `}</Text>
                    </View>
                  </View>

                  <View style={ManageEmployeesStyles.cardrows}>
                    <Feather name="phone" size={24} color="black" />
                    <Text>{`${employee.phone}`}</Text>
                  </View>
                  <View style={ManageEmployeesStyles.cardrows}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Text>{`${employee.address}`}</Text>
                  </View>
                </Card>
              );
            })}
        </ScrollView>
      )}
      {editOrDelEmployee && (
        <Modal
          style={{ margin: 0 }}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            setEditOrDelEmployee();
          }}
        >
          <TouchableOpacity
            style={{
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            onPress={() => {
              setEditOrDelEmployee();
              setModalVisible(false);
            }}
          ></TouchableOpacity>
          <View
            style={{
              height: "25%",
              bottom: 0,
              width: "100%",
              position: "absolute",
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              backgroundColor: "white",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => {
                  setEditOrDelEmployee();
                  setModalVisible(false);
                }}
                style={{
                  marginVertical: 10,
                  height: 8,
                  width: 50,
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  alignSelf: "center",
                  borderRadius: 10,
                }}
              ></TouchableOpacity>
              <View
                style={{
                  // flex: 0.7,
                  // flexDirection: "column",
                  justifyContent: "space-around",
                  width: "100%",
                  paddingRight: EStyleSheet.value("$rem") * 30,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("EditEmployee", {
                      // employee: employee,
                      employee: editOrDelEmployee,
                    });
                    setEditOrDelEmployee();
                  }}
                >
                  <Text>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => deleteQuery(editOrDelEmployee._id)}
                >
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        // <View
        //   style={{
        //     height: EStyleSheet.value("$rem") * 100,
        //     backgroundColor: "white",
        //     width: "100%",
        //     borderTopLeftRadius: 15,
        //     borderTopRightRadius: 15,
        //   }}
        // >
        //   <TouchableOpacity
        //     onPress={() => {
        //       navigation.navigate("EditEmployee", {
        //         // employee: employee,
        //         employee: editOrDelEmployee,
        //       });
        //       setEditOrDelEmployee();
        //     }}
        //   >
        //     <Text>Edit</Text>
        //   </TouchableOpacity>

        //   <TouchableOpacity onPress={() => deleteQuery(editOrDelEmployee._id)}>
        //     <Text>Delete</Text>
        //   </TouchableOpacity>
        // </View>
      )}
    </View>
  );
}
