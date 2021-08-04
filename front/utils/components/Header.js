import React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function Header({ title }) {
  return (
    <View
      style={{
        width: "100%",
        height: EStyleSheet.value("$rem") * 275,
        backgroundColor: "#f8f8f8",
        // justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "right",
          fontWeight: "bold",
          fontSize: 30,
          alignSelf: "flex-end",
          marginRight: EStyleSheet.value("$rem") * 30,

          top: EStyleSheet.value("$rem") * 110,
        }}
      >
        {title}
      </Text>

      <Image
        style={{
          top: EStyleSheet.value("$rem") * 160,
          left: EStyleSheet.value("$rem") * 12,
        }}
        source={require("../../assets/kid.png")}
      />
    </View>
  );
}
