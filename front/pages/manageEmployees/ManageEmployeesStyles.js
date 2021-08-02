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

  // modal style
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default SignInstyles;
