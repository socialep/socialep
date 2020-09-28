import { StyleSheet } from "react-native";
import { fontColor, colorError } from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerImg: {
    width: 54,
    height: 54,
    alignSelf: "center",
  },
  lblHeader: {
    fontSize: 30,
    fontWeight: "600",
    color: fontColor,
    alignSelf: "center",
    margin: 10,
  },
  buttonsList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  lblSub: {
    fontSize: 25,
    alignSelf: "center",
    color: fontColor,
    textAlign: "center",
  },
  lblError: {
    marginBottom: 10,
    color: colorError,
    fontSize: 16,
    alignSelf: "center",
  },
});
