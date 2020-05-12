import { StyleSheet } from "react-native";
import { colorInterestCardBg, fontColor } from "../../utils/colors";

export default styles = StyleSheet.create({
  contaier: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorInterestCardBg,
  },
  image: {
    width: 60,
    height: 60,
  },
  lblHeader: {
    fontSize: 30,
    color: fontColor,
    marginVertical: 20,
    textAlign: "center",
  },
  lbl: {
    fontSize: 20,
    color: fontColor,
    textAlign: "center",
    paddingHorizontal: 40,
  },
  btnOk: {
    marginTop: 20,
  },
});
