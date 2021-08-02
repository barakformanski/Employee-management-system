import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const EditEmployeeStyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignSelf: "flex-end",
    marginRight: "25%",
  },
  input: {
    height: "2rem",
    width: "60%",
    margin: 12,
    borderBottomWidth: 1,
  },
  label: {
    alignSelf: "flex-end",
    marginRight: "25%",
    color: "#577BF9",
  },
  SignInView: {
    width: "80%",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    // flexWrap: "wrap",
  },
  SignUpView: {
    flexDirection: "row-reverse",
  },
  RegularText: {
    color: "black",
  },
  BlueText: {
    color: "#577BF9",
  },
});
export default EditEmployeeStyles;
