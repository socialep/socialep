import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Picker } from "@react-native-community/picker";

//UTILS
import { colorMainFont, colorInputBg, colorLabelBg } from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
  },
  content: {
    backgroundColor: colorInputBg,
    flexDirection: "row",
    borderRadius: 6,
  },
  piker: {
    color: colorMainFont,
    fontSize: 17,
    fontWeight: "700",
    flex: 1,
  },
  item: {
    color: colorMainFont,
    fontSize: 18,
  },
  label: {
    alignSelf: "center",
    textAlign: "center",
    padding: 10,
    borderRightWidth: 1,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: colorLabelBg,
    borderColor: colorMainFont,
    fontSize: 17,
    height: "100%",
  },
  errorLabel: {
    marginTop: 2,
    color: "red",
  },
});

export default CustomPicker = (props) => {
  const { disabled, value, onChange, list, label, error } = props;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <Picker
          enabled={!disabled}
          selectedValue={value}
          style={styles.piker}
          itemStyle={styles.item}
          onValueChange={(value, index) => onChange(value)}
          mode="dropdown"
        >
          {list.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
      {error && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  );
};
