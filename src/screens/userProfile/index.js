import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { Avatar, Divider } from "material-bread";
import SvgUri from "react-native-svg-uri-reborn";

//Assets
import animal from "../../assets/animal.svg";
import hand from "../../assets/hand.svg";
import ball from "../../assets/ball.svg";
import leaf from "../../assets/leaf.svg";
import pills from "../../assets/pills.svg";
import gradHat from "../../assets/gradHat.svg";
import profileHeader from "../../assets/profileHeader.png";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import ProfileMenu from "../../components/ProfileMenu";

//Util
import styles from "./styles";
import { colorPrimary, colorUnselected } from "../../utils/colors";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";

const index = (props) => {
  const {
    ui: { strings },
    user,
    navigation,
  } = props;

  const [menu, setMenu] = useState(false);

  return (
    <View style={styles.container}>
      <CustomAppBar
        actions={["menu"]}
        onSecondaryAction={() => setMenu(true)}
        title={strings.myAccount}
      />
      <ProfileMenu
        navigation={navigation}
        open={menu}
        onClose={() => setMenu(false)}
      />
      <View style={styles.container}>
        <>
          <View style={styles.header} />
          <Avatar
            type="image"
            image={<Image source={{ uri: user.photo }} />}
            size={107}
            style={styles.logo}
          />
          <Avatar
            type="text"
            text=""
            size={130}
            style={styles.logoBackGround}
            color={colorPrimary}
          />
        </>
        <View style={styles.nameEmail}>
          <Text style={styles.lblName}>{user.name}</Text>
          <Text style={styles.lblEmail}>{user.email}</Text>
          <Divider />
        </View>
        <View style={styles.interestsContainer}>
          {user.interests.animals && (
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
          {user.interests.education && (
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
          {user.interests.environment && (
            <View style={styles.iconContainer}>
              <SvgUri
                width={40}
                height={40}
                source={leaf}
                fill={colorUnselected}
              />
              <Text style={styles.lblInterest}>{strings.environment}</Text>
            </View>
          )}
          {user.interests.health && (
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
          {user.interests.human_rights && (
            <View style={styles.iconContainer}>
              <SvgUri
                width={40}
                height={40}
                source={hand}
                fill={colorUnselected}
              />
              <Text style={styles.lblInterest}>{strings.humanRights}</Text>
            </View>
          )}
          {user.interests.sports && (
            <View style={styles.iconContainer}>
              <SvgUri
                width={40}
                height={40}
                source={ball}
                fill={colorUnselected}
              />
              <Text style={styles.lblInterest}>{strings.sports}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
});

const mapDispatchToProps = {};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
