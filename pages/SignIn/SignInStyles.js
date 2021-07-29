import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const SignInstyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: "2rem",
    width: "80%",
    margin: 12,
    borderBottomWidth: 1,
  },
  label: {
    alignSelf: "flex-end",
    marginRight: "10%",
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
export default SignInstyles;
