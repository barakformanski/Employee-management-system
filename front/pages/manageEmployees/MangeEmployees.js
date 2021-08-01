import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import ManageEmployeesStyles from "./ManageEmployeesStyles";
export default function ManageEmployees({ navigation, route }) {
  const users = [
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
    // more users here
  ];
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
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
  }, []);
  return (
    <View style={ManageEmployeesStyles.container}>
      <ScrollView>
        {employees &&
          employees.map((employee, index) => {
            return (
              <Card key={index}>
                <Card.Title>{`${employee.first_name} ${employee.last_name} `}</Card.Title>
                <Card.Title>{`${employee.roll} `}</Card.Title>
                <Card.Title>{`${employee.first_name} ${employee.last_name} `}</Card.Title>
                <Card.Title>{`${employee.first_name} ${employee.last_name} `}</Card.Title>

                <Button
                  icon={<Icon name="code" color="#ffffff" />}
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  title="VIEW NOW"
                />
                {/* </Card.Image> */}
              </Card>
            );
          })}
      </ScrollView>
    </View>
  );
}
