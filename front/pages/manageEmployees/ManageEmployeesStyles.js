import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const ManageEmployeesStyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f7f8",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: () => EStyleSheet.value("$rem") * 80,
    // padding: 10,
    borderRadius: 20,
    backgroundColor: "#577BF9",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  ViewButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  avatarContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatarRowContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default ManageEmployeesStyles;
