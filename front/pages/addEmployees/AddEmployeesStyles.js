import { StyleSheet } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

const AddEmployeesStyles = EStyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  scrollViewContainer: {
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    paddingBottom: () => EStyleSheet.value("$rem") * 0,
    paddingTop: () => EStyleSheet.value("$rem") * 0,
    alignItems: "center",
    // flex: 1,
    // height: "100%",
  },
  secondContainer: {
    flex: 1,
    marginTop: () => EStyleSheet.value("$rem") * 50,
    bottom: 0,
    // marginBottom: () => EStyleSheet.value("$rem") * 170,
    paddingHorizontal: () => EStyleSheet.value("$rem") * 20,
    // paddingBottom: () => EStyleSheet.value("$rem") * 200,
  },
  header: {
    // alignSelf: "flex-end",
    fontWeight: "bold",
    fontSize: 18,
    // height: () => EStyleSheet.value("$rem") * 30,
  },
  inputsContainer: {
    justifyContent: "space-between",
    width: "75%",
    marginBottom: () => EStyleSheet.value("$rem") * 30,
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

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#577BF9",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 10,
    width: () => EStyleSheet.value("$rem") * 80,
    bottom: 40,
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
export default AddEmployeesStyles;
