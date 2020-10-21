import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { IconButton, Icon, Button } from "material-bread";
import { SliderBox } from "react-native-image-slider-box";
import SvgUri from "react-native-svg-uri-reborn";

//Utils
import styles from "./styles";
import {
  colorStar,
  colorFavorite,
  colorPrimary,
  colorPrimaryDarker,
  colorUnselected,
  colorSignInGoogle,
} from "../../utils/colors";

//Components
import CustomAppBar from "../../components/CustomAppBar";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadFavOpps, setOpp } from "../../redux/actions/uiActions";
import { cancelRegistration } from "../../redux/actions/userActions";

//Assets
import animal from "../../assets/interests/animal.svg";
import hand from "../../assets/interests/hand.svg";
import ball from "../../assets/interests/ball.svg";
import leaf from "../../assets/interests/leaf.svg";
import pills from "../../assets/interests/pills.svg";
import gradHat from "../../assets/interests/gradHat.svg";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";

const index = (props) => {
  const {
    ui: {
      strings,
      loading,
      opportunity: {
        rating,
        photos,
        name,
        description,
        interests,
        requirements,
        address,
        period,
        duration,
        id,
        usersRegistered,
        organization,
      },
    },
    user: { favoritesOpportunities },
    user,
    navigation,
    uploadFavOpps,
    cancelRegistration,
    setOpp,
    route: {
      params: { opp },
    },
  } = props;

  const [isRegistered, setRegistered] = useState(
    usersRegistered ? usersRegistered.includes(user.id) : false
  );

  useEffect(() => {
    setOpp(opp);
  }, []);

  useEffect(() => {
    setRegistered(usersRegistered ? usersRegistered.includes(user.id) : false);
  }, [usersRegistered]);

  return (
    <View style={styles.container}>
      <CustomAppBar mode="arrow-back" onNavigation={() => navigation.pop()} />
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={styles.ratingContainer}>
            <Icon size={38} name="star" color={colorStar} />
            <Text style={styles.lblRating}>{rating}</Text>
          </View>
          <IconButton
            name={
              favoritesOpportunities.includes(id)
                ? "favorite"
                : "favorite-border"
            }
            size={38}
            color={colorFavorite}
            onPress={() => uploadFavOpps(id, favoritesOpportunities, user.id)}
          />
        </View>
        <SliderBox
          images={photos}
          disableOnPress
          sliderBoxHeight={250}
          dotColor={colorPrimary}
          inactiveDotColor={colorPrimaryDarker}
        />
        <Button
          type="contained"
          color={isRegistered ? colorSignInGoogle : colorPrimary}
          text={isRegistered ? strings.cancelRegister : strings.wantToSubscribe}
          onPress={() =>
            isRegistered
              ? cancelRegistration(
                  { userId: user.id, oppId: id },
                  user.interests
                )
              : navigation.push("Register", { oppId: id, oppName: name })
          }
          containerStyle={styles.btnSubscribe}
          style={styles.btnSubscribeInside}
          loading={loading}
          disabled={loading}
        />
        <Text style={styles.lblName}>{name}</Text>
        <Text style={styles.lblDes}>{description}</Text>
        <View style={styles.interestsContainer}>
          <Text style={styles.lblName}>{strings.interests}</Text>
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
              <SvgUri
                width={40}
                height={40}
                source={leaf}
                fill={colorUnselected}
              />
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
              <SvgUri
                width={40}
                height={40}
                source={hand}
                fill={colorUnselected}
              />
              <Text style={styles.lblInterest}>{strings.humanRights}</Text>
            </View>
          )}
          {interests.sports && (
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
        <View style={styles.requirementsContainer}>
          <Text style={styles.lblName}>{strings.requirements}</Text>
          <Text style={styles.lblDes}>{requirements}</Text>
        </View>
        <View style={styles.addressContainer}>
          <Icon name="location-on" size={40} color={colorUnselected} />
          <Text style={styles.lblAddress}>{address}</Text>
        </View>
        <View style={styles.periodContainer}>
          <Text style={styles.lblName}>{strings.periodAndDuration}</Text>
          <View style={styles.horizontalContainer}>
            <Image source={calendar} style={styles.imgDuration} />
            <Text style={styles.lblDuration}>{period}</Text>
            <Image source={clock} style={styles.imgDuration} />
            <Text style={styles.lblDuration}>{duration}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.lblName}>{strings.socialProject}</Text>
          <Text style={styles.lblDes}>{strings.orgInfo}</Text>
          <Button
            type="contained"
            color={colorSignInGoogle}
            text={strings.knowMore}
            onPress={() =>
              navigation.push("Organization", { id: organization })
            }
            containerStyle={styles.btnSubscribe}
            style={styles.btnSubscribeInside}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
  user: state.user,
});

const mapDispatchToProps = {
  uploadFavOpps,
  cancelRegistration,
  setOpp,
};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  setOpp: PropTypes.func.isRequired,
  uploadFavOpps: PropTypes.func.isRequired,
  cancelRegistration: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
