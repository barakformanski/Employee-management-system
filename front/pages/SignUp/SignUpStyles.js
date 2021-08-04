import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const SignUpstyles = EStyleSheet.create({
  scrollViewContainer: {
    // flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",

    paddingBottom: () => EStyleSheet.value("$rem") * 20,
    paddingTop: () => EStyleSheet.value("$rem") * 30,

    alignItems: "center",
  },
  seccondContainer: {
    flex: 1,
    marginTop: () => EStyleSheet.value("$rem") * 70,
    paddingHorizontal: () => EStyleSheet.value("$rem") * 20,

    // backgroundColor: "green",
  },
  inputsContainer: {
    // flex: 2,
    // height: "40%",
    justifyContent: "space-between",
    width: "75%",
    marginBottom: () => EStyleSheet.value("$rem") * 30,
    // backgroundColor: "red",
  },
  header: {
    fontWeight: "bold",
    height: () => EStyleSheet.value("$rem") * 30,
    // alignSelf: "flex-end",
    // marginRight: "25%",
  },
  inputContainer: {
    height: () => EStyleSheet.value("$rem") * 70,
    justifyContent: "flex-start",
  },

  input: {
    width: "100%",
    // marginBottom: () => EStyleSheet.value("$rem") * 12,
    borderBottomWidth: 1,
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
