import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "flex-start",
    marginVertical: 10,
    height: 60,
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 16,
  },
  blank: {
    borderBottomWidth: 2,
    borderColor: "lightgray",
    width: 120,
    alignItems: "center",
    marginHorizontal: 10,
  },
  optionsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default styles;
