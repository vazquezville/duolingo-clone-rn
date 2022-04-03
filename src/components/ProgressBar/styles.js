import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    height: 20,
    borderRadius: 15,
    flex: 1,
  },
  foreground: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#FAC800",
    width: "50%",
  },
  highlight: {
    backgroundColor: "#FAD131",
    width: "90%",
    height: 5,
    borderRadius: 15,
    marginTop: 5,
    alignSelf: "center",
  },
});

export default styles;
