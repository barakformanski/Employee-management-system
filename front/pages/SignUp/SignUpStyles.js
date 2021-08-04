import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const SignUpstyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingBottom: () => EStyleSheet.value("$rem") * 20,
    paddingTop: () => EStyleSheet.value("$rem") * 80,

    alignItems: "center",
  },
  inputsContainer: {
    // height: "40%",
    justifyContent: "space-between",
    width: "75%",
    // backgroundColor: "red",
  },

  header: {
    fontWeight: "bold",
    // alignSelf: "flex-end",
    // marginRight: "25%",
  },
  input: {
    width: "100%",
    marginVertical: () => EStyleSheet.value("$rem") * 12,
    borderBottomWidth: 1,

    height: () => EStyleSheet.value("$rem") * 20,
  },
  label: {
    alignSelf: "flex-end",
    // marginRight: "25%",
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
  button: {
    alignItems: "center",
    backgroundColor: "#577BF9",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 10,
    width: () => EStyleSheet.value("$rem") * 100,
  },
});
export default SignUpstyles;
