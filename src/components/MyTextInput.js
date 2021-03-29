import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, Dimensions } from "react-native";
import { Icon, IconButton } from "material-bread";

//util
import { colorPrimary } from "../util/colors";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 1.4,
    alignSelf: "center",
  },
  unFocused: {
    height: 40,
    width: Dimensions.get("window").width / 1.4,
    paddingBottom: 3,
    borderBottomWidth: 0.5,
    flexWrap: "wrap",
    marginTop: 24,
  },
  focused: {
    height: 40,
    width: Dimensions.get("window").width / 1.4,
    paddingBottom: 3,
    borderBottomColor: colorPrimary,
    borderBottomWidth: 2,
    flexWrap: "wrap",
    marginTop: 24,
  },
  icon: {
    position: "absolute",
    bottom: 8,
    left: 10,
  },
  textInput: {
    position: "absolute",
    left: 44,
    bottom: 10,
    fontSize: 17,
    width: Dimensions.get("window").width / 1.4 - 84,
    fontFamily: "Segoe-UI",
  },
  actionButton: {
    position: "absolute",
    right: 10,
    bottom: 6,
  },
  errorLabel: {
    marginTop: 2,
    color: "red",
    fontFamily: "Segoe-UI",
  },
});

const MyTextInput = (props) => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <View style={focus ? styles.focused : styles.unFocused}>
        <Icon
          style={styles.icon}
          name={props.leftIcon}
          size={24}
          color={"#6e6e6e"}
        />
        <TextInput
          style={styles.textInput}
          value={props.value}
          onChangeText={(text) => props.onValueChange(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={props.placeholder}
          {...props}
        />
        {props.action && (
          <IconButton
            style={styles.actionButton}
            onPress={props.onAction}
            name={props.action}
            size={24}
            color={"#6e6e6e"}
          />
        )}
      </View>
      {props.error && <Text style={styles.errorLabel}>{props.error}</Text>}
    </View>
  );
};

export default MyTextInput;
