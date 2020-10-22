import { StyleSheet } from "react-native";
import {
  colorFocused,
  colorInterestCardBg,
  colorLightGrayBg,
  colorPrimary,
  colorLanguageBg,
  fontColor,
} from "../../utils/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorInterestCardBg,
    flexDirection: "column-reverse",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    backgroundColor: colorInterestCardBg,
  },
  headerView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
  },
  lblTitle: {
    fontSize: 36,
    color: colorFocused,
    fontWeight: "500",
    alignSelf: "center",
    marginBottom: 10,
  },
  sectionContaienr: {
    backgroundColor: colorLightGrayBg,
    padding: 20,
    marginBottom: 10,
  },
  userImg: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgUser: {
    alignSelf: "center",
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: colorPrimary,
  },
  editPhotoCotainer: {
    marginVertical: 10,
    width: 100,
    alignSelf: "center",
  },
  lblEditPhoto: {
    fontSize: 14,
    color: colorPrimary,
    alignSelf: "center",
  },
  lblSection: {
    fontSize: 20,
    color: colorFocused,
    marginTop: 10,
    marginBottom: 20,
  },
  languageContainer: {
    flexDirection: "row",
    paddingLeft: 6,
    padding: 4,
    backgroundColor: colorLanguageBg,
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
  lblLanguage: {
    color: fontColor,
    fontSize: 17,
    marginRight: 4,
  },
});
