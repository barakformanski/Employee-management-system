import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import { Card, ListItem, Button, Icon, Avatar } from "react-native-elements";
import ManageEmployeesStyles from "./ManageEmployeesStyles";

export default function ManageEmployees({ navigation, route }) {
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
  const [employees, setEmployees] = useState([]);
  const [avatarNum, setAvatarNum] = useState(randomIntFromInterval(300, 1000));
  const [modalVisible, setModalVisible] = useState(false);
  const deleteQuery = (idToDelete) => {
    console.log("id to delete:", idToDelete);
    axios.delete(`http://192.168.85.63:5000/${idToDelete}`).then((res) => {
      console.log("resFROMserver DELETE", res.data);
      alert("employee number", idToDelete, "deleted");
      setEmployees(res.data);
    });
  };

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

  return (
    <View style={ManageEmployeesStyles.container}>
      <Button
        title="Add Employees"
        onPress={() => navigation.navigate("AddEmployees")}
      />
      <ScrollView>
        {employees &&
          employees.map((employee, index) => {
            return (
              <Card key={index}>
                {employee.avatar ? (
                  <Avatar
                    containerStyle={{ backgroundColor: "#d3d3d3" }}
                    onPress={
                      () =>
                        navigation.navigate("EditEmployee", {
                          employee: employee,
                        })

                      // setModalVisible(true)
                    }
                    rounded
                    source={{ uri: employee.avatar }}
                    title="MD"
                  />
                ) : (
                  <Avatar
                    containerStyle={{ backgroundColor: "#d3d3d3" }}
                    onPress={() =>
                      navigation.navigate("EditEmployee", {
                        employee: employee,
                      })
                    }
                    rounded
                    title={avatarLetters(
                      employee.first_name,
                      employee.last_name
                    )}
                  />
                )}

                {/* <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={ManageEmployeesStyles.centeredView}>
                    <View style={ManageEmployeesStyles.modalView}>
                      <Text style={ManageEmployeesStyles.modalText}>
                        Hello World!
                      </Text>
                      <TextInput
                        style={ManageEmployeesStyles.input}
                        onChangeText={setAvatarNum}
                        value={avatarNum}
                        placeholder={"choose num between 300-1000"}
                      />
                      <Pressable
                        style={[
                          ManageEmployeesStyles.button,
                          ManageEmployeesStyles.buttonClose,
                        ]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={ManageEmployeesStyles.textStyle}>
                          Hide Modal
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal> */}

                <Card.Title>{`name:${employee.first_name} ${employee.last_name} `}</Card.Title>
                <Card.Title>{`roll:${employee.roll} `}</Card.Title>
                <Card.Title>{`phone:${employee.phone}`}</Card.Title>
                <Card.Title>{`address:${employee.address}`}</Card.Title>

                <Button
                  icon={<Icon name="code" color="#ffffff" />}
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  title="EDIT"
                  onPress={() =>
                    navigation.navigate("EditEmployee", { employee: employee })
                  }
                />
                <Button
                  icon={<Icon name="code" color="#ffffff" />}
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  title="DELETE"
                  onPress={() => deleteQuery(employee._id)}
                />
                {/* </Card.Image> */}
              </Card>
            );
          })}
      </ScrollView>
    </View>
  );
}
