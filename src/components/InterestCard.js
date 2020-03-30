import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import SvgUri from "react-native-svg-uri-reborn";

import {
  colorSelected,
  colorUnselected,
  colorInterestCardBg
} from "../utils/colors";

const iconSize = Dimensions.get("window").width / 7;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2.8,
    height: Dimensions.get("window").width / 2.8,
    borderRadius: 16,
    backgroundColor: colorInterestCardBg,
    elevation: 3,
    alignItems: "center",
    paddingTop: 10,
    marginTop: 20,
    justifyContent: "space-evenly"
  },
  label: {
    fontSize: 23,
    fontWeight: "500",
    textAlign: "center"
  }
});

const InterestCard = props => {
  const [selected, toggleSelected] = useState(props.selected);
  const { label, icon } = props;

  const handlePressed = () => {
    toggleSelected(!selected);
    props.onPress(!selected);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePressed}>
      <SvgUri
        width={iconSize}
        height={iconSize}
        source={icon}
        fill={selected ? colorSelected : colorUnselected}
      />
      <Text
        style={{
          ...styles.label,
          color: selected ? colorSelected : colorUnselected
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default InterestCard;
