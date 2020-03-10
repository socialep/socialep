import React from "react";
import { Text, View, Button } from "react-native";

import styles from "./styles";

export default function carousel1() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <View style={styles.contentView}>
        <Text style={styles.text}>asdad</Text>
        <Button style={styles.btnNext} title="Proximo" />
      </View>
    </View>
  );
}
