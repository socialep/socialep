import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  content: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#DDDDDD",
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    flex: 1,
    fontSize: 17,
    padding: 10,
    alignItems: "flex-start",
    fontFamily: "Segoe-UI",
  },
  errorLabel: {
    marginTop: 2,
    color: "red",
    fontFamily: "Segoe-UI",
  },
  lblCharCount: {
    alignSelf: "flex-end",
    marginTop: 6,
    color: "#727272",
    fontFamily: "Segoe-UI",
  },
});

const MultilineTextInput = (props) => {
  const {
    value,
    onValueChange,
    autoCapitalize,
    error,
    placeholder,
    keyboardType,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={(text) =>
            text.length <= 280 ? onValueChange(text) : {}
          }
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType ? keyboardType : "default"}
          multiline
          numberOfLines={6}
          textAlignVertical='top'
        />
      </View>
      <Text style={styles.lblCharCount}>{value.length}/280</Text>
      {error && <Text style={styles.errorLabel}>{error}</Text>}
    </View>
  );
};

export default MultilineTextInput;
