import React from "react";
import { View, StyleSheet } from "react-native";
import { ProgressCircle } from "material-bread";
import { colorPrimary } from "../util/colors";

const styles = StyleSheet.create({
  loadingContent: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  loading: {
    alignSelf: "center"
  }
});

export default Loading = () => {
  return (
    <View style={styles.loadingContent}>
      <ProgressCircle style={styles.loading} color={colorPrimary} />
    </View>
  );
};
