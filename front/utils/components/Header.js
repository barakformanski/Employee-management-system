import React from "react";
import { Image, Text, View, Dimensions } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function Header({ title, image }) {
  return (
    <View
      style={{
        width: "100%",
        height: image
          ? EStyleSheet.value("$rem") * 275
          : EStyleSheet.value("$rem") * 0,
        backgroundColor: image ? "#f8f8f8" : "white",
        // justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "right",
          fontWeight: "bold",
          fontSize: image ? 30 : 20,
          alignSelf: "flex-end",
          marginRight: EStyleSheet.value("$rem") * 30,

          top: image
            ? EStyleSheet.value("$rem") * 110
            : EStyleSheet.value("$rem") * 0,
        }}
      >
        {title}
      </Text>
      {image && (
        <Image
          style={{
            top: EStyleSheet.value("$rem") * 160,
            left: EStyleSheet.value("$rem") * 12,
          }}
          source={require("../../assets/kid.png")}
        />
      )}
    </View>
  );
}
