import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { IconButton } from "material-bread";
import { TextInputMask } from "react-native-masked-text";

//util
import { colorFocused } from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderColor: "#DDDDDD",
    backgroundColor: "#FFFFFF",
  },
  actionButton: {
    right: 10,
    bottom: 6,
  },
  errorLabel: {
    marginTop: 2,
    color: "red",
  },
  label: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 5,
    color: colorFocused,
  },
});

const MyTextInput = (props) => {
  const {
    value,
    onValueChange,
    autoCapitalize,
    error,
    action,
    onAction,
    placeholder,
    type,
    keyboardType,
    secureTextEntry,
    label,
  } = props;

  const [focus, setFocus] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      {type === "phone" ? (
        <TextInputMask
          type="cel-phone"
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) ",
          }}
          style={styles.textInput}
          value={value}
          onChangeText={(text) => onValueChange(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType ? keyboardType : "default"}
        />
      ) : type === "cpf" ? (
        <TextInputMask
          type="cpf"
          style={styles.textInput}
          value={value}
          onChangeText={(text) => onValueChange(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType ? keyboardType : "default"}
        />
      ) : type === "cep" ? (
        <TextInputMask
          type="zip-code"
          style={styles.textInput}
          value={value}
          onChangeText={(text) => onValueChange(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType ? keyboardType : "default"}
        />
      ) : type === "date" ? (
        <TextInputMask
          type="datetime"
          style={styles.textInput}
          value={value}
          onChangeText={(text) => onValueChange(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType ? keyboardType : "default"}
        />
      ) : (
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(text) => onValueChange(text)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType ? keyboardType : "default"}
          secureTextEntry={secureTextEntry ? secureTextEntry : false}
        />
      )}
      {action ? (
        <IconButton
          style={styles.actionButton}
          onPress={onAction}
          name={action}
          size={24}
          color={"#6e6e6e"}
        />
      ) : (
        <View />
      )}
      {error && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  );
};

export default MyTextInput;