import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const SignUpstyles = EStyleSheet.create({
  scrollViewContainer: {
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    paddingBottom: () => EStyleSheet.value("$rem") * 20,
    paddingTop: () => EStyleSheet.value("$rem") * 30,
    alignItems: "center",
  },
  secondContainer: {
    flex: 1,
    marginTop: () => EStyleSheet.value("$rem") * 70,
    paddingHorizontal: () => EStyleSheet.value("$rem") * 20,
  },
  inputsContainer: {
    justifyContent: "space-between",
    width: "75%",
    marginBottom: () => EStyleSheet.value("$rem") * 30,
  },
  header: {
    fontWeight: "bold",
    height: () => EStyleSheet.value("$rem") * 30,
  },
  inputContainer: {
    height: () => EStyleSheet.value("$rem") * 70,
    justifyContent: "flex-start",
  },

  input: {
    width: "100%",
    borderBottomWidth: 1,
  },
  label: {
    alignSelf: "flex-end",
    color: "#577BF9",
    fontWeight: "bold",
  },

  SignUpView: {
    flexDirection: "row-reverse",
    marginTop: () => EStyleSheet.value("$rem") * 40,
    marginBottom: () => EStyleSheet.value("$rem") * 80,
    justifyContent: "center",
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
    width: () => EStyleSheet.value("$rem") * 80,
  },
});
export default SignUpstyles;
