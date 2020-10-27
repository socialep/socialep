import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SvgUri from "react-native-svg-uri-reborn";

//Util
import { colorUnselected, colorLightGrayBg, fontColor } from "../utils/colors";

//Assets
import animal from "../assets/interests/animal.svg";
import hand from "../assets/interests/hand.svg";
import ball from "../assets/interests/ball.svg";
import leaf from "../assets/interests/leaf.svg";
import pills from "../assets/interests/pills.svg";
import gradHat from "../assets/interests/gradHat.svg";
import masks from "../assets/interests/masks.svg";
import others from "../assets/interests/others.svg";

const styles = StyleSheet.create({
  interestsContainer: {
    backgroundColor: colorLightGrayBg,
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    width: "50%",
    paddingHorizontal: 6,
  },
  lblInterest: {
    fontSize: 15,
    color: fontColor,
    textAlign: "center",
    flex: 1,
  },
  lblSection: {
    fontSize: 29,
    color: fontColor,
    textAlign: "center",
    width: "100%",
    fontWeight: "100",
    marginBottom: 10,
  },
});

export default InterestsSections = (props) => {
  const { strings, interests } = props;

  return (
    <View style={styles.interestsContainer}>
      <Text style={styles.lblSection}>{strings.interests}</Text>
      {interests.animals && (
        <View style={styles.iconContainer}>
          <SvgUri
            width={40}
            height={40}
            source={animal}
            fill={colorUnselected}
          />
          <Text style={styles.lblInterest}>{strings.animals}</Text>
        </View>
      )}
      {interests.education && (
        <View style={styles.iconContainer}>
          <SvgUri
            width={40}
            height={40}
            source={gradHat}
            fill={colorUnselected}
          />
          <Text style={styles.lblInterest}>{strings.education}</Text>
        </View>
      )}
      {interests.environment && (
        <View style={styles.iconContainer}>
          <SvgUri width={40} height={40} source={leaf} fill={colorUnselected} />
          <Text style={styles.lblInterest}>{strings.environment}</Text>
        </View>
      )}
      {interests.health && (
        <View style={styles.iconContainer}>
          <SvgUri
            width={40}
            height={40}
            source={pills}
            fill={colorUnselected}
          />
          <Text style={styles.lblInterest}>{strings.health}</Text>
        </View>
      )}
      {interests.human_rights && (
        <View style={styles.iconContainer}>
          <SvgUri width={40} height={40} source={hand} fill={colorUnselected} />
          <Text style={styles.lblInterest}>{strings.humanRights}</Text>
        </View>
      )}
      {interests.sports && (
        <View style={styles.iconContainer}>
          <SvgUri width={40} height={40} source={ball} fill={colorUnselected} />
          <Text style={styles.lblInterest}>{strings.sports}</Text>
        </View>
      )}
      {interests.arts && (
        <View style={styles.iconContainer}>
          <SvgUri
            width={40}
            height={40}
            source={masks}
            fill={colorUnselected}
          />
          <Text style={styles.lblInterest}>{strings.arts}</Text>
        </View>
      )}
      {interests.others && (
        <View style={styles.iconContainer}>
          <SvgUri
            width={40}
            height={40}
            source={others}
            fill={colorUnselected}
          />
          <Text style={styles.lblInterest}>{strings.others}</Text>
        </View>
      )}
    </View>
  );
};
