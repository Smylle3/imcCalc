import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultView: {
    marginTop: 1,
    width: "85%",
    height: "auto",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#e0e5e5",
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 10,
  },
  information: {
    fontSize: 18,
    color: "#880e4f",
  },
  imcNumber: {
    fontSize: 50,
    color: "#880e4f",
    marginTop: 10,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 50,
    width: 130,
    height: 60,
  },
});

export default styles;
