import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { IconButton, Icon } from "material-bread";

//Util
import {
  colorLightGrayBg,
  colorStar,
  colorFavorite,
  colorFocused,
} from "../utils/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colorLightGrayBg,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  lblName: {
    fontSize: 20,
    color: colorFocused,
    fontWeight: "500",
  },
  rightView: {
    padding: 10,
    justifyContent: "space-around",
    flex: 1,
  },
  horizontalView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lblRating: {
    fontSize: 18,
    fontWeight: "200",
    marginLeft: 8,
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default OpportunityListItem = (props) => {
  const {
    opportunity: { rating, photos, name, description },
    liked,
  } = props;

  const handleFavPressed = () => {
    props.handleFavPressed(!liked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={props.btnPressed}>
      <Image source={{ uri: photos[0] }} style={styles.image} />
      <View style={styles.rightView}>
        <Text style={styles.lblName}>{name}</Text>
        <View style={styles.horizontalView}>
          <View style={styles.ratingView}>
            <Icon size={33} name="star" color={colorStar} />
            <Text style={styles.lblRating}>{rating}</Text>
          </View>
          <IconButton
            name={liked ? "favorite" : "favorite-border"}
            size={33}
            color={colorFavorite}
            onPress={handleFavPressed}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
