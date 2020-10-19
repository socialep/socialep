import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, Image } from "react-native";
import { IconButton, Icon, Button } from "material-bread";
import { SliderBox } from "react-native-image-slider-box";
import SvgUri from "react-native-svg-uri-reborn";

//Util
import styles from "./styles";
import {
  colorFocused,
  colorCarousel,
  colorUnselected,
  colorPrimary,
  colorPrimaryDarker,
} from "../../utils/colors";

//Components
import CustomAppBar from "../../components/CustomAppBar";
import Loading from "../../components/Loading";
import OpportunityListItem from "../../components/OpportunityListItem";

//Redux
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getOrg } from "../../redux/actions/uiActions";

//Assets
import animal from "../../assets/animal.svg";
import hand from "../../assets/hand.svg";
import ball from "../../assets/ball.svg";
import leaf from "../../assets/leaf.svg";
import pills from "../../assets/pills.svg";
import gradHat from "../../assets/gradHat.svg";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";

const index = (props) => {
  const {
    navigation,
    getOrg,
    ui: {
      strings,
      loading,
      organization: {
        name,
        logo,
        rating,
        description,
        interests,
        photos,
        address,
        phone,
      },
      opportunities,
    },
    route: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    getOrg(id);
  }, []);

  return (
    <View style={styles.container}>
      <CustomAppBar mode="arrow-back" onNavigation={() => navigation.pop()} />
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View>
            <Image
              source={{ uri: logo }}
              style={styles.logo}
              resizeMode="cover"
            />
            <Text style={styles.lblHeader}>{name}</Text>
            <View style={styles.ratingView}>
              <Icon
                name="star"
                size={28}
                color={rating >= 1 ? colorFocused : colorCarousel}
              />
              <Icon
                name="star"
                size={28}
                color={rating >= 2 ? colorFocused : colorCarousel}
              />
              <Icon
                name="star"
                size={28}
                color={rating >= 3 ? colorFocused : colorCarousel}
              />
              <Icon
                name="star"
                size={28}
                color={rating >= 4 ? colorFocused : colorCarousel}
              />
              <Icon
                name="star"
                size={28}
                color={rating == 5 ? colorFocused : colorCarousel}
              />
            </View>
            <Text style={styles.lblDes}>{description}</Text>
            <View style={styles.interestsContainer}>
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
            <SliderBox
              images={photos}
              disableOnPress
              sliderBoxHeight={250}
              dotColor={colorPrimary}
              inactiveDotColor={colorPrimaryDarker}
            />
            <View style={styles.addressContainer}>
              <Icon name="location-on" size={40} color={colorUnselected} />
              <Text style={styles.lblAddress}>{address}</Text>
            </View>
            <View style={styles.addressContainer}>
              <Icon name="phone" size={40} color={colorUnselected} />
              <Text style={styles.lblAddress}>{phone}</Text>
            </View>
            <View style={{ marginTop: 5 }} />
            {opportunities.map((opp, index) => (
              <OpportunityListItem
                key={index}
                opportunity={opp}
                handleFavPressed={() => console.log("favorited")}
                btnPressed={() => navigation.push("Opportunity", { opp })}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = {
  getOrg,
};

index.propTypes = {
  ui: PropTypes.object.isRequired,
  getOrg: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
