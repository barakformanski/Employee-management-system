import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const SignInstyles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingBottom: () => EStyleSheet.value("$rem") * 20,
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: () => EStyleSheet.value("$rem") * 100,
  },
  inputsContainer: {
    // backgroundColor: "red",
    height: "40%",
    justifyContent: "space-between",
    width: "75%",
  },
  inputContainer: {
    // width: "80%",
  },
  input: {
    // width: () => EStyleSheet.value("$rem") * 100,
    width: "100%",
    marginVertical: () => EStyleSheet.value("$rem") * 12,
    borderBottomWidth: 1,

    height: () => EStyleSheet.value("$rem") * 20,
  },
  label: {
    alignSelf: "flex-end",
    // marginRight: "24%",
    color: "#577BF9",
  },
  forgetPass: {
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    flexWrap: "wrap",
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

    padding: 10,
    borderRadius: 10,
  },
});
export default SignInstyles;
